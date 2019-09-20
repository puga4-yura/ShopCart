import React from 'react'
import s from "./Product.module.css"

const Product = (props) => {
  // как достать
  const product = props.product;
  
  //console.log(props);
  // if(props.willBuy = false) {
  //   console.log(222);
  // }
  //console.log(props.willBuy);
  let removeEl = () => {
    const action = {type: 'REMOVE-ELEMENT', id: product.id};
    props.dispatch(action);
  }
  
  let productToWillBuyCount = () => {
    const action = {type: 'TO_WILL_BUY', productTitle: product.title, productPrice: product.price};
    product.willBuy = true;
    console.log('add');
    props.dispatch(action);
  }
  let removeElementFromBuy = () => {
    const action = {type: 'REMOVE_TO_WILL_BUY'};
    product.willBuy = false;
    console.log('remove');
    props.dispatch(action);
  }
  
  
  return (
    <div className={s.containerProduct}>
      <img src={product.img} alt="photo"/>
      <div>{product.title}</div>
      <div>
        {product.willBuy ?
          (<button onClick={removeElementFromBuy} className={s.addCart}>Remove Will Buy</button>)
          :
          (<button onClick={productToWillBuyCount} className={s.succsecfull}>Add Will Buy</button>)
          
        }
      </div>
      <button onClick={removeEl}
              className={s.delete}>Delete
      </button>
    </div>
  )
}
export default Product;
// class Product extends React.Component{
//     constructor (){
//         super();
//
//         this.state = {
//             willBuy: false
//         }
//     }
//
//     render() {
//         return (
//             <div className={s.containerProduct} >
//                 <div>{this.props.el.title} </div>
//                 <img src={this.props.el.image_main}  alt="ddd"/>
//
//                 <div>
//                     <div>
//                         {this.state.willBuy ?
//                             (<button className={s.addCart}
//                                      onClick={()=>{
//                                         this.setState({willBuy:false});
//                                         this.props.removeElementFromBuy(this.props.el)
//                                      }}>
//                                          Remove Will Buy</button>) :
//                             (<button className={s.succsecfull}
//                                       onClick={()=> {
//                                           this.setState({ willBuy: true});
//                                           this.props.productToWillBuyCount(this.props.el)}}>
//                                     Add Will Buy
//                             </button>
//                             )}
//                     </div>
//
//                     <button className={s.delete} onClick={this.props.removeElement.bind(null, this.props.el)}>
//                         Delete
//                     </button>
//                 </div>
//             </div>
//         );
//     }
// }


//export default Product;