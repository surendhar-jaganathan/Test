import { Route } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function App() {
 const history = useHistory();
  
  const getdatatwo=()=>{
    
history.push("./about")
  }
  return (
    <div>
 <h1>i am surendhar</h1>
 <h2 onClick={getdatatwo}>get token </h2>
 </div>
     
  );
}

export default App;