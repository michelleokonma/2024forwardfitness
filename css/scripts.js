/*
	student name: michelle
	file name: script.js
*/

//global variables

var video = document.GetElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionSource = document.getElementById("despsrc");

//hamburger menu function

function hamburger () {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
		menu.style.display = "none";
		logo.style.display = "block";
	}
	else {
		menu.style.display = "block";
		logo.style.display = "none";
	}
}

//function to display the burpee example video

function burpee() {
	videoSource.src = "media/burpees.mp4";
	descriptionSource.src = "media/burpees-description.vtt";
	video.style.display = "block";
	video.load();
}

//function to display the plank example video

function plank () {
	videoSource.src = "media/plank.mp4";
	descriptionSource.src = "media/plank-description.vtt";
	video.style.display = "block";
	video.load ();
}

//function to display the mountain climbers example video

function plank () {
	videoSource.src = "media/mc.mp4";
	descriptionSource.src = "media/mountain-description.vtt";
	video.style.display = "block";
	video.load ();
}

//function to display a promo code

function discount() {
	var promo = document.getElementById("special");
	promo.firstChild.nodeValue = "Promo Code: D25START";
	promo.style.color = "#ff0000";
	promo.stlye.fontSize = "2em";
}