import { useEffect, useRef } from 'react';

// hook to scroll to an element on render
function useScrollOnRender() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      window.scrollBy({
        top: 350,
        behavior: 'smooth',
      });
    }
    return () => {};
  });

  return ref;
}

export default useScrollOnRender;
