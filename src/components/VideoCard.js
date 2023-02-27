import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoChannelTitle, demoChannelUrl, demoThumbnailUrl, demoVideoTitle, demoVideoUrl }
    from '../utils/constants';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
    // console.log(snippet);
    return (
        <Card sx={{width: {xs: '100%'}, maxWidth: '290px', boxShadow: 'none', borderRadius: 'none'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{
                        width: 290,
                        height: 180
                    }} />
            </Link>
            <CardContent sx={{
                backgroundColor: '#1e1e1e',
                height: 80,
                mt: '-10px'
            }}
            >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant="subtitle1" color="#fff" fontSize="16px">
                        {snippet?.title.slice(0,50) || demoVideoTitle.slice(0,50)}
                    </Typography>
                </Link>

                <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                    <Typography variant="body2" color="gray" noWrap={true} fontSize="16px">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{
                            color: "gray",
                            fontSize: 12,
                            ml: '5px'
                        }} />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
}
export default VideoCard;