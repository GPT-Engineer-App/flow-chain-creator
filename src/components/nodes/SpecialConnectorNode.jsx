import React, { useState } from 'react';
import { Box, Textarea, Button } from '@chakra-ui/react';

const SpecialConnectorNode = ({ data }) => {
  const [instructions, setInstructions] = useState(data.instructions || '');

  const handleChange = (e) => {
    setInstructions(e.target.value);
  };

  const handleSave = () => {
    // Logic to save instructions, possibly updating the node data in the parent state
    console.log('Instructions saved:', instructions);
  };

  return (
    <Box border="1px solid #ddd" borderRadius="8px" padding="8px" bg="gray.100">
      <Textarea
        value={instructions}
        onChange={handleChange}
        placeholder="Enter instructions here..."
        size="sm"
      />
      <Button onClick={handleSave} mt={2} size="sm">Save Instructions</Button>
    </Box>
  );
};

export default SpecialConnectorNode;