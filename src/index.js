import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.scss';
import App from './App';
import  'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/components/styles.scss';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App/>);