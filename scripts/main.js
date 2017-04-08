$("#button").click(function(){

	$.getJSON("http//:api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=1f59466b416f7bac038a4e2f75e51019", function(data){
		$('#temp').html(data.main[0].temp);
	
});
