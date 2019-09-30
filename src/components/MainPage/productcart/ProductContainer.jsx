import React from 'react'
import Product from "./Product"
import {connect} from "react-redux";
import mapStateToProps from "react-redux/es/connect/mapStateToProps";
import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";
// import actionCreate removeElementActionCreate

// const ProductContainer = (props) => {
//   const product = props.product;
//   let removeEl = () => {
//     const action = {type: 'REMOVE-ELEMENT', product: product};
//     props.dispatch(action);
//   }
//
//   let addToCard = () => {
//     const action = {type: 'TO_WILL_BUY', product, index:props.index};
//     props.dispatch(action);
//   }
//
//   let removeFromCard = () => {
//     const action = {type: 'REMOVE_TO_WILL_BUY', product, index:props.index};
//     props.dispatch(action);
//   }
//
//
//   return ( <Product removeEl={removeEl} addToCard={addToCard}  removeFromCard={removeFromCard} product={props.product} />)
// }

let ProductInfo = state.product.map((productInfo,index)=>
  <Product    product={productInfo}
              index={index}/>)

let f1 = (state) => {
  return {
      product: state.product
  }
};

let f2 = (dispatch, state) => {
  return {
    removeEl: () => {
      let action = {type: 'REMOVE-ELEMENT', product: state.product};
      dispatch(action);
    },

    addToCard:() => {
      const action = {type: 'TO_WILL_BUY', product: state.product};
      dispatch(action);
    },

    removeFromCard:() => {
      const action = {type: 'REMOVE_TO_WILL_BUY',product: state.product};
      dispatch(action);
    }
  }
};

let ProductContainer = connect(f1, f2)(ProductInfo);



export default ProductContainer;