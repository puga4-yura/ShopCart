import React from 'react'
import Product from "./productcart/Product";
import Pagination from "./Pagination/Pagination";
import ResultCart from "./ChooseProduct/ChooseProduct";
import s from "./MainPage.module.css"

const MainPage = (props) => {
  //debugger
  //console.log(props.removeElement)
  console.log('pr',props.state.product)
  let ProductInfo = Object.values(props.state.product).map((productInfo,index) =>
    <Product   title={productInfo.title}
               willBuy={props.state.willBuy}
               product={productInfo}
               index={index}
               dispatch={props.dispatch}
               img={productInfo.image_main}/>)
  return (
    <div className={s.container}>
      <div>
        
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

      <ResultCart store={props.state}/>
    </div>
  )
}
//<Pagination store={props.data}/>
export default MainPage;