$(document).ready(function(){

	$('#convert').click(function(){
		var inputString = $('#input').val()
		//alert(inputString);
		for (var i=0; i<299; i++){
			inputString = inputString.replace("\n",",");
		}
		var outputString = inputString;
		//alert(inputString);
		$('#output').val(outputString)
		$('#output').select();
	});
			
	$('#copy').click(function(){
		$('#output').select();
	});
			
	$('#clear').click(function(){
		$('#output').val("");
		$('#input').val("");
	});


});

//document.getElementById(id)
