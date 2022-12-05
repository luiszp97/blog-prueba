import { Button, Divider, List, ListItem, ListItemButton, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system"
import { CardsLayout } from "../layout/CardsLayout"



export const MyPostList = () => {
  return (
    <CardsLayout heighthCard = {"35"} scroll={true}>
      <Box sx={{display:'flex'}}>
        <Typography variant="h4" fontWeight='bold' fontSize={25} sx={{position:'sticky'}} >
            My recents Post
        </Typography>
        <Button variant="outlined" sx={{backgroundColor:'#111', borderRadius:'50%', width:'5x'}}>
         <AddIcon/>
        </Button>

      </Box>
        <Divider/>

        <Box component='div'>
          <List>
            
            <ListItemButton sx={{justifyContent:'space-between', borderRadius:'10px', marginBottom:'8px', backgroundColor:'#fce2df',    width:'95%',":hover":{backgroundColor:'#e3ccc9'}}}>
                <Typography fontWeight='400'>
                  Calentamineto Global
                </Typography>
                <Typography>
                  12-22-2022
                </Typography>

            </ListItemButton>
            <ListItemButton sx={{justifyContent:'space-between', borderRadius:'10px', marginBottom:'8px', backgroundColor:'#fce2df',    width:'95%',":hover":{backgroundColor:'#e3ccc9'}}}>
                <Typography>
                  hola
                </Typography>
                <Typography>
                  hola
                </Typography>

            </ListItemButton>
            <ListItemButton sx={{justifyContent:'space-between', borderRadius:'10px', marginBottom:'8px', backgroundColor:'#fce2df',    width:'95%',":hover":{backgroundColor:'#e3ccc9'}}}>
                <Typography>
                  hola
                </Typography>
                <Typography>
                  hola
                </Typography>

            </ListItemButton>
            <ListItemButton sx={{justifyContent:'space-between', borderRadius:'10px', marginBottom:'8px', backgroundColor:'#fce2df',    width:'95%',":hover":{backgroundColor:'#e3ccc9'}}}>
                <Typography>
                  hola
                </Typography>
                <Typography>
                  hola
                </Typography>

            </ListItemButton>
            <ListItemButton sx={{justifyContent:'space-between', borderRadius:'10px', marginBottom:'8px', backgroundColor:'#fce2df',    width:'95%',":hover":{backgroundColor:'#e3ccc9'}}}>
                <Typography>
                  hola
                </Typography>
                <Typography>
                  hola
                </Typography>

            </ListItemButton>
            <ListItemButton sx={{justifyContent:'space-between', borderRadius:'10px', marginBottom:'8px', backgroundColor:'#fce2df',    width:'95%',":hover":{backgroundColor:'#e3ccc9'}}}>
                <Typography>
                  hola
                </Typography>
                <Typography>
                  hola
                </Typography>

            </ListItemButton>
            
          </List>
        </Box>

    </CardsLayout>
  )
}