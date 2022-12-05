import { Divider, Typography } from "@mui/material"
import { CardsLayout } from "../layout/CardsLayout"

export const BioInfo = () => {

  return (
    <CardsLayout heighthCard = {"35"}>

        <Typography variant="h4" fontWeight='bold' fontSize={25}>
            Bio
        </Typography>
        <Divider/>

        <Typography mt={2} textAlign='justify' color='fontColor.main'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni possimus a nulla nobis, neque corrupti rem asperiores cumque consequuntur, placeat reprehenderit sed qui porro. In ipsam eveniet corrupti voluptates vitae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iste facere fuga ratione, quae neque dolores 
        </Typography>

    </CardsLayout>
                
    
  )
}



