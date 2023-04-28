import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import React from 'react';
import { comments } from 'src/utils/fakeData';

type CommentProps = {
    username: string,
    avatar: string;
    comment: string;
}

export default function CommentsComponent (){

    const getComments = () => comments.map((comment: CommentProps,index: number)=>(
       <CommentsArea
        avatar={comment.avatar}
        comment={comment.comment}
        username={`${index+1} - ${comment.username}`}
       />
    ))

   return(
       <>
       {getComments()}
       </>
   )
}


const CommentsArea = ({username, avatar, comment}: CommentProps) => {
    return(
        <Stack padding={3} gap={1}>
            <Box display='flex' flexDirection='row' alignItems='center' gap={1}>
                <Avatar alt="Remy Sharp" src={avatar} />
                <Typography color="whitesmoke" component='h2'>
                    {username}
                </Typography>
            </Box>
            <Card sx={{maxWidth: 700, minHeight: 100, borderRadius: 2, p:2}}>
                <Typography>
                    {comment}
                </Typography>
            </Card>
        </Stack>
    )
}