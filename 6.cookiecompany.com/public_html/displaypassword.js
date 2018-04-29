function loggedin(answer) {
    var loggedIn=answer;
	
    if (loggedIn == True) {
        alert("Secret question answered correctly. Password will be displayed on the site.");
	populatePre("../pass.txt");
    } else {
       alert("Incorrect");
	}
}//dev tools will help you here.
function populatePre(url) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        document.getElementById('contents').textContent = this.responseText;
    };
    xhr.open('GET', url);
    xhr.send();
}
