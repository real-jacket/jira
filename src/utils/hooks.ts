import { useState, useEffect } from "react";

export const useMount = (callback: Function) => {
  useEffect(() => {
    callback();
  }, []);
};

//  这个需要配合 useEffect 使用
export const useDebounce = <T>(value: T, delay: number): T => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};
