import React from 'react'
import ResultCar from './ChooseProduct'
import {connect} from "react-redux";

const ResultCartContainer = (state) => {
    return <ResultCar
            count = {state.result.length}
            text = {state.result.map(productInfo => {return(
              <div>
                <div>Title: {productInfo.title}</div>
                <div>Price: {productInfo.price}</div>
              </div>
              )
               })}
      />;

};

let mapStateToProps = (state) => {
  return {
    result: state.result
  }
};



export default connect(mapStateToProps)(ResultCartContainer);
