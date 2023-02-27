import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from './';
const Videos = ({ videos, direction }) => {
    return (
        <Stack direction={direction || 'row'}
            justifyContent='start'
            flexWrap='wrap'
            gap={1}>
            {videos.map((item, ind) => {
                return (
                    <Box key={ind}>
                        {item.id.videoId && <VideoCard video={item} />}
                        {item.id.channelId && <ChannelCard channelDet={item} />}
                    </Box>
                );
            })}

        </Stack>
    );
}
export default Videos;