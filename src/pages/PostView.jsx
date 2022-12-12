import { Avatar, Grid, Typography } from "@mui/material"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import NavBar from "../ui/components/NavBar"

export const PostView = () => {

    const nombre = 'Luis Zambrano';
    const date = '08-12-2022'

    const goToPerfil = ()=>{
        console.log('perfil xd')
    }

  return (
    <>
        <NavBar/>
        <Grid container bgcolor='primary.dark' sx={{padding:'0px 10%'}} flexDirection='column'>
            
            <Typography variant="h4" fontWeight='500' textAlign='center' color='fontColor.main' mt={7} mb={3}> Calentamiento Global</Typography>

            <Grid item height='50vh' width="80%" sx={{'img':{width:"100%", height:'auto', borderRadius:'8px'}}}>
                <img
                    src="https://concepto.de/wp-content/uploads/2018/04/calentamiento-global-min-e1523642673800.jpg"
                />
            </Grid>

            <Grid item mt={3} display='flex' alignItems='center' sx={{padding:'0px 60px'}}>
              
                <Avatar src="https://img.freepik.com/foto-gratis/foto-generica-longitud-completa-chica-joven-moda-cafe-vistiendo-sudadera-negra-corredores-zapatillas-negras-sobre-cesped-verde-ciudad_132075-9210.jpg" onClick={goToPerfil} sx={{marginRight:'20px', cursor:'pointer'}} />
                <Typography variant="caption">by  </Typography>
                <Typography variant="caption" component='a' onClick={goToPerfil} sx={{textDecoration:'underline', marginLeft:'5px', cursor:'pointer'}}> {nombre} </Typography>
                <CalendarMonthIcon sx={{marginLeft:'20px', marginRight:'20px',color:'fontColor.main'}}/>
                <Typography variant='caption' >{date}</Typography>

            </Grid>

            <Typography textAlign='justify' color="fontColor.main" sx={{padding:'0px 60px', marginTop:'20px'}}>
                
            </Typography>
           
        </Grid>
    </>
  )
}
