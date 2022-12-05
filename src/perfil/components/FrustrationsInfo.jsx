import { Divider, List, ListItem, Typography } from "@mui/material"
import { CardsLayout } from "../layout"


export const FrustrationsInfo = () => {
  return (
    <CardsLayout heighthCard = {"20"}>
        <Typography variant="h4" fontWeight='bold' fontSize={25}>
            Frustrations
        </Typography>
        <Divider/>

        <List>
          <ListItem>
            hola
          </ListItem>
          <ListItem>
            chao
          </ListItem>
        </List>
    </CardsLayout>
  )
}