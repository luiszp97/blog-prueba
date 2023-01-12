import { Navigate, Route, Routes } from "react-router-dom"


import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { checkStatus } from "../helper/checkStatus";
import { Loading } from "../pages/Loading";
import { PrivateRoutes } from "./PrivateRoutes"

export const AppRoutes = () => {

 const status = checkStatus();
 
 if(status === "checking"){
    return <Loading/>
 } 

  return (
    <Routes>
        {
            (status === "authenticated")
            ?<Route path = "/*" element ={ <PrivateRoutes/> } />
            :<Route path="auth/*" element={ <AuthRoutes/> }/>

        }
        <Route path="/*" element = {<Navigate to = '/auth/' />}/>

    </Routes>
  )
}
