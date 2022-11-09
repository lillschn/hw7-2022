var video;

// Step 1: initialize video element, turn off autoplay, turn off looping
window.addEventListener("load", function() {
	console.log("Opened window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});


// Step 2: Play the video and update the volume information.  
document.querySelector("#play").addEventListener("click", function() {
	console.log("'Play Video' clicked");
	video = document.querySelector("#player1");
	video.play();
	console.log("Video is playing");
	video.loop = true;
	console.log("Loop is set to " + video.loop);
});

// Step 2 and 7: change volume based on slider and update vol information
document.querySelector("#slider").addEventListener("change", function() {
	console.log("Volume change");
	volume = document.querySelector("#volume");
	volume.innerHTML = document.querySelector("#slider").value + "%";
	// update volume physically
	video = document.querySelector("#player1");
	video.volume = document.querySelector("#slider").value / 100;
	console.log("Volume set to " + volume.innerHTML);
});


// Step 3: Pause the video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("'Pause Video' clicked");
	video = document.querySelector("#player1");
	video.pause();
	console.log("Video is paused");
});


// Step 4: Slow the current video speed by 10% each time the button is clicked
// and log the new speed to the console
document.querySelector("#slower").addEventListener("click", function() {
	console.log("'Slow Down' clicked");
	video = document.querySelector("#player1");
	video.playbackRate -= .1;
	console.log("Video speed is " + video.playbackRate);
});


/* 	Step 5: Increase the current video speed each time the button is clicked and
	log the new speed to the console.  Change it by an amount proportional to
	the slow down. CHECK THIS!!  If you slow down three times and then speed up
	three times you should be within 5 digits of 100% again */
document.querySelector("#faster").addEventListener("click", function() {
	console.log("'Speed Up' clicked");
	video = document.querySelector("#player1");
	video.playbackRate += .1;
	console.log("Video speed is " + video.playbackRate);
});


/*	Step 6: Advance the current video by 10 seconds.  If the video length has
	been exceeded go back to the start of the video - no farther.   Log the
	current location of the video. */
document.querySelector("#skip").addEventListener('click', function() {
	console.log("'Skip Ahead' clicked");
	video = document.querySelector("#player1");
	video.currentTime += 10;
	console.log("Video location is " + video.currentTime + "seconds");
});


// Step 7: Mute/unmute the video and update the text in the button
document.querySelector("#mute").addEventListener('click', function() {
	video = document.querySelector("#player1");
	muteButton = document.querySelector("#mute");
	
	if (muteButton.innerHTML === "Mute") {
		console.log("'Mute' clicked");
		// mute the video
		video.muted = true;
		// change button text
		muteButton.innerHTML = "Unmute";
		console.log("Video muted = " + video.muted + ", button text changed");
	}
	
	else {
		console.log("'Unmute' clicked");
		// unmute the video
		video.muted = false;
		// change button text
		muteButton.innerHTML = "Mute";
		console.log("Video muted = " + video.muted + ", button text changed");
	}
	
	console.log("Mute/Unmute function complete");
});


// Step 8: Utilize the existing oldSchool class on the video element
document.querySelector("#vintage").addEventListener('click', function() {
	console.log("'Old School' clicked");
	video = document.querySelector("#player1");
	video.className = "oldSchool";
});


// Step 9: Remove the oldSchool class from the video.
document.querySelector("#orig").addEventListener('click', function() {
	console.log("'Original' clicked")
	video = document.querySelector("#player1");
	video.className = "video";
});