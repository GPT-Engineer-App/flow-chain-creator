import React from 'react';
import { Box, Link } from '@chakra-ui/react';

const LinkNode = ({ data }) => {
  return (
    <Box border="1px solid #ddd" borderRadius="8px" padding="8px">
      <Link href={data.href} isExternal>
        {data.label}
      </Link>
    </Box>
  );
};

export default LinkNode;