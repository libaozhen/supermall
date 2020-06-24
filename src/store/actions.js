export default {
  addCart(context,payload){
    // 寻找是否含有该商品
    const goods = context.state.cartList.find((item,index)=>{
      return item.iid == payload.iid
    });
    // 含有该商品则调用addCounter,数量加1
    if(goods){
      context.commit('addCounter',goods);
    }else{
      context.commit('addIntoCart',payload);
    }
  }
}
