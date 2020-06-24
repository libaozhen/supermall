export default {
  // 商品加数量加1
  addCounter(state,payload){
    payload.count ++;
  },
  // 添加商品到购物车数组
  addIntoCart(state,payload){
    state.cartList.push(payload);
  }
}
