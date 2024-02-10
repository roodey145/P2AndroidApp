let imgStoragePath = "../img/medals/";

let achievementInfo = 
[
	{
		catagory: "Physical activites",
		madelsInfo: 
		[
			{
				achievementName: "Steps",
				progress: "2500",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Upper body workout",
				progress: "500",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Running",
				progress: "100",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Lower body workout",
				progress: "1100",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Cycling",
				progress: "2200",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Sport",
				progress: "2900",
				max: "10000",
				imgSrc: "Medal.png"
			}
		]
	},
	{
		catagory: "Mindfullness",
		madelsInfo: 
		[
			{
				achievementName: "Meditation",
				progress: "4500",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Reading",
				progress: "3500",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Music",
				progress: "200",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Garening",
				progress: "1500",
				max: "10000",
				imgSrc: "Medal.png"
			}
		]
	},
	{
		catagory: "Lifestyle",
		madelsInfo: 
		[
			{
				achievementName: "Water",
				progress: "2500",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Sleep",
				progress: "2500",
				max: "10000",
				imgSrc: "Medal.png"
			},
			{
				achievementName: "Money Saved",
				progress: "2500",
				max: "10000",
				imgSrc: "Medal.png"
			}
		]
	}
];

function CreateAchievement(achievementName, progress, max, imgSrc)
{
	// Calculate the width of the progress-bar fill
	fillAmount = (progress / max) * 100; // Percentage

	return `<div class="achievementProgressTracker">
        <div class="achievementMedal"><img src="${imgStoragePath + imgSrc}"></div>
        <h3 class="achievementText" align="center">${achievementName}</h3>
        <div class="achievementProgressBar">
            <div class="achievementProgressBarFill" style="width: ${fillAmount}%;"></div>
            <span class="achievementProgressBarText">${progress}/${max}</span>
        </div>
    </div>`;
}

function CreateAchievementCatagory(catagoryName, catagoryMedalsInfo)
{
	// Create the header of the tag
	let result = `
	<div class="achievement-container">
        <!--Physical activities headline-->
        <div class="headLine" align="center">${catagoryName}</div>
        `;

    // Create the medals card info
    for(let i = 0; i < catagoryMedalsInfo.length; i++)
    {
    	result += CreateAchievement(
    							  catagoryMedalsInfo[i].achievementName
    							, catagoryMedalsInfo[i].progress
    							, catagoryMedalsInfo[i].max
    							, catagoryMedalsInfo[i].imgSrc);
    }

    // End the tag
    result += "</div>";

    return result;
}

function CreateAchivementPage(){
	let page = `
		<!--Title-->
    	<h1 class="achivementTitle" align="center">Achievements</h1>
    	<!--achievement background box-->
	    <div class="achievementBackground achievementScroll" id="achievemenets-container">
	    	<!-- The achievements medals will be here -->
	    	`;
	    
	// Create the catagories info and add them to the achievement page
	for(let i = 0; i < achievementInfo.length; i++)
	{
		page += CreateAchievementCatagory(achievementInfo[i].catagory, achievementInfo[i].madelsInfo);
	}

	page += "</div>";
	page += CreateSlideDownIndicator();

	return page;
}

function showAchievementsPage()
{
	secondLayerContainer.innerHTML = "";
	secondLayerContainer.insertAdjacentHTML("beforeend", CreateAchivementPage());
	secondLayerContainer.style.setProperty("display", "unset", "");
}

function updateProgressBar(achievementProgressBar, value){
    achievementProgressBar.querySelector(".achievementProgressBarFill").style.width = '${value}';
    achievementProgressBar.querySelector(".achievementProgressBarFill").textContent = '${value}/10.000';
}

// Controller
(() => {
	let rewards = document.querySelector("#rewards");
	let content = CreateAchivementPage();

	// rewards.insertAdjacentHTML("beforeend", content);
})()