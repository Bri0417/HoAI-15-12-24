

  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = Array.from(menuItems).map((item) =>
      document.querySelector(item.getAttribute("href"))
    );

    // Smooth scrolling
    menuItems.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute("href"));
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });

        // Update active class
        menuItems.forEach((menu) => menu.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // Update active menu on scroll
    window.addEventListener("scroll", function () {
      let currentSection = sections.find(
        (section) =>
          window.scrollY >= section.offsetTop - 100 &&
          window.scrollY < section.offsetTop + section.offsetHeight
      );

      if (currentSection) {
        menuItems.forEach((menu) => menu.classList.remove("active"));
        const activeItem = document.querySelector(
          `.menu-item[href="#${currentSection.id}"]`
        );
        if (activeItem) activeItem.classList.add("active");
      }
    });
  });

