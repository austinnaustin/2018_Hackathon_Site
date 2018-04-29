function setCookie(cname,exdays,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";False;path=/";
}



function getCookie(cname) {

    var decodedCookie = decodeURIComponent(document.cookie);
    return decodedCookie.indexOf("True");
}



function checkCookie() {
    var loggedIn=getCookie("Authenticate");
	
    if (loggedIn != -1) {
        alert("Congratulations you have completed stage 9!");
	window.location="info.php";
    } else {
       alert("You must be logged in to view this page...");
	setCookie("Authenticate", 30, "False");
	}
}

