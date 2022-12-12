import { Avatar, Card, CardContent, Grid, List, ListItem, ListSubheader, Typography } from "@mui/material"
import { Box } from "@mui/system"


export const PerfilInfo = ({info}) => {

  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'    width="100%">
                    <Avatar
                        alt = 'foto de perfil'
                        src = 'https://previews.123rf.com/images/dgilder/dgilder1010/dgilder101000284/8081321-foto-gen%C3%A9rica-de-una-mujer-mirando-intensamente-de-la-c%C3%A1mara-sobre-un-fondo-de-ladrillo-.jpg'
                        sx={{ width:'52%',height:'150px', border: '3px solid white'}}
                    >

                    </Avatar>

                    <Typography variant = 'h5' fontWeight='500' sx={{mt:1}}>
                       {`${info.firstname} ${info.lastname}`}
                    </Typography>

                    <Typography variant="subtitle2" color='error.main' sx={{fontWeight:'bold'}}>
                        hola mundo
                    </Typography>
               </Box>

               <Box sx={{width: "100%"}}>
                    <Typography variant="body1" textAlign='center' sx={{padding:"0 32px"}}>
                        mi pasion es comer hamburguesas
                    </Typography>
               </Box>

               <Card variant = 'outlined' sx={{ minWidth: '80%', maxWidth: '80%', backgroundColor: '#ffccbc'}}>
                    <CardContent>

                        <List
                            subheader = {
                                <ListSubheader sx={{backgroundColor:'inherit', textAlign:'center', fontWeight:'bold', color:'black', padding:'1px'}}>
                                    Personal Information
                                </ListSubheader>
                            }
                        >
                            <ListItem sx={{padding:'2px'}} >
                                <Typography variant="body2"><strong>Age: </strong> 20</Typography>
                            </ListItem>
                            <ListItem sx={{padding:'2px'}}>
                                <Typography variant="body2"><strong>location:</strong> Venezuela</Typography>
                            </ListItem>
                            <ListItem sx={{padding:'2px'}}> 
                               <Typography variant="body2"><strong> status:</strong> single</Typography>
                            </ListItem>
                            <ListItem sx={{padding:'2px'}}> 
                               <Typography variant="body2"> <strong>hola:</strong> hola </Typography>
                            </ListItem>
                            
                        </List>
                        <Grid container justifyContent='space-around' gap= '8px'>
                            <Grid item xs={6} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center', padding:'3px', color:'#ffebee'}}>
                                <Typography variant="body2">Organizado</Typography>
                            </Grid>
                            <Grid item xs={5} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center', padding:'3px', color:'#ffebee' }}>
                                <Typography variant="body2">Puntual</Typography>
                            </Grid>
                            <Grid item xs={5} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center', padding:'3px', color:'#ffebee'}}>
                                <Typography variant="body2">Dedicado</Typography>
                            </Grid>
                            <Grid item xs={6} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center',padding:'3px', color:'#ffebee'}}>
                                <Typography variant="body2">Persistente</Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
               </Card>
    </>
  )
}
