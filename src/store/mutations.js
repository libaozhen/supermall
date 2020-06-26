export default {
  // 商品加数量加1
  addCounter(state,payload){
    payload.count ++;
  },
  // 添加商品到购物车数组
  addIntoCart(state,payload){
    state.cartList.push(payload);
  },
  // 数量+1
  increase(state,payload){
    payload.count ++;
  },
  // 数量-1
  decrease(state,payload){
    payload.count --;
  },
  //更改某个商品选中状态
  updateChecked(state,payload){
    let iid = payload.iid;
    let goods = state.cartList.find((v,i)=>{
      return v.iid === iid
    });
    goods.checked = payload.checked;
  },
  toggleCheckAll(state,payload){
    state.cartList.forEach((v,i)=>{
      v.checked = payload.checked
    })
  }
}
