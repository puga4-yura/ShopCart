import React from 'react'
import ResultCar from './ChooseProduct'

const ResultCartContainer = (props) => {

  let productToWillBuyCount = props.store.result.length;
  let productToWillBuyListTitle = props.store.result.map(productTitle => {return (<div>Title: {productTitle.title}</div>) });
  let productToWillBuyListPrice = props.store.result.map(productTitle => {return (<div>Price: {productTitle.price}</div>)});

  return (
    <ResultCar productToWillBuyCount={productToWillBuyCount}
               productToWillBuyListTitle={productToWillBuyListTitle}
               productToWillBuyListPrice={productToWillBuyListPrice}
    />
  )

};
export default ResultCartContainer;