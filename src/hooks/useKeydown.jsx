// // hooks/useKeydown.js
// import { useEffect } from 'react';

// const useKeydown = (onEnter, dependencies) => {
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Enter' && typeof onEnter === 'function') {
//         onEnter();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, dependencies);
// };

// export default useKeydown;



import { useEffect } from 'react';

const useKeydown = (keyActions, dependencies) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      keyActions.forEach(({ key, ctrlKey, action }) => {
        if (
          event.key.toLowerCase() === key.toLowerCase() &&
          (ctrlKey ? event.ctrlKey : true) &&
          typeof action === 'function'
        ) {
          action();
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, dependencies);
};

export default useKeydown;
