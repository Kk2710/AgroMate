var forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};

httpRequest = new XMLHttpRequest();
				httpRequest.open("GET","https://blynk.cloud/external/api/get?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v0&v1&v2&v3&v4&v5&v6&v7");
				httpRequest.send();
				    httpRequest.onreadystatechange = function(){
				    	if(this.readyState == 4 && this.status == 200){
				 	    current_virtual_pins = JSON.parse(this.responseText);
				 	    //led = current_virtual_pins.v0;
				 	   // rain_sensor = current_virtual_pins.v1;
				 	    soil_moisture = current_virtual_pins.v2;
				 	    //float_sensor = current_virtual_pins.v3;
				 	    //Motor = current_virtual_pins.v4;
				 	    humid = current_virtual_pins.v5;
				 	    temp = current_virtual_pins.v6;
				 	    //Extra1 = current_virtual_pins.v7;
				 	    //console.log(led, temp, rain_sensor, soil_moisture, float_sensor, Motor, humid, Extra1)
				 	}
				}


window.onload = function(){
	var max = -219.99078369140625;
	forEach(document.querySelectorAll('.progress1'), function (index, value) {
	//percent =
		value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - humid) / 100) * max);
		value.querySelector('.value').innerHTML = humid + '%';
	});

	//for progress bar 2
	forEach(document.querySelectorAll('.progress2'), function (index, value) {
		//percent =
			value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - temp) / 100) * max);
			value.querySelector('.value').innerHTML = temp + '°C';
		});

	//for progressbar 3
	forEach(document.querySelectorAll('.progress3'), function (index, value) {
		//percent =
			value.querySelector('.fill').setAttribute('style', 'stroke-dashoffset: ' + ((100 - soil_moisture) / 100) * max);
			value.querySelector('.value').innerHTML = soil_moisture + '%';
		});
}



var motor = document.getElementById("motor");
var led = document.getElementById("led");

motor.onchange = function(){
    var status = this.checked ? '1' : '0';
	if(status == '1'){
		url = "https://blynk.cloud/external/api/update?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v4="+status;
		console.log("status motor on : = " + url);
	}
	else{
		url = "https://blynk.cloud/external/api/update?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v7="+status;
		console.log("status motor = "+ url);
	}

	request.open('GET', 'https://blynk.cloud/external/api/get?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v4', true);
	request.send();
	request.onload = function(){
		console.log(request.responseText);
	}

}

led.onchange = function(){
	var request = new XMLHttpRequest();
    var status = this.checked ? '1' : '0';
	if(status == '1'){
		
		url = "https://blynk.cloud/external/api/update?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v0="+status;
		request.open('GET', url, true);
		request.send();
		console.log("status led on : = " + url);
	}
	else{
		url = "https://blynk.cloud/external/api/update?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v0="+status;
		request.open('GET', url, true);
		request.send();
		console.log("status led close = "+ url);
	}
	request.open('GET', 'https://blynk.cloud/external/api/get?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v0', true);
	request.send();
	request.onload = function(){
		console.log(request.responseText);
	}

}





function submit(){
	var st_date = document.getElementById('date1').value;
	var end_Date = document.getElementById('date2').value;
	var filld = st_date + " to " + end_Date; 

	var st_time = document.getElementById('time1').value;
	var end_time = document.getElementById('time2').value;
	var fillt = st_time +" to "+ end_time;

	var data = st_date + st_time + end_Date + end_time;
	console.log(data);
	url = "https://blynk.cloud/external/api/update?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v7=";
	var sublime = url + data;
	// console.log(st_date);
	// console.log(end_Date);
	// console.log(st_time);
	// console.log(end_time);
	// alert('got data')
	
	var request = new XMLHttpRequest();
	request.open('GET', sublime, true);
	request.send();
	request.open('GET', 'https://blynk.cloud/external/api/get?token=siGoRCQ7AO0sd-ZcKQyhn4q7Ygq5-ey3&v5&v6&v1&v2&v3&v4&v7', true);
	request.send();
	request.onload = function(){
		console.log(request.responseText);
	}

	document.getElementById('filldate').value = filld;
	document.getElementById('filltime').value = fillt;



}






