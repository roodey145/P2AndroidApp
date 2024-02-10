function adjustBlurBackground(){
	let blurBackgrounds = document.querySelectorAll(".blur-background");
	for(i = 0; i < blurBackgrounds.length; i++){
		blurBackgrounds[i].style.setProperty("top"
			, (-blurBackgrounds[i].parentNode.getBoundingClientRect().top) + "px", "");
		blurBackgrounds[i].style.setProperty("left"
			, (-blurBackgrounds[i].parentNode.getBoundingClientRect().left + blurBackgrounds[i].parentNode.parentNode.getBoundingClientRect().left) + "px", "");
	}
}
adjustBlurBackground();