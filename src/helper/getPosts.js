

export const getPosts = async () => {
    
    const resp = await fetch('http://localhost:3004/posts');
    const data = await resp.json()

    return data;
}  