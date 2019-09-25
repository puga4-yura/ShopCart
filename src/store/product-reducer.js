import React from "react";

const REMOVE_ELEMENT = 'REMOVE-ELEMENT';
const TO_WILL_BUY = 'TO_WILL_BUY';
const REMOVE_TO_WILL_BUY = 'REMOVE_TO_WILL_BUY';

//export const removeElementActionCreate = (product) => ({type: REMOVE_ELEMENT, id: product.id});

let  removeElement = (store, el) => {
       return store.filter(function (item) {
       return item.id !== el.id;
   });
  };

const productReducer = (store, action) => {
  const product =  action.product;
  if(action.type === REMOVE_ELEMENT){
    store = removeElement(store, product);
  }
  else if(action.type === TO_WILL_BUY){
    product.inCart=true;
    return Object.values({
      ...store,
      [action.index]:product
    });
  }

  else  if (action.type === REMOVE_TO_WILL_BUY  ) {
    product.inCart=false;
    return Object.values({
      ...store,
      [action.index]:product
    });
  }
  
  return store;
}

export default productReducer;