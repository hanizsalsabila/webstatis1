
function openNav() {
    document.getElementById("mySidenav").style.width = "190px";
    document.getElementById("main").style.marginLeft = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}  

let slideIndex = 1;
    showSlides(slideIndex);
    
function plusSlides(n) {
    showSlides(slideIndex += n);
}
    
function currentSlide(n) {
    showSlides(slideIndex = n);
}
    
function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
}
      
// JS TRACKLIST
      function toggletracklist(event, id) {
        event.preventDefault();
        const track1 = document.getElementById("track1");
        const redflavour = document.getElementById("redflavour");
        const track2 = document.getElementById("track2");
        const endofaday = document.getElementById("endofaday");
        const track3 = document.getElementById("track3");
        const boa = document.getElementById("boa");
        const track4 = document.getElementById("track4");
        const maw = document.getElementById("maw");
        const track5 = document.getElementById("track5");
        const HOT = document.getElementById("HOT");
        const track6 = document.getElementById("track6");
        const fmr = document.getElementById("fmr");
        const track7 = document.getElementById("track7");
        const blackmamba = document.getElementById("blackmamba");
        const track8 = document.getElementById("track8");
        const snsd = document.getElementById("snsd");
        const track9 = document.getElementById("track9");
        const hellofuture = document.getElementById("hellofuture");
        const track10 = document.getElementById("track10");
        const sharelock = document.getElementById("sharelock");
        const track11 = document.getElementById("track11");
        const goldenage = document.getElementById("goldenage");
        const track12 = document.getElementById("track12");
        const growl = document.getElementById("growl");
        const track13 = document.getElementById("track13");
        const winforyou = document.getElementById("winforyou");
      }
      
        if (id === "redflavour") {
          if (
                track1.style.display === "none" ||
                track1.style.display === ""
            ) {
                track1.style.display = "block";
                redflavour.style.display = "block";
            } else {
                track1.style.display = "none";
                redflavour.style.display = "none";
            }
        }
      
        if (id === "endofaday") {
          if (
                track2.style.display === "none" ||
                track2.style.display === ""
            ) {
                track2.style.display = "block";
                endofaday.style.display = "block";
            } else {
                track2.style.display = "none";
                endofaday.style.display = "none";
            }
        }
      
        if (id === "boa") {
          if (
                track3.style.display === "none" ||
                track3.style.display === ""
            ) {
                track3.style.display = "block";
                boa.style.display = "block";
            } else {
                track3.style.display = "none";
                boa.style.display = "none";
            }
        }
      
        if (id === "maw") {
          if (
                track4.style.display === "none" ||
                track4.style.display === ""
            ) {
                track4.style.display = "block";
                maw.style.display = "block";
            } else {
                track4.style.display = "none";
                maw.style.display = "none";
            }
        }
      
        if (id === "HOT") {
          if (
                track5.style.display === "none" ||
                track5.style.display === ""
            ) {
                track5.style.display = "block";
                HOT.style.display = "block";
            } else {
                track5.style.display = "none";
                HOT.style.display = "none";
            }
        }

        if (id === "fmr") {
         if (
                track6.style.display === "none" ||
                track6.style.display === ""
            ) {
                track6.style.display = "block";
                fmr.style.display = "block";
            } else {
                track6.style.display = "none";
                fmr.style.display = "none";
            }
        }
        
        if (id === "blackmamba") {
         if (
                track7.style.display === "none" ||
                track7.style.display === ""
            ) {
                track7.style.display = "block";
                blackmamba.style.display = "block";
            } else {
                track7.style.display = "none";
                blackmamba.style.display = "none";
            }
        }
        
        if (id === "snsd") {
         if (
                track8.style.display === "none" ||
                track8.style.display === ""
            ) {
               track8.style.display = "block";
               snsd.style.display = "block";
            } else {
               track8.style.display = "none";
               snsd.style.display = "none";
            }
        }
        
        if (id === "hellofuture") {
         if (
                track9.style.display === "none" ||
                track9.style.display === ""
            ) {
                track9.style.display = "block";
                hellofuture.style.display = "block";
           } else {
                track9.style.display = "none";
                hellofuture.style.display = "none";
           }
        }
        
        if (id === "sharelock") {
         if (
                track10.style.display === "none" ||
               track10.style.display === ""
            ) {
               track10.style.display = "block";
               sharelock.style.display = "block";
           } else {
               track10.style.display = "none";                   
               sharelock.style.display = "none";
            }
        }
        
        if (id === "goldenage") {
         if (
                track11.style.display === "none" ||
               track11.style.display === ""
            ) {
               track11.style.display = "block";
               track11.style.display = "block";
            } else {
               track11.style.display = "none";
                track11.style.display = "none";
            }
        }

        if (id === "growl") {
         if (
                track12.style.display === "none" ||
               track12.style.display === ""
            ) {
               track12.style.display = "block";
               growl.style.display = "block";
            } else {
               track12.style.display = "none";
               growl.style.display = "none";
            }
        }

        if (id === "winforyou") {
         if (
               track13.style.display === "none" ||
               track13.style.display === ""
            ) {
               track13.style.display = "block";                   
               winforyou.style.display = "block";
            } else {
               track13.style.display = "none";
               winforyou.style.display = "none";
            }
      }
      
     