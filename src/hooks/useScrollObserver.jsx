
import { useEffect } from 'react';
import useGlobalContext from './useGlobalContext';

const useScrollObserver = () => {
  
  // state from global context
  const {
    setIsScrollBeyondParallax,
    setIsSecondParallaxInView,
    setActiveSectionIndex
  } = useGlobalContext();

  useEffect(() => {
    // Assuming you have an array of section elements and pagination dots
    const sections = document.querySelectorAll('.section');
    const paginationDots = document.querySelectorAll('.pagination-dot');

    // Function to change the color of the pagination dot
    const changeDotColor = (activeIndex) => {
      // Reset all dots to default color
      paginationDots.forEach((dot) => {
        dot.style.backgroundColor = 'gray';
      });

      // Change the color of the active dot
      paginationDots[activeIndex].style.backgroundColor = 'white'; 
      if(paginationDots[activeIndex]){
        setActiveSectionIndex(activeIndex)
      }

      // Check if the second parallax section is in view
      const secondParallax = sections[1];
      const firstParallax = sections[0];
      const secondParallaxTop = secondParallax.getBoundingClientRect().top;
      const firstParallaxTop = firstParallax.getBoundingClientRect().top;

      if (
        secondParallaxTop <= window.innerHeight / 2 &&
        secondParallaxTop >= 0
      ) {
        // Second parallax section is in view
        setIsScrollBeyondParallax(true);
        setIsSecondParallaxInView(true);
      } else if (firstParallaxTop >= 0) {
        // First parallax section is back in view
        setIsScrollBeyondParallax(false);
        setIsSecondParallaxInView(false);
      }
    };

    // Function to handle scroll event
    const onScroll = () => {
      let activeIndex = 0;
      sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          activeIndex = index;
        }



          // Calculate the opacity based on the section's position relative to the viewport
          const opacity = Math.max(0, Math.min(1, (window.innerHeight - sectionTop) / window.innerHeight));
          section.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places
      });

   

      changeDotColor(activeIndex);

      // Check if scrolling is finished on the third stacking card
      const thirdCardBottom = sections[2].getBoundingClientRect().bottom;
      if (thirdCardBottom <= window.innerHeight) {
        // Hide pagination dots
        paginationDots.forEach((dot) => {
          dot.style.display = 'none';
          setIsScrollBeyondParallax(true);
        });
      } else {
        // Show pagination dots
        paginationDots.forEach((dot) => {
          dot.style.display = 'block';
          setIsScrollBeyondParallax(false);
        });
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', onScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};

export default useScrollObserver;

