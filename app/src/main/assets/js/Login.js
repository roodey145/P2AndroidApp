function loginGuest(){
	let dir = document.location.pathname.substring(0, document.location.pathname.lastIndexOf("/")) + "/index.html";
	document.location.href = dir;
}


function login(){
	let dir = document.location.pathname.substring(0, document.location.pathname.lastIndexOf("/")) + "/index.html";
	document.location.href = dir;
}


function openLoginPage(){
	let dir = document.location.pathname.substring(0, document.location.pathname.lastIndexOf("/")) + "/loginPage.html";
	document.location.href = dir;
}


function openSignUpPage(){
	let dir = document.location.pathname.substring(0, document.location.pathname.lastIndexOf("/")) + "/signupPage.html";
	document.location.href = dir;
}