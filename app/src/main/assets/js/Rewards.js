// Components
//--------------------------------------

function CreateQuote(quoteName, quoteMessage, quoteImage){
	return `<div class="quote">
				<h2 class="black-text-outline-1">
					${quoteName}
				</h2>
				<section>
					<div class="background-fill">
						<img src="../img/Backgrounds/${quoteImage}">
					</div>
					<p>
						${quoteMessage}
					</p>
				</section>
			</div>`;
}

function CreateRewardPage(){
	let rewardPage = `<h1 class="title">Rewards</h1>

		<div class="rewards-container">
		${CreateRank(
			getRankImageSrc(userInfo.rank.title)
			, userInfo.rank.title
			, userInfo.rank.progress
			, userInfo.rank.max)}`;

	// Add the quotes
	let quotesInfo = userInfo.rewards.quotes;
	for(let i = 0; i < quotesInfo.length; i++)
	{
		rewardPage += CreateQuote(quotesInfo[i].quoteName, quotesInfo[i].quoteMessage, quotesInfo[i].imgSrc);
	}


	// Close the rewards container
	rewardPage += "</div>";

	// Create the slide down indicator
	rewardPage += CreateSlideDownIndicator();
	return rewardPage;
}

//--------------------------------------

(() => {
	let rewards = document.querySelector("#rewards");
	// let tasksRank = CreateRank(getRankImageSrc(userInfo.rank.title), userInfo.rank.title, userInfo.rank.max, userInfo.rank.progress);
	rewards.insertAdjacentHTML("beforeend", CreateRewardPage());
})()