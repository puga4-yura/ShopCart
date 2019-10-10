import React from 'react'
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
  {props.users.map(u => <div>
      <span>
        <div>
          <img src="" alt=""/>
        </div>
        <div>
          <button>Follow</button>
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
      </span>)}
    
    
