// For cleaner use, put `useWindowDimensions.js` into a "util" folder or similar.
// Import into files at top level where needed with: $ import { useWindowDimensions } from './useWindowDimensions';
// Usage is controlled within the component with: $ const { innerWidth, innerHeight } = useWindowDimensions();
// And then, for example: $ if (innerWidth < 768) {...insert magic here};


import { useEffect, useState } from 'react';

export default function getWindowDimensions() {
  const { innerWidth, innerHeight } = window;
  return {
    innerWidth,
    innerHeight,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}


