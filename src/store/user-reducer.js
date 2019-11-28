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
            location: {city: '3', country: '2'}
        },
        {
            id: 2,
            photoUrl: '',
            followed: true,
            fullName: 'Dima',
            status: 'I am a boss',
            location: {city: '2', country: '3'}
        },
        {
            id: 3,
            photoUrl: 'https://cdn.trinixy.ru/pics5/20160801/akteri_uspeh_10.jpg',
            followed: true,
            fullName: 'Ura',
            status: 'I am a boss',
            location: {city: '3', country: '4'}
        },
    ],
    isFetching: false,
    newUserInfo: "",
    cities:

        {
            "2": {
                "country": 3,
                "name": "Paris"
            },
            "3": {
                "country": 4,
                "name": "Madrid"
            },
            "4": {
                "country": 6,
                "name": "Houston"
            },
            "5": {
                "country": 7,
                "name": "Montreal"
            },
            "6": {
                "country": 8,
                "name": "Кишинев"
            },
            "7": {
                "country": 9,
                "name": "Minsk"
            },
            "8": {
                "country": 10,
                "name": "Warsaw"
            },
            "100": {
                "country": 1,
                "name": "Львов"
            },
            "101": {
                "country": 1,
                "name": "Николаев"
            },
            "103": {
                "country": 1,
                "name": "Переяслав-Хмельницкий"
            },
            "104": {
                "country": 1,
                "name": "Каменец-Подольский"
            },
            "105": {
                "country": 1,
                "name": "Donetsk"
            },
            "106": {
                "country": 1,
                "name": "Kharkov"
            },
            "107": {
                "country": 1,
                "name": "Луцк"
            },
            "108": {
                "country": 1,
                "name": "Poltava"
            },
            "109": {
                "country": 1,
                "name": "Черновцы"
            },
            "299": {
                "country": 1,
                "name": "Чернигов"
            }
        },
    countries:
        {
        "1": "Ukraine",
        "2": "Germany",
        "3": "France",
        "4": "Spain",
        "5": "Sweden",
        "6": "USA",
        "7": "Canada",
        "8": "Moldova",
        "9": "Belarus",
        "10": "Poland"
    }
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
            let maxid = 0;
            state.users.forEach(function (current) {
                if (current.id > maxid) {
                    maxid = current.id
                }
                return maxid += 1;
            })
            console.log(maxid)

            let newPost = {
                id: {maxid},
                photoUrl: '',
                followed: false,
                fullName: action.values.name,
                status: action.values.state,
                //location: {country: action.textInfo.country, city: action.textInfo.city}
            }
     
            return {...state, users: [newPost, ...state.users]}
        }


        default:
            return state;
    }
}

export const follow = (usersId) => ({type: FOLLOW, usersId})
export const unfollow = (usersId) => ({type: UNFOLLOW, usersId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const addTextAC = (values) => ({type: ADD_INFORMATION_NEW_USERS, values});

export default usersReducer;