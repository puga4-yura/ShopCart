import React from 'react'
import ProductContainer from "./productcart/ProductContainer";
import Pagination from "./Pagination/Pagination";
//import ResultCartContainer from "";
import s from "./MainPage.module.css"
import ResultCartContainer from "./ChooseProduct/ChoseProductContainer";

const MainPage = (props) => {
  return (
    <div className={s.container}>
      <div>
        <div className="product-list">
          <ProductContainer />
        </div>
      </div>
      {/*<ResultCartContainer store={props.state}/>*/}
    </div>
  )
}
//<Pagination store={props.data}/>
export default MainPage;