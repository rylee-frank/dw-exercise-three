
function Image (title, url, author, tags) {
	this. title = title;
	this.url = "url(imgs/" + url;
	this.author = author;
	this.tags = tags;

	this.display = function() {
		var container = $("<div>")
		this.tags.forEach(function(tag){
			container.addClass(tag);
	})
	container.addClass("image")
	var imageString = ""
		imageString += "<div>";
		imageString += "<div style='background-image:" + this.url + ")'>";
 		imageString += "</div>";
		imageString += "</div>";
		imageString += "<div class = 'info'>";
		imageString += "<h1>" + this.title + "</h1>";
		imageString += "<h2>" + this.author + "</h2>";
		imageString += "</div>";
		imageString += "</div>";

		container.html(imageString)
		$(".images").prepend(container)
	}
}

var Images = [
new Image("Peace in a Moment", "wheat.jpg", "Rylee Frank", ["nature", "winter", "plant"]),
new Image("Frozen in Time", "frozen1.jpg", "Rylee Frank", ["nature", "winter", "waterfall"]),
new Image("Grow Tall", "growth1.jpg", "Rylee Frank", ["nature", "plant", "tree"]),
new Image("Stand Strong", "canyon-21.jpg", "Rylee Frank", ["nature", "tree", "canyon", "winter", "view"]),
new Image("Cut Your Own Path", "canyon1.jpg", "Rylee Frank", ["nature", "canyon", "winter"],
new Image("Look Ahead", "mountain-view11.jpg", "Rylee Frank", ["nature", "view", "mountain"]),
new Image("Clarity", "reflection1.jpg", "Rylee Frank", ["nature", "water", "mountain"]),
new Image("Just Keep Moving", "snowy-stream1.jpg", "Rylee Frank", ["nature", "winter", "water"]),
new Image("Push Forward", "uphill1.jpg", "Rylee Frank", ["nature", "mountain", "plant"]),
new Image("Prepare to Fall", "waterfall1.jpg", "Rylee Frank", ["nature", "waterfall", "water", "mountain"]),
new Image("Go With the Flow", "stream1.jpg", "Rylee Frank", ["nature", "waterfall", "water"]),
new Image("Go Where You Must", "waterfall2.jpg", "Rylee Frank", ["nature", "waterfall", "water", "tree"])

)]
var tagList = []
Images.forEach(function(image){
	image.display();
	image.tags.forEach(function(tag) {
		if (!tagList.includes(tag)) {
			tagList.push(tag);
			$(".buttons").prepend("<button class='filter' id = '" + tag + "'>" + tag + "</button>")
		}
	})
})

$(".filter").on("click", function() {
	var tag = $(this).attr("id");
	console.log(tag)

	$("." + tag).fadeIn();
	$(".image").not("." + tag).hide();

	$(".filter").removeClass("active")
	$(this).addClass("active")
})





