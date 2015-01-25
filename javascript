//SQL search bar was unable to accept serial numbers copied straight from excel, the javascript will convert them into
//an acceptable format

$(document).ready(function(){

        //Read in input and and replace all EOL characters with a comma. Copy new string to output field.
	$('#convert').click(function(){
		var inputString = $('#input').val()
		//alert(inputString); 
		for (var i=0; i<299; i++){ //replace all the new lines with ",".
			inputString = inputString.replace("\n",",");
		}
		var outputString = inputString;
		//alert(inputString); 
		$('#output').val(outputString)
		$('#output').select();
	});
	
	//Copy output for easy text transfer.		
	$('#copy').click(function(){
		$('#output').select(); //allows quicker copy/paste
	});
	
	//clear old data from input and output fields.		
	$('#clear').click(function(){
		$('#output').val("");
		$('#input').val("");
	});

});
