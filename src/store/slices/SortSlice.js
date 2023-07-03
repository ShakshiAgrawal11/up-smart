import { createSlice } from '@reduxjs/toolkit';

const SortSlice = createSlice(
    {
        name:'sort',
        initialState:[],
        reducers:{
            getSort(state, action){
                console.log("In Reducer",action.payload);
                return  action.payload;
            },
            sortByColor(state,action){
                const color = action.payload;
                return state.filter((item) => item.color === color);
            },
            sortInAsc(state, action){
                console.log("in ascending order----------------------------------");
                state.sort((x,y) =>{
                    return x.price - y.price;
                })
            },
            sortInDesc(state, action){
                console.log("in desc order----------------------------------");
                state.sort((x,y) =>{
                    return y.price - x.price;
                })
            }
        }
    }
);

export const { getSort ,sortByColor ,sortInAsc , sortInDesc} =  SortSlice.actions;
export default SortSlice;