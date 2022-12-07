import { Button, Grid, TextField, Typography } from "@mui/material"
import { Box } from "@mui/system"
import NavBar from "../ui/components/NavBar"

export const CreateNewPost = () => {
  return (
    <>
        <NavBar/>
        <Grid container
        bgcolor='primary.dark'
        sx={{height: 'calc(100vh - 68.5px)', width: '100vw' }}
        direction = 'column'
        justifyContent='center'
        alignItems= 'center'
    >
        <Grid item 
            bgcolor='white'
            xs = { 3 }
            sx = { {width: {sm: 700}, padding: 4, borderRadius: 4 } }
            >
        <Typography variant= 'h4' textAlign='center'>
            Create new Post
        </Typography>

        <Grid item xs = {12} sx= {{mt: 2}}>
                <TextField
                    label = 'Title'
                    type='Text'
                    placeholder='Entry the post title'
                    required
                    fullWidth
                >
            </TextField>
        </Grid>
        <Grid item xs = {12} sx= {{mt: 2}}>
                <TextField
                    label = 'Image Url'
                    type='Text'
                    placeholder='Entry the image url'
                    required
                    fullWidth
                >
            </TextField>
        </Grid>
        <Grid item xs = {12} sx= {{mt: 2}}>
                <TextField
                    label = 'Content'
                    type='Text'
                    placeholder='Write the history'
                    multiline
                    minRows={6}
                    maxRows={15}
                    required
                    fullWidth
                >
            </TextField>
        </Grid>
        <Button
            sx = {{mt: 4, backgroundColor: 'secondary.main'}}
            type='submit'
            variant = 'contained'
            fullWidth

        >
            Save Post
        </Button>
        
        </Grid>
    </Grid>
    </>
  )
}

