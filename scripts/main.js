$("#button").click(function(){
//alert();
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + $("#zipInputArea").val() + ",us&units=imperial&appid=1f59466b416f7bac038a4e2f75e51019", function(data){
		$('#tempDisplay').html(data.main.temp);
	});	
			
});

