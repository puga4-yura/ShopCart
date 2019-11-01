let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"
let TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
//let CHANGE_INFORMATION_NEW_USERS = "CHANGE_INFORMATION_NEW_USERS"
let ADD_INFORMATION_NEW_USERS = "ADD_INFORMATION_NEW_USERS"


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://i.pinimg.com/originals/e8/8a/c3/e88ac3dbfcc5f5488d62ee95e593c9c5.jpg',
            followed: false,
            fullName: 'Ruslan',
            status: 'I am a boss',
            location: {city:'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: '',
            followed: true,
            fullName: 'Dima',
            status: 'I am a boss',
            location: {city:'Kiev', country: 'UK'}
        },
        {
            id: 3,
            photoUrl: 'https://cdn.trinixy.ru/pics5/20160801/akteri_uspeh_10.jpg',
            followed: true,
            fullName: 'Ura',
            status: 'I am a boss',
            location: {city:'Russian', country: 'Moscow'}
        },
    ],
    isFetching: false,
    newUserInfo: ""
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

        case ADD_INFORMATION_NEW_USERS: {
            debugger;
            let maxid = 0;
            state.users.forEach(function (current) {
                    if (current.id > maxid) {
                        maxid = current.id
                    }
                    return maxid +=1;
                })
            
            let newPost =  {id: {maxid}, photoUrl: '', followed: false, fullName: action.textInfo, status: 'I am a boss', location: {city:'Minsk', country: 'Belarus'}}
            
            return {...state, users: [...state.users, newPost]}
        }
        
        
        default:
            return state;
    }
}

export const follow = (usersId) => ({type: FOLLOW, usersId})
export const unfollow = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

//export const changeText = (textChange) => ({type: CHANGE_INFORMATION_NEW_USERS, textChange});
export const addTextAC = (textInfo) => ({type: ADD_INFORMATION_NEW_USERS, textInfo});

export default usersReducer;