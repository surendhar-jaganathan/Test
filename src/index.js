import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
 import { BrowserRouter } from 'react-router-dom';
 import { Route } from 'react-router';
 import About from './About';
 import Details from './details';

 
    // // "start": "react-scripts start"
    
const root = ReactDOM.createRoot(document.getElementById('root'));
const path= process.env.PUBLIC_URL
root.render(
  <BrowserRouter basename={path}>
     <Route exact path='/' component={App} />
     <Route exact path='/about' component={About} />
     <Route exact path='/details' component={Details} />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
