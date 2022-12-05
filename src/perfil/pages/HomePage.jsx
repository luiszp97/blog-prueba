import { BioInfo, PerfilInfo,PersonalityInfo, GoalsInfo, MotivationsInfo, FrustrationsInfo, MyPostList } from "../components"

import { HomePageLayout } from "../layout"

export const HomePage = () => {
  return (
    <HomePageLayout>
        <PerfilInfo/>
        <BioInfo/>
        <PersonalityInfo/>
        <GoalsInfo/>
        <MotivationsInfo/>
        <FrustrationsInfo/>
        <MyPostList/>
    </HomePageLayout>
  )
}
