import { Route } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function App() {
 const history = useHistory();
  const getdata=()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic d2Vrbm93bG9uZG9uQHByaW9hcGlzLmNvbTpGIzZ3cE1VSEBXUlJXZ1A=");
    
    var raw = JSON.stringify({
      "grant_type": "client_credentials"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://sandbox-distributor-api.prioticket.com/v3.5/distributor/oauth2/token", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
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
