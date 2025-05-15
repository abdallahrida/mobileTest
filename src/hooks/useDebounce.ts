import {useState, useEffect} from 'react';

type CallbackFunction = () => void;

const useDebounce = <T>(
  value: T,
  delay: number,
  callback?: CallbackFunction,
): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
      if (callback) {
        callback();
      }
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay, callback]);

  return debouncedValue;
};
export default useDebounce;
