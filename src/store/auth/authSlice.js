import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated',
        id: null,
        // fullName: null,
        firstname: null,
        lastname: null,
        email: null,
        brithday: null,
        username: null,
        errorMessage: null
        
    },
    reducers:{


        login: (state, {payload})=>{

            state.status = 'authenticated';
            state.id = payload.id;
            // state.fullName = `${payload.firstname} ${payload.lastname}`;
            state.firstname = payload.firstname;
            state.lastname = payload.lastname;
            state.email = payload.email;
            state.brithday = payload.brithday;
            state.username = payload.username;
            state.errorMessage = null

        },

        logout: (state, {payload}) => {

            state.status= 'not-authenticated';
            state.id= null;
            state.fullName= null;
            state.email= null;
            state.brithday= null;
            state.username= null;

        },

        chekingCredentials: (state) => {

            state.status = 'cheking';

        },
        
        errorRegister: (state, {payload}) =>{
            state.status = 'not-authenticated'
            state.errorMessage = payload
        }

    }
})

export const { login, logout, chekingCredentials, errorRegister } = authSlice.actions;