import { useNavigate } from 'react-router-dom'
import { Avatar, Box, Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material'

import { getUserInfo } from '../../helper';
import { useState } from 'react';

export const PostItem = ({data}) => {

    const [avatar,  setAvatar] = useState(null)
    const navigate = useNavigate();


    const content = ()=>{

        return data.content.length > 50
        ? data.content.substring(0,100) + '...'
        : data.content
    }

    const getDate = ()=>{

        const actualDate = data.date;
        const newDate = new Date( actualDate );
        return newDate.toUTCString()
    }

    const getUser = async ()=>{

        const userInfo = await getUserInfo(data.userId);
        setAvatar(userInfo.profilePic)
    }

    const commentari = content();
    const date = getDate();
    getUser()  
    
    


  return (

    <Grid item xs={5} mt={4} key={data}>
        <Card sx={{ maxWidth: "auto" }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image= {data.imageUrl}
            />
            <CardContent>

                <Typography gutterBottom variant="h5" component="div">
                    {data.title.toUpperCase()}
                </Typography>

                <Typography variant="body2" color="text.secondary">

                   {commentari}

                </Typography>

            </CardContent>

            <CardActions sx={{justifyContent:'space-between'}}>

            <Box display='flex' sx={{justifyContent:'space-between'}}>

                <Avatar alt={avatar} sx={{marginRight:'8px'}}/>

                <Box sx={{display:'flex', flexDirection:'column'}}>

                    <Typography fontWeight='500'>{data.userName.toUpperCase()}</Typography>
                    <Divider/>
                    <Typography>{date}</Typography>

                </Box>
            </Box>

            <Box>
                <Button variant="outlined" onClick={()=> navigate(`/posts/${data.id}`)} color="input">
                    Read More
                </Button>
            </Box>

            </CardActions>

        </Card>

    </Grid>
  )
}
