import React from 'react'
import ResultCar from './ChooseProduct'
import {connect} from "react-redux";

const ResultCartContainer = (state) => {
  //console.log(2121);
  //console.log(state.result);
  
    return <ResultCar
            count = {state.result.length}
            text = {state.result.map(productInfo => {return(
              <div>
                <div>Title: {productInfo.title}</div>
                <div>Price: {productInfo.price}</div>
              </div>
              )
               })}
      />;
    //let productToWillBuyCount = state.result.length;
  //let productToWillBuyListTitle = state.map(productTitle => {return (<div>Title: {productTitle.title}</div>) });
  //let productToWillBuyListPrice = state.result.map(productTitle => {return (<div>Price: {productTitle.price}</div>)});

  // return (
  //   <ResultCar productToWillBuyCount={productToWillBuyCount}
  //              productToWillBuyListTitle={productToWillBuyListTitle}
  //              productToWillBuyListPrice={productToWillBuyListPrice}
  //   />
  // )

};

let mapStateToProps = (state) => {
  return {
    result: state.result
  }
};



export default connect(mapStateToProps)(ResultCartContainer);
