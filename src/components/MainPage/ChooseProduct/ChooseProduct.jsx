import React from 'react'
import s from "./ChooseProduct.module.css"

const ResultCart = (props) => {
  //console.log(props)
  //console.log(props.store.result)
  let productToWillBuyCount = props.store.result.length;
  let productToWillBuyListTitle = props.store.result.map(productTitle => {return (<div>Title: {productTitle.title}</div>) });
  let productToWillBuyListPrice = props.store.result.map(productTitle => {return (<div>Price: {productTitle.price}</div>)});
  
    return (
      <div className={s.resultContainer}>
        <div className={s.resultContainerItem}>
          Will Buy: {productToWillBuyCount}
          <div>{productToWillBuyListTitle}</div>
          <div>{productToWillBuyListPrice}</div>
        </div>
        </div>)
}

export default ResultCart;