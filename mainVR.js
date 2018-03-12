$(document).ready(function() {


    var nextbutton = document.querySelector("#nextbutton");
    var prevbutton = document.querySelector("#prevbutton");
    var nextText = document.querySelector("#nextText");
    var prevText = document.querySelector("#prevText");
    var cursor = document.getElementById("cursor");
    var imageView = document.getElementById("imageView");
    var textView = document.getElementById("textView");

    var projecNum = 0;


    nextbutton.addEventListener('mouseenter', function()
    {
        if(projecNum < 19){
            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")
        }
    });
    nextbutton.addEventListener('mouseleave', function()
    {
        cursor.setAttribute("color", "#32CD32")
    });

    nextbutton.addEventListener('click', function(){
        if(projecNum < 19) {
            console.log("NextButton clicked");


            projecNum = projecNum + 1;
            console.log(projecNum);
            if (projecNum > 0) {
                prevbutton.setAttribute("visible", "true");
                prevText.setAttribute("visible", "true");
            }
            if(projecNum === 0){
                imageView.setAttribute("material", "src: url(assets/image/Aframe.png)");
                textView.setAttribute("value", "Welcome to vr mode! In here I made all the content into a 3D space using Aframe.\n" +
                    "To your right there is a button next which will take you to the next room where you will find the first project. There you will also find a button that says 'prev' you can go back anytime using this. To interact with the buttons simply look at them with the circle in the middle of you vision")
            }
            if (projecNum === 1) {
                imageView.setAttribute("material", "src: url(assets/image/MeerVR.png)");
                textView.setAttribute("value", "We started this project sketching a plan of what the user would do and learn on the website. Using html, javascript, jQuery and aframe we built a webvr application for users to learn more about gardening. 3D models were made using blender. To make sure that users had a good experience on the website we used the google cardboard design rules and added our own use cases on the go.")

            }
            else if (projecNum === 2) {
                imageView.setAttribute("material", "src: url(assets/image/Biertijd.png)");
                textView.setAttribute("value", "This project was to try out 2 things in android studio while making a fun app I could share with my friends, the whole idea was that at a certain time the app will show that it is time to drink beer.In this app I tried the 'pull down to refresh' function. I still implemented a refresh icon in the top right for devices that can't pull down the screen. I also added ads to figure out how easy they were to implement.")
            }
            else if (projecNum === 3) {
                imageView.setAttribute("material", "src: url(assets/image/mariovrdemo.png)");
                textView.setAttribute("value", "This project was a small proof of concept for using aframe for vr on the web. I made this small website in less than an hour. When used on a computer you can hear the mario music playEven though this never became a final product I really enjoyed working on this. I share this with my friends who don't know of webvr all the time. It contains a bunch of aframe components and was a great first step to making actual applications with the framework")
            }
            else if (projecNum === 4) {
                imageView.setAttribute("material", "src: url(assets/image/Scouting.png)");
                textView.setAttribute("value", "This android application was made to see how the process from website to android application would be. I used all the information available on the website of this particular scouting association.In this application I re-made the website using a hamburger menu and different activity pages. when this was done I made a new news section where pre-approved people can post news and a chat function where members of the particular sub groups can chat with one another.")
            }
            else if (projecNum === 5) {
                imageView.setAttribute("material", "src: url(assets/image/Raidcall.png)");
                textView.setAttribute("value", "This android application is a small application I made using google firebase as a backend. Firebase handles the the database, storage of the images and logging in.The app was used to plan raids in an online video game I played with my friends at the time. Using time and date pickers and a dropdown menu with the preselected options a logged in user could add a raid. After creating a raid anyone logged in could join it and each raid had a chat screen as well.")
            }
            else if (projecNum === 6) {
                imageView.setAttribute("material", "src: url(assets/image/Drapple.png)");
                textView.setAttribute("value", "During my other projects I was often left making all kind of designs from logo's to whole webpages or apps. I also made some spoof designs for practise that look great and really show what I am capable off.")
            }
            else if (projecNum === 7) {
                imageView.setAttribute("material", "src: url(assets/image/Care2Move.png)");
                textView.setAttribute("value", "This application was developed with 2 others. We spent several weeks working on the concept. The idea of the application is to build a stronger link between physiotherapists and clients in such a way that they can trace the progress, allow the clients to do more exercise at home and find a better way for them to communicate with one another.")
            }
            else if (projecNum === 8) {
                imageView.setAttribute("material", "src: url(assets/image/NKWEB.png)");
                textView.setAttribute("value", "Together with 3 others I got an assignment from the Dutch TV network NOS. To research the possibilities of expanding on news stories on the web we were tasked to make a website that would go into more details about actualities going on in the world. This project was a great way to learn more about Storytelling, html and Javascript.However, since most of the content was property of NOS and because of the size of the site the website is no longer hosted online")
            }
            else if (projecNum === 9) {
                imageView.setAttribute("material", "src: url(assets/image/Java.png)");
                textView.setAttribute("value", "Java \n" +
                    "A general-purpose computer programming language designed to produce programs that will run on any computer system.")
            }
            else if (projecNum === 10) {
                imageView.setAttribute("material", "src: url(assets/image/HTML5.png)");
                textView.setAttribute("value", "HTML \n" +
                    "A standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.")
            }
            else if (projecNum === 11) {
                imageView.setAttribute("material", "src: url(assets/image/JS.png)");
                textView.setAttribute("value", "Javascript\n" +
                    "an object-oriented computer programming language commonly used to create interactive effects within web browsers.")
            }
            else if (projecNum === 12) {
                imageView.setAttribute("material", "src: url(assets/image/Bootstrap.png)");
                textView.setAttribute("value", "Bootstrap \n" +
                "is an HTML, CSS, javascript framework that you can use as a basis for creating web sites or web applications.")
            }
            else if (projecNum === 13) {
                imageView.setAttribute("material", "src: url(assets/image/Aframe.png)");
                textView.setAttribute("value", "Aframe\n" +
                    "A web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component.")
            }
            else if (projecNum === 14) {
                imageView.setAttribute("material", "src: url(assets/image/Jquery.png)");
                textView.setAttribute("value", "jQuery\n" +
                    "is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.")
            }
            else if (projecNum === 15) {
                imageView.setAttribute("material", "src: url(assets/image/python.png)");
                textView.setAttribute("value", "Python\n" +
                    "is an interpreted high-level programming language for general-purpose programming.")
            }
            else if (projecNum === 16) {
                imageView.setAttribute("material", "src: url(assets/image/CSS.png)");
                textView.setAttribute("value", "CSS\n" +
                    "style sheets that describes how HTML elements are to be displayed on screen, paper, or in other media.")
            }
            else if (projecNum === 17) {
                imageView.setAttribute("material", "src: url(assets/image/Arduino.png)");
                textView.setAttribute("value", "Arduino \n" +
                    "Arduino is a open-source electronics platform that uses a 'dialect' of C/C++.")
            }
            else if (projecNum === 18) {
                imageView.setAttribute("material", "src: url(assets/image/AndroidStudio.png)");
                textView.setAttribute("value", "Android Studio \n" +
                    "Android Studio is the official IDE for Google's Android operating system.")
            }
            else if (projecNum === 19) {
                imageView.setAttribute("material", "src: url(assets/image/Unity.png)");
                textView.setAttribute("value", "Unity \n" +
                    "Unity is a cross-platform game engine which is primarily used to develop games for computers, consoles, and mobile devices.")
            }
            if (projecNum > 18) {
                nextbutton.setAttribute("visible", "false");
                nextText.setAttribute("visible", "false")
            }
            cursor.setAttribute("color", "#32CD32")
        }
    });

    prevbutton.addEventListener('mouseenter', function()
    {
        if(projecNum > 0){
            cursor.emit('fuse');
            cursor.setAttribute("color", "#551A8B")
        }
    });
    prevbutton.addEventListener('mouseleave', function()
    {
        cursor.setAttribute("color", "#32CD32")
    });

    prevbutton.addEventListener('click', function(){
        if(projecNum > 0) {


            console.log("NextButton clicked");

            projecNum = projecNum - 1;
            console.log(projecNum);
            if (projecNum < 1) {
                prevbutton.setAttribute("visible", "false");
                prevText.setAttribute("visible", "false");
            }
            if(projecNum === 0){
                imageView.setAttribute("material", "src: url(assets/image/Aframe.png)");
                textView.setAttribute("value", "Welcome to vr mode! In here I made all the content into a 3D space using Aframe.\n" +
                    "To your right there is a button next which will take you to the next room where you will find the first project. There you will also find a button that says 'prev' you can go back anytime using this. To interact with the buttons simply look at them with the circle in the middle of you vision")

            }
            if (projecNum === 1) {
                imageView.setAttribute("material", "src: url(assets/image/MeerVR.png)");
                textView.setAttribute("value", "We started this project sketching a plan of what the user would do and learn on the website. Using html, javascript, jQuery and aframe we built a webvr application for users to learn more about gardening. 3D models were made using blender. To make sure that users had a good experience on the website we used the google cardboard design rules and added our own use cases on the go.")
            }
            else if (projecNum === 2) {
                imageView.setAttribute("material", "src: url(assets/image/Biertijd.png)");
                textView.setAttribute("value", "This project was to try out 2 things in android studio while making a fun app I could share with my friends, the whole idea was that at a certain time the app will show that it is time to drink beer.In this app I tried the 'pull down to refresh' function. I still implemented a refresh icon in the top right for devices that can't pull down the screen. I also added ads to figure out how easy they were to implement.")
            }
            else if (projecNum === 3) {
                imageView.setAttribute("material", "src: url(assets/image/mariovrdemo.png)");
                textView.setAttribute("value", "This project was a small proof of concept for using aframe for vr on the web. I made this small website in less than an hour. When used on a computer you can hear the mario music playEven though this never became a final product I really enjoyed working on this. I share this with my friends who don't know of webvr all the time. It contains a bunch of aframe components and was a great first step to making actual applications with the framework")
            }
            else if (projecNum === 4) {
                imageView.setAttribute("material", "src: url(assets/image/Scouting.png)");
                textView.setAttribute("value", "This android application was made to see how the process from website to android application would be. I used all the information available on the website of this particular scouting association.In this application I re-made the website using a hamburger menu and different activity pages. when this was done I made a new news section where pre-approved people can post news and a chat function where members of the particular sub groups can chat with one another.")
            }
            else if (projecNum === 5) {
                imageView.setAttribute("material", "src: url(assets/image/Raidcall.png)");
                textView.setAttribute("value", "This android application is a small application I made using google firebase as a backend. Firebase handles the the database, storage of the images and logging in.The app was used to plan raids in an online video game I played with my friends at the time. Using time and date pickers and a dropdown menu with the preselected options a logged in user could add a raid. After creating a raid anyone logged in could join it and each raid had a chat screen as well.")
            }
            else if (projecNum === 6) {
                imageView.setAttribute("material", "src: url(assets/image/Drapple.png)");
                textView.setAttribute("value", "During my other projects I was often left making all kind of designs from logo's to whole webpages or apps. I also made some spoof designs for practise that look great and really show what I am capable off.")
            }
            else if (projecNum === 7) {
                imageView.setAttribute("material", "src: url(assets/image/Care2Move.png)");
                textView.setAttribute("value", "This application was developed with 2 others. We spent several weeks working on the concept. The idea of the application is to build a stronger link between physiotherapists and clients in such a way that they can trace the progress, allow the clients to do more exercise at home and find a better way for them to communicate with one another.")
            }
            else if (projecNum === 8) {
                imageView.setAttribute("material", "src: url(assets/image/NKWEB.png)");
                textView.setAttribute("value", "Together with 3 others I got an assignment from the Dutch TV network NOS. To research the possibilities of expanding on news stories on the web we were tasked to make a website that would go into more details about actualities going on in the world. This project was a great way to learn more about Storytelling, html and Javascript.However, since most of the content was property of NOS and because of the size of the site the website is no longer hosted online")
            }
            else if (projecNum === 9) {
                imageView.setAttribute("material", "src: url(assets/image/Java.png)");
                textView.setAttribute("value", "Java \n" +
                    "A general-purpose computer programming language designed to produce programs that will run on any computer system.")
            }
            else if (projecNum === 10) {
                imageView.setAttribute("material", "src: url(assets/image/HTML5.png)");
                textView.setAttribute("value", "HTML \n" +
                    "A standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web pages.")
            }
            else if (projecNum === 11) {
                imageView.setAttribute("material", "src: url(assets/image/JS.png)");
                textView.setAttribute("value", "Javascript\n" +
                    "an object-oriented computer programming language commonly used to create interactive effects within web browsers.")
            }
            else if (projecNum === 12) {
                imageView.setAttribute("material", "src: url(assets/image/Bootstrap.png)");
                textView.setAttribute("value", "Bootstrap\n" +
                    "is an HTML, CSS, javascript framework that you can use as a basis for creating web sites or web applications.")
            }
            else if (projecNum === 13) {
                imageView.setAttribute("material", "src: url(assets/image/Aframe.png)");
                textView.setAttribute("value", "Aframe\n" +
                    "A web framework for building virtual reality experiences. Make WebVR with HTML and Entity-Component.")
            }
            else if (projecNum === 14) {
                imageView.setAttribute("material", "src: url(assets/image/Jquery.png)");
                textView.setAttribute("value", "jQuery\n" +
                    "is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.")
            }
            else if (projecNum === 15) {
                imageView.setAttribute("material", "src: url(assets/image/python.png)");
                textView.setAttribute("value", "Python\n" +
                    "is an interpreted high-level programming language for general-purpose programming.")
            }
            else if (projecNum === 16) {
                imageView.setAttribute("material", "src: url(assets/image/CSS.png)");
                textView.setAttribute("value", "CSS\n" +
                    "style sheets that describes how HTML elements are to be displayed on screen, paper, or in other media.")
            }
            else if (projecNum === 17) {
                imageView.setAttribute("material", "src: url(assets/image/Arduino.png)");
                textView.setAttribute("value", "Arduino \n" +
                    "Arduino is a open-source electronics platform that uses a 'dialect' of C/C++.")
            }
            else if (projecNum === 18) {
                imageView.setAttribute("material", "src: url(assets/image/AndroidStudio.png)");
                textView.setAttribute("value", "Android Studio \n" +
                    "Android Studio is the official IDE for Google's Android operating system.")
            }
            else if (projecNum === 19) {
                imageView.setAttribute("material", "src: url(assets/image/Unity.png)");
                textView.setAttribute("value", "Unity \n" +
                    "Unity is a cross-platform game engine which is primarily used to develop games for computers, consoles, and mobile devices.")
            }
            if (projecNum > 18) {
                nextbutton.setAttribute("visible", "false");
                nextText.setAttribute("visible", "false")
            }

            cursor.setAttribute("color", "#32CD32")
        }
    });


});