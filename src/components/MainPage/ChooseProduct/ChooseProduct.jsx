import React from 'react'
import s from "./ChooseProduct.module.css"

const ResultCart = (props) => {
  return (
    <div className={s.resultContainer}>
      <div className={s.resultContainerItem}>
        Will Buy: {props.productToWillBuyCount}
        <div>{props.productToWillBuyListTitle}</div>
        <div>{props.productToWillBuyListPrice}</div>
      </div>
    </div>)
}

export default ResultCart;