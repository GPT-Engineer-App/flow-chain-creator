import React, { useState } from 'react';
import ReactFlow, { addEdge, MiniMap, Controls, Background, Handle } from 'react-flow-renderer';
import SpecialConnectorNode from '../components/nodes/SpecialConnectorNode';
import ImageNode from '../components/nodes/ImageNode';
import LinkNode from '../components/nodes/LinkNode';
import TextNode from '../components/nodes/TextNode';
import CodeNode from '../components/nodes/CodeNode';
import YouTubeNode from '../components/nodes/YouTubeNode';
import { Container, Text, VStack, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { Configuration, OpenAIApi } from 'openai';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Start Node' }, position: { x: 250, y: 5 } },
  { id: '2', data: { label: 'Another Node' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Output Node' }, position: { x: 400, y: 100 } },
  { id: '4', type: 'imageNode', data: { src: 'https://via.placeholder.com/150', alt: 'Placeholder Image' }, position: { x: 250, y: 200 } },
  { id: '5', type: 'linkNode', data: { href: 'https://example.com', label: 'Example Link' }, position: { x: 100, y: 300 } },
  { id: '6', type: 'textNode', data: { text: 'This is a text node' }, position: { x: 400, y: 300 } },
  { id: '7', type: 'codeNode', data: { code: 'console.log("Hello, world!");' }, position: { x: 250, y: 400 } },
  { id: '8', type: 'youtubeNode', data: { videoId: 'dQw4w9WgXcQ' }, position: { x: 100, y: 500 } },
  { id: '9', type: 'specialConnectorNode', data: { instructions: 'Process the node chain as follows...' }, position: { x: 400, y: 500 } },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const nodeTypes = {
  imageNode: ImageNode,
  linkNode: LinkNode,
  textNode: TextNode,
  codeNode: CodeNode,
  youtubeNode: YouTubeNode,
  specialConnectorNode: SpecialConnectorNode,
};

const Index = () => {
  const [elements, setElements] = useState(initialElements);
  const [nodeData, setNodeData] = useState({ type: '', content: '' });
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNodeData({ ...nodeData, [name]: value });
  };

  const addNode = () => {
    if (nodeData.type === 'specialConnectorNode') {
      nodeData.instructions = 'Process the node chain as follows...';
    }
    const newNode = {
      id: (elements.length + 1).toString(),
      type: nodeData.type,
      data: { ...nodeData },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setElements([...elements, newNode]);
  };

  const gatherData = () => {
    const data = elements.map(element => ({
      id: element.id,
      type: element.type,
      data: element.data,
      position: element.position,
    }));
    console.log('Gathered Data:', data);
    // Here you would prepare the data for submission to OpenAI GPT-4
    // For example, you might structure it in a specific way or add additional metadata
    return data;
  };

  const handleSubmit = async () => {
    const data = gatherData();
    console.log('Submitting Data:', data);
    const response = await sendToGPT4(data);
    console.log('GPT-4 Response:', response);
    // Process the response as needed
  };

  const sendToGPT4 = async (data) => {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createChatCompletion({
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: `Process the following data: ${JSON.stringify(data)}` },
        ],
      });
      return response.data.choices[0].message.content;
    } catch (error) {
      console.error("Error communicating with GPT-4:", error);
      return null;
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%" height="100%">
        <Text fontSize="2xl">React Flow Example</Text>
        <FormControl id="node-type">
          <FormLabel>Node Type</FormLabel>
          <Input name="type" value={nodeData.type} onChange={handleInputChange} placeholder="Enter node type (e.g., textNode, imageNode)" />
        </FormControl>
        <FormControl id="node-content">
          <FormLabel>Node Content</FormLabel>
          <Textarea name="content" value={nodeData.content} onChange={handleInputChange} placeholder="Enter node content (e.g., text, URL, code)" />
        </FormControl>
        <Button onClick={addNode}>Add Node</Button>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onLoad={onLoad}
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