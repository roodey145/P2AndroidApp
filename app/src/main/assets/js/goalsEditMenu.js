function CreateGoalsEditMenu()
{
	let editMenu = `<div id="replace-task-options" class="top-left-piller">
						<div class="back-margin" onclick="hideGoalsEditMenu()"></div>
						<div class="tasks-section">
							<h2 class="black-text-outline-2">
								Edit
							</h2>
							<div class="tasks-slider-container">
							<div class="tasks-slider">`;

	// Add the available tasks
	let tasks = userInfo.tasks;
	for(let i = 0; i < tasks.length; i++)
	{
		editMenu += CreateTask(tasks[i].imgSrc, tasks[i].taskName).replace("CreateTaskActivityPage", "CreateGoalActivityPage");
	}

	// Add the close of the tags
	editMenu += "</div></div></div></div>";

	return editMenu;
}

let goalToReplace = "";

function showEditMenu(element)
{
	goalToReplace = element.querySelector(".task-name").innerText.trim();
	let pillerCenter = 22.5;
	// Get the element position on the screen
	let elementCenter = 
		element.getBoundingClientRect().left 
		+ element.getBoundingClientRect().width/2 - pillerCenter;

	let elementBottom = element.parentNode.parentNode.parentNode.getBoundingClientRect().bottom;

	// Display the menu
	let editMenu = document.querySelector("#replace-task-options");
	if(editMenu == null)
	{
		AddGoalsEditMenu();
		editMenu = document.querySelector("#replace-task-options");
	}
	
	editMenu.classList = []; // Removes all the classes

	let offScreen = elementCenter + editMenu.clientWidth - window.screen.availWidth;
	// Check if the edit menu will be outside of the screen
	if(offScreen > 0)
	{
		if(offScreen < editMenu.clientWidth / 2)
		{ // Move the piller to the center

			elementCenter -= editMenu.clientWidth / 2;

			// Add the left piller class
			editMenu.classList.add("top-center-piller");	
		}
		else
		{ // The piller should be at the right 
			// Minus the width of the menu to be displayed within the boundries of the screen
			elementCenter -= editMenu.clientWidth;

			// Add the left piller class
			editMenu.classList.add("top-right-piller");
		}
		console.log("outside the boundries: " + offScreen);
	}
	else
	{
		// There is enough space, show the piler at the left
		// Add the left piller class
		editMenu.classList.add("top-left-piller");

		// Check if the menu is outside the screen to the left
		if(elementCenter < pillerCenter)
		{
			elementCenter += pillerCenter;
		}
	}

	editMenu.style.setProperty("left", elementCenter + "px", "");
	editMenu.style.setProperty("top", elementBottom + "px", "");
	editMenu.style.setProperty("opacity", "1", "");
	editMenu.style.setProperty("pointer-event", "auto", "");
}

function hideGoalsEditMenu()
{
	let editMenu = document.querySelector("#replace-task-options");
	editMenu.style.setProperty("opacity", "0", "");
	editMenu.style.setProperty("pointer-event", "none", "");
}

function AddGoalsEditMenu()
{
	// Create and add the menu to the second layer where the goals menu are
	document.querySelector("#second-layer-container").insertAdjacentHTML("beforeend", CreateGoalsEditMenu());
}

(() => {

})()