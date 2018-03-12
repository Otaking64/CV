$(document).ready(function() {


    //locaties
    var bol = document.getElementById("bol");
    var Start = document.getElementById("Start");

    //objecten
    var Hoe1 = document.getElementById("hoe1");
    var Hoe2 = document.getElementById("hoe2");
    var Hoe3 = document.getElementById("hoe3");
    var Hoe4 = document.getElementById("hoe4");
    var plant1 = document.getElementById("plant1");
    var plant2 = document.getElementById("plant2");
    var plant3 = document.getElementById("plant3");
    var plant4 = document.getElementById("plant4");
    var seed1 = document.getElementById("seed1");
    var seed2 = document.getElementById("seed2");
    var seed3 = document.getElementById("seed3");
    var seed4 = document.getElementById("seed4");
    var arrow = document.getElementById("arrow");
    var onArrow = document.getElementById("onArrow");
    var deur = document.getElementById("deur");

    var instruct = document.getElementById("instructText");
    var startPlane = document.getElementById("startPlane");

    var deurF = document.getElementById("deurFace");
    var kraan = document.getElementById("kraan");
    var kraanB = document.getElementById("kraanB");
    var WaterS = document.getElementById("waterstroom");
    var WaterG1 = document.getElementById("waterg1");
    var WaterG2 = document.getElementById("waterg2");
    var WaterG3 = document.getElementById("waterg3");
    var WaterG4 = document.getElementById("waterg4");
    var regen = 0;
    var boom1 = document.getElementById("boom1");
    var boom2 = document.getElementById("boom2");
    var boom3 = document.getElementById("boom3");
    var boom4 = document.getElementById("boom4");
    var boom5 = document.getElementById("boom5");
    var boom6 = document.getElementById("boom6");
    var greensField = document.getElementById("greensField");

    var tapPlane = document.getElementById("tapPlane");

    var schof = document.getElementById("schof");
    var hoeTrail = document.getElementById("hoeTrail");

    var cursor = document.getElementById("cursor");


    var Schoffel = document.getElementById("schoffel");

    var watcan = document.getElementById("watcan");
    var knol = document.getElementById("knol");

    var schofPlaats = document.getElementById("schofPlace");
    var watPlaats = document.getElementById("watPlace");

    //bob things
    var bob = document.getElementById("bob");
    var schofb = document.getElementById("schofb");
    var seedb = document.getElementById("seedb");
    var gietb = document.getElementById("gietb");
    var bobBox = document.getElementById("bobBox");
    var schofBox = document.getElementById("schofBox")
    var seedBox = document.getElementById("seedBox");


    //geluiden
    var shovelsound = document.querySelector('#ShovelSfx');
    var hekSound = document.querySelector('#hekSound');
    var succesSound = document.querySelector('#successSound');
    var walkingSound = document.querySelector('#walkingSound');
    var waterSound = document.querySelector('#waterSound');

    var welcome = document.querySelector('#welcome');
    var meetbob = document.querySelector('#meetbob');
    var howhoe = document.querySelector('#howhoe');
    var majbob = document.querySelector('#majbob');
    var seedbob = document.querySelector('#seedbob');
    var lookbob = document.querySelector('#lookbob');
    var waterbob = document.querySelector('#waterbob');
    var rotbob = document.querySelector('#rotbob');
    var snapbob = document.querySelector('#snapbob');
    var opengate = document.querySelector('#opengate');
    var movetoorb = document.querySelector('#movetoorb');
    var grabhoe = document.querySelector('#grabhoe');
    var grabseed = document.querySelector('#grabseed');
    var pfuut = document.querySelector('#pfuut');
    var grabcan = document.querySelector('#grabcan');
    var fillcan = document.querySelector('#fillcan');
    var finish = document.querySelector('#finish');

//spatial sound
    var audioElement = document.createElement('audio');
    var audioContext = new AudioContext();
    var audioElementSource =
        audioContext.createMediaElementSource(audioElement);
    var hoaRenderer = Omnitone.createHOARenderer(audioContext);

    //progress en status variabelen
    LocState = 0;
    overallProgress = 0;
    SchoffelHold = 0;
    SchoffelProgress = 0;
    WaterProgress = 0;
    CanVast = 0;
    ObjectVast= 0;
    openDicht = 0;
    waterFilled = 0;
    knolVast = 0;
    knolProgress = 0;
    bobProgress = 0;
    isDone = 0;
    knol1 = 0;
    knol2 = 0;
    knol3 = 0;
    knol4 = 0;

    water1 = 0;
    water2 = 0;
    water3 = 0;
    water4 = 0;

    //camera
    var camera = $("#camera");
    var HoeVast = $("#schoffelVast");
    var WatVast = $("#watVast");
    var KnolVast = $("#KnolVast");



    //camera locatie animaties
    var cameraAnima = "<a-animation attribute='position' dur='4000' fill='forwards' from='0 1.8 10' to='0 1.8 -4' repeat='0'></a-animation>";
    var cameraAnimaBack = "<a-animation attribute='position' dur='4000' fill='forwards' from='0 1.8 -4' to='0 1.8 10' repeat='0'></a-animation>";

    var scene = $("#Scene");
    var Sky = $("#sky");

    scene.on('enter-vr', function () {
        console.log("ENTERED VR");
        posz = camera.attr('position').z;
        console.log(posz);
        posx = camera.attr('position').x;
        posy = 1.8;
        console.log(posx);
        camera.attr('position', posx + ' ' + posy + ' ' + posz);
        positionTrack = camera.attr('position');
        console.log(positionTrack);

        camera.attr("userHeight", "1.8")
    });

        if (navigator.geolocation) {
        // Get the user's current position
        console.log("Geo is available");
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            console.log(lat, lon);

            LocUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=ba0125bc55a2685ce482239c28698865&units=metric&lat="+ lat +"&lon=" + lon +"";
            apiCall();

        }
    } else {
        alert('Geolocation is not supported in your browser');
        LocUrl = "https://api.openweathermap.org/data/2.5/weather?APPID=ba0125bc55a2685ce482239c28698865&units=metric&q=Leiden";
        apiCall()
    }

    <!-- API Weather & Geolocation -->

    function apiCall() {
        $.ajax({
            url: LocUrl,
            method: 'GET',
            dataType: 'json',
            success: function (msg) {
                var temp = msg['main']["temp"];
                var hoeveelheid = msg['weather']['length'];
                var weather1 = msg['weather']['0']["main"];
                console.log(temp);
                console.log(hoeveelheid);
                if(hoeveelheid === 1){
                    console.log(weather1);
                    if(weather1 === "Drizzle" ||  weather1 === "Rain"){
                        console.log("Het regent");
                        Sky.attr("color", "gray");
                        scene.append(' <a-entity id="regen1" position="0 20 0" visible="true">\n' +
                            '        <a-animation id="regenAnim1"\n' +
                            '                     attribute="position"\n' +
                            '                     dur="1500"\n' +
                            '                     fill="forwards"\n' +
                            '                     from="0 20 0"\n' +
                            '                     to="0 -7 0"\n' +
                            '                     repeat="indefinite"\n' +
                            '                     easing="linear">\n' +
                            '        </a-animation>\n' +
                            '        <a-animation id="regenAnim2"\n' +
                            '                     attribute="rotation"\n' +
                            '                     dur="60000"\n' +
                            '                     fill="forwards"\n' +
                            '                     to="0 -360 0"\n' +
                            '                     repeat="indefinite"></a-animation>\n' +
                            '        <a-cylinder opacity="1" position="-8 3 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="6 4 -10" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="0 2 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="9 0 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 2 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="1 3 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 4 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 2 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 1 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 3 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 4 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 1 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -1 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -2 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '\n' +
                            '        <a-cylinder opacity="1" position="-5 -1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-10 -1 6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -2 0" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 0 9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-8 -2 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="3 -1 1" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 -5 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -4 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '    </a-entity>\n' +
                            '\n' +
                            '    <a-entity id="regen2" position="0 20 0" rotation="0 180 0" visible="true">\n' +
                            '        <a-animation id="regenAnim3"\n' +
                            '                     attribute="position"\n' +
                            '                     dur="2000"\n' +
                            '                     fill="forwards"\n' +
                            '                     from="0 20 0"\n' +
                            '                     to="0 -7 0"\n' +
                            '                     repeat="indefinite"\n' +
                            '                     easing="linear">\n' +
                            '        </a-animation>\n' +
                            '        <a-animation id="regenAnim4"\n' +
                            '                     attribute="rotation"\n' +
                            '                     dur="60000"\n' +
                            '                     fill="forwards"\n' +
                            '                     to="0 360 0"\n' +
                            '                     repeat="indefinite"></a-animation>\n' +
                            '        <a-cylinder opacity="1" position="-8 2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="6 3 -10" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="0 4 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="9 5 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -2 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 -1 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="1 -1 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 -2 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -3 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -4 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -5 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 3 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 2 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '\n' +
                            '        <a-cylinder opacity="1" position="-5 -1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-10 1 6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -2 0" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 3 9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-8 -2 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="3 -1 1" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 -1 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 0 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -1 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -2 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '    </a-entity>\n' +
                            '\n' +
                            '    <a-entity id="regen3" position="0 20 0" visible="true">\n' +
                            '        <a-animation id="regenAnim5"\n' +
                            '                     attribute="position"\n' +
                            '                     dur="2500"\n' +
                            '                     fill="forwards"\n' +
                            '                     from="0 20 0"\n' +
                            '                     to="0 -7 0"\n' +
                            '                     repeat="indefinite"\n' +
                            '                     easing="linear">\n' +
                            '        </a-animation>\n' +
                            '        <a-animation id="regenAnim6"\n' +
                            '                     attribute="rotation"\n' +
                            '                     dur="60000"\n' +
                            '                     fill="forwards"\n' +
                            '                     to="0 -360 0"\n' +
                            '                     repeat="indefinite"></a-animation>\n' +
                            '        <a-cylinder opacity="1" position="-8 2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="6 3 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="0 4 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="9 5 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 6 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 2 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="1 -1 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 -1 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -2 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 1 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -3 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -4 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -5 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -2 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '\n' +
                            '        <a-cylinder opacity="1" position="-5 1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-10 2 6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 3 0" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 4 9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-8 5 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="3 2 1" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 -5 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -4 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '    </a-entity>');
                        regen = 1;
                    }

                    if(weather1 === "Clouds"){
                        console.log("bewolkt");
                        Sky.attr("color", "gray")
                    }

                    if(weather1 === "Snow"){
                        console.log("Het sneeuwt");
                        Sky.attr("color", "gray");
                        boom1.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom2.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom3.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom4.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom5.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom6.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        greensField.setAttribute("color", "white");
                    }

                    if(weather1 === "Mist"){
                        Sky.attr("color", "gray");
                        scene.attr("fog","type: exponential; color: #AAA; density:0.07");
                    }

                }else if(hoeveelheid === 2) {
                    console.log(weather1);
                    var weather2 = msg['weather']['1']["main"];
                    console.log(weather2);

                    if (weather1 === "Drizzle" || weather2 === "Drizzle" || weather1 === "Rain" || weather2 === "Rain") {
                        scene.append(' <a-entity id="regen1" position="0 20 0" visible="true">\n' +
                            '        <a-animation id="regenAnim1"\n' +
                            '                     attribute="position"\n' +
                            '                     dur="1500"\n' +
                            '                     fill="forwards"\n' +
                            '                     from="0 20 0"\n' +
                            '                     to="0 -7 0"\n' +
                            '                     repeat="indefinite"\n' +
                            '                     easing="linear">\n' +
                            '        </a-animation>\n' +
                            '        <a-animation id="regenAnim2"\n' +
                            '                     attribute="rotation"\n' +
                            '                     dur="60000"\n' +
                            '                     fill="forwards"\n' +
                            '                     to="0 -360 0"\n' +
                            '                     repeat="indefinite"></a-animation>\n' +
                            '        <a-cylinder opacity="1" position="-8 3 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="6 4 -10" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="0 2 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="9 0 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 2 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="1 3 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 4 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 2 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 1 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 3 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 4 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 1 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -1 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -2 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '\n' +
                            '        <a-cylinder opacity="1" position="-5 -1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-10 -1 6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -2 0" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 0 9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-8 -2 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="3 -1 1" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 -5 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -4 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '    </a-entity>\n' +
                            '\n' +
                            '    <a-entity id="regen2" position="0 20 0" rotation="0 180 0" visible="true">\n' +
                            '        <a-animation id="regenAnim3"\n' +
                            '                     attribute="position"\n' +
                            '                     dur="2000"\n' +
                            '                     fill="forwards"\n' +
                            '                     from="0 20 0"\n' +
                            '                     to="0 -7 0"\n' +
                            '                     repeat="indefinite"\n' +
                            '                     easing="linear">\n' +
                            '        </a-animation>\n' +
                            '        <a-animation id="regenAnim4"\n' +
                            '                     attribute="rotation"\n' +
                            '                     dur="60000"\n' +
                            '                     fill="forwards"\n' +
                            '                     to="0 360 0"\n' +
                            '                     repeat="indefinite"></a-animation>\n' +
                            '        <a-cylinder opacity="1" position="-8 2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="6 3 -10" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="0 4 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="9 5 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -2 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 -1 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="1 -1 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 -2 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -3 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -4 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -5 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 3 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 2 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '\n' +
                            '        <a-cylinder opacity="1" position="-5 -1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-10 1 6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -2 0" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 3 9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-8 -2 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="3 -1 1" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 -1 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 0 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -1 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -2 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '    </a-entity>\n' +
                            '\n' +
                            '    <a-entity id="regen3" position="0 20 0" visible="true">\n' +
                            '        <a-animation id="regenAnim5"\n' +
                            '                     attribute="position"\n' +
                            '                     dur="2500"\n' +
                            '                     fill="forwards"\n' +
                            '                     from="0 20 0"\n' +
                            '                     to="0 -7 0"\n' +
                            '                     repeat="indefinite"\n' +
                            '                     easing="linear">\n' +
                            '        </a-animation>\n' +
                            '        <a-animation id="regenAnim6"\n' +
                            '                     attribute="rotation"\n' +
                            '                     dur="60000"\n' +
                            '                     fill="forwards"\n' +
                            '                     to="0 -360 0"\n' +
                            '                     repeat="indefinite"></a-animation>\n' +
                            '        <a-cylinder opacity="1" position="-8 2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="6 3 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="0 4 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="9 5 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 6 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 2 5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="1 -1 3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="2 -1 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -2 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 1 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 -3 -3" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -4 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -5 -4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-2 -2 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '\n' +
                            '        <a-cylinder opacity="1" position="-5 1 -8" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-10 2 6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-6 3 0" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 4 9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-8 5 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="5 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="3 2 1" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 0 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 -1 2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -2 -5" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="4 1 -9" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-3 -5 -6" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-5 -4 4" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-4 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '        <a-cylinder opacity="1" position="-9 -4 -2" height="0.3" radius="0.005" color="#ADD8E6"></a-cylinder>\n' +
                            '    </a-entity>');
                        console.log("Het regent");
                        Sky.attr("color", "gray");
                        regen = 1;
                    }

                    if (weather1 === "Clouds" || weather2 === "Clouds") {
                        console.log("bewolkt");
                        Sky.attr("color", "gray");
                    }

                    if(weather1 === "Snow" || weather2 === "Snow"){
                        Sky.attr("color", "gray");
                        boom1.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom2.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom3.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom4.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom5.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        boom6.setAttribute("obj-model", "obj: #boomS-obj; mtl: #boomS-mtl");
                        greensField.setAttribute("color", "white");
                    }

                    if(weather1 === "Mist" || weather2 === "Mist"){
                        Sky.attr("color", "gray");
                        scene.attr("fog","type: exponential; color: #AAA; density:0.07");
                    }
                }
            }
        });

    }

    //arrow.setAttribute("visible", "true");
    arrow.children[0].setAttribute("from", "-0.8 1.5 0");
    arrow.children[0].setAttribute("to","-0.8 1 0");
    deur.appendChild(arrow);


    function appendArrow(parent1,parent2,from, to) {
        arrow.children[0].setAttribute("from", from);
        arrow.children[0].setAttribute("to", to);
        parent1.removeChild(arrow);
        parent2.appendChild(arrow);
    }

    document.getElementById('play-button').addEventListener("click", function(e){
        this.style.display = 'none';

        camera.attr("look-controls", "enabled: true");
        scene.attr("vr-mode-ui", "enabled: true");
        setTimeout(function () {
            welcome.play();
        }, 500);
        setTimeout(function () {
            isDone = 1;
            startPlane.setAttribute("position", "0 -30 0");
            startPlane.setAttribute("height", "0.1");
            startPlane.setAttribute("width", "0.1");
            opengate.play();
            console.log("isDone=",isDone);
            cursor.setAttribute('visible', 'true');
            cursor.setAttribute('fuse', 'true');
        }, 7500);
    }, false);

    deurF.addEventListener("mouseenter", function(){
        if(openDicht === 0 && isDone === 1){
            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")
        }
    });

    deurF.addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32")
    });

    if (openDicht === 0 && deurF.addEventListener("click", function(){
        if(isDone === 1) {
            audioElement.src = 'assets/sounds/HekDeur.mp3';
            hoaRenderer.initialize().then(function() {
                audioElementSource.connect(hoaRenderer.input);
                hoaRenderer.output.connect(audioContext.destination);
                audioElement.play();
            });
            deur.setAttribute("rotation", "0 -90 0");

            openDicht = 1;
            bol.setAttribute("visible", "true");
           //appendArrow(deur, bol, "0 2.5 0", "0 1.5 0");
            deur.removeChild(arrow);
            deurF.setAttribute("length", "0.0");
            deurF.setAttribute("width", "0.0");
            cursor.setAttribute("color", "#32CD32");
            setTimeout(function () {
                if (openDicht === 1 && overallProgress === 0) {
                    movetoorb.play();
                    instruct.setAttribute("value", "Click on the white orb to move towards it.");
                    instruct.setAttribute("width", "2")
                }
            }, 500);
        }
        })){}


    //animatie en events voor het gaan naar locatie 1
    bol.addEventListener('mouseenter', function()
    {
        this.setAttribute('color', 'blue');

        if(LocState === 0 && openDicht === 1){
            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")
        }


        rotz = camera.attr('rotation').z;
        console.log(rotz)
    });

    bol.addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32");
        this.setAttribute('color', 'white');
    });



    bol.addEventListener("click", function () {

        if(LocState === 0 && openDicht === 1){
            walkingSound.play();
            camera.append(cameraAnima);
            LocState = 1;
            setTimeout(function(){
                bol.setAttribute("visible", "false");
                Start.setAttribute("visible", "true");
                cursor.setAttribute("color", "#32CD32");
                if(overallProgress === 0){
                    //appendArrow(bol,schof,"0 9 0", "0 8.5 0");
                    meetbob.play();
                    setTimeout(function(){
                        howhoe.play();
                        setTimeout(function(){
                            isDone = 2;
                            bob.setAttribute("position", "-3.5 -0.3 -2");
                            bobBox.setAttribute("scale", "0 0 0")
                        }, 7000);
                    }, 11500);

                    instruct.setAttribute("value","Listen and then speak to bob");
                    instruct.setAttribute("width", "2.5");
                }

            }, 2500);


        }

    });
    bob.addEventListener('mouseenter', function(){
        if((bobProgress === 0 && isDone === 2) || (bobProgress === 1 && isDone === 4)|| (bobProgress === 2 && isDone === 6)){
            if(LocState === 1){
                cursor.emit('fuse');
                cursor.setAttribute("color", "#551A8B");
            }
        }
    });

    bob.addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32")
    });
    bob.addEventListener("click", function () {
        if(bobProgress === 0 && isDone === 2) {
            bobProgress = 1;
            majbob.play();
            setTimeout(function () {
                grabhoe.play();
                instruct.setAttribute("value","Listen and then grab the hoe");
                instruct.setAttribute("width", "2.5");

            }, 6500);
            setTimeout(function () {
                schofBox.setAttribute("scale", "0 0 0")
                isDone = 3;
                console.log("isDone=",isDone);
            }, 8500);
            console.log("bobProgress=",bobProgress);
            var animation = document.createElement("a-animation");
            animation.setAttribute("attribute", "position");
            animation.setAttribute("from", "-3 -0.3 -2");
            animation.setAttribute("to", "-3 -0.3 -6");
            animation.setAttribute("dur", "3000");
            animation.setAttribute("repeat", "1");
            bob.children[0].setAttribute("visible", "true");
            bob.appendChild(animation);
        }
        if(bobProgress === 1 && overallProgress === 1) {
            bobProgress = 2;
            lookbob.play();
            setTimeout(function () {
                grabseed.play();
                instruct.setAttribute("value","Listen then grab the seeds");
                instruct.setAttribute("width", "2.5");
            }, 6000);
            setTimeout(function () {
                isDone = 5;
                seedBox.setAttribute("scale", "0 0 0")
                console.log("isDone=",isDone);
            }, 9000);
            console.log("bobProgress=",bobProgress);
            bob.children[0].setAttribute("visible", "true");

            setTimeout(function () {
                bob.setAttribute("rotation", "30 90 0" );
            }, 500);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 1000);
            setTimeout(function () {
                bob.setAttribute("position", "-3 -0.3 -3" );
            }, 1500);
            setTimeout(function () {
                bob.setAttribute("rotation", "30 90 0" );
            }, 2000);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 2500);
            setTimeout(function () {
                bob.setAttribute("position", "-3 -0.3 -4" );
            }, 3000);
            setTimeout(function () {
                bob.setAttribute("rotation", "30 90 0" );
            }, 3500);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 4000);
            setTimeout(function () {
                bob.setAttribute("position", "-3 -0.3 -5" );
            }, 4500);
            setTimeout(function () {
                bob.setAttribute("rotation", "30 90 0" );
            }, 5000);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 5500);
        }
        if(bobProgress === 2 && knolProgress === 4 && isDone === 6) {
            bobProgress = 3;
            rotbob.play();
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 30" );
            }, 500);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 1000);

            setTimeout(function () {
                bob.setAttribute("position", "-3 -0.3 -3" );
            }, 1500);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 30" );
            }, 2000);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 2500);
            setTimeout(function () {
                bob.setAttribute("position", "-3 -0.3 -4" );
            }, 3000);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 30" );
            }, 3500);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 4000);
            setTimeout(function () {
                bob.setAttribute("position", "-3 -0.3 -5" );
            }, 4500);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 30" );
            }, 5000);
            setTimeout(function () {
                bob.setAttribute("rotation", "0 90 0" );
            }, 5500);
            setTimeout(function () {
                snapbob.play();
                instruct.setAttribute("value","Click on the watertap to fill the can");
                instruct.setAttribute("width", "2.5");
            }, 8000);
            setTimeout(function () {
                isDone = 7;
                console.log("isDone=",isDone);
                tapPlane.setAttribute("scale", "0 0 0");
            }, 18000);
        }
    });


