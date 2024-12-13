
import React from 'react';
import { useHistory } from 'react-router-dom';



function About() {
const history = useHistory()
  
    const change=()=>{
        history.push("./details")
    }
  return (
    <div>
 <h1 onClick={change}>i am About</h1>
 
 </div>
     
  );
}

export default About;
