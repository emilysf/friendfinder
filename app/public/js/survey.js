$(document).ready(function() {

	$('#submit').on('click', function() {
		// modal shows when name and photo field is empty
		var name = $('#name').val().trim();
		var photo = $('#photo').val().trim();
		var answers = [];

		var friendObject = {
		    name: name,
		    image: photo,
		    scores: answers
		};
		console.log(friendObject);

		if (name == '') {
			$('#modalEmpty').modal('show');
			return false;
		}
		if (photo == '') {
			$('#modalEmpty').modal('show');
			return false;
		}

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

		var currentURL = window.location.origin;

		$.post("/api/friends", friendObject, function(data){

			$('#showResults').html('<h3>' + data.name + '</h3> <br> <img src=' + data.image + '>');
			$('#modalResults').modal('show');
		})


		
	});

});

