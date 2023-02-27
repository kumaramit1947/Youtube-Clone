import { useState, useEffect } from 'react';
import { Sidebar, Videos } from './';
import { Stack, Box, Typography } from '@mui/material';
import fetchFromApi from '../utils/fetchFromApi';
const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>{
            setVideos(data.items);
        });
    }, [selectedCategory]);
    return (
        <Stack direction={{ sx: 'column', md: 'row' }}>
            <Box sx={{
                height: { sx: 'auto', md: '92vh' },
                borderRight: '1px solid #3d3d3d',
                px: { sx: 0, md: 2 }
            }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                <Typography className='copyright'
                    variant='body2'
                    sx={{
                        color: '#fff',
                        mt: 1.5
                    }}>
                    Copyright 2023 Youtube Clone
                </Typography>
            </Box>
            <Box p={2}
                sx={{
                    overflowY: 'auto',
                    flex: 2,
                    height: '90vh'
                }}>
                <Typography variant='h5'
                    sx={{
                        color: 'white',
                        fontWeight: 'bold',
                        mb: 2
                    }}>
                    <span>{selectedCategory}</span> <span style={{ color: '#fc1503' }}>videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
    );
}
export default Feed;