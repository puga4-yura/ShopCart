import React from 'react'
import s from "./ChooseProduct.module.css"

const ResultCart = (props) => {
 //console.log(props)
    return (
      <div className={s.resultContainer}>
        <div className={s.resultContainerItem}>
          Will Buy: {props.productToWillBuyCount.length}
          <div>
            <div>{props.productToWillBuyListName}</div>
          </div>
          <div>All Price: {props.productToWillPrice}</div>
        </div>
      </div>
    )
}

export default ResultCart;