import { useEffect, useRef } from 'react';

// hook to scroll to an element on render
function useScrollOnRender() {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return ref;
}

export default useScrollOnRender;
