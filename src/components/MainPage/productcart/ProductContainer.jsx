import React from 'react'
import Product from "./Product"
import {connect} from "react-redux";
//import mapStateToProps from "react-redux/es/connect/mapStateToProps";
//import mapDispatchToProps from "react-redux/es/connect/mapDispatchToProps";
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

function ProductInfo(state) {
    return state.product.map((productInfo,index) => {
      const addToCard = () => state.addToCard({product:productInfo,index});
      const removeFromCard = () => state.removeFromCard({product:productInfo,index});
      return <Product product={productInfo}
                      index={index}
                      removeEl={state.removeEl}
                      addToCard={addToCard}
                      removeFromCard={removeFromCard}
                      dispatch={state.dispatch}/>;
    });
    
}

let mapStateToProps = (state) => {
  return {
      product: state.product
  }
};

let mapDispatchTooProps = (dispatch) => {
  return {
    removeEl: (data) => {
      //console.log(data)
      let action = {type: 'REMOVE-ELEMENT', product: data.product};
      dispatch(action);
    },

    addToCard:(data) => {
      const action = {type: 'TO_WILL_BUY', product: data.product, index:data.index};
      dispatch(action);
    },

    removeFromCard:(data) => {
      const action = {type: 'REMOVE_TO_WILL_BUY',product: data.product, index:data.index};
      dispatch(action);
    }
  }
};


export default connect(mapStateToProps, mapDispatchTooProps)(ProductInfo);