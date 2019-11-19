import React from 'react'
import {connect} from "react-redux";
import AddUsersClass from "./AddUsers";
import {addTextAC} from "../../store/user-reducer";



let mapStateToProps =(state) => {
      return {
        UserInfo: state.usersPage
      }
};

let mapDispatchToProps =(dispatch) => {
      return {
        changeText: (textInfo) => {
          dispatch(addTextAC(textInfo))
        }
      }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddUsersClass)