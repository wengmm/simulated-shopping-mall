import {createStore} from '../lib/redux.js'
// console.log(createStore)
const ADD_CART ="ADD_CART"
export const addCart=(product)=>{
  console.log("加入成功")
  return{
    type: ADD_CART,
    payload:{
      id:product
    }
  }
}

const carreducer=(state={cart:wx.getStorageSync("product") ||[]},action) =>{
  switch(action.type){
    case "ADD_CART":
    // 首先判断购物车是否有这件商品
      
     const hasCart=state.cart.some(item=>{
       return item.id===action.payload.id
     });
     let newcart=state.cart.slice();
      
       console.log(hasCart)
     if (hasCart){       
        newcart=newcart.map(item=>{
         if(item.id===action.payload.id){
            item.count+=1
            
         }
          return item
       })
     
        } else{
           newcart.push({
             id:action.payload.id,
             count:1
           })
          
         }
      
      //  console.log(newcart)
      wx.setStorageSync("product", newcart)     
    return{
      ...state,
      cart:newcart
    };
    default:
    return state
  }
  

}

export default createStore(carreducer)