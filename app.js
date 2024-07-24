//Date and Time functions

var dt = new Date();
document.getElementById('date-time').innerHTML=dt;

// Adding a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.
// using url: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp 

let btn = document.getElementById('myBtn');

window.onscroll = function () {
  if (window.scrollY >=300 ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};



let sidigaber=document.getElementById('sidigaber');
let imgs=['images/sidigaber/image1.jpg','images/sidigaber/image2.jpg','images/sidigaber/image3.jpg']
setInterval(function(){
    let random =Math.floor(Math.random()*3);
    sidigaber.src=imgs[random];
},1000);






