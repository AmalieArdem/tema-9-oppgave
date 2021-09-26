
// When scrolling, the title moves down to be next to the paragraph. And gets smaller.
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 200) {
    document.getElementById("title-container").className = "container-main-title-2-js";
    document.getElementById("title-container-2").className = "paragraph-box-left-empty-js";
  } else {
    document.getElementById("title-container").className = "container-main-title-2";
    document.getElementById("title-container-2").className = "paragraph-box-left-empty";
  }
}


// When you scroll, the image opacity turns off.
var test = document.getElementById('animation1');
window.addEventListener('scroll', function(e) {
  var scroll = window.pageYOffset || document.documentElement.scrollTop ||
                document.body.scrollTop || 0;
  test.style.opacity = Math.max(0, Math.min(1, -scroll / 1000 + 2));
});


//var test2 = document.getElementById('animation2');
//window.addEventListener('scroll', function(e) {
  //var scroll2 = window.pageYOffset || document.documentElement.scrollTop ||
    //            document.body.scrollTop || 0;
 // test2.style.opacity = Math.max(0, Math.min(1, -scroll2 / 1500 + 2));
 //});


 $(document).ready(function(){
  $(window).scroll(function(){
      $('#animation2').css("opacity", 1- $(window).scrollTop() / 1700)
  })
})



