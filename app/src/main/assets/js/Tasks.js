let tasksSliders;
let tasksInfo = 
[
	{
		title: "Morning",
		tasksArray: 
		[ // Morning tasks
			{
				imgSrc: "running.jpg",
				taskName: "Run"
			},
			{
				imgSrc: "reading.jpg",
				taskName: "Read"
			},
			{
				imgSrc: "meditation.jpg",
				taskName: "Meditate"
			},
			{
				imgSrc: "workout.jpeg",
				taskName: "Workout"
			},
			{
				imgSrc: "bathing.jpg",
				taskName: "Bath"
			}
		]
	},
	{
		title: "Afternoon",
		tasksArray: 
		[ // afternoon tasks
			{
				imgSrc: "running.jpg",
				taskName: "Run"
			},
			{
				imgSrc: "reading.jpg",
				taskName: "Read"
			},
			{
				imgSrc: "meditation.jpg",
				taskName: "Meditate"
			},
			{
				imgSrc: "workout.jpeg",
				taskName: "Workout"
			},
			{
				imgSrc: "bathing.jpg",
				taskName: "Bath"
			}
		]
	},
	{
		title: "Evening",
		tasksArray: 
		[ // Evning tasks
			{
				imgSrc: "running.jpg",
				taskName: "Run"
			},
			{
				imgSrc: "reading.jpg",
				taskName: "Read"
			},
			{
				imgSrc: "meditation.jpg",
				taskName: "Meditate"
			},
			{
				imgSrc: "workout.jpeg",
				taskName: "Workout"
			},
			{
				imgSrc: "bathing.jpg",
				taskName: "Bath"
			}
		]
	}
];

function CreateTask(imgSrc, taskName)
{
	return `<div class="task" onclick="CreateTaskActivityPage('${taskName}')">
				<img src="../img/Backgrounds/${imgSrc}" class="task-background">
				<h3 class="task-name">
					${taskName}
				</h3>
			</div>`;
}

function CreateTasksSection(title, tasksArray)
{
	result = `<div class="tasks-section">
				<h2>
					${title}
				</h2>
				<div class="tasks-slider-container">
				<div class="tasks-slider">`;

	for(let i = 0; i < tasksArray.length; i++){
		result += CreateTask(tasksArray[i].imgSrc, tasksArray[i].taskName);
	}

	result +=	`</div>
				</div>
			</div>`;

	return result;
}

function CreateTasksContainer(containerInfo)
{
	result = '<div id="tasks-container">';
	// Add the blur background
	result += CreateBlurBackground();
	for(sectionI = 0; sectionI < containerInfo.length; sectionI++)
	{
		result += CreateTasksSection(containerInfo[sectionI].title, containerInfo[sectionI].tasksArray);
	}
	result += "</div>";

	return result;
}

function CreateTasksPage()
{
	return /*CreateRankTitle("E.png", "E") + */"<h1 class='title'>Tasks</h1>" + CreateTasksContainer(tasksInfo);
}


// Function to handle click event
//-------------------------------------

function CreateTaskActivityPage(taskName)
{
	// Create an activity and show it in the second layer
	secondLayerContainer.innerHTML = "";
	secondLayerContainer.appendChild(CreateActivity(taskName));
	secondLayerContainer.style.setProperty("display", "unset", "");
}


function CreateGoalActivityPage(taskName)
{
	// Create an activity and show it in the second layer
	secondLayerContainer.innerHTML = "";
	let goalActivity = CreateActivity(taskName);
	goalActivity.querySelector(".activity-button").setAttribute("onclick", "ReplaceGoal(this.parentNode.parentNode)");
	// goalActivity.querySelector(".activity-button").onclick = () => {ReplaceGoal("this.parentNode.parentNode");};
	secondLayerContainer.appendChild(goalActivity);
	secondLayerContainer.style.setProperty("display", "unset", "");
}

//-------------------------------------


(() => {

	//taskContainer = CreateTasksContainer(containerInfo);

	// console.log(CreateTasksPage());
	document.querySelector("#tasks").innerHTML += CreateTasksPage();

	tasksSliders = document.querySelectorAll("#tasks .tasks-slider");
	for(let sliderI = 0; sliderI < tasksSliders.length; sliderI++)
	{ // Add slider handler to the slider
		//AddHorizontalSliderHandler(tasksSliders[sliderI]);
	}
	/*for(i = 0; i < tasksInfo[0].length; i++)
	{
		tasksSliders[0].innerHTML += CreateTask(tasksInfo[0][i].imgSrc, tasksInfo[0][i].taskName);
	}*/
})()