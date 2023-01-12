

export const deleatedPost = async(id, userId) => {
  
    const resp = await fetch( `http://localhost:3004/posts/${id}`, {
        method:'DELETE',
        headers:{
            'Authorization' : `Basic ${userId}`
        }
    
    } )

    return resp;
}
