function CreateBlurBackground(){
	return `<!-- TODO: the top and left attr should be
			     modified using js to fit the parent position -->
			<div class="blur-background">
				<!-- The src attr should be added 
					 automaticly -->
				<img src="../img/Backgrounds/bridge.png">
				<!-- A semi-transparent element that
				     adds color tone to the 
				     background image -->
				<div class="blur-background-front-filter"></div>
			</div>`;
}


function CreateRankTitle(imgSrcs, rankName)
{
	return `<div class="taskHeader">
				<h1 class="title">Task</h1>
				${CreateRank(getRankImageSrc(userInfo.rank.title), userInfo.rank.title, userInfo.rank.progress, userInfo.rank.max)}
			</div>`;
}

function CreateSlideDownIndicator()
{
	return `<div class="slide-down-indicator">
				<p>></p>
			</div>`;
}

function CreateSlideLeftIndicator(){
	return `<div class="slide-left-indicator">
				<p>></p>
			</div>`;
}

function CreateSlideRightIndicator(){
	return `<div class="slide-right-indicator">
				<p>></p>
			</div>`;
}

// Create horizontal sliders
//--------------------------------------
let horzontalMouseXPos;
let horizontalSliders = [];
/*function AddHorizontalSliderHandler(element)
{
	element.addEventListener("touchstart", handleTouchStart);
	element.addEventListener("touchmove", handleTouchMove);
	element.addEventListener("touchend", handleTouchEnd);
	horizontalSliders.push(element);
}*/

function handleTouchStart(event)
{
	event.preventDefault();
	horzontalMouseXPos = event.changedTouches['0'].clientX;
}


function handleTouchMove(event)
{
	event.preventDefault();
	for(let sliderI = 0; sliderI < event.path.length; sliderI++)
	{
		if(horizontalSliders.includes(event.path[sliderI], 0))
		{ // The slider was found

			// Move the slider
			MoveSliderOnXAkse(event.path[sliderI], event.changedTouches['0'].clientX - horzontalMouseXPos);

			horzontalMouseXPos = event.changedTouches['0'].clientX;
			break;
		}
	}
}


function handleTouchEnd(event)
{
	event.preventDefault();
}

function MoveSliderOnXAkse(element, moveAmount)
{
	slideWidth = element.clientWidth - element.parentElement.clientWidth;

	// Get the left position of the element
	let left = element.style.left.replace("px", "");
	if(left == "")
		left = 0;
	else
		left = parseFloat(left);

	let move = 0;


	if(left + moveAmount < -slideWidth)
	{
		move = -slideWidth; 
	}
	else if(left + moveAmount > 0)
	{
		move = 0;
	}
	else
		move = left + moveAmount;

	element.style.setProperty("left", move + "px", "");
}

function CalcElementMaxXScroll(element)
{
	sliderWidth = 0;
	// Calculate the element children width
	for(let i = 0; i < element.children.length; i++)
	{
		width = element.children[i].clientWidth;
		marginRight = getComputedStyle(element.children[i], "").marginRight;
		if(marginRight == "")
			marginRight = 0;
		else
			marginRight = parseInt(marginRight.replace("px", ""));

		marginLeft = getComputedStyle(element.children[i], "").marginLeft;
		if(marginLeft == "")
			marginLeft = 0;
		else
			marginLeft = parseInt(marginLeft.replace("px", ""));
		
		width += marginRight + marginLeft;

		sliderWidth += width;
	}
}
//-------------------------------------------------------

// External resources
//-------------------------------------------------------
// const capture = async () => {
//   const canvas = document.createElement("canvas");
//   const context = canvas.getContext("2d");
//   const video = document.createElement("video");

//   try {
//     const captureStream = await navigator.mediaDevices.getDisplayMedia();
//     video.srcObject = captureStream;
//     context.drawImage(video, 0, 0, window.width, window.height);
//     const frame = canvas.toDataURL("image/png");
//     captureStream.getTracks().forEach(track => track.stop());
//     window.location.href = frame;
//   } catch (err) {
//     console.error("Error: " + err);
//   }
// };

// capture();
//-------------------------------------------------------

// Rank related functions
//-------------------------------------------------------

function CreateRank(imgSrcs, rankName, progress, max)
{
	// Calculate the fill precentage
	let fillPrecentage = parseFloat(progress / max) * 100;

	return `<div class="rank-container" onclick="showAchievementsPage()">
				<h2 class="rank-header black-text-outline-1">
					Rank
				</h2>
				<div class="rank">
					<img src="../img/Ranks/${imgSrcs}">
					<h2 class="rank-title">${rankName}</h2>
					<div class="progress-bar">
						<div class="fill" style="width: ${fillPrecentage}%"></div>
						<p>${progress}/${max}</p>
					</div>
				</div>
			</div>`;
}

function getRankImageSrc(rankName)
{
	let imgDir = "../img/Ranks/";
	let rankImgSrcs = "E.png";
	switch(rankName.toUpperCase())
	{
		case "E": 
			rankImgSrcs = "E.png";
			break;
		case "D":
			rankImgSrcs = "D.png";
			break;
		case "C":
			rankImgSrcs = "D.png";
			break;
		case "B":
			rankImgSrcs = "D.png";
			break;
		case "A":
			rankImgSrcs = "D.png";
			break;
	}

	return rankImgSrcs;
}


//-------------------------------------------------------