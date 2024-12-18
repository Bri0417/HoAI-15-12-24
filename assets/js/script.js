(function($){
  $(window).on("load",function(){
      $(".card-container").mCustomScrollbar({
          axis:"x",
        theme:"light",
        callbacks:{
          onOverflowX:function(){
            console.log("Horizontal scrolling required");
          }
      },
      scrollButtons:{ enable: true }
      });
  });
})(jQuery);

