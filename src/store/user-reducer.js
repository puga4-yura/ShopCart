let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"


let initialState = {
  users: [
    // {id: 1, followed: true, fullName: 'Ruslan', status: 'I am a boss', location: {city:'Minsk', country: 'Belarus'}},
    // {id: 2, followed: true, fullName: 'Dima', status: 'I am a boss', location: {city:'Kiev', country: 'UK'}},
    // {id: 3, followed: true, fullName: 'Ura', status: 'I am a boss', location: {city:'Russian', country: 'Moscow'}},
    // {id: 4, followed: false, fullName: 'Ann', status: 'I am a boss', location: {city:'Lubny', country: 'UK'}},
  ]
};

const usersReducer = (state = initialState, action ) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ... state,
        users: state.users.map(u => {
          if (u.id === action.usersId) {
            return { ...u,followed:true}
          }
        })
      }
    case  UNFOLLOW:
      return {
        ... state,
        users: state.users.map(u => {
          if (u.id === action.usersId) {
            return { ...u,followed:false}
          }
        })
      }
      
    case SET_USERS:
      return{ ...state, users: [...state.users, ...action.users]}
      
    default:
      return state;
  }
}

export const followAC = (usersId) => ({type: FOLLOW})
export const unfollowAC = (usersId) => ({type: UNFOLLOW})
export const setUsersAc = (users) => ({type: SET_USERS, userId})
export default usersReducer;