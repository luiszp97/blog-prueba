import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Avatar, Box, Dialog, Divider, Grid, IconButton, Typography } from "@mui/material"

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';

import {NavBar , CommentsContainer,EditPost } from "../ui/components"
import { getPostById } from "../helper";
import { useSelector } from "react-redux";


export const PostView = () => {

    const [data, setData] = useState(undefined);
    const [date, setDate] = useState(null);
    const [open, setOpen] = useState(false);

    const { id: userId } = useSelector(state => state.auth);

    const content = data?.content;
    const text = content?.replace(/\r\n|\r|\n/g,"<br>");


    const navigate = useNavigate();
    const { id } = useParams();

    const getData = async (id)=>{

        const post = await getPostById(id);
        const actualDate = post.date;
        const newDate = new Date( actualDate );

        setData(post);
        setDate(newDate.toUTCString());   
        
    }

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    useEffect(()=>{

        getData(id)

    },[id])

   
   

    const goToPerfil = ()=>{
        navigate('/profile')
    }

    

  return (
    <>
        <NavBar/>
        {
            data!== undefined && <Grid container bgcolor='primary.dark' sx={{padding:'0px 10%', minHeight:'calc(100vh - 68.5px)'}} flexDirection='column'>
            
            <Typography variant="h4" fontWeight='500' textAlign='center' color='fontColor.main' mt={7} mb={3}> {data.title} </Typography>

            <Grid item display='flex' justifyContent='center' sx={{'img':{borderRadius:'8px', width:'60vw', height:'50vh'}}}>
                <img
                    src={data.imageUrl}
                />
            </Grid>

            <Grid item mt={3} mb={3} display='flex' justifyContent='space-between' sx={{padding:'0px 150px'}}>
              <Box display='flex' alignItems='center'>
                
                <Avatar src="https://img.freepik.com/foto-gratis/foto-generica-longitud-completa-chica-joven-moda-cafe-vistiendo-sudadera-negra-corredores-zapatillas-negras-sobre-cesped-verde-ciudad_132075-9210.jpg" onClick={goToPerfil} sx={{marginRight:'20px', cursor:'pointer'}} />
                <Typography variant="caption">by  </Typography>
                <Typography variant="caption" component='a' onClick={goToPerfil} sx={{textDecoration:'underline', marginLeft:'5px', cursor:'pointer'}}> {data.userName} </Typography>
                <CalendarMonthIcon sx={{marginLeft:'20px', marginRight:'20px',color:'fontColor.main'}}/>
                <Typography variant='caption' >{date}</Typography>

              </Box>

                <Box display={data.userId === userId ? 'block' : 'none'}>
                    <IconButton onClick={handleClickOpen} sx={{ ':hover':{borderRadius:'0'}, width:{} }}>
                        <SettingsIcon/>
                        <Typography>Edit your post</Typography>
                    </IconButton>
                </Box>

            </Grid>

            <Dialog open={open} onClose={handleClose} sx={{zIndex:"1"}}>
                <EditPost data = {data}/>
            </Dialog>

            <Typography component='div' dangerouslySetInnerHTML={{__html:text}} textAlign='justify' mb={5} color="fontColor.main" sx={{padding:'0px 60px', marginTop:'20px'}}>
                
            </Typography>

            <Divider/>
            <Typography textAlign='center' mb={3} mt={1}> 
                Coments 
            </Typography>

            {
                data !== undefined ? <CommentsContainer postData = {data}/> : 'nope'
            }

        </Grid>
        }
    </>
  )
}
