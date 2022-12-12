
export const saveNewPost = async ( info )=>{
    
     const resp = await fetch( "http://localhost:3004/post", {
         method: "POST",
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify( info )
     } )
 
     return resp;
 } 