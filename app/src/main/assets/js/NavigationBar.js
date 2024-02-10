// The information of the navigation bar
//--------------------------------------
let pagesContainer = document.querySelector("main");
let iconViewInFocus;
let iconViewFocusClass = "icon-view-infocus";
let secondLayerContainer = document.querySelector("#second-layer-container");
navigationBarIconsPath = "../img/NavigationBar/"
navigationBarInfo = 
[
	{
		name: "Home",
		icon: "homeIcon.png",
		// link: "home.html", // The name of the file to be displayed
		// extraAttributes: ""
	},
	{
		name: "Tasks",
		icon: "tasksIcon.png",
		// link: "tasks.html",
		// extraAttributes: ""
	},
	{
		name: "Reward",
		icon: "rewardIcon.png",
		// link: "reward.html",
		// extraAttributes: ""
	},
	{
		name: "Social",
		icon: "socialIcon.png",
		// link: "social.html",
		// extraAttributes: ""
	},
	{
		name: "Settings",
		icon: "settingIcon.png",
		// link: "settings.html",
		// extraAttributes: "onclick(showAsideMenu())"
	}
];
//-------------------------------------


// Create the navigation bar
(() => {
	let nav = document.querySelector("nav");


	// Add all the wanted elements
	for(i = 0; i < navigationBarInfo.length; i++)
	{
		nav.innerHTML +=
			CreateNavElement(navigationBarInfo[i].name
							, navigationBarInfo[i].icon, i)
		;
	}

	iconViewInFocus = document.querySelector(".icon-view-infocus");
})()

function CreateNavElement(name, icon, index)
{
	return '<div class="icon-view '
			+(index == 0? iconViewFocusClass : "") // Focus on the class
			+'" onclick="' 
			+(name == "Settings" ? "showAsideMenu()" : ('NavigateTo('+index+', this)'))
			 + '">'
			+'<img id="'+name+'Icon" src="../img/NavigationBar/'+icon+'">'
			+'<label for="'+name+'Icon">'+name+'</label>'
			+'</div>';
}

function NavigateTo(index, icon)
{
	secondLayerContainer.style.setProperty("display", "none", "");
	index = parseInt(index);

	pagesContainer.style.setProperty("left", (index * -100) + "vw", "");

	// Remove the focus from the previous view
	iconViewInFocus.classList.remove(iconViewFocusClass);
	icon.classList.add(iconViewFocusClass);
	iconViewInFocus = icon;
}