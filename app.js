document.addEventListener("DOMContentLoaded", function () {

    if (getMobileOperatingSystem() == "Android") {
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            window.location = "https://play.google.com/store/apps/details?id=my.com.tngdigital.ewallet&shortlink=playstore&pid=Webpage&af_click_lookback=7d";
        }, 25);
        window.location = "tngdwallet://client/dl/payment/bills";

    }
    else if (getMobileOperatingSystem() == "iOS") {
        var now = new Date().valueOf();
        setTimeout(function () {
            if (new Date().valueOf() - now > 100) return;
            // window.location = "https://apps.apple.com/my/app/touch-n-go-ewallet/id1344696702?af_click_lookback=7d&pid=Webpage&shortlink=appstore&source_caller=ui";
            window.location = "https://apps.apple.com/my/app/touch-n-go-ewallet/id1344696702";
        }, 25);
        window.location = "tngdwallet://client/dl/payment/bills";
    }
    else if (getMobileOperatingSystem() == "Windows Phone" || "unknown") {
        window.location = "https://www.touchngo.com.my/";
    }
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}
