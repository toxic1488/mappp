$(document).ready(function(){


	function randomInteger (min, max){
  		var rand = min - 0.5 + Math.random() * (max - min +1)
  		rand = Math.round(rand);
  		return rand;
	}

	var randomZone1Bg = randomInteger(1,9);
	$('.zone-1').css({"background-image":"url(./img/cities/armalit/0"+randomZone1Bg+".png)"});
	$('.zone-2').css({"background-image":"url(./img/cities/askold/0"+randomZone1Bg+".png)"});
	randomZone1Bg = randomInteger(1,6);
	$('.zone-3').css({"background-image":"url(./img/cities/burevestnik/0"+randomZone1Bg+".png)"});
	$('.zone-4').css({'background-image':'url(./img/cities/skbk/0'+randomZone1Bg+'.png)'});

	var timer = setTimeout(function(){
		$('.tooltip').fadeOut('fast');
	}, 3000)
});