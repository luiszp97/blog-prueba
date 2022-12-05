import { Grid } from "@mui/material"
import { Box } from "@mui/system"

export const HomePageLayout = ({children}) => {
  return (
    <Box 
        sx={{display:'flex', height:'100vh', backgroundColor:'#eeeeee'}}
        
        
    >
        <Box
            component='main'
            sx={{display: 'flex', flexGrow: 1, padding: '30px 80px', width: '100vw', height:'100%'}}
        >
            <Box
                sx={{display:'flex', flexDirection:'column', backgroundColor: '#fbe9e7', height: '100%', justifyContent:'space-evenly', alignItems:'center', borderRadius: '4px'}}
            >
                {children[0]}
                

            </Box>

            <Grid container sx={{height:'100%', justifyContent:'space-between', flexDirection:'row', flexWrap:'nowrap'  }}>

             <Grid container alignContent='space-between'>

                {children[1]}

                {children[2]}

                {children[3]}

             </Grid>
             <Grid container alignContent='space-between'>

                {children[4]}

                {children[5]}

                {children[6]}
               
             </Grid>
                
            </Grid>

        </Box>

    </Box>
  )
}
