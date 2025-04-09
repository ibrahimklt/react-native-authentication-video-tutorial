import { createSlice } from "@reduxjs/toolkit";


const initialState={
    email: null,
    password:null,
    isLoading:false,
    isAuth: false,
    users:{
        useremail :"test@test.com",
        userpassword:"123456"
    }
}


export const userSlice =createSlice({
    name:'user',
    initialState,
    reducers:{
        setEmail:(state, action)=>{
            const loverCaseEmail= action.payload.toLowerCase()
            state.email = loverCaseEmail
        },
        setPassword:(state, action)=>{
            state.password = action.payload
        },
        setIsloading : (state , action) =>{
            state.isLoading = action.payload
        },
        setLogin:(state)=>{
            if((state.email===state.users.useremail) 
                &&(state.password===state.users.userpassword)){
                console.log(true)
                state.isAuth=true
            }else{
                console.log(false)
            }
        }
    }
})


export const {setEmail,setPassword,setIsloading,setLogin} =userSlice.actions
export default userSlice.reducer;