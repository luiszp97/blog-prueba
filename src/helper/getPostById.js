
export const getPostById = async (id) => {
    
    const resp = await fetch('http://localhost:3004/posts');
    const data = await resp.json()

    const index = data.findIndex(element => element.id === id);
    const postInfo = data[index]

    return postInfo;
}   