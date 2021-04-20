var uaCheck = navigator.userAgent.indexOf('admissionhacks');
if (uaCheck == -1) { // <---- Set your breakpoint for this line, and inspect the uaCheck variable.
    window.location.replace("https://admissionhacks.com")
};