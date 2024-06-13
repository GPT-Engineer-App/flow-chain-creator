import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background, Handle } from 'react-flow-renderer';
import ImageNode from '../components/nodes/ImageNode';
import LinkNode from '../components/nodes/LinkNode';
import TextNode from '../components/nodes/TextNode';
import CodeNode from '../components/nodes/CodeNode';
import YouTubeNode from '../components/nodes/YouTubeNode';
import { Container, Text, VStack } from "@chakra-ui/react";

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Start Node' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Another Node' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Output Node' }, position: { x: 400, y: 100 } },
  { id: '4', type: 'imageNode', data: { src: 'https://via.placeholder.com/150', alt: 'Placeholder Image' }, position: { x: 250, y: 200 } },
  { id: '5', type: 'linkNode', data: { href: 'https://example.com', label: 'Example Link' }, position: { x: 100, y: 300 } },
  { id: '6', type: 'textNode', data: { text: 'This is a text node' }, position: { x: 400, y: 300 } },
  { id: '7', type: 'codeNode', data: { code: 'console.log("Hello, world!");' }, position: { x: 250, y: 400 } },
  { id: '8', type: 'youtubeNode', data: { videoId: 'dQw4w9WgXcQ' }, position: { x: 100, y: 500 } },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const nodeTypes = {
  imageNode: ImageNode,
  linkNode: LinkNode,
  textNode: TextNode,
  codeNode: CodeNode,
  youtubeNode: YouTubeNode,
};

const Index = () => {
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%" height="100%">
        <Text fontSize="2xl">React Flow Example</Text>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          style={{ width: '100%', height: '90%' }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </VStack>
    </Container>
  );
};

export default Index;