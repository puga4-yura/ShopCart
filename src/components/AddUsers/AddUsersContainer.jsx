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
        changeText: (addUser) => {
          dispatch(addTextAC(addUser))
        }
      }
};


export default connect(mapStateToProps, mapDispatchToProps)(AddUsersClass)