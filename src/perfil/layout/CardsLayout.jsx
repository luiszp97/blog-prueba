import { Card, Grid } from "@mui/material"
import { Box } from "@mui/system"


export const CardsLayout = ({children, heighthCard, scroll}) => {
  return (

    <Grid item xs={12} sx={{height:`${heighthCard}%`, display:'flex', justifyContent:'center'}}>

        <Card sx={{height:'100%',width:'95%', backgroundColor: "primary.secondary" , display:'flex', justifyContent:'center', alignItems:'center'}}>

            <Box sx={{width:'90%', height:'90%', overflowY:`${scroll ?'scroll': 'hidde'}`, '::-webkit-scrollbar-thumb':{borderRadius:'10px', background:'#eeeeee'},'::-webkit-scrollbar':{width:'10px'}}}>

                {children}

            </Box>

        </Card>   

    </Grid>
  )
}
