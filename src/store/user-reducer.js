let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"


let initialState = {
    users: [],
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: true}
                    } else {
                        return u;
                    }
                })
            };
        case  UNFOLLOW:
            return {
                users: state.users.map(u => {
                    if (u.id === action.usersId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
            
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
}

export const followAC = (usersId) => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAc = (users) => ({type: SET_USERS, users})
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;