import React from "react";

function UseLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(()=>{
    const localStorageItems = localStorage.getItem(itemName);
    let parsedItems;
    
    if (!localStorageItems) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItems = initialValue;
    } else {
      parsedItems = JSON.parse(localStorageItems);
    }
  }, [])
  


  // Funcion para guardar estado y local storage
  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };

  return [item, saveItem];
}

export { UseLocalStorage };
