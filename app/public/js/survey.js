$(document).ready(function() {

	$('#submit').on('click', function() {
		// modal shows when name and photo field is empty
		var name = $('#name').val().trim();
		var photo = $('#photo').val().trim();

		if (name == '') {
			$('#modalEmpty').modal('show');
			return false;
		}
		if (photo == '') {
			$('#modalEmpty').modal('show');
			return false;
		}

		var answers = [];

		for (var i = 1; i <= 10; i++) {
			var radio = $('input:radio[name=q' + i + ']:checked').val();

    		if (radio == null){
        		$('#modalEmpty').modal('show');
        		return false;
    		} 
    		else {
        		answers.push(radio);
    		}
		};
	

	var results = {
	    name: name,
	    image: photo,
	    scores: answers
	};

	var currentURL = window.location.origin;

	//Post user object to friends API
	console.log('here')

	$.post("/api/friends", results, function(data){

		console.log(data.name);
		console.log(data.photo);
		$("#friendInfo").html("<h3>" + data.name + "</h3<br><img src=" + data.photo + " style='width:500px;'</img>");

		$('#myModal').modal('show')
	})
});
//clear data.

$('#name').val('');
$('#photo').val('');
$('input:radio').attr("checked", false);

return false;

});