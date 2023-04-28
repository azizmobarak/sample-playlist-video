import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import { VideoPlayList, videosList } from 'src/utils/fakeData';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

type PyalListSectionprops = {
    title: string,
    slug: string;
}

function VideoPlayListSecion ({title, slug}: PyalListSectionprops) {
    return(
        <List sx={{minWidth:'95%'}}  dense>
                <ListItem sx={{backgroundColor: 'white', borderRadius: 2, cursor:'pointer', minWidth:'100%'}}>
                  <ListItemIcon>
                    <PlayCircleFilledWhiteIcon color='primary' />
                  </ListItemIcon>
                  <ListItemText
                    primary={title}
                    secondary={slug}
                  />
                </ListItem>
            </List>
    )
}

const VideoPlayListComponent  = () => {

const videoList = () =>  videosList.map((video: VideoPlayList,index: number)=>(
         <VideoPlayListSecion 
          key={index}
          title={`${index + 1} - ${video.title}`}
          slug={video.slug}
         />
    ))

    return (
        <>
        {videoList()}
        </>
    )
}

export default VideoPlayListComponent;
