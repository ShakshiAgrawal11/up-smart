import { createSlice } from '@reduxjs/toolkit';

const SinglePageData = createSlice(
    {
        name:'data',
        initialState:{},
        reducers:{
            addData(state, action){
                console.log("slice action.payload---",action.payload);
                return state=action.payload;
            }
        }
    }
);

export const { addData } =  SinglePageData.actions;
export default SinglePageData;