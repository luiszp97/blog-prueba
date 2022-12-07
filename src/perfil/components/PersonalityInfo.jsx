import { Divider, Slider, Typography } from "@mui/material"
import { Box } from "@mui/system"

import { CardsLayout } from "../layout/CardsLayout"

export const PersonalityInfo = () => {
  return (

  <CardsLayout heighthCard = {"40"}>

        <Typography variant="h6" fontWeight='bold' >
            Personality
        </Typography>

        <Divider sx={{marginBottom:'10px'}}/>

        <Box display='flex' flexDirection='column' height='75%' justifyContent='space-evenly'>

            <Box sx={{display:'flex', justifyContent:'space-between'}}>

                <Typography fontWeight='700' fontSize='0.9rem' >
                    Introvert
                </Typography>
                <Typography fontWeight='700' fontSize='0.9rem'>
                    Extrovert
                </Typography>

            </Box>

            <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main', width:'15px', height:'15px'}, height:"10px", padding: '2px'}} defaultValue={40} aria-label="Default" valueLabelDisplay="auto" color="primary" />

            <Box sx={{display:'flex', justifyContent:'space-between'}}>

                <Typography fontWeight='bold' fontSize='0.9rem'>
                    Analitycal
                </Typography>
                <Typography fontWeight='bold' fontSize='0.9rem' >
                    Creative
                </Typography>

            </Box>

            <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main', width:'15px', height:'15px'}, height:"10px", padding: '2px'}} defaultValue={45} aria-label="Default" valueLabelDisplay="auto" color="primary" />

            <Box sx={{display:'flex', justifyContent:'space-between'}}>

                <Typography fontWeight='bold' fontSize='0.9rem'>
                    Loyal
                </Typography>
                <Typography fontWeight='bold' fontSize='0.9rem'>
                    Fickle
                </Typography>

            </Box>

            <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main', width:'15px', height:'15px'}, height:"10px", padding: '2px'}} defaultValue={10} aria-label="Default" valueLabelDisplay="auto" color="primary" />

            <Box sx={{display:'flex', justifyContent:'space-between'}}>

                <Typography fontWeight='bold' fontSize='0.9rem' >
                    Pasive
                </Typography>
                <Typography fontWeight='bold' fontSize='0.9rem' >
                    Active
                </Typography>

            </Box>

            <Slider sx={{'& .MuiSlider-thumb': { borderRadius:'0px', backgroundColor:'error.main', width:'15px', height:'15px'}, height:"10px", padding: '2px'}} defaultValue={90} aria-label="Default" valueLabelDisplay="auto" color="primary" />
        </Box>
        
  </CardsLayout>

  )
}
