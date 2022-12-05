import { Divider, List, ListItem, Typography } from "@mui/material"
import { CardsLayout } from "../layout/CardsLayout"


export const GoalsInfo = () => {
  return (

    <CardsLayout heighthCard = {"20"}>
        <Typography variant="h4" fontWeight='bold' fontSize={25} mb={1}>
            Goals
        </Typography>
        <Divider/>

        <List sx={{display:'inline-block', listStyleType:'circle', "& ::marker":{color:'#999', listStyleType:'circle'} }}>
          <ListItem disablePadding = {true} sx={{"& ::marker":{color:'#999', listStyleType:'circle'}}}>
            Aprender multiles lenguajes de programacion
          </ListItem>
          <ListItem disablePadding = {true}>
            Dominar React
          </ListItem>
          <ListItem disablePadding = {true}>
            Dominar el ingles
          </ListItem>
        </List>
    </CardsLayout>

  )

}
