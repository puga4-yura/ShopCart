import React from 'react'
import s from "./Product.module.css"
import {removeToWillBuyCount} from "../../../store/state";

const Product = (props) => {
  const product = props.product;
  let removeEl = () => {
    const action = {type: 'REMOVE-ELEMENT', id: product.id};
    props.dispatch(action);
  }
  
  let addToCard = () => {
    const action = {type: 'TO_WILL_BUY', product,index:props.index};
    props.dispatch(action);
  }

    let removeFromCard = () => {
        const action = {type: 'REMOVE_TO_WILL_BUY', product,index:props.index};
        props.dispatch(action);
    }
  
  
  return (
    <div className={s.containerProduct}>
      <img src={product.img} alt="photo"/>
      <div>{product.title}</div>
      <div>
          {!props.product.inCart ?
              (<button onClick={addToCard} className={s.addCart}>Add Will Buy</button>):
              (<button onClick={removeFromCard} className={s.delete}>Remove</button>)}
        {/*{this.state.willBuy ?*/}
          {/*(<button className={s.addCart}*/}
                   {/*onClick={() => {*/}
                     {/*this.setState({willBuy: false});*/}
                     {/*this.props.removeElementFromBuy(this.props.el)*/}
                   {/*}}>*/}
            {/*Remove Will Buy</button>) :*/}
          {/*(<button className={s.succsecfull}*/}
                   {/*onClick={() => {*/}
                     {/*this.setState({willBuy: true});*/}
                     {/*this.props.productToWillBuyCount(this.props.el)*/}
                   {/*}}*/}
            {/*>*/}
              {/*Add Will Buy*/}
            {/*</button>*/}
          {/*)}*/}
      
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