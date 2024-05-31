
import { useEffect } from 'react';
import useGlobalContext from './useGlobalContext';

const useScrollObserver = () => {
  
  // state from global context
  const {
    setIsScrollBeyondParallax,
    setIsSecondParallaxInView
  } = useGlobalContext();

  useEffect(() => {
    // Assuming you have an array of section elements and pagination dots
    const sections = document.querySelectorAll('.section');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const sectionHeight = window.innerHeight;

    // Function to change the color of the pagination dot
    const changeDotColor = (activeIndex) => {
      // Reset all dots to default color
      paginationDots.forEach((dot) => {
        dot.style.backgroundColor = 'gray';
      });

      // Change the color of the active dot
      paginationDots[activeIndex].style.backgroundColor = 'white'; 
      

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
      });

      // Scroll to the next section
      window.scrollTo({
        top: sectionHeight * (activeIndex + 1),
        behavior: 'smooth',
      
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

