import React from 'react'
import {connect} from "react-redux";
import AddUsers from "./AddUsers";
import {addTextAC} from "../../store/user-reducer";



let mapStateToProps =(state) => {
      return {
        newUserInfo: state
      }
};

let mapDispatchToProps =(dispatch) => {
      return {
        changeText: (textInfo) => {
          dispatch(addTextAC(textInfo))
        }
      }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddUsers)