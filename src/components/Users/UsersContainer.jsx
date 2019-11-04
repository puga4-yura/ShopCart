import React from 'react'
import {connect} from "react-redux";
import Users from "./User"
import {follow, setUsers, unfollow, setFetching} from "../../store/user-reducer";


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    isFetching: state.usersPage.isFetching
    
  }
};

// let mapDispatchToProps =(dispatch) => {
//   return {
//     follow: (userId) => {
//         dispatch(followAC(userId))
//     },
//     unfollow: (userId) => {
//         dispatch(unfollowAC(userId))
//     },
//
//     setUsers: (users) => {
//       dispatch(setUsersAc(users))
//   },
//     setFetching: (isFetching) => {
//       dispatch(setIsFetching (isFetching))
//   }
//   }
// }


export default connect(mapStateToProps, {follow, unfollow, setUsers, setFetching})(Users)

