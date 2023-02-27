import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Stack, Box, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';

import { Videos } from './';
import fetchFromApi from '../utils/fetchFromApi';

const VideoDetail = () => {
    const [videoDetail, setVideoDetail] = useState({});
    const [videos, setVideos] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        fetchFromApi(`videos?part=snippet,statistics&id=${id}`)
            .then((data) => {
                setVideoDetail(data.items[0]);
            });
        fetchFromApi(`search?part=id,snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => {
                
                setVideos(data.items);
            });
    }, [id]);
    if (!videoDetail?.snippet) return "Loading...";
    const { snippet: { title, channelTitle, channelId }, statistics: { viewCount, likeCount } } = videoDetail;
    console.log(channelId);
    return (
        <Box height='95vh'>
            <Stack direction={{ xs: 'column', md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player" controls />
                        <Typography color='#fff' variant='h6' p={2}>
                            {title}
                        </Typography>
                        <Stack direction='row' justifyContent='space-between'
                            sx={{ color: '#fff', px: 2, py: 2, mt: -5 }}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant='h6' color='#fff'>
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', ml: '5px', color: 'gray' }} />
                                </Typography>
                            </Link>
                            <Stack direction='row' gap='20px' alignItems='center'>
                                <Typography variant='body1' sx={{
                                    opacity: 0.7
                                }}>
                                    {parseInt(viewCount.toLocaleString())} views
                                </Typography>
                                <Typography variant='body1' sx={{
                                    opacity: 0.7
                                }}>
                                    {parseInt(likeCount.toLocaleString())} likes
                                </Typography>
                            </Stack>

                        </Stack>
                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent='center' alignItems='center'>
                    <Videos videos={videos} direction='column' />
                </Box>
            </Stack>

        </Box>
    );
}
export default VideoDetail;