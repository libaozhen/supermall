export default {
  // 购物车中商品种类个数
  cartLength(state){
    return state.cartList.length
  },
  // 返回购物车数组
  cartList(state){
    return state.cartList
  }
}
