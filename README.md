# flow-chain-creator

Objective:
Create an application using React Flow where users can add, create, and chain custom nodes containing images, links, text, code, and YouTube videos. The final node will be a connector node that captures user instructions on how to use the chain of nodes. Upon submission, the app will use OpenAI GPT-4 to process the nodes and perform the desired task.

Steps:

Project Setup:

Set up a new React project using Create React App or another preferred setup tool.
Install React Flow: npm install react-flow-renderer.
Initialize React Flow:

Import and initialize React Flow in your main component.
Set up basic React Flow configuration, including state management for nodes and edges.
Custom Node Creation:

Define custom node components for each type: image, link, text, code, and YouTube video.
Use React Flow's react-flow-renderer library to register these custom nodes.
Node Content Handling:

Create forms or inputs to capture the necessary content (URLs, text, code snippets, etc.) for each node type.
Ensure that each custom node component can render its specific content appropriately.
Chaining Nodes:

Allow users to connect nodes by dragging edges between them.
Ensure edges represent the flow and order of the nodes.
Connector Node:

Create a special connector node where users can input instructions on how the node chain should be processed.
This node will serve as the final step in the chain, capturing detailed user instructions.
Submit Functionality:

Implement a submit button that gathers data from all nodes and the connector node.
Prepare the data for submission to OpenAI GPT-4, structuring it in a way that makes sense for the intended task.
Integrating OpenAI GPT-4:

Set up API access to OpenAI GPT-4.
Write a function to send the node data and connector node instructions to the GPT-4 API.
Handle the response from GPT-4, processing it as needed to complete the user-requested task.
User Interface:

Design a user-friendly interface with clear options to add, edit, and connect nodes.
Provide visual feedback for node connections and any errors or issues.
Testing:

Thoroughly test the application to ensure nodes are created, connected, and submitted correctly.
Verify that GPT-4 processes the instructions as expected and provides accurate responses.
Deployment:

Deploy the application to a hosting service like Vercel, Netlify, or a cloud provider.
Ensure that the backend handling the OpenAI API requests is secure and scalable.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/flow-chain-creator.git
cd flow-chain-creator
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
