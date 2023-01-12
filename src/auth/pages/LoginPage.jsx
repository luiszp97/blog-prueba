import { Button, Grid, Link, TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, Navigate } from 'react-router-dom'
import { useForm } from "react-hook-form"


import { startLoginUser } from "../../store/auth/thunks";
import { AuthLayout } from "../layout"
import { chekingCredentials } from "../../store/auth/authSlice";

export const LoginPage = () => {

    const { register, handleSubmit } = useForm();
    const { status } = useSelector( state => state.auth );

    const statusLogin = status !== 'not-authenticated';

    const dispatch = useDispatch();

    const onSubmitLogin = (data)=>{

        dispatch( chekingCredentials() ) ;
        dispatch( startLoginUser( data ) )

    }

  return (
    <AuthLayout title = 'Login'>
        <form onSubmit={ handleSubmit( onSubmitLogin ) }> 
            <Grid item xs = {12} sx= {{mt: 2}}>
                <TextField
                    label = 'correo'
                    type='email'
                    placeholder='example@example.com'
                    required
                    fullWidth
                    {...register('email')}
            >
                </TextField>
            </Grid>
            <Grid item xs = {12} sx= {{mt: 2}}>
                <TextField
                    label = 'contraseña'
                    type='password'
                    placeholder='********'
                    required
                    fullWidth
                    {...register('password')}
                >
                </TextField>
            </Grid>
            <Button
            sx = {{mt: 4, backgroundColor: 'secondary.main'}}
            type='submit'
            variant = 'contained'
            fullWidth
            disabled = {statusLogin}

            >
            Login
            </Button>
            <Grid container 
            justifyContent='end' 
            sx={{mt:2}}
            >
                <Link component={RouterLink} to='/auth/register' color='#000'>Create account</Link>
            </Grid>
        </form>
  </AuthLayout>
  )
}
