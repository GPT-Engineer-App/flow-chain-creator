import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const TextNode = ({ data }) => {
  return (
    <Box border="1px solid #ddd" borderRadius="8px" padding="8px">
      <Text>{data.text}</Text>
    </Box>
  );
};

export default TextNode;