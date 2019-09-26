import React from 'react'
import Product from "./productcart/Product";
import Pagination from "./Pagination/Pagination";
import ResultCart from "./ChooseProduct/ChooseProduct";
import s from "./MainPage.module.css"

const MainPage = (props) => {
  let ProductInfo = props.state.product.map((productInfo,index) =>
    <Product   product={productInfo}
               index={index}
               dispatch={props.dispatch}/>)
  return (
    <div className={s.container}>
      <div>
        <div className="product-list">
          {ProductInfo}
        </div>
      </div>
      <ResultCart store={props.state}/>
    </div>
  )
}
//<Pagination store={props.data}/>
export default MainPage;