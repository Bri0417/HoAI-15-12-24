(function ($) {
function floatingFilter() {
  var leftFilter = $(".common-left-aside");
  if ($("body.fixed-filter").length > 0 && window.innerWidth > 1025) {
    var scrollPosition = $(window).scrollTop();
    var filterSection = $(".common-left-aside");
    var filterSectionHeight = filterSection.outerHeight();
    var bannerHeight = $(".common-banner-wrapper").outerHeight();
    var footerOffset = $("footer.footer").offset().top;
    var contentSection = $(".common-right-content");
    var elemPosition = contentSection.position();
    if (elemPosition != undefined) {
      var filterPosition = elemPosition.top + bannerHeight + 140;
    } 
    var notBottom = scrollPosition + filterSectionHeight < footerOffset - 100;
    var fixNeeded = contentSection.outerHeight() > filterSectionHeight + 500;
    if (fixNeeded) {
      if (scrollPosition > filterPosition && notBottom) {
        filterSection.addClass("fixed");
        filterSection.removeClass("bottom");
      } else {
        filterSection.removeClass("fixed");
        if (notBottom === false) {
          filterSection.addClass("bottom");
        } else {
          filterSection.removeClass("bottom");
        }
      }
    } else {
      filterSection.removeClass("fixed bottom");
    }
  }
}
$(document).ready(function () {
  // Function to highlight active menu item
  function highlightMenuItem() {
    var scrollPosition = $(window).scrollTop();
    var windowHeight = $(window).height();

    // Loop through each section and check if it is in the viewport
    $(".menu-item").each(function () {
      var targetSection = $($(this).attr("href"));
      var sectionOffsetTop = targetSection.offset().top;
      var sectionHeight = targetSection.outerHeight();

      // Check if the section is in the viewport
      if (scrollPosition + windowHeight >= sectionOffsetTop && scrollPosition < sectionOffsetTop + sectionHeight) {
        $(".menu-item").removeClass("active"); // Remove active class from all menu items
        $(this).addClass("active"); // Add active class to the current menu item
      }
    });
  }

  // Call highlightMenuItem on scroll and resize events
  $(window).on("scroll resize", highlightMenuItem);

  // Call on page load to set initial active state
  highlightMenuItem();
});

$(window).scroll(function () {
  floatingFilter();
});
})(jQuery);