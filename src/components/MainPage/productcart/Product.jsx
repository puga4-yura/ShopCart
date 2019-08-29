import React from 'react'
import s from "./Product.module.css"

const Product = (props) => {
  return (
    <div className={s.containerProduct}>
      <div>{props.title}</div>
      <img src={props.img} alt="photo"/>
      <button className={s.delete}>Delete</button>
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