import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Videos } from './';
import { Box, Typography } from '@mui/material';
import fetchFromApi from '../utils/fetchFromApi';
const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const {searchTerm} = useParams();
    useEffect(() => {
        fetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data)=>{
            setVideos(data.items);
        });
    }, [searchTerm]);
    return (
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
                    <span>Search results for:</span> <span style={{ color: '#fc1503' }}>{searchTerm}</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
    );
}
export default SearchFeed;