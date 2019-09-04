import React from 'react';
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const item = JSON.parse(localStorage.getItem(key));

    const [storedValue, setStoredValue] = useState(item || initialValue);
  
    const setValue = value => {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    };
  
    return [storedValue, setValue];
  };
  
export default useLocalStorage;