import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice(
    {
        name:'data',
        initialState:{},
        reducers:{
            addUser(state, action){
                console.log("User slice action.payload---",action.payload);
                return state=action.payload;
            },
            addEmail(state,action){
               
            }
        }
    }
);

export const { addUser } =  UserSlice.actions;
export default UserSlice;