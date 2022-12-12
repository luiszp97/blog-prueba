

export const getUserInfo = async (id) => {
    
    const resp = await fetch('http://localhost:3004/users');
    const data = await resp.json()

    const index = data.findIndex(element => element.id === id);
    const userInfo = data[index]

    return userInfo;
}   
