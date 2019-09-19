import React from 'react'
import Product from "./productcart/Product";
import Pagination from "./Pagination/Pagination";
import ResultCart from "./ChooseProduct/ChooseProduct";

const MainPage = (props) => {
  //debugger
  //console.log(props.removeElement)
  
  let ProductInfo = props.data.product.map(productInfo =>
    <Product   title={productInfo.title}
               product={productInfo}
               dispatch={props.dispatch}
               img={productInfo.image_main}/>)
  return (
    <div>
      <Pagination store={props.data}/>
      <div className="product-list">
        {ProductInfo}
       <ResultCart/>
        {/*{props.data.map(el => {*/}
        {/*return (*/}
        {/*<div>*/}
        {/*key={el.id}*/}
        {/*el={el}*/}
        {/*/!*removeElement={props.removeElement}*!/*/}
        {/*/!*productToWillBuyCount={this.productToWillBuyCount}*!/*/}
        {/*/!*removeElementFromBuy={this.removeElementFromBuy}/>*!/*/}
    
        {/*</div>*/}
        {/*)*/}
        {/*})}*/}
      </div>
    </div>
  )
}

export default MainPage;