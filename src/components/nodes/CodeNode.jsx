import React from 'react';
import { Box, Code } from '@chakra-ui/react';

const CodeNode = ({ data }) => {
  return (
    <Box border="1px solid #ddd" borderRadius="8px" padding="8px" bg="gray.100">
      <Code>{data.code}</Code>
    </Box>
  );
};

export default CodeNode;