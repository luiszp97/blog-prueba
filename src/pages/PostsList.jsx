import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Container } from "@mui/system"

import { Grid, Pagination, Stack} from "@mui/material"

import { getPosts } from "../helper/getPosts"
import { PostItem, NavBar } from "../ui/components"



export const PostsList = () => {

    const [posts, setPosts] = useState(undefined);
    const navigate = useNavigate();

    const getData = async ()=>{

        const data = await getPosts()
        setPosts(data)
    }

   

    useEffect(()=>{
        getData()
    }, [])

    

  return (
    <>
        <NavBar/>
        <Container maxWidth='xl' sx={{backgroundColor:'#eeeeee', minHeight:'calc(100vh - 68.5px)'}}>
            <Grid container columnGap={4} justifyContent='center'>
                {
                    posts !== undefined &&
                    posts.reverse().map(element=>(
                        <PostItem key={element.id} data = {element}/>
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


