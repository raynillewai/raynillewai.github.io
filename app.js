document.addEventListener("DOMContentLoaded", function() {

    if (getMobileOperatingSystem() == "Android") {

        setTimeout(function() {
            // Link to the App Store go here -- only fires if deep link fails   
            // window.location.href = "https://touchngoewallet.onelink.me/8mmV/playstore";
            window.location = "https://play.google.com/store/apps/details?id=my.com.tngdigital.ewallet&shortlink=playstore&pid=Webpage&af_click_lookback=7d";

        }, 25);

        goAppDeepLink();

    } 
    else if (getMobileOperatingSystem() == "iOS") {

        setTimeout(function() {
            // Link to the App Store go here -- only fires if deep link fails     
            // window.location = "https://touchngoewallet.onelink.me/8mmV/appstore";
            window.location = "https://apps.apple.com/my/app/touch-n-go-ewallet/id1344696702";
        }, 25);

        goAppDeepLink();
    }
    else {
        x.innerHTML = "unknown";
        goAppDeepLink();
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
    window.location = "https://lzd.co/1212LazzieHunt";
}
