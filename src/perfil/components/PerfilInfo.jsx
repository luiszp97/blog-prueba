import { Avatar, Card, CardContent, Grid, List, ListItem, ListSubheader, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const PerfilInfo = () => {
  return (
    <>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Avatar
                        alt = 'foto de perfil'
                        src = 'https://previews.123rf.com/images/dgilder/dgilder1010/dgilder101000284/8081321-foto-gen%C3%A9rica-de-una-mujer-mirando-intensamente-de-la-c%C3%A1mara-sobre-un-fondo-de-ladrillo-.jpg'
                        sx={{width:'200px', height:'200px', border: '3px solid #ffebee'}}
                    >

                    </Avatar>

                    <Typography variant = 'h5' fontWeight='bold' sx={{mt:1}}>
                        Luis Zambrano
                    </Typography>

                    <Typography variant="subtitle1" color='error.main' sx={{fontWeight:'bold'}}>
                        hola mundo
                    </Typography>
               </Box>

               <Box sx={{width: "100%"}}>
                    <Typography textAlign='center' sx={{padding:4}}>
                        mi pasion es comer hamburguesas
                    </Typography>
               </Box>

               <Card variant = 'outlined' sx={{minHeight: '300px', minWidth: '80%', maxWidth: '80%', backgroundColor: '#ffccbc'}}>
                    <CardContent>

                        <List
                            subheader = {
                                <ListSubheader sx={{backgroundColor:'inherit', textAlign:'center', fontWeight:'bold', color:'black', padding:'1px'}}>
                                    Personal Information
                                </ListSubheader>
                            }
                        >
                            <ListItem sx={{padding:'2px'}}>
                                <strong>Age: </strong> 20
                            </ListItem>
                            <ListItem sx={{padding:'2px'}}>
                                <strong>location:</strong> Venezuela
                            </ListItem>
                            <ListItem sx={{padding:'2px'}}> 
                               <strong> status:</strong> single
                            </ListItem>
                            <ListItem sx={{padding:'2px'}}> 
                                <strong>hola:</strong> hola
                            </ListItem>
                            
                        </List>
                        <Grid container justifyContent='space-around' gap= '8px' mt={3}>
                            <Grid item xs={5} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center', padding:'3px', color:'#ffebee'}}>
                                Organixado
                            </Grid>
                            <Grid item xs={4} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center', padding:'3px', color:'#ffebee' }}>
                                Puntual
                            </Grid>
                            <Grid item xs={5} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center', padding:'3px', color:'#ffebee'}}>
                                Dedicado
                            </Grid>
                            <Grid item xs={6} sx={{backgroundColor:'#e53935', borderRadius:'4px', textAlign:'center',padding:'3px', color:'#ffebee'}}>
                                Persistente
                            </Grid>
                        </Grid>
                    </CardContent>
               </Card>
    </>
  )
}
