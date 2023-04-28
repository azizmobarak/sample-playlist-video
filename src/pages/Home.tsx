//import liraries
import React from 'react';
import {Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material';
import VideoComponent from 'src/components/VideoComponent';
import VideoPlayListComponent from 'src/components/VideosListComponent';
import CommentsComponent from 'src/components/CommentsComponent';
// API for testing
const API_KEY='FUijYrGbMxpXTF5sxoqhDjTLsL5TmlWBUNhgF09cXi3dMJKOWy8KjtrF'

// create a component
const Home = () => {
    return (
     <Grid container width={'100%'} display='flex' flexDirection='column' flexWrap='wrap' gap={0}>
        <Grid display='flex' flexDirection='row' flexWrap='wrap'>
            <Grid display='flex' justifyContent='flex-start' alignItems='center' sm={12} lg={8} md={8}>
            <VideoComponent 
            title={'video title example'}
            description={'random text random text random text random text random text random text random text random text random text random text '}
            url={"https://www.youtube.com/embed/R4hwxlazg5g"} />
            </Grid>
            <Grid display='flex' flexDirection={'column'} width={'100%'} justifyContent='flex-start' alignItems='flex-end' sm={12} lg={4} md={4}>
                <VideoPlayListComponent/>
            </Grid>
        </Grid>
        <Grid  width={'100%'} sm={12} md={12} lg={12}>
            <CommentsComponent/>
        </Grid>
        </Grid>
    );
};


//make this component available to the app
export default Home;
