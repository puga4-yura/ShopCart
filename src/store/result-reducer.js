const TO_WILL_BUY = 'TO_WILL_BUY';
const REMOVE_TO_WILL_BUY = 'REMOVE_TO_WILL_BUY';


let initialState = [];

let addToCart = (state, el) => {
    let stateCopy = [...state];
    stateCopy.push(el.product);
    return stateCopy;
};

let removeFromCart = (state, action) => {
    return state.filter(function (item) {
        return item.id !== action.product.id;
    });
}
const resultReducer = (state   =  initialState, action) => {
    if (action.type === TO_WILL_BUY) {
        state = addToCart(state, action);
        
    } else if (action.type === REMOVE_TO_WILL_BUY) {
        state = removeFromCart(state, action)
    }
    //console.log(state);
    return state;
}

export default resultReducer;