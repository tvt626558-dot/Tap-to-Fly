import fs from 'node:fs';

const file = 'android/app/build.gradle';
if (!fs.existsSync(file)) throw new Error(`Missing ${file}; run cap add android first.`);
let gradle = fs.readFileSync(file, 'utf8');
if (gradle.includes('keystorePropertiesFile')) process.exit(0);

const properties = `def keystoreProperties = new Properties()\ndef keystorePropertiesFile = rootProject.file("keystore.properties")\nif (keystorePropertiesFile.exists()) {\n    keystoreProperties.load(new FileInputStream(keystorePropertiesFile))\n}\n\n`;
gradle = properties + gradle;
const signing = `    signingConfigs {\n        release {\n            if (keystorePropertiesFile.exists()) {\n                storeFile file(keystoreProperties['storeFile'])\n                storePassword keystoreProperties['storePassword']\n                keyAlias keystoreProperties['keyAlias']\n                keyPassword keystoreProperties['keyPassword']\n            }\n        }\n    }\n\n`;
if (!gradle.includes('    buildTypes {')) throw new Error('Could not find Android buildTypes block to configure signing.');
gradle = gradle.replace('    buildTypes {', signing + '    buildTypes {');
gradle = gradle.replace(/(    buildTypes\s*\{\s*release\s*\{)/, `$1\n            if (keystorePropertiesFile.exists()) {\n                signingConfig signingConfigs.release\n            }`);
fs.writeFileSync(file, gradle);
