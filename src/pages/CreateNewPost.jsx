import { useState } from "react"
import { useSelector } from "react-redux"
import { useForm } from "react-hook-form"

import { Alert, Button, Grid, TextField, Typography } from "@mui/material"
import Swal from "sweetalert2"
import 'sweetalert2/dist/sweetalert2.css'

import { saveNewPost } from "../helper"
import NavBar from "../ui/components/NavBar"

export const CreateNewPost = () => {

    const { register, handleSubmit, formState:{errors} } = useForm();

    const { id: userId } = useSelector( state => state.auth )

    const [isSaving, setisSaving] = useState(false);

    const savePost = async (info) =>{

        setisSaving(true);

        const date = new Date().getTime();
        const id = Math.random().toString(36).substring(2, 18);

        const data = {...info, date, userId, id}

        const resp = await saveNewPost(data);

        if(resp.ok){
            
            setisSaving(false);
            Swal.fire('Exito', 'Tu post se guardo exitoxamente','success');
            
        }

    }

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

        <form onSubmit={handleSubmit( savePost )}>
            <Grid item xs = {12} sx= {{mt: 2}}>
                    <TextField
                        label = 'Title'
                        type='Text'
                        placeholder='Entry the post title'
                        required
                        fullWidth
                        {...register('title', {minLength:5})}
                    >
                </TextField>
                { errors.title?.type === "minLength" && <Alert severity = 'error'>Introduzca un titulo valido</Alert> }
            </Grid>
            <Grid item xs = {12} sx= {{mt: 2}}>
                    <TextField
                        label = 'Subtitle'
                        type='Subtitle'
                        placeholder='Entry subtitle'
                        required
                        fullWidth
                        {...register('subtitle', {minLength:5})}
                    >
                </TextField>
                { errors.subtitle?.type === "minLength" && <Alert severity = 'error'>Introduzca un subtitulo valido</Alert> }
            </Grid>
            <Grid item xs = {12} sx= {{mt: 2}}>
                    <TextField
                        label = 'Image Url'
                        type='Text'
                        placeholder='Entry the image url'
                        required
                        fullWidth
                        {...register('imageUrl', {pattern: /^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/})}
                    >
                </TextField>
                { errors.imageUrl?.type === "pattern" && <Alert severity = 'error'>Url invalida</Alert> }
            </Grid>
            <Grid item xs = {12} sx= {{mt: 2}}>
                    <TextField
                        label = 'Content'
                        type='Text'
                        placeholder='Write the history'
                        multiline
                        minRows={6}
                        maxRows={10}
                        required
                        fullWidth
                        {...register('content', {minLength:100})}
                        
                    >
                </TextField>
                { errors.content?.type === "minLength" && <Alert mt={5} severity = 'error'>Debe contener al menos 100 caracteres</Alert> }
            </Grid>
        <Button
            sx = {{mt: 4, backgroundColor: 'secondary.main'}}
            type='submit'
            variant = 'contained'
            fullWidth
            disabled={isSaving}

        >
            Save Post
        </Button>
        </form>
        
        </Grid>
    </Grid>
    </>
  )
}

