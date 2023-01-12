import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Avatar, Box, Button, Divider, TextField, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { updatePost } from '../../helper/updatePost';
import { useParams } from 'react-router-dom';


export const CommentsContainer = ({postData}) => {

    const [isSaving, setIsSaving] = useState(false);
    const {firstname, lastname, profilePic} = useSelector(state => state.auth)
    const { register, handleSubmit, formState:{errors} } = useForm();
    const data = postData.comments;

    const {id} = useParams()




    const postComment = async (content)=>{

        
        setIsSaving(true);
        
        const date = new Date().getTime();
        const fullName = `${firstname} ${lastname}`;
        
        const info = postData.comments === '[]' ? [] : postData.comments

        const coment = {

            fullName,
            profilePic: profilePic ? profilePic : null,
            date,
            comment : content.comment

        }
        
        const comments = [...info, coment]
        const data = {...postData, comments}

        const resp = await updatePost(data, id);

        if(resp.ok){
            location.reload()
        }

    }

    const date = (info)=> {

        const newDate = new Date( info )

        return newDate.toUTCString()

    }
    


  return (
    <>
        <Box display='flex' alignItems='center' flexDirection='column' sx={{maxHeight:'500px', overflowY:'scroll'}}>

            {
               data !== undefined && 
               data.map(element => (
                <Box mb={5} sx={{width:'50%', border:'1px solid #bdbdbd', padding:'10px', borderRadius:'2px 16px 16px 16px '}}>

                    <Box display='flex' alignItems='center' justifyContent='space-between'>

                        <Box display='flex' alignItems='center' >

                            <Avatar src={`${element.profilePic}`} />
                            <Typography ml={1.5} fontWeight={700}> {element.fullName} </Typography>

                        </Box>

                    <Typography>{ date(element.date) }</Typography>


                    </Box>

                    <Divider sx={{marginTop:"10px"}} />

                    <Typography textAlign='justify' ml={2} mt={2}>
                            {element.comment}
                    </Typography>

                </Box>
            ))
                
               
            }

        </Box>
          
            <form onSubmit={handleSubmit( postComment )}>

                <Box display='flex' alignItems='center' flexDirection='column'>
                    <TextField
                        type='text'
                        placeholder="write your comment"
                        multiline
                        minRows={3}
                        maxRows={5}
                        sx={{marginBottom:'20px', width:'50%'}}
                        {...register('comment', {minLength:5})}
                        
                    >

                    </TextField>

                    <Button type="submit" variant="contained" sx={{width:"50%", marginBottom:'20px'}}>Coment</Button>
                </Box>
            </form>
    </>
      
  )
}
