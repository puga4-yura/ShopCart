import React from 'react'
import s from "./Product.module.css"

const Product = (props) => {
  //debugger;
  //console.log(props);
  const product = props.product;
  
  let removeEl = () => {
      props.removeEl();
    //const action = {type: 'REMOVE-ELEMENT', product: product};
    //props.dispatch(action);
  }
  //
  // let addToCard = () => {
  //   props.addToCard();
  //   //const action = {type: 'TO_WILL_BUY', product, index:props.index};
  //   //props.dispatch(action);
  // }
  //
  //   let removeFromCard = () => {
  //     props.addToCard();
  //       //const action = {type: 'REMOVE_TO_WILL_BUY', product, index:props.index};
  //       //props.dispatch(action);
  //   }
  
  
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

