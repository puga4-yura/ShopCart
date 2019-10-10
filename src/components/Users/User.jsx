import React from 'react'
import s from './User.module.css'
//
// class Users extends React.Component{
//   constructor(props) {
//     super(props);
//
//   }
//
//   render() {
//     <div></div>
//     }
// }

let Users = (props) => {
  return (
    props.users.map((u) => {
      //console.log(u.followed)
      return <div>
      <span>
        <div>
          <img className={s.picture} src={u.photoUrl} alt=""/>
        </div>
        <div>
          { u.followed
            ?<button onClick={()=>{props.unfollow(u.id)}}>UnFollow</button>
            :<button onClick={()=>{props.follow(u.id)}}>Follow</button>
          }
        </div>
      </span>
        <span>
        <span>
          <div>{u.fullName}</div>
          <div>{u.status}</div>
        </span>
        <span>
          <div>{u.location.country}</div>
          <div>{u.location.city}</div>
         </span>
        </span>
      </div>
    }));
}

export default Users

    
    
