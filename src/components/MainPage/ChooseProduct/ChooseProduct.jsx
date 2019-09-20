import React from 'react'
import s from "./ChooseProduct.module.css"

const ResultCart = (props) => {
  //console.log(props)
  //console.log(props)
  
  // как достать значения
  let productToWillBuyCount = props.store.result.length;
  let productToWillBuyListName = 'a';//props.store.result.productTitle;
  let productToWillBuyListPrice = 'b';//props.store.result.productPrice;
  //let productToWillBuyListPrice = props.store.result.title;
  console.log(productToWillBuyListPrice)
    return (
      <div className={s.resultContainer}>
        <div className={s.resultContainerItem}>
          Will Buy: {productToWillBuyCount}
         <div>
          <div>Title: {productToWillBuyListName}</div>
          <div>Price: {productToWillBuyListPrice}</div>
        </div>
        </div>
      </div>
    )
}

export default ResultCart;