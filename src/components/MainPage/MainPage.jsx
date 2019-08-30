import React from 'react'
import Product from "./productcart/Product";
import Pagination from "./Pagination/Pagination";

const MainPage = (props) => {
  //debugger
  console.log(props)
  
  let ProductInfo = props.data.map(productInfo =>
    <Product title={productInfo.title} img={productInfo.image_main}/>)
  
  return (
    <div>
      <Pagination store={props.data}/>
      <div className="product-list">
        {ProductInfo}
    
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