// Components creation functions
//----------------------------------------------
function CreateActivity(title)
{
	// Extract the activity info
	//---------------------------
	let activityInfo = null;
	// Check all the tasks in the user info
	for(let i = 0; i < userInfo.tasks.length; i++)
	{
		// Check if the activity title matches this taks title
		if(title == userInfo.tasks[i].taskName)
		{
			activityInfo = userInfo.tasks[i];
			break;
		}
	}
	if(activityInfo == null)
	{
		alert("Activity Does Not Exist!");
		return;
	}
	//---------------------------

	let container = document.createElement("div");

	let content = `<h1 class="title">${title}</h1>
					<div id="activity-content">`;

	// Create the rank
	content += CreateRank(getRankImageSrc(userInfo.rank.title), userInfo.rank.title, userInfo.rank.progress, userInfo.rank.max);

	// Create activity image preview
	content += CreateActivityImage(activityInfo.imgSrc);

	// Create the slider
	content += CreateSlider(activityInfo.slider.min
							 , activityInfo.slider.max
							 , activityInfo.slider.value
							 , activityInfo.slider.unit);

	// Create the start button
	content += CreateActivityStartButton();

	// Add the activity-content div close tag
	content += "</div>";

	container.insertAdjacentHTML("beforeend", content);
	
	// Get the input and add events hanlder to it
	addSliderEventsHanlder(container.querySelector("input[type='range']"));

	return container;
}

function CreateActivityImage(imgSrc){
	return `<div class="task activity-task-img-container">
				<img src="../img/Backgrounds/${imgSrc}">
			</div>`;
}

function CreateSlider(min, max, value, unit){
   return`<div class="slider">
		       <div class="show-value">
		          <span class="current-value">${value}</span>
		       </div>
		       <input type="range" class="custom-slider" min="${min}" max="${max}" value="${value}" steps="1">
		       <div class="range">
		           <div class="numberText">${min} ${unit}</div>
		           <div class="numberText">${max} ${unit}</div>
		       </div>
		   </div>`;
}

function CreateActivityStartButton()
{
	return `<div class="activity-button" onclick="StartActivity(this.parentNode.parentNode)">
	        	<span>Start</span>
	        </div>`;
}


//----------------------------------------------


// The functions that are related to the slider
//----------------------------------------------
function addSlidersEventHandler(){
	let sliders = document.querySelectorAll(".custom-slider");
	for(let i = 0; i < sliders.length; i++)
	{
		addSliderEventsHanlder(sliders[i]);
	}
}

function addSliderEventsHanlder(slider){
	slider.addEventListener("input", sliderValueChangeHandler);
	slider.addEventListener("pointerdown", hanldeSliderTouchDown);
	slider.addEventListener("pointerup", hanldeSliderTouchUp);
}

function sliderValueChangeHandler(event){
let value = event.target.value;
   
   let slider;
   for(i = 0; i < event.path.length; i++){
      if(event.path[i].classList.contains("slider"))
      {
         slider = event.path[i];
         break;
      }
   }

   // Change the value and position of the current value preview
   let currentValue = slider.querySelector(".current-value");
   currentValue.innerText = value;
   currentValue.style.left = `${value * event.target.clientWidth / event.target.max
   								- currentValue.clientWidth/2}px`;
}

function hanldeSliderTouchDown(event)
{
   let slider;
   for(i = 0; i < event.path.length; i++){
      if(event.path[i].classList.contains("slider"))
      {
         slider = event.path[i];
         break;
      }
   }

   // Change the value and position of the current value preview
   let currentValue = slider.querySelector(".current-value");
   currentValue.classList.remove("not-active");
   currentValue.classList.add("active");
}

function hanldeSliderTouchUp(event)
{
	let value = event.target.value;
   
   let slider;
   for(i = 0; i < event.path.length; i++){
      if(event.path[i].classList.contains("slider"))
      {
         slider = event.path[i];
         break;
      }
   }

   // Change the value and position of the current value preview
   let currentValue = slider.querySelector(".current-value");
   currentValue.classList.add("not-active");
   currentValue.classList.remove("active");
}
//----------------------------------------------


function StartActivity(activity)
{
	// Extract the goal info
	let goal = activity.querySelector(".title").innerText; // Goal name
	let completion = activity.querySelector("input[type='range']").value; // Completion at value
	let progress = 0;
	let unit = activity.querySelector(".numberText").innerText.split(" ")[1];
	let newGoalInfo = 
	{
		goal: goal,
		completion: completion,
		unit: unit,
		progress: progress
	};
	// Add the goal to the user info
	// TODO: send the info to the database
	userInfo.milestones.push(newGoalInfo);

	// Re-add the milestones
	AddMilestones();

	// Go to home page
	document.querySelector("#HomeIcon").parentNode.click();
}

(() => {
   let rewards = document.querySelector("#rewards");
   //slidersContainer.innerHTML += CreateSlider(0, 1000, 500, "M");
   // rewards.insertAdjacentHTML("beforeend", CreateSlider(0, 100, 20, "M"));
   addSlidersEventHandler();
})()