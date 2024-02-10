// The information of the daily progress
//--------------------------------------
let dailyProgressInfo = 
[
	{
		name: "Daily Steps",
		text: "4500/5000 steps",
		progress: "90%" // The name of the file to be displayed
	},
	{
		name: "Meditation",
		text: "15/20 mins",
		progress: "75%"
	},
	{
		name: "Reward",
		text: "9/10 pages",
		progress: "90%"
	}
];
//--------------------------------------

// Create the navigation bar
(() => {
	UpdateDailyProgressSection(true);
})()

function UpdateDailyProgressSection(initialising)
{
	let section = document.querySelector("#progress section");
	section.innerHTML = CreateBlurBackground();

	let dailyGoals = userInfo.dailyGoals;

	// Add all the wanted elements
	for(i = 0; i < dailyGoals.length; i++)
	{
		let progress = parseFloat(dailyGoals[i].progress) / dailyGoals[i].completion * 100;
		section.insertAdjacentHTML("beforeend",
			CreateProgressElement(dailyGoals[i].taskName
							, dailyGoals[i].progress + "/" + dailyGoals[i].completion + " " + dailyGoals[i].unit
							, progress) )
		;
	}
	if(!initialising)
		adjustBlurBackground();
}

function CreateProgressElement(name, text, progress)
{
	return `<!-- The progress of the daily tasks -->
			<div class="task-progress-container">
				<label>
					${name}
				</label>
				<!-- A progress bar for a task -->
				<div class="progress-bar">
					<!-- The cover of the progress bar -->
					<div class="progress-cover">
						<p>${text}</p>
						<!-- The filling element -->
						<div class="progress-fill" style="width: ${progress};">
							
						</div>
					</div>
				</div>
			</div>`;
}