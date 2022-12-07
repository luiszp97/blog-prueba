import { Box, Divider, List, ListItem, Typography } from "@mui/material"
import { CardsLayout } from "../layout/CardsLayout"


export const GoalsInfo = () => {
  return (

    <CardsLayout heighthCard = {"20"}>
      
      <Box height="25%">
        <Typography variant="h6" fontWeight='bold'>
            Goals
        </Typography>
        <Divider/>
      </Box>


      <Box height="75%" display='flex' alignItems='center'>

        <List sx={{display:'inline-block', listStyleType:'circle', "& ::marker":{color:'#999', listStyleType:'circle'} }}>
          <ListItem disablePadding = {true} sx={{"& ::marker":{color:'#999', listStyleType:'circle'}}}>
            <Typography fontSize='0.9rem'>Aprender multiles lenguajes de programacion</Typography>
          </ListItem>
          <ListItem disablePadding = {true}>
            <Typography fontSize='0.9rem'>Dominar React</Typography>
          </ListItem>
          <ListItem disablePadding = {true}>
            <Typography fontSize='0.9rem'>Aprender Ingles</Typography>
          </ListItem>
        </List>

      </Box>
    </CardsLayout>

  )

}
