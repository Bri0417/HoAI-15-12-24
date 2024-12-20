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

// what we do tab

(function($){
  $(document).ready(function () {
    // When a tab button is clicked
    $('.tab-btn').on('click', function () {
        // Remove 'active' class from all tabs and hide all tab contents
        $('.tab-btn').removeClass('active');
        $('.tab-content').removeClass('active');

        // Add 'active' class to the clicked tab
        $(this).addClass('active');

        // Get the target tab content's ID
        const targetTab = $(this).data('tab');

        // Show the corresponding content
        $('#' + targetTab).addClass('active');
    });
});

})(jQuery);

