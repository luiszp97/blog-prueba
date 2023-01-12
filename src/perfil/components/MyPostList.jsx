import { Button, Divider, List, ListItem, ListItemButton, Typography } from "@mui/material"
import AddIcon from '@mui/icons-material/Add';
import { Box } from "@mui/system"
import { CardsLayout } from "../layout/CardsLayout"
import { redirect } from "react-router-dom";




export const MyPostList = () => {

  const post = [
    {
      title: "Calentamineto Global",
      date: "12/22/2022",
      id:"111"
    },
    {
      title: 'DarkSouls 3',
      date: "10-01-2022",
      id:"232"
    },
    {
      title: "Calentamineto Global",
      date: "12/22/2022",
      id:'3123'

    },
    {
      title: 'DarkSouls 3',
      date: "10-01-2022",
      id:"312312"
    },
    {
      title: "Calentamineto Global",
      date: "12/22/2022",
      id:'5654'
    },
    {
      title: 'DarkSouls 3',
      date: "10-01-2022",
      id:"43534"
    },

]

  return (
    <CardsLayout heighthCard = {"35"} scroll={true}>

      <Box sx={{display:'flex', justifyContent:'space-between'}}>

        <Typography variant="h6" fontWeight='bold' >
            My recents Post
        </Typography>

        <Button href = '/post/' variant="outlined" sx={{backgroundColor:'#ffccbc', borderRadius:'50%', marginRight:'10px', width:"2px", minWidth:'0px', marginBottom:"2px", ":hover":{backgroundColor:"rgb(213 0 0 / 16%)"}}}
          
        >
        
         <AddIcon fontSize="5px" htmlColor="black"/>

        </Button>

      </Box>

        <Divider/>

        <Box component='div'>
          <List>

            {
              post.map(element => (
                <ListItemButton sx={{justifyContent:'space-between', borderRadius:'10px', marginBottom:'8px', backgroundColor:'#fce2df', width:'95%',":hover":{backgroundColor:'#e3ccc9'}}} key = {element.id}>

                  <Typography fontWeight='400'>
                    {element.title}
                  </Typography>
                  <Typography>
                    {element.date}
                  </Typography>

                </ListItemButton>
              ))

            }
        
          </List>
        </Box>

    </CardsLayout>
  )
}