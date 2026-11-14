import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.taptofly.game',
  appName: 'Tap to Fly',
  webDir: 'dist',
  backgroundColor: '#060911',
  android: {
    allowMixedContent: false
  }
};

export default config;
