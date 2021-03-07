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

function Image(title, url, author, tags) {
	this.title = title;
	this.url = url;
	this.author = author;
	this.tags = tags;
	this.display = function() {
		var imageString = "";
		imageString += "<div>";
		imageString += "<div style='background-image: url('../imgs/" + this.url + "')'>";
		imageString += "</div>";
		imageString += "<h1>" + this.title + "</h1>";
		imageString += "<cite>" + this.author + "</cite>";
		imageString += "</div>";
		$("body").prepend(imageString);
	}
}

var img1 = new Image("Peace in a Moment", "wheat.jpg", "Rylee Frank", ["nature", "snow", "prairies"]);
var img2 = new Image("Frozen in Time", "frozen-4.jpg", "Rylee Frank", ["nature", "snow", "waterfall"]);

img1.display();
img2.display();