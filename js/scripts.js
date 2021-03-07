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
	this.url = url;
	this.author = author;
	this.color = color;
	this.tags = tags;
	this.display = function() {
		var imageString = "";
		imageString += "<div>";
		//imageString += "<div style='background-color:" + this.color + "'>"
		imageString += "<div style='background-image: url('imgs/" + this.url + "')'>";
		imageString += "</div>";
		imageString += "<h1>" + this.title + "</h1>";
		imageString += "<h2>" + this.author + "</h2>";
		imageString += "</div>";
		$("body").prepend(imageString);
	}
}

var img1 = new Image("Peace in a Moment", "wheat1.jpg", "Rylee Frank"," #df90b5", ["nature", "winter", "plant"]);
var img2 = new Image("Frozen in Time", "frozen1.jpg", "Rylee Frank", "#90dfde", ["nature", "winter", "waterfall"]);
var img3 = new Image("Grow Tall", "growth1.jpg", "Rylee Frank", "#90dfb5", ["nature", "plant", "tree"]);
var img4 = new Image("Stand Strong", "canyon-21.jpg", "Rylee Frank", "#df9090", ["nature", "tree", "canyon", "winter", "view"]);
var img5 = new Image("Cut Your Own Path", "canyon1.jpg", "Rylee Frank", "#dfd190", ["nature", "canyon", "winter"]);
var img6 = new Image("Look Ahead", "mountain-view1.jpg", "Rylee Frank", "#b3df90", ["nature", "view", "mountain"]);
var img7 = new Image("Clarity", "reflection11.jpeg", "Rylee Frank", "#90dfad", ["nature", "water", "mountain"]);
var img8 = new Image();
var img9 = new Image();
var img10 = new Image();

img1.display();
img2.display();
img3.display();
img4.display();
img5.display();
img6.display();
img7.display();