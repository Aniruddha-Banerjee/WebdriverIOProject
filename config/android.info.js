class AndroidInfo {
    static deviceName() {
        return 'emulator-5554'; // pass the udid or devicename
    }

    static platFormVersion() {
        return '10'; // pass the platform version
    }

    static appName() {
        // return 'Celsius Fahrenheit Converter_v1.0.1_apkpure.com.apk'; // pass the apk name
        return '6.0.0 (20215213).apk';
    }
}

module.exports = AndroidInfo;