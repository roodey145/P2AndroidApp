function CreateGoalsPage()
{
	let goalsPage = '<div id="goals-page">'
					+'<h1 class="title">Goals</h1>'
					+'<div id="goals-container">';


	// Create daily goals
	let dailyGoals = [];
	for(let goalI = 0; goalI < userInfo.dailyGoals.length; goalI++)
	{
		// Get the goals' task info
		for(let taskI = 0; taskI < userInfo.tasks.length; taskI++)
		{ // Binary search could be used for improving this part
			if(userInfo.dailyGoals[goalI].taskName == userInfo.tasks[taskI].taskName)
			{ // The info of the task that the goal is made of was found

				// Add the task info to the daily goal
				dailyGoals.push(userInfo.tasks[taskI]);
			}
		}
	}
	goalsPage += CreateTasksSection("Daily", dailyGoals);
	// Replace the method to be executed when the user click on a goal
	for(let i = 0; i < dailyGoals.length; i++)
	{
		goalsPage = goalsPage.replace("CreateTaskActivityPage('" + dailyGoals[i].taskName + "')", "showEditMenu(this)");
	}


	// Close the goals container and the goals page
	goalsPage += "</div></div>";
	return goalsPage;
}

function showGoalsPage()
{
	hideAsideMenu();
	secondLayerContainer.innerHTML = "";
	secondLayerContainer.insertAdjacentHTML("beforeend", CreateGoalsPage());
	secondLayerContainer.style.setProperty("display", "unset", "");
}

function ReplaceGoal(activity)
{
	// Extract the goal info
	let newGoalName = 
		activity.querySelector(".title").innerText; // Goal name
	let completion = 
		activity.querySelector("input[type='range']").value; // Completion at value
	let unit = 
		activity.querySelector(".numberText").innerText.split(" ")[1];
	
	// Replace the old goal with the new goal
	for(let i = 0; i < userInfo.dailyGoals.length; i++)
	{
		// Check if the goal to replace is that one
		if(userInfo.dailyGoals[i].taskName == goalToReplace)
		{

			// Replace the goal info
			userInfo.dailyGoals[i].goalTitle = newGoalName;
			userInfo.dailyGoals[i].taskName = newGoalName;
			userInfo.dailyGoals[i].completion = completion;
			userInfo.dailyGoals[i].unit = unit;
			userInfo.dailyGoals[i].progress = 0;
			break;
		}
	}

	// Update the progress info in the home page
	UpdateDailyProgressSection(false);
	// Re-open the goal page
	showGoalsPage();
}


