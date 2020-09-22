AOS.init({
  offset: 100, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 300, // values from 0 to 3000, with step 50ms
  once: true
});

document.querySelector(".nav-ham-button").addEventListener("click", () => {
  document.querySelector('.ham-box').classList.toggle("ham-cross");
  document.querySelector('.aside-nav').classList.toggle('active');
  // document.querySelector(".navigation").classList.toggle("transparent");
  document.body.classList.toggle("blur");
  // document.querySelectorAll('section').style.opacity = 0.5;
  document.querySelector(".navigation").style.boxShadow = "none";

})



// console.log(screen.width);
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navigation").style.top = "0";
    // document.querySelector(".navigation").style.backgroundColor = "#3a3535";
  } else {
    if (screen.width > 1024) {
      document.querySelector(".navigation").style.top = "-100px";
    }

  }
  prevScrollpos = currentScrollPos;
} 
