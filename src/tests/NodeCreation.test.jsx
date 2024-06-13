import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../pages/Index';
import { ChakraProvider } from '@chakra-ui/react';

describe('Node Creation and Connection', () => {
  test('renders Index component', () => {
    render(
      <ChakraProvider>
        <Index />
      </ChakraProvider>
    );
    expect(screen.getByText('React Flow Example')).toBeInTheDocument();
  });

  test('creates a new node', () => {
    render(
      <ChakraProvider>
        <Index />
      </ChakraProvider>
    );

    fireEvent.change(screen.getByLabelText(/Node Type/i), { target: { value: 'textNode' } });
    fireEvent.change(screen.getByLabelText(/Node Content/i), { target: { value: 'Test Node Content' } });
    fireEvent.click(screen.getByText(/Add Node/i));

    expect(screen.getByText('Test Node Content')).toBeInTheDocument();
  });

  test('connects nodes', () => {
    render(
      <ChakraProvider>
        <Index />
      </ChakraProvider>
    );

    // Simulate connecting nodes
    fireEvent.change(screen.getByLabelText(/Node Type/i), { target: { value: 'textNode' } });
    fireEvent.change(screen.getByLabelText(/Node Content/i), { target: { value: 'Node 1' } });
    fireEvent.click(screen.getByText(/Add Node/i));

    fireEvent.change(screen.getByLabelText(/Node Type/i), { target: { value: 'textNode' } });
    fireEvent.change(screen.getByLabelText(/Node Content/i), { target: { value: 'Node 2' } });
    fireEvent.click(screen.getByText(/Add Node/i));

    // Assuming there's a way to connect nodes in the UI, simulate that here
    // For example, if there's a button to connect nodes, you would fireEvent.click on that button

    // Check if nodes are connected (this is a placeholder, adjust based on actual implementation)
    expect(screen.getByText('Nodes connected')).toBeInTheDocument();
  });

  test('submits nodes to GPT-4', async () => {
    render(
      <ChakraProvider>
        <Index />
      </ChakraProvider>
    );

    fireEvent.change(screen.getByLabelText(/Node Type/i), { target: { value: 'textNode' } });
    fireEvent.change(screen.getByLabelText(/Node Content/i), { target: { value: 'Test Node Content' } });
    fireEvent.click(screen.getByText(/Add Node/i));

    fireEvent.click(screen.getByText(/Submit/i));

    // Mock the GPT-4 response and check if it's processed correctly
    // This is a placeholder, adjust based on actual implementation
    expect(await screen.findByText('GPT-4 Response')).toBeInTheDocument();
  });
});