// var img = {
// 	title: 'Peace in a Moment',
// 	url: "imgs/wheat.jpeg",
// 	tags: ["nature","snow","prairies"],
// 	display: function(){
// 		var imageString = "";
// 		imageString += "<div style='background-image:" + this.img + "'>";
// 		imageString += "<cite>" + this.author + "</cite>";
// 		imageString += "</div>";
// 		$("body").prepend(imageString);
// 	}
// }

function Image(title, url, author, color, tags) {
	this.title = title;
	this.url = "url(imgs/" + url;
	this.author = author;
	this.tags = tags;
	this.display = function() {
		var imageString = "";
		imageString += "<div>";
		imageString += "<div style='background-image:" + this.url + ")'>";
		imageString += "</div>";
		imageString += "<h1>" + this.title + "</h1>";
		imageString += "<h2>" + this.author + "</h2>";
		imageString += "</div>";
		$("body").prepend(imageString);
	}
}

var img1 = new Image("Peace in a Moment", "wheat1.jpg", "Rylee Frank", ["nature", "winter", "plant"]);
var img2 = new Image("Frozen in Time", "frozen1.jpg", "Rylee Frank", ["nature", "winter", "waterfall"]);
var img3 = new Image("Grow Tall", "growth1.jpg", "Rylee Frank", ["nature", "plant", "tree"]);
var img4 = new Image("Stand Strong", "canyon-21.jpg", "Rylee Frank", ["nature", "tree", "canyon", "winter", "view"]);
var img5 = new Image("Cut Your Own Path", "canyon1.jpg", "Rylee Frank", ["nature", "canyon", "winter"]);
var img6 = new Image("Look Ahead", "mountain-view11.jpg", "Rylee Frank", ["nature", "view", "mountain"]);
var img7 = new Image("Clarity", "reflection1.jpg", "Rylee Frank", ["nature", "water", "mountain"]);
var img8 = new Image("Just Keep Moving", "snowy-stream1.jpg", "Rylee Frank", ["nature", "winter", "water"]);
var img9 = new Image("Push Forward", "uphill1.jpg", "Rylee Frank", );
var img10 = new Image();

img1.display();
img2.display();
img3.display();
img4.display();
img5.display();
img6.display();
img7.display();
img8.display();