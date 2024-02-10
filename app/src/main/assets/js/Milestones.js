// Create the milestones and add them to the list
//------------------------------------------------
let milestoneSection = document.querySelector("#milestones");
let milestonesContainer = document.querySelector("#milestones-container");
let milstonesScrollBar = document.querySelector("#milestones #scroll-bar");
let milestoneScroller = document.querySelector("#milestones #scroller");
function CreateMilestone(nr, goal, unit, progress, completion)
{
	let fillPercentage = (parseFloat(progress) / completion) * 100;
	return `<div class="milestone">
				<div class="milestone-nr">
					${nr}
				</div>
				<div class="milestone-progress">
					<div class="milestone-fill" style="width: ${fillPercentage}%;"></div>
					<p>${goal}</p>
				</div>
			</div>`;
}

function AdjustMilestoneScroller()
{
	// Calculate the width of the scroller
	// Should be the difference between the milestone and milestones-ctonainer
	// Get the height of the milestones section
	scrollerHeight = 
		(milestoneSection.clientHeight 
			/ milestonesContainer.clientHeight);
	if(scrollerHeight > 1)
		scrollerHeight = 1;
	scrollerHeight *= 100;

	milestoneScroller.style.setProperty("height", scrollerHeight + "%", "");
}


function AddMilestones()
{
	let milestonesInfo = userInfo.milestones;

	// Clear the container
	milestonesContainer.innerHTML = "";

	// Get the milestones container
	for(i = 0; i < milestonesInfo.length; i++)
	{
		//CreateMilestone(nr, goal, progress, completion);
		milestonesContainer.insertAdjacentHTML("beforeend", CreateMilestone(i+1
											, milestonesInfo[i].goal
											, milestonesInfo[i].unit
											, milestonesInfo[i].progress
											, milestonesInfo[i].completion));
	}
	if(milestonesInfo.length == 0)
	{ // There is no milestone found
		milestonesContainer.insertAdjacentHTML("beforeend", `<p class="message black-text-outline-1">Empty, add a milestone by starting a new task</p>`);
	}
	AdjustMilestoneScroller();

	StartMilestoneTouchController();
}

(() => {
	AddMilestones();
})()
//-------------------------------------------------

// Handle the milestones scroll-bar
//-------------------------------------------------
function StartMilestoneTouchController()
{
	milestonesContainer.addEventListener('touchstart', hanldeMilestoneTouchStart);
	milestonesContainer.addEventListener('touchmove', handleMilestoneTocuhMove);
	milestonesContainer.addEventListener('touchend', handleMilestoneTouchEnd);
	milestonesContainer.addEventListener('touchcancel', handleMilestoneTouchCancel);
}

let milestonesTouchY = null;
function hanldeMilestoneTouchStart(event)
{
	event.preventDefault();
	milestonesTouchY = event.changedTouches['0'].clientY;
}

function handleMilestoneTocuhMove(event)
{
	event.preventDefault();

	// Move the container according to the mouse movement
	eve = event;

	movementY = event.changedTouches['0'].clientY - milestonesTouchY;
	
	// Move the element
	containerMinY = milestoneSection.clientHeight - milestonesContainer.clientHeight;
	if(containerMinY > 0)
	{ // The elements are smaller than than the section
		// No scroll needed
		return;
	}
	scrollYBy(milestonesContainer, movementY, milestoneSection.clientHeight - milestonesContainer.clientHeight, 0);
	scrollerMinY = milestoneScroller.clientHeight - milstonesScrollBar.clientHeight;
	scrollYBy(milestoneScroller, scrollerMinY / containerMinY * -movementY, 0, -scrollerMinY);

	milestonesTouchY = event.changedTouches['0'].clientY;
}

function handleMilestoneTouchEnd(event)
{
	event.preventDefault();
	milestonesTouchY = null;
}

function handleMilestoneTouchCancel(event)
{
	event.preventDefault();
	console.log("TouchCanceled");
}


function scrollYBy(element, amount, minY, maxY)
{
	let top = element.style.top;
	if(top == "")
		top = 0;
	else 
		top.replace("px", "");
	top = parseFloat(top) + amount;

	// Avoid the elemnt moving below the allowed amount or above it
	if(top > maxY)
		top = maxY;
	else if(top < minY)
		top = minY;

	element.style.setProperty("top", top + "px", "");
}