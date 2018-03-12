$(document).ready(function(){
	
	var LampState = 0;
	var camfase = 0;
	var batfase = 0;
	var sdfase = 0;
	var video = 0;
	var videoKoud2 = document.querySelector('#KoudeVideo180');
	var videoNormaal1 = document.querySelector('#NormaleVideo0');
	var videoWarm = document.querySelector('#WarmeVideo');	
	var InsertSound = document.querySelector('#Klik');	
	var LightSound = document.querySelector('#LamKno');
	var PakopSound1 = document.querySelector('#Pakso1');
	var PakopSound2 = document.querySelector('#Pakso2');

    document.getElementById('play-button').addEventListener("click", function(e) {
        this.style.display = 'none';
        videoNormaal1.play();
        videoNormaal1.pause();

        document.getElementById("Camera").setAttribute("look-controls", "enabled: true");
        document.getElementById("scene").setAttribute("vr-mode-ui", "enabled: true");

        document.getElementById("cursor").setAttribute('visible', 'true');
        document.getElementById("cursor").setAttribute('fuse', 'true');
    });
	
	function sound2(){
		PakopSound2.play();
	}
	
	$.ajax({
				url:'https://api.openweathermap.org/data/2.5/weather?APPID=ba0125bc55a2685ce482239c28698865&units=metric&q=Leiden',
				method: 'GET',
				dataType: 'json',
				success: function(msg){
					var temp = msg['main']["temp"];
					var wind = msg['wind']['deg'];
						console.log(temp);
						console.log(wind);
						
						
				if(temp < 5 && wind < 180) {
					$("#PcScherm").attr("material", "src:#DesktopKoud ");
					$("#Raam").attr("material", "src:#KoudRaam");
					video = 3;
					}
				else if(temp < 5 && wind > 180) {
					$("#PcScherm").attr("material", "src:#DesktopKoud ");
					$("#Raam").attr("material", "src:#KoudRaam ");
					video = 3;
					}
				else if(temp > 5 && temp < 15 ) {
						if(wind < 180){
						$("#PcScherm").attr("material", "src:#DesktopNormaal ");
						$("#Raam").attr("material", "src:#NormaalRaam ");
						video = 3;
						}
						else{
						$("#PcScherm").attr("material", "src:#DesktopNormaal ");
						$("#Raam").attr("material", "src:#NormaalRaam ");
						video = 3;
						}
				}
				else{
					$("#PcScherm").attr("material", "src: #DesktopWarm ");
					$("#Raam").attr("material", "src:#WarmRaam ");
					video = 3;
				}
				
			}
	});

    document.getElementById("Lamp").addEventListener('mouseenter', function(){

            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")

    });

    document.getElementById("Lamp").addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32");
    });

	$("#Lamp").click(function(){
        cursor.setAttribute("color", "#32CD32");

		if(LampState == 1){
			$("#BLicht").attr("light", "type: spot; angle: 45; color: #FFF; intensity: 0.9; distance: 1;");
			LightSound.play();
			LampState = 0;
			
		}
		else{
			$("#BLicht").attr("light", "type: spot; angle: 45; color: #FFF; intensity: 0; distance: 1;");
			LightSound.play();
			LampState = 1;
			
		}
	//code voor aan uit zetten lamp
		
	});
    document.getElementById("Batterij").addEventListener('mouseenter', function(){
        if(camfase === 1 && sdfase !== 1){
            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")
        }
    });

    document.getElementById("Batterij").addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32");
    });
	$("#Batterij").click(function(){
        cursor.setAttribute("color", "#32CD32");
		if(camfase === 1 && sdfase !== 1){
		$("#Batterij").attr("visible", "false");
		$("#BatVast").attr("visible", "true");
		batfase = 1;
		//batterij word opgepakt. Voortgang word bijgehouden met var batfase
		}
		else{
			$("#Batterij").attr("visible", "true");
		}
	});



	document.getElementById("SD").addEventListener('mouseenter', function(){
        if(camfase == 1 && batfase != 1){
            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")
        }
    });

    document.getElementById("SD").addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32");
    });
	
	$("#SD").click(function(){
        cursor.setAttribute("color", "#32CD32");
		if(camfase == 1 && batfase != 1){
		$("#SD").attr("visible", "false");
		$("#sdVast").attr("visible", "true");
		sdfase = 1;
		//camera word opgepakt. Voortgang word bijgehouden met var a
		}
		else{
			$("#SD").attr("visible", "true");
		}
	});

    document.getElementById("Qamera").addEventListener('mouseenter', function(){

    	if(camfase !== 3){
			cursor.emit('fuse');
			cursor.setAttribute("color", "#551A8B")
		}


    });

    document.getElementById("Qamera").addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32");
    });
	
	$("#Qamera").click(function(){
        cursor.setAttribute("color", "#32CD32");
		if(camfase < 1){
			
			$("#Qamera").append("<a-animation attribute='position' from='-0.75 1.2 -0.8' to='-0.75 1.5 -0.8' dur='2000'></a-animation> <a-animation attribute='scale' delay='1000' to='0.06 0.06  0.06 '></a-animation><a-animation attribute='position' from='-0.75 1.5 -0.8' to='0 1.15 -1' delay='1500'></a-animation>");
			PakopSound1.play();
			setTimeout(sound2, 2000);
			camfase = 1;
			
		}
		//camera word uit de doos gehaald. Voortgang word bijgehouden met var camfase
		
		else if(sdfase == 0 && batfase == 0){
			$("#Qamera").append("<a-animation attribute='rotation' to='0 180 0' dur='1000'></a-animation> <a-animation attribute='rotation' from='0 180 0' to='0 0 0' delay='1000' dur='1000'></a-animation>");
			$("#CamScherm").attr("material", "src: #LowBat")
		
		}
		
		
		else if(batfase == 1){
			$("#BatVast").attr("visible", "false");
			$("#plaatsen").html("<a-entity id='AnimBatterij' obj-model='obj: #batterij-obj; mtl: #batterij-mtl' scale='0.04 0.04 0.04' position='0.5 1.15 -1' rotation='0 0 0' visible='true'>  <a-animation attribute='position' from='0.2 1.15 -1' to='0 1.15 -1'></a-animation></a-entity>");
			InsertSound.play();
			batfase = 2;
		}
		//Baterij gaat in de camera en batfase gaat naar 2
		
		else if(sdfase == 0 && batfase == 2){
			$("#Qamera").append("<a-animation attribute='rotation' to='0 180 0' dur='1000'></a-animation> <a-animation attribute='rotation' from='0 180 0' to='0 0 0' delay='1000' dur='1000'></a-animation>");
			$("#CamScherm").attr("material", "src: #NoSd")
		}
		else if(sdfase == 1){
			$("#sdVast").attr("visible", "false");
			$("#plaatsen").html("<a-entity id='AnimSD' obj-model='obj: #sdkaart-obj; mtl: #sdkaart-mtl' scale='0.01 0.01 0.01' position='0.5 1.15 -1' rotation='0 0 -90' visible='true'>  <a-animation attribute='position' from='0.2 1.15 -1' to='0 1.15 -1'></a-animation></a-entity>");
			InsertSound.play();
			sdfase = 2;
		}
		//SD gaat in de camera en sdfase gaat naar 2
		else if(sdfase ==2 && batfase == 2){
			
			console.log(video);
			$("#Qamera").append("<a-animation attribute='rotation' to='0 180 0' dur='1000'> </a-animation><a-animation attribute='scale' delay='1000' to='0.35 0.35 0.25 '></a-animation><a-animation attribute='position' from='0 1.15 -1' to='0 1.5 -1.2' dur='2000'></a-animation>");
			sdfase = 3;
			batfase = 3;
			camfase = 3;
			$("#AnimSD").attr("visible", "false");
			$("#AnimBatterij").attr("visible", "false");
			$("#PlayKnop").attr("visible","false");
			$("#PauseKnop").attr("visible","true");

					$("#CamScherm").attr("material", "src: #NormaleVideo0");
					videoNormaal1.play();

			
			//hier komt een animatie waardoor je het camera scherm kan zien en er een video gaat afspelen.
		}
	});

    document.getElementById("PlayKnop").addEventListener('mouseenter', function(){

        cursor.emit('fuse');
        cursor.setAttribute("color", "#551A8B")

    });

    document.getElementById("PlayKnop").addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32");
    });

	$("#PlayKnop").click(function(){
        cursor.setAttribute("color", "#32CD32");
		$("#PlayKnop").attr("visible","false");
		$("#PauseKnop").attr("visible","true");

				videoNormaal1.play();


	});
	//code voor play knop van video

    document.getElementById("PauseKnop").addEventListener('mouseenter', function(){

        cursor.emit('fuse');
        cursor.setAttribute("color", "#551A8B")

    });

    document.getElementById("PauseKnop").addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32");
    });
	
	$("#PauseKnop").click(function(){
        cursor.setAttribute("color", "#32CD32");
		$("#PlayKnop").attr("visible","true");
		$("#PauseKnop").attr("visible","false");

				videoNormaal1.pause();

	});
	//code voor pauze knop van video

});