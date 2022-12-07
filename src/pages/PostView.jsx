import { Avatar, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import NavBar from "../ui/components/NavBar"

export const PostView = () => {
  return (
    <>
        <NavBar/>
        <Grid container bgcolor='primary.dark' sx={{height:'100vh', padding:'0px 10%'}} flexDirection='column'>
            
            <Typography variant="h4" fontWeight='500' textAlign='center' mt={3} mb={3}> Calentamiento Global</Typography>

            <Grid item height='50vh' width={} sx={{'img':{width:"100%", height:'auto', borderRadius:'8px'}}}>
                <img
                    src="https://concepto.de/wp-content/uploads/2018/04/calentamiento-global-min-e1523642673800.jpg"
                />
            </Grid>

            <Grid item sx={{padding:'0px 60px'}}>
                <Box>
                    <Avatar/>
                </Box>
            </Grid>
        </Grid>
    </>
  )
}
