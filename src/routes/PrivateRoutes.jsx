import { useSelector } from "react-redux"
import { Navigate, Route, Routes } from "react-router-dom"
import { CreateNewPost, HomePage, PostsList, PostView } from "../pages"

export const PrivateRoutes = () => {

  const {id} = JSON.parse(localStorage.getItem('user')); 

  return (
    <Routes>
        
        <Route path="profile/:id" element ={ <HomePage/> }/>
        <Route path="/post" element={ <CreateNewPost/> } />
        <Route path="/posts" element={ <PostsList/> } />
        <Route path="/posts/*" element={ <PostView/> } />

        <Route path="/*" element={<Navigate to ={`profile/${id}`}/>} />

    </Routes>
  )
}
