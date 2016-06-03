function main() {
          var fb = document.getElementsByClassName("fb")[0];
          var ins = document.getElementsByClassName("ins")[0];
          var twt = document.getElementsByClassName("twt")[0];
          var home = document.getElementsByClassName("home")[0];
          var slide = document.getElementsByClassName("slide")[0];
          var who = document.getElementsByClassName("who")[0];
          var what = document.getElementsByClassName("what")[0];
          var evenement = document.getElementsByClassName("evenement")[0];
          var contact = document.getElementsByClassName("contact")[0];

          home.onmouseover = function() {
            home.setAttribute("src", "logo_color.png");
          }
          home.onmouseout = function() {
            home.setAttribute("src", "logo.png");
          }

          fb.onmouseover = function() {
            fb.setAttribute("src", "facebookhover.png");
          }
          fb.onmouseout = function() {
            fb.setAttribute("src", "facebook.png");
          }

          ins.onmouseover = function() {
            ins.setAttribute("src", "instagramhover.png");
          }
          ins.onmouseout = function() {
            ins.setAttribute("src", "instagram.png");
          }

          twt.onmouseover = function() {
            twt.setAttribute("src", "twitterhover.png");
          }
          twt.onmouseout = function() {
            twt.setAttribute("src", "twitter.png");
          }

          who.onclick = function(){
            slide.style.animation = "slide 3s forwards";
            document.getElementsByClassName("tekstwho")[0].style.animation = "opacity 5s forwards";

            document.getElementsByClassName("tekstevenement")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstwhat")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstcontact")[0].style.animation = "opacityout 5s";
          }

          what.onclick = function(){
            slide.style.animation = "slide 3s forwards";
            document.getElementsByClassName("tekstwhat")[0].style.animation = "opacity 5s forwards";

            document.getElementsByClassName("tekstevenement")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstcontact")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstwho")[0].style.animation = "opacityout 5s";
          }

          evenement.onclick = function(){
            slide.style.animation = "slide 3s forwards";
            document.getElementsByClassName("tekstevenement")[0].style.animation = "opacity 5s forwards";

            document.getElementsByClassName("tekstcontact")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstwhat")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstwho")[0].style.animation = "opacityout 5s";
          }

          contact.onclick = function(){
            slide.style.animation = "slide 3s forwards";
            document.getElementsByClassName("tekstcontact")[0].style.animation = "opacity 5s forwards";

            document.getElementsByClassName("tekstevenement")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstwhat")[0].style.animation = "opacityout 5s";
            document.getElementsByClassName("tekstwho")[0].style.animation = "opacityout 5s";
          }
}

window.onload = function() {
       main();
}
