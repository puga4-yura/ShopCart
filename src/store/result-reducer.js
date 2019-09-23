// const TO_WILL_BUY = 'TO_WILL_BUY';
// const REMOVE_TO_WILL_BUY = 'REMOVE_TO_WILL_BUY';
//
// export const productToWillBuyCount = (product) => ({type: TO_WILL_BUY, productTitle: product.title, productPrice: product.price});
// export const removeToWillBuyCount = () => ({type: REMOVE_TO_WILL_BUY});
//
// let productToWillBuyCount=(el,index) => {
//   el.inCart=true;
//   this._state.product=Object.values({
//     ...this._state.product,
//     [index]:el
//   });
//   this._state.result.push(el);
//   this._callSubcriber(this._state.product);
// };
// let removeElementFromBuy =(el,index) => {
//   el.inCart=false;
//   const updataNewList = this._state.result.filter(function (item) {
//     return item.id !== el.id;
//   });
//   this._state.product=Object.values({
//     ...this._state.product,
//     [index]:el
//   });
//   this._state.result = updataNewList;
//   this._state.willBuy= true;
//   this._callSubcriber(this._state.result)
// }
// const resultReducer = (state, action) => {
//   //console.log(el)
//   //console.log(state.map(productTitle => {return productTitle.id }));
//   //const id = state.map(productTitle => {return productTitle.id });
//   if(action.type === TO_WILL_BUY){
//
//   }
//   else  if (action.type === REMOVE_TO_WILL_BUY  ) {
//
//   }
//
//   return state;
// }
//
// export default resultReducer;