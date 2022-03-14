import React from 'react';

export default function useDebounce(fn, delay = 500) {
  const timeoutRef = React.useRef();

  function debounce(...args) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }

  return debounce;
}
