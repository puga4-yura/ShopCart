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

function ProductInfo(props) {
  console.log(props)
    return props.product.map((productInfo,index) =>
        <Product     product={productInfo}
                              index={index}
                     removeEl={props.removeEl}
                              dispatch={props.dispatch}/>);
    
}

let f1 = (state) => {
  return {
      product: state.product
  }
};

let f2 = (dispatch, state) => {
  return {
    removeEl: (state) => {
      console.log(state,dispatch)
      // let action = {type: 'REMOVE-ELEMENT', product: state.product};
      // dispatch(action);
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




export default connect(f1,f2)(ProductInfo);