import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { Videos, ChannelCard } from './';
import fetchFromApi from '../utils/fetchFromApi';
const ChannelDetail = () => {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        fetchFromApi(`channels?part=snippet&id=${id}`)
            .then((data) => {
                setChannelDetail(data?.items[0]);
            });
        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => {
                setVideos(data?.items);
            });
    }, [id])
    return (
        <Box minHeight='95vh'>
            <Box>
                <Box sx={{
                    background: 'linear-gradient(to right, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%)',
                    zIndex: 10,
                    height: '300px'
                }} />
                {channelDetail && <ChannelCard channelDet={channelDetail} marginTop='-113px' />}
            </Box>
            <Box sx={{display: 'flex', p:'2'}}>
                <Box sx={{mr:{xs: '100px', sm: '150px'}}} />
                {videos && <Videos videos={videos} />}
            </Box>
        </Box>
    );
}
export default ChannelDetail;