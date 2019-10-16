import React from 'react';
import s from './User.module.css';
import * as axiox from 'axios';
import preloader from './../../../src/assets/images/preloader.gif'

class Users extends React.Component {
  componentDidMount() {
    axiox.get("http://localhost:7200/users").then(response => {
      // почему в дебаге data а не users
      this.props.setUsers(response.data)
    })
  }
  
  render() {
    debugger
    return <>
      {this.props.isFetching ? <img className={s.preloader} srs={preloader}/> : null}
      <div>
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
      </div></>
      
  }
}

export default Users

    
    
