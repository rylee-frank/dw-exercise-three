
function Image(title, url, author, color, tags) {
	this.title = title;
	this.url = "url(imgs/" + url;
	this.author = author;
	this.tags = tags;
	this.display = function() {
		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
		})
		container.css("background-image", this.url)
		container.addClass("unit")

		var imageString = "";
		imageString += "<div class = 'info'>";
		imageString += "<h1>" + this.title + "</h1>";
		imageString += "<h2>" + this.author + "</h2>";
		imageString += "</div>";

		container.html(imageString)
		$(".unit").prepend(container);
	}
}
var images = [
	new Image("Peace in a Moment", "wheat1.jpg", "Rylee Frank", ["nature", "winter", "plant"]),
	new Image("Frozen in Time", "frozen1.jpg", "Rylee Frank", ["nature", "winter", "waterfall"]),
	new Image("Grow Tall", "growth1.jpg", "Rylee Frank", ["nature", "plant", "tree"]),
	new Image("Stand Strong", "canyon-21.jpg", "Rylee Frank", ["nature", "tree", "canyon", "winter", "view"]),
	new Image("Cut Your Own Path", "canyon1.jpg", "Rylee Frank", ["nature", "canyon", "winter"]),
	new Image("Look Ahead", "mountain-view11.jpg", "Rylee Frank", ["nature", "view", "mountain"]),
	new Image("Clarity", "reflection1.jpg", "Rylee Frank", ["nature", "water", "mountain"]),
	new Image("Just Keep Moving", "snowy-stream1.jpg", "Rylee Frank", ["nature", "winter", "water"]),
	new Image("Push Forward", "uphill1.jpg", "Rylee Frank", ["nature", "mountain", "plant"]),
	new Image("Prepare to Fall", "waterfall1.jpg", "Rylee Frank", ["nature", "waterfall", "water", "mountain"]),
	new Image("Go With the Flow", "stream1.jpg", "Rylee Frank", ["nature", "waterfall", "water"])
]

var tagList = []
images.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag){
		// if(!tagList.includes(tag)) {
		// 	tagList.push(tag);
		// 	$(".buttons").prepend("<button class = 'filter'>" + tag + "</button>")
	})
})

console.log(tagList);
