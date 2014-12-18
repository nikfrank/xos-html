document.addEventListener("DOMContentLoaded", function() {

    var eli = function(e){

	setTimeout(function(){
	    var price = (1*(document.getElementById('total-price').value))||0;
	    var percent = (1*(document.getElementById('percent-tip').value))||0;

	    document.getElementById('tip-total').innerHTML = 'tip: $' + price*percent/100;
	},50);
    };

    document.getElementById("percent-tip").addEventListener("keydown", eli);
    document.getElementById("total-price").addEventListener("keydown", eli);
});
