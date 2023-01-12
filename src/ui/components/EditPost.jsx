import * as React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { updatePost } from '../../helper/updatePost';
import { Alert } from '@mui/material';
import { deleatedPost } from '../../helper';

export const EditPost = ({data}) => {

  console.log(data.userId)
    const [form,  setForm] = useState(data);
    const navigate = useNavigate()
    const { register, handleSubmit, formState:{errors}} = useForm();

    const update = async (info)=>{

        Swal.fire({
            title:'Atencion', 
            text:'Estas seguro que quieres modificar este post?',
            icon:'warning',
            showCancelButton: true,
            confirmButtonColor: '#66bb6a',
            
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Saved!',
        }).then (async (results) => {
            if (results.isConfirmed){

                const resp = await updatePost(form, data.id);
                console.log(resp)

                if(resp.ok){
                    
                    Swal.fire({
                        title: 'Saved!',
                        text: 'Your file has been saved.',
                        icon: 'success',
                        didClose: ()=>{
                            console.log('siu')
                            navigate(location.reload());
                        }
                    })
                }     
            }
        });
    }

    const onDeleatedPost = async ( )=>{

        

        Swal.fire({
          title:'Atencion', 
          text:'Estas seguro que quieres eliminar este post?',
          icon:'warning',
          showCancelButton: true,
          confirmButtonColor: '#66bb6a',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, Deleated!',
      }).then (async (results) => {
          if (results.isConfirmed){

            const resp = await deleatedPost(data.id, data.userId);

              if(resp.ok){
                  
                  Swal.fire({
                      title: 'Deleated!',
                      text: 'Your post has been deleated.',
                      icon: 'success',
                      didClose: ()=>{
                          
                          navigate('/posts');
                      }
                  })
              }     
          }
      });

       
    }

  return (

    <form onSubmit={handleSubmit(update)}>
        <DialogTitle mb={2}>Edit The Post</DialogTitle>
        <DialogContent >
          

          <TextField
            placeholder="Title"
            type="text"
            value={form.title}
            fullWidth
            required
            label='Title'
            sx={{mb:'15px', mt:"10px"}}
            {...register('title', {minLength:5, onChange: (e)=> setForm({...form, 'title': e.target.value}) })}
          />

          { errors.title?.type === "minLength" && <Alert severity = 'error'>Introduzca un titulo valido</Alert> }

          <TextField
            placeholder="Subtitle"
            type="text"
            value={form.subtitle}
            fullWidth
            required
            label='Subtitle'
            sx={{mb:'15px'}}
            {...register('subtitle', {minLength:5, onChange: (e)=> setForm({...form, 'subtitle': e.target.value})})}
          />

           { errors.subtitle?.type === "minLength" && <Alert severity = 'error'>Introduzca un subtitulo valido</Alert> }

          <TextField
            placeholder="Image URL"
            type="text"
            value={form.imageUrl}
            fullWidth
            required
            label='Image Url'
            sx={{mb:'15px'}}
            {...register('imageUrl', {pattern: /^(www)?.+\.[a-z]{2,6}(\.[a-z]{2,6})?.+\.[a-z]{2,4}$/, onChange: (e)=> setForm({...form, 'imageUrl': e.target.value})})}
          />

            { errors.imageUrl?.type === "pattern" && <Alert severity = 'error'>Url invalida</Alert> }

          <TextField
            placeholder="Content"
            type="text"
            value={form.content}
            multiline
            maxRows={5}
            fullWidth
            required
            label='Content'
            sx={{mb:'15px'}}
            {...register('content', {minLength:100, onChange: (e)=> setForm({...form, 'content': e.target.value})})}
          />

            { errors.content?.type === "minLength" && <Alert mt={5} severity = 'error'>Debe contener al menos 100 caracteres</Alert> }

        </DialogContent>
        <DialogActions>
          <Button variant='contained'>Cancel</Button>
          <Button type='submit' variant='contained' >Save</Button>
          <Button onClick={onDeleatedPost} variant='contained' >Deleated</Button>
        </DialogActions>
    </form>

  );
}