import { useDispatch, useSelector } from "react-redux"
import { Alert, Button, Grid, TextField } from "@mui/material"
import { useForm } from "react-hook-form"

import { chekingCredentials } from "../../store/auth/authSlice"
import { startRegisterUser } from "../../store/auth/thunks"
import { AuthLayout } from "../layout"


export const RegisterPage = () => {

    const dispatch = useDispatch();
    const {errorMessage} = useSelector( state => state.auth )

    const { register, handleSubmit, formState: {errors} } = useForm();

    const onSubmitform = (data)=> {

        dispatch( chekingCredentials() )

        dispatch( startRegisterUser(data) )
    }

  return (
    <AuthLayout title="Register">
        <form onSubmit={ handleSubmit( onSubmitform) }> 
            <Grid container 
                spacing={2}
            >
                <Grid item xs = {6} sx= {{mt: 2}}>
                <TextField
                    color="input"
                    label = 'First Name'
                    type='text'
                    placeholder='Entry your name'
                    required
                    {...register('firstname')}
                >
                </TextField>
            </Grid>
            <Grid item xs = {6} sx= {{mt: 2}}>
                <TextField
                    color="input"
                    label = 'Last Name'
                    type='text'
                    placeholder='Entry your last name'
                    required
                    {...register('lastname')}
                >
                </TextField>
            </Grid>
            <Grid item xs = {12} sx= {{mt: 1}}>
                <TextField
                    color="input"
                    label = 'Username'
                    type='text'
                    placeholder='Your username'
                    fullWidth
                    required
                    {...register('username')}
                >
                </TextField>
            </Grid>
            <Grid item xs = {12} sx= {{mt: 1}}>
                <TextField
                    color="input"
                    label = 'Email'
                    type='email'
                    placeholder='example@example.com'
                    fullWidth
                    required
                    {...register('email')}
                >
                </TextField>
            </Grid>
            <Grid item xs = {12} sx= {{mt: 1}}>
                <TextField
                    color="input"
                    label = 'Password'
                    type='password'
                    placeholder='********'
                    fullWidth
                    required
                    {...register('password', {pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/ })}
                >
                </TextField>

                {errors.password?.type === "pattern" && <Alert severity = 'error'>Contrseña invalida</Alert> }
                
            </Grid>
            </Grid>
            <Grid item xs = {12} sx= {{mt: 2}}>
               
                <TextField
                    color="input"
                    type='date'
                    required
                    fullWidth 
                    {...register('brithday')}
                >
                </TextField>
            </Grid>

            <Grid 
                item 
                xs={12}
                sx={{mt:2}}
                display = { !!errorMessage ? '' : 'none' }
            >

                  <Alert severity = 'error' sx={{mt:1}}>{errorMessage}</Alert>

            </Grid>

            <Button
                sx = {{mt: 4, backgroundColor: 'secondary.main'}}
                type='submit'
                variant = 'contained'
                fullWidth
            >
            Create account
            </Button>

            

        </form>
    </AuthLayout>
  )

  
}
