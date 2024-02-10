let homeSection = document.querySelector("#home");

function CreateHome()
{
	return CreateHomeTopSection() + CreateHomeBottomSection();
}

function CreateHomeTopSection()
{
	return `<div id="top-section">

			<div id="top-section-sections" style="left: 0vw;">
				<!-- The slider at the top of the home page -->
				<div id="daily-progress">
					<!-- The first slide (progress) -->
					<div id="progress">
						<h1>Progress</h1>
						<section>
							<!-- TODO: the top and left attr should be
							     modified using js to fit the parent position -->
							${CreateBlurBackground()}
							<!-- The daily progress will be 
								 automaticlly inserted here -->
						</section>
					</div>
				</div>
				<div id="saving" class="flex-column">
					<h1>
						Your saving
					</h1>
					<section id="saving-section">
						${CreateBlurBackground()}
						<div class="saving-cell saving-cell-1 saving-section-child flex-column flex-center">
							<h2>Total Savings</h2>
							<p>100$<p>
						</div>
						<div class="flex-row flex-center saving-section-child">
							<div class="saving-cell saving-cell-2 flex-column flex-center">
								<h2>Day</h2>
								<p>5<p>
							</div>

							<div class="saving-cell saving-cell-3 flex-column flex-center">
								<h2>Daily Savings</h2>
								<p>20$<p>
							</div>
						</div>
					</section>
				</div>

				<div id="daily-quote">
					<h1>
						Daily quote
					</h1>
					<section>
						<div class="background-fill">
							<img src="../img/Backgrounds/workout.jpeg">
						</div>
						<p>
							Strengthen Your Soul And Mind, You 
							Are The Master Of Your Life - Take Control
						</p>
					</section>
				</div>

			</div>
			<!-- The pointers at the bottom of the progress 
			     to show which slider is currently in 
			     fucos -->
			<div class="sliders-pointers">
				${CreateSlideLeftIndicator()}
				<div class="pointer selected">
					
				</div>
				<div class="pointer">
					
				</div>
				<div class="pointer">
					
				</div>
				${CreateSlideRightIndicator()}
			</div>
		</div>`;
}

function CreateHomeBottomSection()
{
	return `<div id="bottom-section">
			<h1>
				Milestones
			</h1>
			<!-- The outer container of the section -->
			<section id="milestones">
				${CreateBlurBackground()}
				<div id="add-milestone">
					+
				</div>
				<div id="scroll-bar">
					<div id="scroller"></div>
				</div>
				<div id="milestones-container">
				</div>
			</section>
		</div>`;
}

(() => {
	homeSection.insertAdjacentHTML("beforeend", CreateHome());
	AddSliderPointerHandler(homeSection.querySelector("#top-section"));
})()

// Add the pointer handler to the top-section slider
let topSliderMouseXPos = [];
function AddSliderPointerHandler(element)
{
	element.addEventListener("touchstart", handleSliderTouchStart);
	element.addEventListener("touchmove", handleSliderTouchMove);
	element.addEventListener("touchend", handleSliderTouchEnd);
	// horizontalSliders.push(element);
}

function handleSliderTouchStart(event)
{
	event.preventDefault();
	topSliderMouseXPos = [];
}

function handleSliderTouchMove(event)
{
	event.preventDefault();
	topSliderMouseXPos.push(event.changedTouches['0'].clientX);
	// Check if there is info data to detect gesture
	if(topSliderMouseXPos.length == 5)
	{
		// Accomulator
		let movementX = 0;
		// Run across all the points to check if the are moving to the left or to the right
		for(let i = 1; i < topSliderMouseXPos.length; i++)
		{
			movementX -= topSliderMouseXPos[0] - topSliderMouseXPos[i];
		}

		// Get the position of the current slide
		left = parseInt(homeSlider.style.left.replace("vw", ""));
		// Avoid Nan values
		left = isNaN(left)? 0 : left;

		// Remove the selection from the selected point
		index = Math.abs(left) / 100;
		homeSliderPoints[index].classList.remove("selected");

		if(movementX < 0)
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


function handleSliderTouchEnd(event)
{
	event.preventDefault();
}