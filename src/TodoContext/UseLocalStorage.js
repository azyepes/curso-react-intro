import React from "react";

function UseLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;
  
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
          setItem(parsedItems)
        }
  
        setLoading(false)
        
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000);
  }, [initialValue, itemName])
  
  // Funcion para guardar estado y local storage
  const saveItem = (newItems) => {
    localStorage.setItem(itemName, JSON.stringify(newItems));
    setItem(newItems);
  };

  return {item, saveItem, loading, error}; 
  // Si hay mas de dos elemento para retornar en un hook, es mejor un objeto y no un array
}

export { UseLocalStorage };

// const defaultTodos = [
//   { text: "Cortar cebolla", completed: false },
//   { text: "Picar tomáte", completed: true },
//   { text: "Picar pimentón", completed: true },
//   { text: "Adobar proteína", completed: true },
//   { text: "Cocinar", completed: true },
//   { text: "Estudiar", completed: true },
//   { text: "Comer", completed: true },
//   { text: "Lavar platos", completed: true },
//   { text: "Descansar después de cocinar, estudiar y comer", completed: true },
// ];

// localStorage.setItem('TODO_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODO_V1')