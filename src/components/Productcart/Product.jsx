import React from 'react'
import s from "./Product.module.css"

const Product = (props) => {
  const product = props.product;
  
  let removeEl = () => {
     props.removeEl(props);
  }

  let addToCard = () => {
   props.addToCard();
  }

  let removeFromCard = () => {
     props.removeFromCard();
  }
  
  
  return (
    <div className={s.containerProduct}>
      <img src={product.img} alt="photo"/>
      <div>{product.title}</div>
      <div>
          {!props.product.inCart ?
              (<button onClick={addToCard} className={s.addCart}>Add Will Buy</button>):
              (<button onClick={removeFromCard} className={s.delete}>Remove</button>)}
      </div>
      <button onClick={removeEl}
              className={s.delete}>Delete
      </button>
    </div>
  )
}
export default Product;

