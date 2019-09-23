import React from "react";

const REMOVE_ELEMENT = 'REMOVE-ELEMENT';
//export const removeElementActionCreate = (product) => ({type: REMOVE_ELEMENT, id: product.id});

const productReducer = (state, action) => {
  //console.log(el)
  //console.log(state.map(productTitle => {return productTitle.id }));
  //const id = state.map(productTitle => {return productTitle.id });
  if(action.type === REMOVE_ELEMENT){
    const updated = state.filter(function (item) {
     // return item.id !== el.id;
    });
    state = updated;
  }
  
  return state;
}

export default productReducer;