// main.tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

function Hello() {
  return (
    <div>
      <h1>Hello World</h1>
      <p>Welcome to React with TypeScript!</p>
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hello />
  </StrictMode>
);
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Hello Tailwind CSS!
      </h1>
    </div>
  )
}

export default App