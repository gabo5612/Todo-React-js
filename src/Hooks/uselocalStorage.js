import React, { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
   
      
    const [item, setItem] = React.useState(initialValue);
    const [loading, setLoading]=useState(true)
    const [error, setError]=useState(false)
   
    useEffect(()=>{
        setTimeout(() => {
            try{
                let parsedItem;
                const localStorageItem = localStorage.getItem(itemName);
                if (!localStorageItem) {
                    localStorage.setItem(itemName, JSON.stringify(initialValue));
                    parsedItem = initialValue;
                  } else {
                    parsedItem = JSON.parse(localStorageItem);
                    setItem(parsedItem)
                  }
               setLoading(false)
            } catch(error){
                setLoading(false)
                setError(true)
            } 
        }, 500);
    })


  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return {item, saveItem, loading, error};
  }

  export{useLocalStorage}