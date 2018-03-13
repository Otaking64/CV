$(document).ready(function() {

    var meervr = document.getElementById("meervr");
    var biertijd = document.getElementById("biertijd");
    var mariovr = document.getElementById("mariovr");
    var scouting = document.getElementById("scouting");
    var raidcall = document.getElementById("raidcall");
    var designs = document.getElementById("designs");
    var care2move = document.getElementById("care2move");
    var noord = document.getElementById("noord");
    var qamera = document.getElementById("vrqamera");
    var weather = document.getElementById("localWeather");

    var link = document.getElementById("link");
    var detailimg = document.getElementById("detailImg");
    var detailp = document.getElementById("detailP");
    var detailheader = document.getElementById("detailHeader");

    var close = document.getElementById("detailClose");
    var detailpage = document.getElementById("detailsPage");
    var loc = "#";

    close.addEventListener("click", function () {

        loc = link.getAttribute("href");
        detailpage.style.zIndex = -10;
        detailpage.style.opacity = 0;
        location.href = loc;

    });

    meervr.addEventListener("click", function () {

        link.setAttribute("href", "#meervr");
        detailimg.setAttribute("src", "assets/image/MeerVR.png");
        detailp.innerHTML = "We started this project sketching a plan of what the user would do and learn on the website." +
            "                Using html, javascript, jQuery and aframe we built a webvr application for users to learn more about gardening." +
            "                3D models were made using blender." +
            "                To make sure that users had a good experience on the website we used the google cardboard design rules and added our own use cases on the go.\n" +
            "            ";
        detailheader.innerHTML ="MeerVR Garden Experience";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;
    });

    biertijd.addEventListener("click", function () {
        link.setAttribute("href", "#biertijd");
        detailimg.setAttribute("src", "assets/image/Biertijd.png");
        detailp.innerHTML = "This project was to try out 2 things in android studio while making a fun app I could share with my friends, the whole idea was that at a certain time the app will show that it is time to drink beer." +
        "In this app I tried the 'pull down to refresh' function. I still implemented a refresh icon in the top right for devices that can't pull down the screen. I also added ads to figure out how easy they were to implement.";

        detailheader.innerHTML = "Biertijd Android app";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;
    });

    mariovr.addEventListener("click", function () {
        link.setAttribute("href", "#mariovr");
        detailimg.setAttribute("src", "assets/image/mariovrdemo.png");
        detailp.innerHTML = "This project was a small proof of concept for using aframe for vr on the web. I made this small website in less than an hour. When used on a computer you can hear the mario music play"
        +"Even though this never became a final product I really enjoyed working on this. I share this with my friends who don't know of webvr all the time. It contains a bunch of aframe components and was a great first step to making actual applications with the framework";
        detailheader.innerHTML = "Mario VR Demo";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;

    });

    scouting.addEventListener("click", function () {
        link.setAttribute("href", "#scouting");
        detailimg.setAttribute("src", "assets/image/Scouting.png");
        detailp.innerHTML = "This android application was made to see how the process from website to android application would be. I used all the information available on the website of this particular scouting association." +
        "In this application I re-made the website using a hamburger menu and different activity pages. when this was done I made a new news section where pre-approved people can post news and a chat function where members of the particular sub groups can chat with one another.";
        detailheader.innerHTML = "Scouting Android App";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;




    });

    raidcall.addEventListener("click", function () {
        link.setAttribute("href", "#raidcall");
        detailimg.setAttribute("src", "assets/image/Raidcall.png");
        detailp.innerHTML = "This android application is a small application I made using google firebase as a backend. Firebase handles the the database, storage of the images and logging in." +
        "The app was used to plan raids in an online video game I played with my friends at the time. Using time and date pickers and a dropdown menu with the preselected options a logged in user could add a raid. After creating a raid anyone logged in could join it and each raid had a chat screen as well.";
        detailheader.innerHTML = "Raidcall Android app";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;


    });

    designs.addEventListener("click", function () {
        link.setAttribute("href", "#designs");
        detailimg.setAttribute("src", "assets/image/Drapple.png");
        detailp.innerHTML = "During my other projects I was often left making all kind of designs from logo's to whole webpages or apps. I also made some spoof designs for practise that look great and really show what I am capable off.";
        detailheader.innerHTML = "Designs made by me";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;


    });

    care2move.addEventListener("click", function () {
        link.setAttribute("href", "#care2move");
        detailimg.setAttribute("src", "assets/image/Care2Move.png");
        detailp.innerHTML = "This application was developed with 2 others. We spent several weeks working on the concept. The idea of the application is to build a stronger link between physiotherapists and clients in such a way that they can trace the progress, allow the clients to do more exercise at home and find a better way for them to communicate with one another.";
        detailheader.innerHTML = "Care2move Android app";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;


    });

    noord.addEventListener("click", function () {
        link.setAttribute("href", "#noord");
        detailimg.setAttribute("src", "assets/image/NKWEB.png");
        detailp.innerHTML = "Together with 3 others I got an assignment from the Dutch TV network NOS. To research the possibilities of expanding on news stories on the web we were tasked to make a website that would go into more details about actualities going on in the world. This project was a great way to learn more about Storytelling, html and Javascript." +
        "However, since most of the content was property of NOS and because of the size of the site the website is no longer hosted online";
        detailheader.innerHTML = "Noord-Korea storytelling website";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;
    });

    qamera.addEventListener("click", function () {
        link.setAttribute("href", "#vrqamera");
        detailimg.setAttribute("src", "assets/image/qamera.png");
        detailp.innerHTML = "Using the VR framework Aframe we build an introduction VR experience for the fictional action camera 'Qamera'. " +
        "In this VR application you can experience what it's like to receive and unbox the qamera and you learn the basic set up you need to get the camera working. In the original version the temperature impacted which video you would see on the camera at the end and how the room looks but for the version that is linked on this website it only impacts the look of the room";
        detailheader.innerHTML = "Qamera VR experience";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;
    });

    weather.addEventListener("click", function () {
        link.setAttribute("href", "#localWeather");
        detailimg.setAttribute("src", "assets/image/weather.png");
        detailp.innerHTML = "This app was written using javascript and Jquery. Then to get it properly working on android I made a native android app with just a webview loading the webpage containing the app. The user gives permission to share location with the website to get a more accurate weather description of the current location of the device.";
        detailheader.innerHTML = "Local Weather Webapp";
        detailpage.style.zIndex = 100;
        detailpage.style.opacity = 1;
    });
});