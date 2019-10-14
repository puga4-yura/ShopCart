let FOLLOW = "FOLLOW"
let UNFOLLOW = "UNFOLLOW"
let SET_USERS = "SET_USERS"


let initialState = {
    users: [
        {
            id: 1,
            photoUrl: 'https://i.pinimg.com/originals/e8/8a/c3/e88ac3dbfcc5f5488d62ee95e593c9c5.jpg',
            followed: false,
            fullName: 'Ruslan',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl: 'https://klike.net/uploads/posts/2019-06/1560149830_4.jpg',
            followed: true,
            fullName: 'Dima',
            status: 'I am a boss',
            location: {city: 'Kiev', country: 'UK'}
        },
        {
            id: 3,
            photoUrl: 'https://cdn.trinixy.ru/pics5/20160801/akteri_uspeh_10.jpg',
            followed: true,
            fullName: 'Ura',
            status: 'I am a boss',
            location: {city: 'Russian', country: 'Moscow'}
        },
        {
            id: 4,
            photoUrl: 'https://icdn.lenta.ru/images/2018/07/24/19/20180724195031816/pic_015fb553ca8f4e4a44bba68560f34e47.jpg',
            followed: false,
            fullName: 'Ann',
            status: 'I am a boss',
            location: {city: 'Lubny', country: 'UK'}
        },
    ]
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

        default:
            return state;
    }
}

export const followAC = (usersId) => ({type: FOLLOW, usersId})
export const unfollowAC = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsersAc = (users) => ({type: SET_USERS, users})
export default usersReducer;