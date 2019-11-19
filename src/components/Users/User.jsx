import React from 'react';
import s from './User.module.css';
import * as axiox from 'axios';
import Preloader from '../../common/preloader/preloader'
import people from '../../assets/images/people.png'
import AddUsersContainer from "../AddUsers/AddUsersContainer";
import {NavLink} from "react-router-dom";


class Users extends React.Component {

  // componentDidMount() {
  //   this.props.setFetching(true)
  //   axiox.get("http://localhost:7200/users").then(response => {
  //     this.props.setFetching(false)
  //     this.props.setUsers(response.data)
  //
  //   })
  // }

  render() {
    console.log(this.props)
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <div>
        {
          this.props.users.map((u) => <div>
              <div>
                <img className={s.picture} src={u.photoUrl !== "" ? u.photoUrl: people} alt=""/>
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
                
                <div>{this.props.countries[u.location.country]}</div>
                <div>{this.props.cities[u.location.city].name}</div>
              </div>
            </div>
          )
        }
      </div></>
  }
}

export default Users

    
    
