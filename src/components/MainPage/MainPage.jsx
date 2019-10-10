import React from 'react'
import ProductInfo from "../Productcart/ProductContainer";
import Pagination from "../Pagination/Pagination";
//import ResultCartContainer from "";
import s from "./MainPage.module.css"
import ResultCartContainer from "../ChooseProduct/ChoseProductContainer";

const MainPage = () => {
  return (
    <div className={s.container}>
      <div>
        <div className="product-list">
          <ProductInfo />
        </div>
      </div>
      <ResultCartContainer />
    </div>
  )
}
//<Pagination store={props.data}/>
export default MainPage;