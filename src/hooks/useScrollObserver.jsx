
import { useEffect } from 'react';
import useGlobalContext from './useGlobalContext';

const useScrollObserver = () => {
  
  // state from global context
  const {
    setIsScrollBeyondParallax
  } = useGlobalContext();

  useEffect(() => {
    // Assuming you have an array of section elements and pagination dots
    const sections = document.querySelectorAll('.section');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const paginationContainers = document.querySelectorAll('.pagination-container');

    // Function to change the color of the pagination dot
    
    const changeDotColor = (activeIndex) => {
      paginationDots.forEach((dot, index) => {
        dot.style.backgroundColor = index === activeIndex ? 'white' : 'gray';
      });

      paginationContainers.forEach((container, index) => {
        if (index === activeIndex) {
          container.classList.add('outline');
          container.classList.add('outline-[white]');
        } else {
          container.classList.remove('outline');
          container.classList.remove('outline-[white]');
        }
      });
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
          // const opacity = Math.max(0, Math.min(1, (window.innerHeight - sectionTop) / window.innerHeight));
          // section.style.opacity = opacity.toFixed(2); // Limit opacity to two decimal places
      });

   

      changeDotColor(activeIndex);

      // Check if scrolling is finished on the third stacking card
      const thirdCardBottom = sections[2].getBoundingClientRect().bottom;
      if (thirdCardBottom <= window.innerHeight) {
        // Hide pagination dots
        paginationDots.forEach((dot,index) => {
          dot.style.display = 'none';
          paginationContainers[index].classList.remove('outline-[white]');
          paginationContainers[index].classList.remove('outline');
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

