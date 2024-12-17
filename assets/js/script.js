(function($){
  $(window).on("load",function(){
      $(".card-container").mCustomScrollbar({
          axis:"x",
        theme:"inset",
        callbacks:{
          onOverflowX:function(){
            console.log("Horizontal scrolling required");
          }
      },
      scrollButtons:{ enable: true }
      });
  });
})(jQuery);