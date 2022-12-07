import { Avatar, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Pagination, Stack, Typography } from "@mui/material"
import { Box, Container } from "@mui/system"
import NavBar from "../ui/components/NavBar"


export const PostsList = () => {

    const render = [1,2,3,4,5,6];

  return (
    <>
        <NavBar/>
        <Container maxWidth='xl' sx={{backgroundColor:'#eeeeee'}}>
            <Grid container columnGap={4} justifyContent='center'>
                {
                    render.map(element=>(
                        <Grid item xs={5} mt={4} key={element}>
                            <Card sx={{ maxWidth: "auto" }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="https://4.bp.blogspot.com/-jDcqEFr898k/XBAeeuO_B3I/AAAAAAAAAEM/ugCkZsDFoN8_HGj34Mcs6O61GvNDzcKaACLcBGAs/s1600/phpCode.png"
                                />
                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                    </Typography>

                                    <Typography variant="body2" color="text.secondary">

                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica

                                    </Typography>
                                </CardContent>

                                <CardActions sx={{justifyContent:'space-between'}}>

                                <Box display='flex' sx={{justifyContent:'space-between'}}>
                                        <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1066477945076752384/6cgqAOkb_400x400.jpg" sx={{marginRight:'8px'}}/>

                                        <Box sx={{display:'flex', flexDirection:'column'}}>

                                        <Typography fontWeight='500'>Luis Zambrano</Typography>
                                        <Divider/>
                                        <Typography>22-11-2022</Typography>

                                        </Box>
                                </Box>

                                <Box>
                                        <Button variant="outlined" color="input">
                                            Read More
                                        </Button>
                                </Box>

                                </CardActions>

                            </Card>

                        </Grid>
                    ))
                }
            </Grid>

            <Stack mt={5} alignItems='center'>
                <Pagination size="large" count={10} variant="outlined" shape="rounded" />
            </Stack>
        </Container>
    </>
  )
}


