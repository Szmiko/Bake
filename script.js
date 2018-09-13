window.onload = function() {
	var button = document.getElementById("bake");
	button.onclick = function() {
		console.log("Już można wypiekać ciasteczka.");
		cookies.bake(2500);
};

var cookies = {
	instructions: "Wstępne rozgrzewanie do 175 stopni...",
	bake: function(time) {
		console.log("Wypiekam ciasteczka.");
		setTimeout(done, time);
	}
};

function done() {
	alert("Ciasteczka są gotowe, wyciągnij je, by przestygły.");
	console.log("Chłodzenie ciasteczek".);
	setTimeout(function() {
		alert("Ciasteczka są już zimne, można je jeść!");
	}, 1000);
};