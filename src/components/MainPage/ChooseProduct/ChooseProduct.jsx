import React from 'react'
import s from "./ChooseProduct.module.css"

const ResultCart = (props) => {
  console.log(props)
  return (
    <div className={s.resultContainer}>
      <div className={s.resultContainerItem}>
        Will Buy: {props.count}
        <div>{props.text}</div>
        
      </div>
    </div>)
}

export default ResultCart;