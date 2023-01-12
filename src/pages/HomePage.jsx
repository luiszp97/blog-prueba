import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"

import { getUserInfo } from "../helper/getUserInfo";
import { BioInfo, PerfilInfo,PersonalityInfo, GoalsInfo, MotivationsInfo, FrustrationsInfo, MyPostList } from "../perfil/components"

import { HomePageLayout } from "../perfil/layout"
import {NavBar} from "../ui/components";



export const HomePage = () => {

  const {id} = useParams();
  const [ userInfo, setUserInfo ] = useState(null);
  
  
  const logedUserInfo = useSelector(state => state.auth);
  

  const getInfo = async ()=>{
    const data = await getUserInfo(id);
    setUserInfo(data)
  }

  useEffect(()=>{
    getInfo()
  },[])
  
  return (
      <>
      <NavBar/>
      <HomePageLayout>
         <PerfilInfo info={(logedUserInfo.id !== id)? (userInfo !== null) && userInfo : logedUserInfo} />
         <BioInfo/>
         <PersonalityInfo/>
         <GoalsInfo/>
         <MotivationsInfo/>
         <FrustrationsInfo/>
         <MyPostList/>
       </HomePageLayout>
       </>

  )
}