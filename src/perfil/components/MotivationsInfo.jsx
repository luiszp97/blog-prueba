import { Box, Divider, Slider, Typography } from "@mui/material"
import { CardsLayout } from "../layout/CardsLayout"


export const MotivationsInfo = () => {
  return (
    <CardsLayout heighthCard = {"40"}>
        <Typography variant="h4" fontWeight='bold' fontSize={25}>
            Motivations
        </Typography>
        <Divider sx={{marginBottom:'10px'}}/>

              <Typography fontWeight='bold'>
                  Price
              </Typography>

        <Slider sx={{'& .MuiSlider-thumb': { display:'none'}, height:"10px", padding: '2px'}} defaultValue={40} aria-label="Default" valueLabelDisplay="auto" color="error" />

              <Typography fontWeight='bold'>
                  Comfort
              </Typography>
              
        <Slider sx={{'& .MuiSlider-thumb': { display:'none'}, height:"10px", padding: '2px'}} defaultValue={45} aria-label="Default" valueLabelDisplay="auto" color="error" />
        
              <Typography fontWeight='bold'>
                  Convivence
              </Typography>
        
        <Slider sx={{'& .MuiSlider-thumb': { display:'none'}, height:"10px", padding: '2px'}} defaultValue={10} aria-label="Default" valueLabelDisplay="auto" color="error" />

              <Typography fontWeight='bold'>
                  Speed
              </Typography>
            
        <Slider sx={{'& .MuiSlider-thumb': {display:'none'}, height:"10px", padding: '2px'}} defaultValue={90} aria-label="Default" valueLabelDisplay="auto" color="error" />

    </CardsLayout>
  )
}
