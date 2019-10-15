import React from 'react';
import s from './User.module.css';
import * as axiox from 'axios';

class Users extends React.Component {
  componentDidMount() {
    axiox.get("http://localhost:7200/users").then(response => {
      debugger
      this.props.setUsers(response.users)
    })
  }
  
  render() {
    //debugger
    return <div>
        {
          this.props.users.map((u) => <div>
              <div>
                <img className={s.picture} src={u.photoUrl} alt=""/>
                <div>
                  {u.followed
                    ? <button onClick={() => {
                      this.props.unfollow(u.id)
                    }}>UnFollow</button>
                    : <button onClick={() => {
                      this.props.follow(u.id)
                    }}>Follow</button>
                  }
                </div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
              </div>
            </div>
          )
        }
      </div>
      
  }
}

export default Users

    
    
