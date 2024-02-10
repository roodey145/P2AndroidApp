let socialPage = document.querySelector("#social");
let feedContainer;
let nickname = "Jack";

let msgsInfo = 
[
	{
		sender: "Jane Smith",
		msg: "For the first time in my life I tried meditation. I feel way more relaxed now.",
		imgSrc: "PPW.png"
	},
	{
		sender: "William Decker",
		msg: ">Just ran 5 km today with my son, it was a nice run and after we went for fishing.",
		imgSrc: "PPM.png"
	}
];

function changeImage(element){
     if(element.src.match('../img/Like.png')){
          element.src = '../img/Liked.png';
    }else{
          element.src = '../img/Like.png';
          }
}

function CreateSocialPage(userNickname)
{
	return `<!-- Heading text -->
	        <h1 class = "socialTitle" align="center"> Social</h1>
	       
	       <!-- outline box -->
	        <div class="socialBox boxShadow scroll-div">
	        	
	            <h2 class="yourFeedText" align="center">Make a post</h2>
	            <!-- posts -->
	            <!-- Jack -->
	            <div class="postBox boxShadow"> 

	                 <!-- textbox -->
	                <div class="postInfo">
	                     <!-- name -->
	                    <div><p class="postInfoName">${userNickname}</p></div>
	                     <!-- textposte -->
	                    <div class="user-message-container"><textarea class="textProfile" placeholder="Share whats on your mind"></textarea></div>
	                </div>
	                <span class="postProfile">
	                     <div class="box box1"><img src="../img/PPM.png"></div>
	                </span>
	                <div class="sendBox">
	                    <span><p class="sendText">Post</p> </span>
	                    <span class="sendIMG" ><img src="../img/SendF.png" ></span>
	                </div>
	            </div>

	            <div id="feed-container">
	            <h2 class="yourFeedText" align="center">Your Feed</h2>
	            <!-- The user feed -->
	            </div>  
	        </div>
	        ${CreateSlideDownIndicator()}`;
}

function CreateMessage(sender, msg, imgSrc){
    return `<div class="postBox boxShadow">
    <div class="postInfo">
        <p class="postInfoName">${sender}</p>
        <p class="textBox">${msg}</p>
     </div>
    
     <span class="postProfile">
        <div class="box box1"><img src="../img/${imgSrc}"></div>
     </span>
                        <!-- comment and like -->
    <div class="commentLike">
        <span class="like"><img id="image1" src="../img/Like.png" onclick="changeImage(this)"></span>
       
        <span class="comment"><img src="../img/comment.png"></span>
     </div>
</div>`;
}



// Controller
(() => {

	// Create the social page
	socialPage.innerHTML += CreateSocialPage(nickname);

	// Get the feed container
	feedContainer = document.querySelector("#feed-container");
	for(let i = 0; i < msgsInfo.length; i++)
	{
		feedContainer.innerHTML += CreateMessage(msgsInfo[i].sender, msgsInfo[i].msg, msgsInfo[i].imgSrc);
	}
})()