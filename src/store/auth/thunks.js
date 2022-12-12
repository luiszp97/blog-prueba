import { errorRegister, login } from "./authSlice";

export const startRegisterUser = ( info )=>{

    
    return async ( dispatch ) =>{

        const resp = await fetch( "http://localhost:3004/users" );
        const data = await resp.json();

        const existingEmail = data.some ( user => user.email === info.email )
        const existingUsername = data.some ( user => user.username === info.username )

        if(!existingEmail && !existingUsername){

            const userInfo = {...info, id: `${data.length+1}` }

            await fetch( "http://localhost:3004/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify( userInfo )
            } )

            dispatch ( login( userInfo ) )

            const stringifyData = JSON.stringify({...userInfo, status:'authenticated'});
            localStorage.setItem('user', stringifyData)

        }

        if(existingEmail){
            dispatch( errorRegister('Correo existente') )
        }

        if( existingUsername ){
            dispatch( errorRegister('Usuario existente') )
        }
    }
};

export const startLoginUser = ( info ) => {
    return async ( dispatch )=>{

        const resp = await fetch( "http://localhost:3004/users" );
        const data = await resp.json();

        const existingUser = data.some( user => user.email === info.email && user.password.length === info.password.length )
            
        if(existingUser){

           const index =  data.findIndex( user => user.email === info.email);
           const stringifyData = JSON.stringify({...data[index], status:'authenticated'})

           dispatch( login( data[index] ) )

           localStorage.setItem('user', stringifyData)
        }
    }
};

