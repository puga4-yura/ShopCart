import React from 'react'
import ProductContainer from "./productcart/ProductContainer";
import Pagination from "./Pagination/Pagination";
//import ResultCartContainer from "";
import s from "./MainPage.module.css"
import ResultCartContainer from "./ChooseProduct/ChoseProductContainer";

const MainPage = (props) => {
  let ProductInfo = props.state.product.map((productInfo,index) =>
    <ProductContainer     product={productInfo}
                         index={index}
                         dispatch={props.dispatch}/>)
  return (
    <div className={s.container}>
      <div>
        <div className="product-list">
          {ProductInfo}
        </div>
      </div>
      <ResultCartContainer store={props.state}/>
    </div>
  )
}
//<Pagination store={props.data}/>
export default MainPage;