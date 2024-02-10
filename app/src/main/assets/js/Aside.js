let asideMenu = document.querySelector("#right-settings-menu");
let optionsInfo = 
[
	{
		name: "Account",
		iconSrc: "accountSettingsIcon.png",
		extraAttributes: ""
	},
	{
		name: "Reminders",
		iconSrc: "accountSettingsIcon.png",
		extraAttributes: ""
	},
	{
		name: "Mails",
		iconSrc: "accountSettingsIcon.png",
		extraAttributes: ""
	},
	{
		name: "Goals",
		iconSrc: "accountSettingsIcon.png",
		extraAttributes: "onclick=\"showGoalsPage()\""
	},
	{
		name: "Settings",
		iconSrc: "accountSettingsIcon.png",
		extraAttributes: ""
	}
];

function CreateOption(optionName, iconSrc, extraAttributes)
{
	// <!-- The settings options -->
	return `<div class="setting-option" ${extraAttributes}>
				<img src="../img/settings/${iconSrc}">
				<h2>${optionName}</h2>
				<img src="../img/settings/backIcon.png">
			</div>`;
}

// Controller
(() => {
	let settingsOptionsMenu = document.querySelector(".settings-options");
	// Add the options to the options menu
	for(let i = 0; i < optionsInfo.length; i++)
	{
		settingsOptionsMenu.innerHTML += CreateOption(optionsInfo[i].name, optionsInfo[i].iconSrc, optionsInfo[i].extraAttributes);
	}
})()

function showAsideMenu()
{
	asideMenu.style.setProperty("width", "100vw", "");
}

function hideAsideMenu()
{
	asideMenu.style.setProperty("width", "0px", "");
}

// Aside menu functions
function logout()
{
	let dir = document.location.pathname.substring(0, document.location.pathname.lastIndexOf("/")) + "/loginPage.html";
	document.location.href = dir;
}