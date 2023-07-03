import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:{
            getCart(state, action){
                // state.push(action.payload);
                state = [...state,action.payload]
            },
            addToCart(state, action){
                console.log("From Reducer",action.payload)
                state.push(action.payload)
            },
            deleteAllCart(state){
                return (state = []);
            },
            deleteById(state,action){
                const id = action.payload;
                console.log("----------",id);
                return state.filter((item) => item.pid !== id);
            },
            editById(state,action){
                console.log("edit reducer",action.payload);
                state.map((item)=>{
                    if(item.pid === action.payload.id){
                         item.quantity = action.payload.quant;         
                    }})
            }
        }
    }
);

export const { getChat , addToCart , deleteAllCart , deleteById ,editById} =  CartSlice.actions;
export default CartSlice;