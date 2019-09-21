import React from 'react'
import s from "./ChooseProduct.module.css"

const ResultCart = (props) => {
  //console.log(props)
  console.log(props)
  let productToWillBuyCount = props.store.result.length;
  let productToWillBuyListName = props.store.result;
  //let productToWillBuyListPrice = props.store.result.productPrice;
  let productToWillBuyListPrice = props.store.result;
  const elelements= props.store.result.map(product=>{
      return ( <div>
              <div>Title: {product.productTitle}</div>
              <div>Price: {product.productPrice}</div>
      </div>)
  });

  console.log(productToWillBuyListPrice)
    return (
      <div className={s.resultContainer}>
        <div className={s.resultContainerItem}>
          Will Buy: {productToWillBuyCount}
            {elelements}
        </div>
        </div>)
}

export default ResultCart;