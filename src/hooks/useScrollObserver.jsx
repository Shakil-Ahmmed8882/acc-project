const { useEffect } = require("react");



const useScrollObserver = () => {
  useEffect(() => {
    // Assuming you have an array of section elements and pagination dots
    const sections = document.querySelectorAll(".section");
    const paginationDots = document.querySelectorAll(".pagination-dot");

    // Function to change the color of the pagination dot
    const changeDotColor = (activeIndex) => {

      // Reset all dots to default color
      paginationDots.forEach((dot) => {
        dot.style.backgroundColor = "gray"; 
      });

      // Change the color of the active dot
      paginationDots[activeIndex].style.backgroundColor = "white"; // Replace with your active color
      paginationDots[activeIndex].style.border = "2xl solid red"; // Replace with your active color
    };

    // Function to handle scroll event
    const onScroll = () => {
      let activeIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          activeIndex = index;
        }
      });

      changeDotColor(activeIndex);
      // Check if scrolling is finished on the third stacking card
      const thirdCardBottom = sections[2].getBoundingClientRect().bottom;
      if (thirdCardBottom <= window.innerHeight) {
        // Hide pagination dots
        paginationDots.forEach((dot) => {
          dot.style.display = "none";
        });
      } else {
        // Show pagination dots
        paginationDots.forEach((dot) => {
          dot.style.display = "block"; // Assuming pagination dots are hidden by default
        });
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", onScroll);
  }, []);
};

export default useScrollObserver;
