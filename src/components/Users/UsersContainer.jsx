import React from 'react'
import {connect} from "react-redux";
import Users from "./User"
import {followAC, setUsersAc, unfollowAC} from "../../store/user-reducer";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
};

let mapDispatchToProps =(dispatch) => {
  return {
    follow: (userId) => {
        dispatch(followAC(userId))
    },
    unfollow: (userId) => {
        dispatch(unfollowAC(userId))
    },
    
    setUsers: (users) => {
      dispatch(setUsersAc(users))
  }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)