//Schoffel code

    Schoffel.addEventListener('mouseenter', function(){
        if(overallProgress === 0 && ObjectVast === 0 && bobProgress === 1 && isDone === 3){
            if(LocState === 1){
                cursor.emit('fuse');
                cursor.setAttribute("color", "#551A8B");
            }
        }
    });

    Schoffel.addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32")
    });

    Schoffel.addEventListener('click', function(){
        if(LocState === 1 && ObjectVast === 0){
            if(CanVast === 0 && overallProgress === 0 && bobProgress === 1 && isDone === 3){
                bob.setAttribute("visible", "false");
                SchoffelHold = 1;
                ObjectVast = 1;
                Schoffel.setAttribute("visible", "false");
                HoeVast.attr("visible", "true");
                schofPlaats.setAttribute("visible", "true");
                //appendArrow(schof,hoeTrail,"0 1 1.5", "0 1.5 1.5");
                cursor.setAttribute("color", "#32CD32");
                instruct.setAttribute("value","Use the hoe on the strip of dirt");
                instruct.setAttribute("width", "2")
            }
        }

    });


    Hoe1.addEventListener('mouseenter', function () {

        if(SchoffelHold === 1 && SchoffelProgress === 0 ) {
            if (LocState === 1) {
                SchoffelProgress = 1;
                this.setAttribute("visible", "true");
                console.log(SchoffelProgress);
                audioElement.src = 'assets/sounds/shovelsound.mp3';
                hoaRenderer.initialize().then(function() {
                    audioElementSource.connect(hoaRenderer.input);
                    hoaRenderer.output.connect(audioContext.destination);
                    audioElement.play();
                });
                //appendArrow(hoeTrail, hoeTrail, "0 0.5 0.5", "0 1 0.5");
            }
        }else if(knolVast === 1) {
            if (LocState === 1) {
                if(knol1 === 0){
                    audioElement.src = 'assets/sounds/plop.wav';
                    hoaRenderer.initialize().then(function() {
                        audioElementSource.connect(hoaRenderer.input);
                        hoaRenderer.output.connect(audioContext.destination);
                        audioElement.play();
                    });
                    seed1.setAttribute("visible", "true");
                    knol1 = 1;
                    knolProgress = knolProgress + 1;
                    console.log(knolProgress) ;
                    if(knolProgress === 1){
                        //arrow.setAttribute("scale", "0 0 0");
                    }
                    if(knolProgress === 4){
                        if (regen === 0) {
                            bob.setAttribute("position", "-3 -0.3 -2");
                            bob.removeChild(seedb);
                            bob.setAttribute("visible", "true");
                            bob.children[0].setAttribute("visible", "true");
                            //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                            //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                            //arrow.setAttribute("scale", "2 2 2");
                            //kraanB.appendChild(arrow);
                            instruct.setAttribute("value","Speak to bob");
                            instruct.setAttribute("width", "2.5");
                            setTimeout(function () {
                                waterbob.play();
                                bobBox.setAttribute("scale","1 1 1");
                            }, 500);
                            setTimeout(function () {
                                bobBox.setAttribute("scale","0 0 0");
                                isDone = 6;
                                console.log("isDone=",isDone);
                            }, 6500);
                        }
                        if (regen === 1) {
                            console.log("het regent");
                            //arrow.setAttribute("visible", "false");
                            seed1.setAttribute("visible", "false");
                            seed2.setAttribute("visible", "false");
                            seed3.setAttribute("visible", "false");
                            seed4.setAttribute("visible", "false");
                            plant1.setAttribute("visible", "true");
                            plant2.setAttribute("visible", "true");
                            plant3.setAttribute("visible", "true");
                            plant4.setAttribute("visible", "true");
                            pfuut.play();
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3")
                        }
                        //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                        //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                        //arrow.setAttribute("scale", "2 2 2");
                        //kraanB.appendChild(arrow);
                        KnolVast.remove();
                        ObjectVast = 0;
                        overallProgress = 2;
                        knolVast = 0;
                    }
                }

            }
        }

        else if(CanVast === 1 ){
            if (LocState === 1) {
                if(water1 === 0){
                    rotz = camera.attr('rotation').z;
                    console.log(rotz);
                    if(rotz >= 30){
                        audioElement.src = 'assets/sounds/watering2.wav';
                        hoaRenderer.initialize().then(function() {
                            audioElementSource.connect(hoaRenderer.input);
                            hoaRenderer.output.connect(audioContext.destination);
                            audioElement.play();
                        });
                        WaterProgress = WaterProgress + 1;
                        WaterG1.setAttribute("visible", "true");
                        WaterG1.setAttribute("dynamic-body", "");
                        seed1.setAttribute('visible', 'false');
                        plant1.setAttribute("visible", "true");
                        onArrow.setAttribute("visible", "false");
                        water1 = 1;
                        if(WaterProgress === 1){
                            //arrow.setAttribute("scale", "0 0 0")
                        }
                        if(WaterProgress === 4){
                            setTimeout(function () {
                                finish.play();
                            }, 4200);
                            succesSound.play();
                            //arrow.setAttribute("scale", "0 0 0");
                            onArrow.setAttribute("visible", "false");
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3");
                        }
                    }else if(rotz < 30){
                        console.log("Verder draaien");
                        onArrow.setAttribute("visible", "true");
                    }
                }
            }
        }



    });



    Hoe2.addEventListener('mouseenter', function () {

        if(SchoffelHold === 1 && SchoffelProgress === 1) {
            if (LocState === 1) {
                SchoffelProgress = 2;
                this.setAttribute("visible", "true");
                audioElement.src = 'assets/sounds/shovelsound.mp3';
                hoaRenderer.initialize().then(function() {
                    audioElementSource.connect(hoaRenderer.input);
                    hoaRenderer.output.connect(audioContext.destination);
                    audioElement.play();
                });
                //appendArrow(hoeTrail, hoeTrail, "0 0.5 -0.5", "0 1 -0.5");
                console.log(SchoffelProgress);
            }
        }else if(knolVast === 1) {
            if (LocState === 1) {
                if(knol2 === 0){
                    audioElement.src = 'assets/sounds/plop.wav';
                    hoaRenderer.initialize().then(function() {
                        audioElementSource.connect(hoaRenderer.input);
                        hoaRenderer.output.connect(audioContext.destination);
                        audioElement.play();
                    });
                    knolProgress = knolProgress + 1;
                    seed2.setAttribute("visible", "true");
                    console.log(knolProgress);
                    knol2 = 1;
                    if(knolProgress === 1){
                        //arrow.setAttribute("scale", "0 0 0");
                    }
                    if(knolProgress === 4){
                        if (regen === 0) {
                            bob.setAttribute("position", "-3 -0.3 -2");
                            bob.removeChild(seedb);
                            bob.setAttribute("visible", "true");
                            bob.children[0].setAttribute("visible", "true");
                            //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                            //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                            //arrow.setAttribute("scale", "2 2 2");
                            //kraanB.appendChild(arrow);
                            instruct.setAttribute("value","Click on the watertap to fill the can");
                            instruct.setAttribute("width", "2.5")
                            setTimeout(function () {
                                waterbob.play();
                                bobBox.setAttribute("scale","1 1 1");
                            }, 500);
                            setTimeout(function () {
                                bobBox.setAttribute("scale","0 0 0");
                                isDone = 6;
                                console.log("isDone=",isDone);
                            }, 6500);
                        }
                        if (regen === 1) {
                            console.log("het regent");
                            //arrow.setAttribute("visible", "false");
                            seed1.setAttribute("visible", "false");
                            seed2.setAttribute("visible", "false");
                            seed3.setAttribute("visible", "false");
                            seed4.setAttribute("visible", "false");
                            plant1.setAttribute("visible", "true");
                            plant2.setAttribute("visible", "true");
                            plant3.setAttribute("visible", "true");
                            plant4.setAttribute("visible", "true");
                            pfuut.play();
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3")
                        }
                        //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                        //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                        //arrow.setAttribute("scale", "2 2 2");
                        //kraanB.appendChild(arrow);
                        KnolVast.remove();
                        ObjectVast = 0;
                        overallProgress = 2;
                        knolVast = 0;
                    }
                }
            }
        }

        else if(CanVast === 1) {
            if (LocState === 1) {
                rotz = camera.attr('rotation').z;
                console.log(rotz);
                if(water2 === 0){
                    if (rotz >= 30) {
                        audioElement.src = 'assets/sounds/watering2.wav';
                        hoaRenderer.initialize().then(function() {
                            audioElementSource.connect(hoaRenderer.input);
                            hoaRenderer.output.connect(audioContext.destination);
                            audioElement.play();
                        });
                        WaterProgress = WaterProgress + 1;
                        WaterG2.setAttribute("visible", "true");
                        WaterG2.setAttribute("dynamic-body", "");
                        seed2.setAttribute('visible', 'false');
                        plant2.setAttribute("visible", "true");
                        onArrow.setAttribute("visible", "false");
                        water2 = 1;
                        if(WaterProgress === 1){
                            //arrow.setAttribute("scale", "0 0 0")
                        }
                        if(WaterProgress === 4){
                            setTimeout(function () {
                                finish.play();
                            }, 4200);
                            succesSound.play();
                            //arrow.setAttribute("scale", "0 0 0");
                            onArrow.setAttribute("visible", "false");
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3")
                        }
                    } else if (rotz < 30) {
                        console.log("Verder draaien");
                        onArrow.setAttribute("visible", "true");
                    }
                }
            }
        }

    });

    Hoe3.addEventListener('mouseenter', function () {

        if(SchoffelHold === 1 && SchoffelProgress === 2) {
            if (LocState === 1) {
                SchoffelProgress = 3;
                this.setAttribute("visible", "true");
                audioElement.src = 'assets/sounds/shovelsound.mp3';
                hoaRenderer.initialize().then(function() {
                    audioElementSource.connect(hoaRenderer.input);
                    hoaRenderer.output.connect(audioContext.destination);
                    audioElement.play();
                });
                //appendArrow(hoeTrail, hoeTrail, "0 0.5 -1.5", "0 1 -1.5");
                console.log(SchoffelProgress)
            }
        }else if(knolVast === 1) {
            if (LocState === 1) {
                if(knol3 === 0){
                    audioElement.src = 'assets/sounds/plop.wav';
                    hoaRenderer.initialize().then(function() {
                        audioElementSource.connect(hoaRenderer.input);
                        hoaRenderer.output.connect(audioContext.destination);
                        audioElement.play();
                    });
                    knolProgress = knolProgress +1;
                    seed3.setAttribute("visible", "true");
                    console.log(knolProgress);
                    knol3 = 1;
                    if(knolProgress === 1){
                        //arrow.setAttribute("scale", "0 0 0");
                    }
                    if(knolProgress === 4){
                        if (regen === 0) {
                            bob.setAttribute("position", "-3 -0.3 -2");
                            bob.removeChild(seedb);
                            bob.setAttribute("visible", "true");
                            bob.children[0].setAttribute("visible", "true");
                            //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                            //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                            //arrow.setAttribute("scale", "2 2 2");
                            //kraanB.appendChild(arrow);
                            instruct.setAttribute("value","Click on the watertap to fill the can");
                            instruct.setAttribute("width", "2.5")
                            setTimeout(function () {
                                waterbob.play();
                                bobBox.setAttribute("scale","1 1 1");
                            }, 500);
                            setTimeout(function () {
                                bobBox.setAttribute("scale","0 0 0");
                                isDone = 6;
                                console.log("isDone=",isDone);
                            }, 6500);
                        }
                        if (regen === 1) {
                            console.log("het regent");
                            //arrow.setAttribute("visible", "false");
                            seed1.setAttribute("visible", "false");
                            seed2.setAttribute("visible", "false");
                            seed3.setAttribute("visible", "false");
                            seed4.setAttribute("visible", "false");
                            plant1.setAttribute("visible", "true");
                            plant2.setAttribute("visible", "true");
                            plant3.setAttribute("visible", "true");
                            plant4.setAttribute("visible", "true");
                            pfuut.play();
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3")
                        }
                        //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                        //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                        //arrow.setAttribute("scale", "2 2 2");
                        //kraanB.appendChild(arrow);
                        KnolVast.remove();
                        ObjectVast = 0;
                        overallProgress = 2;
                        knolVast = 0;
                    }
                }

            }
        }
        else if(CanVast === 1){
            if (LocState === 1) {
                rotz = camera.attr('rotation').z;
                console.log(rotz);
                if(water3 === 0){
                    if (rotz >= 30) {
                        audioElement.src = 'assets/sounds/watering2.wav';
                        hoaRenderer.initialize().then(function() {
                            audioElementSource.connect(hoaRenderer.input);
                            hoaRenderer.output.connect(audioContext.destination);
                            audioElement.play();
                        });
                        WaterProgress = WaterProgress + 1;
                        WaterG3.setAttribute("visible", "true");
                        WaterG3.setAttribute("dynamic-body", "");
                        seed3.setAttribute('visible', 'false');
                        plant3.setAttribute("visible", "true");
                        onArrow.setAttribute("visible", "false");
                        water3 = 1;
                        if(WaterProgress === 1){
                            //arrow.setAttribute("scale", "0 0 0")
                        }
                        if(WaterProgress === 4){
                            setTimeout(function () {
                                finish.play();
                            }, 4200);
                            succesSound.play();
                            //arrow.setAttribute("scale", "0 0 0");
                            onArrow.setAttribute("visible", "false");
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3")
                        }
                    } else if (rotz < 30) {
                        console.log("Verder draaien");
                        onArrow.setAttribute("visible", "true");
                    }
                }

            }
        }




    });

    Hoe4.addEventListener('mouseenter', function () {
        if (LocState === 1) {
            if (SchoffelHold === 1 && SchoffelProgress === 3) {
                SchoffelProgress = 4;
                this.setAttribute("visible", "true");
                audioElement.src = 'assets/sounds/shovelsound.mp3';
                hoaRenderer.initialize().then(function() {
                    audioElementSource.connect(hoaRenderer.input);
                    hoaRenderer.output.connect(audioContext.destination);
                    audioElement.play();
                });
                console.log(SchoffelProgress);
                //hoeTrail.removeChild(arrow);
                //arrow.setAttribute("rotation", "38 100 45");
                //arrow.setAttribute("scale", "0.2 0.2 0.2");
                //arrow.children[0].setAttribute("from", "0.3 0.4 0.2");
                //arrow.children[0].setAttribute("to", "0.4 0.5 0.3");
                //knol.append(arrow);
                setTimeout(function () {
                    bobBox.setAttribute("scale","1 1 1");
                    seedbob.play();
                    instruct.setAttribute("value","Place back the hoe");
                    instruct.setAttribute("width", "3");
                    setTimeout(function () {
                        isDone = 4;
                        bobBox.setAttribute("scale","0 0 0");
                    }, 5000);
                }, 500);

            } else if (knolVast === 1) {
                if(knol4 === 0){
                    audioElement.src = 'assets/sounds/plop.wav';
                    hoaRenderer.initialize().then(function() {
                        audioElementSource.connect(hoaRenderer.input);
                        hoaRenderer.output.connect(audioContext.destination);
                        audioElement.play();
                    });
                    knolProgress = knolProgress +1;
                    seed4.setAttribute("visible", "true");
                    console.log(knolProgress);
                    knol4 = 1;
                    if(knolProgress === 1){
                        //arrow.setAttribute("scale", "0 0 0");
                    }
                    if(knolProgress === 4){
                        if (regen === 0) {
                            bob.setAttribute("position", "-3 -0.3 -2");
                            bob.removeChild(seedb);
                            bob.setAttribute("visible", "true");
                            bob.children[0].setAttribute("visible", "true");
                            //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                            //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                            //arrow.setAttribute("scale", "2 2 2");
                            //kraanB.appendChild(arrow);
                            setTimeout(function () {
                                bobBox.setAttribute("scale","1 1 1");
                                waterbob.play();
                            }, 500);
                            setTimeout(function () {
                                bobBox.setAttribute("scale","0 0 0");
                                isDone = 6;
                                console.log("isDone=",isDone);
                            }, 6500);
                            instruct.setAttribute("value","Click on the watertap to fill the can");
                            instruct.setAttribute("width", "2.5")
                        }
                        if (regen === 1) {
                            console.log("het regent");
                            //arrow.setAttribute("visible", "false");
                            seed1.setAttribute("visible", "false");
                            seed2.setAttribute("visible", "false");
                            seed3.setAttribute("visible", "false");
                            seed4.setAttribute("visible", "false");
                            plant1.setAttribute("visible", "true");
                            plant2.setAttribute("visible", "true");
                            plant3.setAttribute("visible", "true");
                            plant4.setAttribute("visible", "true");
                            pfuut.play();
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3")
                        }
                        //arrow.children[0].setAttribute("from", "-1.2 6 0.5");
                        //arrow.children[0].setAttribute("to", "-1.2 5 0.5");
                        //arrow.setAttribute("scale", "2 2 2");
                        //kraanB.appendChild(arrow);
                        KnolVast.remove();
                        ObjectVast = 0;
                        overallProgress = 2;
                        knolVast = 0;
                    }
                    }
                }

            else if (CanVast === 1) {
                rotz = camera.attr('rotation').z;
                console.log(rotz);
                if(water4 === 0){
                    if (rotz >= 30) {
                        audioElement.src = 'assets/sounds/watering2.wav';
                        hoaRenderer.initialize().then(function() {
                            audioElementSource.connect(hoaRenderer.input);
                            hoaRenderer.output.connect(audioContext.destination);
                            audioElement.play();
                        });
                        WaterProgress = WaterProgress + 1;
                        WaterG4.setAttribute("visible", "true");
                        WaterG4.setAttribute("dynamic-body", "");
                        seed4.setAttribute('visible', 'false');
                        plant4.setAttribute("visible", "true");
                        onArrow.setAttribute("visible", "false");
                        water4 = 1;
                        if(WaterProgress === 1){
                            //arrow.setAttribute("scale", "0 0 0")
                        }
                        if(WaterProgress === 4){
                            setTimeout(function () {
                                finish.play();
                            }, 4200);
                            succesSound.play();
                            //arrow.setAttribute("scale", "0 0 0");
                            onArrow.setAttribute("visible", "false");
                            scene.append('<a-entity link=\"href: credits.html; title: Credits;\"  position=\"0 2 13\"></a-entity>')
                            instruct.setAttribute("value","Congratulations!");
                            instruct.setAttribute("width", "3")
                        }
                    } else if (rotz < 30) {
                        console.log("Verder draaien");
                        onArrow.setAttribute("visible", "true");
                    }
                }

            }
        }

    });



    //code terugzetten schoffel
    schofPlaats.addEventListener('mouseenter', function()
    {
        if(LocState === 1 && SchoffelProgress === 4) {
            if(SchoffelHold === 1 && ObjectVast === 1) {
                Schoffel.setAttribute("visible", "true");
                HoeVast.attr("visible", "false");
                this.setAttribute("visible", "false");
                overallProgress = 1;
                ObjectVast = 0;
                bob.setAttribute("position", "-3 -0.3 -2");
                bob.removeChild(schofb);
                bob.setAttribute("visible", "true");
                instruct.setAttribute("value","Speak to bob");
                instruct.setAttribute("width", "3");
            }
        }
    });

    //zaadje planten
    knol.addEventListener('mouseenter', function(){
        if(overallProgress === 1 && ObjectVast === 0 && bobProgress === 2 && isDone === 5){
            if(LocState === 1){
                cursor.emit('fuse');
                cursor.setAttribute("color", "#551A8B")
            }
        }
    });

    knol.addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32")
    });

    knol.addEventListener('click', function(){
            if(LocState === 1 && ObjectVast === 0 && knolProgress === 0 && bobProgress === 2){
                if(overallProgress === 1 && isDone === 5){
                    bob.setAttribute("visible", "false");
                    knol.setAttribute("visible", "false");
                    KnolVast.attr("visible", "true");
                    //arrow.setAttribute("rotation","0 0 0");
                    //arrow.children[0].setAttribute("from","0 1 1.5");
                    //arrow.children[0].setAttribute("to","0 0.5 1.5");
                    //hoeTrail.appendChild(arrow);
                    overallProgress = 2;
                    knolVast = 1;
                    ObjectVast = 1;
                    cursor.setAttribute("color", "#32CD32");
                    instruct.setAttribute("value","plant the seeds");
                    instruct.setAttribute("width", "3")
                }
            }
        });

    //waterkan vullen met water met de kraan

   kraan.addEventListener('mouseenter', function(){
        if(overallProgress === 2 && waterFilled === 0 && bobProgress === 3 && isDone === 7){
            if(LocState === 1 && regen === 0){
                cursor.emit('fuse');
                cursor.setAttribute("color", "#551A8B");
                console.log("Muis op kraan")
            }
        }
    });

    kraan.addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32")
    });

    if (waterFilled === 0 && kraan.addEventListener("click", function(){
            console.log(overallProgress);
            if(regen === 0 && LocState === 1 && ObjectVast === 0 && knolVast === 0 && bobProgress === 3){
                if(overallProgress === 2 && isDone === 7){
                    console.log("boom boom");
                    bob.setAttribute("visible", "false");
                    WaterS.setAttribute("visible", "true");
                    setTimeout(function(){
                        WaterS.setAttribute("dynamic-body", "");
                        //arrow.children[0].setAttribute("from","0 1.3 0");
                        //arrow.children[0].setAttribute("to","0 0.8 0");
                        //arrow.setAttribute("scale", "0.2 0.2 0.2");
                        //watcan.append(arrow);
                    }, 4500);
                    audioElement.src = 'assets/sounds/Water.mp3';
                    hoaRenderer.initialize().then(function() {
                        audioElementSource.connect(hoaRenderer.input);
                        hoaRenderer.output.connect(audioContext.destination);
                        audioElement.play();
                    });
                    kraan.children[0].setAttribute("from", "0 -90 0");
                    kraan.children[0].setAttribute("to", "0 180 0");
                    kraan.children[0].setAttribute("repeat", "1");
                    waterFilled = 1;
                    overallProgress = 3;
                    cursor.setAttribute("color", "#32CD32");
                    instruct.setAttribute("value","Grab the watering can");
                    instruct.setAttribute("width", "3");
                    setTimeout(function () {
                        isDone = 8;
                        console.log("isDone=",isDone);
                    }, 5000);
                }
            }
        })){}




