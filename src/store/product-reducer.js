import React from "react";

const REMOVE_ELEMENT = 'REMOVE-ELEMENT';
export const removeElementActionCreate = (product) => ({type: REMOVE_ELEMENT, id: product.id});
let  removeElement = (state, el) => {
      const updated = state.filter(function (item) {
       return item.id !== el.id;
   });
      state = updated;
      //this._state.willBuy=false;
      //this._callSubcriber(this._state.product,this._state.willBuy);

  }
const productReducer = (state, action) => {
  //console.log(el)
  //console.log(state.map(productTitle => {return productTitle.id }));
  //const id = state.map(productTitle => {return productTitle.id });
  if(action.type === REMOVE_ELEMENT){
    console.log(4)
    removeElement(state, action)
    // const updated = state.filter(function (item) {
    //   return item.id !== product.id;
    // });
    //state = updated;
  }
  
  return state;
}

export const removeElementActionCreate = (product) => ({type: REMOVE_ELEMENT, id: product.id});
export default productReducer;