import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({children, title = ''}) => {
  return (
 
    <Grid container
        bgcolor='primary.main'
        sx={{height: '100vh', width: '100vw' }}
        direction = 'column'
        justifyContent='center'
        alignItems= 'center'
    >
        <Grid item 
            bgcolor='white'
            xs = { 3 }
            sx = { {width: {sm: 450}, padding: 4, borderRadius: 4 } }
            >
        <Typography variant= 'h4' textAlign='center'>
            {title}
        </Typography>

        {children}
        </Grid>
    </Grid>
   
  
  )
}
