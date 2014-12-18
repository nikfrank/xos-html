// write bindings for the onclick the user will write for the confirm button

document.addEventListener("DOMContentLoaded", function() {

// bind to the expected inputs and the div


    document.getElementById("texty").addEventListener("keydown", function(e){

	var price = 1*document.getElementById('total-price').value||0;
	var percent = 1*document.getElemtentById('percent-tip').value||0;

	document.getElementById('tip-total').innerHTML = 'tip: $' + price*percent

    });


});
