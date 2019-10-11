import React from 'react';
import s from './User.module.css';
import * as axiox from 'axios';


let Users = (props) => {
  //debugger;
  
  if (props.users.length === 0 ) {
    axiox.get("http://localhost:7200/users").then(response => {
      props.setUsers(response.data.items)
    })
    
    //
    // props.users([
    //   {id: 1, photoUrl: 'https://i.pinimg.com/originals/e8/8a/c3/e88ac3dbfcc5f5488d62ee95e593c9c5.jpg', followed: false, fullName: 'Ruslan', status: 'I am a boss', location: {city:'Minsk', country: 'Belarus'}},
    //   {id: 2, photoUrl: 'https://klike.net/uploads/posts/2019-06/1560149830_4.jpg', followed: true, fullName: 'Dima', status: 'I am a boss', location: {city:'Kiev', country: 'UK'}},
    //   {id: 3, photoUrl: 'https://cdn.trinixy.ru/pics5/20160801/akteri_uspeh_10.jpg', followed: true, fullName: 'Ura', status: 'I am a boss', location: {city:'Russian', country: 'Moscow'}},
    //   {id: 4, photoUrl: 'https://icdn.lenta.ru/images/2018/07/24/19/20180724195031816/pic_015fb553ca8f4e4a44bba68560f34e47.jpg', followed: false, fullName: 'Ann', status: 'I am a boss', location: {city:'Lubny', country: 'UK'}},
    //
    // ])
  }

  
  return (
    props.users.map((u) => {
      console.log(u.photoUrl)
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

    
    
