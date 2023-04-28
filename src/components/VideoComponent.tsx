import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import React from 'react';

type VideoProps = {
    url: string;
    description: string;
    title: string; 
}

export default function VideoComponent ({url, description, title}: VideoProps){

    return(
 <Card sx={{ width: '100%', height: '100%' }}>
      <CardActionArea>
      <iframe width="100%" height={700} 
      src={url} 
      title={title} 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullScreen></iframe>

  <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>  
    )
}