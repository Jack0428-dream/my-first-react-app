import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Greeting from "./Greeting.jsx";
import Foodinfo from './Foodinfo.jsx';
import App2 from "./App2.jsx"
import PackingList from './Conditional.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Foodinfo />
    <App2 />
    <PackingList />
  </StrictMode>,
)
