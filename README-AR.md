# Tap to Fly — Android عبر GitHub Actions

هذا المشروع مجهز لبناء لعبة الويب الحالية داخل تطبيق Android باستخدام Capacitor وGitHub Actions.

## رفع المشروع إلى GitHub من الهاتف
1. فك ضغط `tap-to-fly-github-ready.zip`.
2. أنشئ مستودع GitHub جديداً باسم `tap-to-fly-android`.
3. ارفع **محتويات** المجلد إلى جذر المستودع، وليس ملف ZIP نفسه.
4. تأكد من رفع المجلد `.github/workflows` والملف `capacitor.config.ts`.
5. افتح Actions وشغّل `Build Tap to Fly Android` عبر Run workflow.
6. بعد نجاح البناء، افتح تفاصيل التشغيل ونزّل Artifact.

## التوقيع (اختياري الآن، مطلوب لنسخة Google Play)
من Settings → Secrets and variables → Actions أضف:
- `ANDROID_KEYSTORE_BASE64`: محتوى ملف JKS بعد تحويله إلى Base64.
- `ANDROID_KEYSTORE_PASSWORD`: كلمة مرور keystore.
- `ANDROID_KEY_ALIAS`: اسم المفتاح.
- `ANDROID_KEY_PASSWORD`: كلمة مرور المفتاح.

إذا لم تضف الأسرار، سينشئ GitHub APK تجريبياً (Debug) وAAB إصداراً غير موقّع. لا ترفع ملف JKS أو كلمات المرور إلى المستودع.

## ملاحظات
- معرّف التطبيق الحالي: `com.taptofly.game`. لا تغيّره بعد نشر التطبيق على Google Play.
- رابط سياسة الخصوصية الموجود داخل اللعبة يحتاج أن يبقى منشوراً وصالحاً.
- اختبر اللعبة على هاتف حقيقي قبل النشر، خصوصاً اللمس والصوت وحفظ التقدم والرجوع من Android.
