import { Route } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';

import { useHistory } from 'react-router-dom';


function App() {
 const history = useHistory();
  
  const getdatatwo=()=>{
    
history.push("./about")
  }
  

  const handleFileUpload = async () => {
    try {
      const fileHandle = await window.showOpenFilePicker({
        types: [
          {
            description: 'Text Files',
            accept: { 'text/plain': ['.txt'] },
          },
        ],
      });
      
      // Get the file
      const file = await fileHandle[0].getFile();
      const text = await file.text();
      console.log('File content:', text); // Log the file content
    } catch (error) {
      console.error('Error opening file:', error);
    }
  };


  const handleFileSave = async () => {
    try {
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: 'example.txt',
        types: [
          {
            description: 'Text Files',
            accept: { 'text/plain': ['.txt'] },
          },
        ],
      });

      const writableStream = await fileHandle.createWritable();
      await writableStream.write('Saved data from React app!');
      await writableStream.close();

      console.log('File saved successfully!');
    } catch (error) {
      console.error('Error saving file:', error);
    }
  };

  return (
    <div>
        <h1   onClick={ handleFileUpload}>i am surendhar</h1>
        <h1 onClick={ handleFileSave } >test project</h1>
        <h1>test34 project</h1>
        <h1>test78 project</h1>
        <h1>demo</h1>

 <h2 onClick={getdatatwo}>get token </h2>
 </div>
     
  );
}

export default App;
