

function openCate(evt) {
  var i, link;

  link = document.getElementsByClassName("link");
  for (i = 0; i < link.length; i++) {
      link[i].className = link[i].className.replace(" active", "");
  }
  evt.currentTarget.className += " active";}

function header(){
      document.getElementById("defaultOpen").click();
}



  $(window).on("load",function() {
    $(window).scroll(function() {
      var windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function() {
        /* Check the location of each desired element */
        var objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) { //object comes into view (scrolling down)
          if ($(this).css("opacity")==0) {
            $(this).fadeTo(100,1);}
        } else { //object goes out of view (scrolling up)
          //if ($(this).css("opacity")==1) {
            //$(this).fadeTo(100,0);}
        }
      });
    }).scroll(); //invoke scroll-handler on page-load
  });
