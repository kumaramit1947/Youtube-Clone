import {Box, CardMedia, Typography, CardContent} from '@mui/material';
import {CheckCircle} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import { demoProfilePicture } from '../utils/constants';
const ChannelCard = ({ channelDet, marginTop }) => {
    console.log(channelDet);
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: 'none',
            width: '290px',
            height: '260px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto',
            marginTop
        }}>
            <Link to={`/channel/${channelDet?.id?.channelId}`}>
                <CardContent sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#fff'
                }}>
                    <CardMedia image={channelDet?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
                    alt={channelDet?.snippet?.title} 
                    sx={{
                        height: '180px',
                        width: '180px',
                        borderRadius: '50%',
                        border: '1px solid #e3e3e3',
                        mb: '2px'
                    }}
                    />
                    <Typography>
                        {channelDet?.snippet?.title}
                        <CheckCircle sx={{
                            color: "gray",
                            fontSize: 12,
                            ml: '5px'
                        }} />
                    </Typography>
                    {channelDet?.statistics?.subscriberCount && (
                        <Typography fontSize='16px' color='gray'>
                            {parseInt(channelDet?.statistics?.subscriberCount).toLocaleString()} Subscribers
                        </Typography>
                    )}

                </CardContent>
            </Link>

        </Box>
    );
}
export default ChannelCard;