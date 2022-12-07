import { Box, Divider, List, ListItem, Typography } from "@mui/material"
import { CardsLayout } from "../layout"


export const FrustrationsInfo = () => {
  return (
    <CardsLayout heighthCard = {"20"}>

      <Box height="25%">

        <Typography variant="h6" fontWeight='bold'>
            Frustrations
        </Typography>
        <Divider/>

      </Box>

      <Box height="75%" display='flex' alignItems='center'>

        <List>
          <ListItem disablePadding={true} >
            <Typography fontSize="0.9rem">hola</Typography>
          </ListItem>
          <ListItem disablePadding={true}>
            <Typography fontSize="0.9rem">hola</Typography>
          </ListItem>
        </List>

      </Box>
    </CardsLayout>
  )
}