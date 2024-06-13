import React from 'react';
import { Box, Image } from '@chakra-ui/react';

const ImageNode = ({ data }) => {
  return (
    <Box border="1px solid #ddd" borderRadius="8px" overflow="hidden">
      <Image src={data.src} alt={data.alt} />
    </Box>
  );
};

export default ImageNode;