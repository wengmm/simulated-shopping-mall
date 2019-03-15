import {createStore} from '../lib/redux.js'
// console.log(createStore)
export const addCart=(product)=>{
  console.log("加入成功")
  return{
    type: ADD_CART,
    payload:{
      product
    }
  }
}

const carreducer=(state={cart:[]},action) =>{
  switch(action.type){
    case "ADD_CART":
    // 首先判断购物车是否有这件商品
     const hasCart=state.cart.some(item=>{
       return item.id===action.payload.product.id
     });
     const newcart=state.cart.slice();
     if (hasCart){
       newcarts=newcart.map(item=>{
         if(item.id===action.payload.product.id){
           item.count+=1
         }else{
           newcart.push({
             ...action.payload.product,
             count:1
           })
         }
       })
      };
    return{
      ...state,
      cart:newcarts
    };
    default:
    return state
  }
  

}

export default createStore(carreducer)