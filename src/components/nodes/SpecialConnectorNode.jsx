import React from 'react';
import { Box, Textarea } from '@chakra-ui/react';

const SpecialConnectorNode = ({ data }) => {
  return (
    <Box border="1px solid #ddd" borderRadius="8px" padding="8px" bg="gray.100">
      <Textarea placeholder="Enter instructions here..." value={data.instructions} />
    </Box>
  );
};

export default SpecialConnectorNode;