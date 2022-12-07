document.addEventListener("DOMContentLoaded", function() {

    goAppDeepLink();

    if (getMobileOperatingSystem() == "Android") {

        setTimeout(function() {
            // Link to the Play Store go here -- only fires if deep link fails   
            window.location = "https://play.google.com/store/apps/details?id=my.com.tngdigital.ewallet&shortlink=playstore&pid=Webpage&af_click_lookback=7d";
        }, 3000);

    }

    if (getMobileOperatingSystem() == "iOS") {
        
        setTimeout(function() {
            // Link to the App Store go here -- only fires if deep link fails     
            window.location = "https://touchngoewallet.onelink.me/8mmV/appstore";
        }, 3000);

    }

    if (getMobileOperatingSystem() == "Windows Phone" || "unknown") {
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

function goAppDeepLink() {
    // Deep link to TnG app goes here
    window.location = "tngdwallet://client/dl/payment/bills";
}
