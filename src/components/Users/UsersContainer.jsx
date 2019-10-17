import React from 'react'
import {connect} from "react-redux";
import Users from "./User"
import {followAC, setUsersAc, unfollowAC, setIsFetching} from "../../store/user-reducer";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching
    
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
  },
    setFetching: (isFetching) => {
      dispatch(setIsFetching (isFetching))
  }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users)

