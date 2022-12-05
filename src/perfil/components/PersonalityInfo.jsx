import { Divider, Slider, Typography } from "@mui/material"
import { Box } from "@mui/system"

import { CardsLayout } from "../layout/CardsLayout"

export const PersonalityInfo = () => {
  return (

  <CardsLayout heighthCard = {"40"}>
        <Typography variant="h4" fontWeight='bold' fontSize={25}>
            Personality
        </Typography>
        <Divider sx={{marginBottom:'10px'}}/>
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
              <Typography fontWeight='bold'>
                  Introvert
              </Typography>
              <Typography fontWeight='bold'>
                  Extrovert
              </Typography>
        </Box>
        <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main'}, height:"10px", padding: '2px'}} defaultValue={40} aria-label="Default" valueLabelDisplay="auto" color="primary" />
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
              <Typography fontWeight='bold'>
                  Analitycal
              </Typography>
              <Typography fontWeight='bold'>
                  Creative
              </Typography>
        </Box>
        <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main'}, height:"10px", padding: '2px'}} defaultValue={45} aria-label="Default" valueLabelDisplay="auto" color="primary" />
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
              <Typography fontWeight='bold'>
                  Loyal
              </Typography>
              <Typography fontWeight='bold'>
                  Fickle
              </Typography>
        </Box>
        <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main'}, height:"10px", padding: '2px'}} defaultValue={10} aria-label="Default" valueLabelDisplay="auto" color="primary" />
        <Box sx={{display:'flex', justifyContent:'space-between'}}>
              <Typography fontWeight='bold'>
                  Pasive
              </Typography>
              <Typography fontWeight='bold'>
                  Active
              </Typography>
        </Box>
        <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main'}, height:"10px", padding: '2px'}} defaultValue={90} aria-label="Default" valueLabelDisplay="auto" color="primary" />
        
  </CardsLayout>

  )
}
