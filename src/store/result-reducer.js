const TO_WILL_BUY = 'TO_WILL_BUY';
const REMOVE_TO_WILL_BUY = 'REMOVE_TO_WILL_BUY';

export const productToWillBuyCount = (product) => ({
    type: TO_WILL_BUY,
    productTitle: product.title,
    productPrice: product.price
});
export const removeToWillBuyCount = () => ({type: REMOVE_TO_WILL_BUY});

let addToCart = (state, el) => {
    state.push(el.product);
    return state;
};
let removeFromeCart = (state, action) => {
    return state.filter(function (item) {
        return item.id !== action.product.id;
    });
}
const resultReducer = (state, action) => {
    if (action.type === TO_WILL_BUY) {
        state = addToCart(state, action);
    } else if (action.type === REMOVE_TO_WILL_BUY) {
        state = removeFromeCart(state, action)
        //  state = state.filter(function (item) {
        //   return item.id !== action.product.id;
        // });
    }
    console.log(state);
    return state;
}

export default resultReducer;