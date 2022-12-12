import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../store/auth/authSlice"

export const checkStatus = () => {
    
  const {status} = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('user')){
      
        const userInfo = JSON.parse(localStorage.getItem('user'));
        dispatch( login(userInfo) )
    }

  },[])

  return status;
}
