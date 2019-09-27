import React from 'react'
import Product from "./Product"
// import actionCreate removeElementActionCreate

const ProductContainer = (props) => {
  
  let removeEl = (product) => {
    const action = {type: 'REMOVE-ELEMENT', product: product};
    props.dispatch(action);
  }

  // let addToCard = () => {
  //   const action = {type: 'TO_WILL_BUY', product, index:props.index};
  //   props.dispatch(action);
  // }
  //
  // let removeFromCard = () => {
  //   const action = {type: 'REMOVE_TO_WILL_BUY', product, index:props.index};
  //   props.dispatch(action);
  // }
  
  
  return ( <Product removeEl={removeEl} product={props.product} />)
}

export default ProductContainer;
//removeEl={removeEl} addToCard{addToCard} removeFromCard{removeFromCard}