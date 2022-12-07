import { Box, Divider, Slider, Typography } from "@mui/material"
import { CardsLayout } from "../layout/CardsLayout"


export const MotivationsInfo = () => {
  return (
    <CardsLayout heighthCard = {"40"}>
        <Typography variant="h6" fontWeight='bold' >
            Motivations
        </Typography>
        <Divider sx={{marginBottom:'10px'}}/>

        <Box display='flex' flexDirection='column' height='75%' justifyContent='space-evenly'>

            <Typography fontWeight='bold' fontSize='0.9rem'> 
                Price
            </Typography>

            <Slider sx={{'& .MuiSlider-thumb': { display:'none'}, height:"10px", padding: '2px'}} defaultValue={50} aria-label="Default" valueLabelDisplay="auto" color="error" />

                <Typography fontWeight='bold' fontSize='0.9rem'>
                    Comfort
                </Typography>
                
            <Slider sx={{'& .MuiSlider-thumb': { display:'none'}, height:"10px", padding: '2px'}} defaultValue={60} aria-label="Default" valueLabelDisplay="auto" color="error" />
            
                <Typography fontWeight='bold' fontSize='0.9rem'>
                    Convivence
                </Typography>
            
            <Slider sx={{'& .MuiSlider-thumb': { display:'none'}, height:"10px", padding: '2px'}} defaultValue={45} aria-label="Default" valueLabelDisplay="auto" color="error" />

                <Typography fontWeight='bold' fontSize='0.9rem'>
                    Speed
                </Typography>
                
            <Slider sx={{'& .MuiSlider-thumb': {display:'none'}, height:"10px", padding: '2px'}} defaultValue={80} aria-label="Default" valueLabelDisplay="auto" color="error" />

        </Box>

    </CardsLayout>
  )
}
