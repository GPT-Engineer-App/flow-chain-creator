import React from 'react';
import { Box } from '@chakra-ui/react';

const YouTubeNode = ({ data }) => {
  return (
    <Box border="1px solid #ddd" borderRadius="8px" overflow="hidden">
      <iframe
        width="100%"
        height="200"
        src={`https://www.youtube.com/embed/${data.videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </Box>
  );
};

export default YouTubeNode;