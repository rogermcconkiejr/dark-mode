import React from 'react';
import useLocalStorage from "./useLocalStorage";
import { useEffect } from 'react';

const useDarkMode = () =>{
    const [value, setValue] = useLocalStorage(false, '');
    useEffect(()=>{
    const body =document.querySelector("body");
        if (value){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value]);
    return [value, setValue];
}

export default useDarkMode;