//watergeven

    watcan.addEventListener('mouseenter', function(){
        if(LocState === 1 && ObjectVast === 0 && isDone === 8) {
            if (overallProgress === 3) {
                cursor.emit('fuse');
                cursor.setAttribute("color", "#551A8B")
            }
        }
    });

    watcan.addEventListener('mouseleave', function () {
        cursor.setAttribute("color", "#32CD32")
    });

    watcan.addEventListener("click", function(){
        if(LocState === 1 && ObjectVast === 0){
            if(overallProgress === 3 && isDone === 8){
                watcan.setAttribute("visible", "false");
                WatVast.attr("visible", "true");
                watPlaats.setAttribute("visible","true");
                CanVast = 1;
                ObjectVast = 1;
                //arrow.children[0].setAttribute("from","0 1 1.5");
                //arrow.children[0].setAttribute("to","0 1.5 1.5");
                //arrow.setAttribute("scale", "0.5 0.5 0.5");
                //hoeTrail.appendChild(arrow);
                cursor.setAttribute("color", "#32CD32");
                instruct.setAttribute("value","Water the plants by turning your head and looking at them");
                instruct.setAttribute("width", "1.8")
            }
        }
    });

//code terugzetten gieter
    watPlaats.addEventListener('mouseenter', function()
    {
        if(LocState === 1 && WaterProgress === 4) {
            watcan.setAttribute("visible", "true");
            WatVast.attr("visible", "false");
            this.setAttribute("visible", "false");
            overallProgress = 4;
            ObjectVast = 0;
            CanVast = 0;
        }
    });

//terug naar begin
    Start.addEventListener('mouseenter', function()
    {
        if(LocState === 1){
            this.setAttribute('color', 'blue');
            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")
        }


    });

    Start.addEventListener('mouseleave', function()
    {
        this.setAttribute('color', 'white');
        cursor.setAttribute("color", "#32CD32")


    });

    Start.addEventListener("click", function () {

        if(LocState === 1){
            audioElement.src = 'assets/sounds/Walking.mp3';
            hoaRenderer.initialize().then(function() {
                audioElementSource.connect(hoaRenderer.input);
                hoaRenderer.output.connect(audioContext.destination);
                audioElement.play();
            });
            setTimeout(function(){
                Start.setAttribute("visible", "false");
                bol.setAttribute("visible", "true");
            }, 2000);
            camera.append(cameraAnimaBack);
            LocState = 0;

            onArrow.setAttribute("visible", "false");
            cursor.setAttribute("color", "#32CD32")
        }
    });


});

