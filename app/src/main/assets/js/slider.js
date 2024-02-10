var pointerOnSlider = false;
var homeSlider = document.querySelector("#top-section-sections");
let homeSliderPoints = document.querySelectorAll("#top-section .pointer");
let homeSlidersCount = 3;
function pointerDown(event)
{
	pointerOnSlider = true;
}

function pointerUp()
{
	pointerOnSlider = false;
}



// Mouse controller
document.addEventListener("pointermove", mouseEventHanlder);
document.addEventListener("mousemove", mouseEventHanlder);

function mouseEventHanlder(event)
{
	movementX = event.movementX;
	movementY = event.movementY;
	if(pointerOnSlider)
	{
		// Get the position of the current slide
		left = parseInt(homeSlider.style.left.replace("vw", ""));
		// Avoid Nan values
		left = isNaN(left)? 0 : left;

		// Remove the selection from the selected point
		index = Math.abs(left) / 100;
		homeSliderPoints[index].classList.remove("selected");

		if(event.movementX < 0)
		{ // Move to next slider
			if(left == -(homeSlidersCount - 1) * 100)
			{
				left = 0;
			}
			else
			{
				left -= 100;
			}
			homeSlider.style.left = left + "vw";
			pointerUp();
		}
		else
		{
			if(left >= 0)
			{
				left = -(homeSlidersCount - 1) * 100;
			}
			else
			{
				left += 100;
			}
			homeSlider.style.left = left + "vw";
			pointerUp();
		}

		// Add the selection to the point representing the current slider
		index = Math.abs(left) / 100;
		homeSliderPoints[index].classList.add("selected");
	}
}


document.addEventListener("mouseup", resetMouseDependentBooleans);
//document.addEventListener("mouseout", resetMouseDependentBooleans);
//document.addEventListener("mouseleave", resetMouseDependentBooleans);
document.addEventListener("drag", resetMouseDependentBooleans);
document.addEventListener("pointerup", resetMouseDependentBooleans);
//document.addEventListener("pointercancel", resetMouseDependentBooleans);

function resetMouseDependentBooleans()
{
	pointerUp();
}