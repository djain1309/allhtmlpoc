import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [allhtml, setAll] = useState("");
  const [content, setContent] = useState('');


  useEffect(() => {
    axios.get('http://127.0.0.1:5000/').then(response => {
      setContent(response.data);
    }).catch(err => {
      console.log(err);
    })
  }, [])


  const callHandler = () => {
    const data = {
      'first' : "Deep",
      'last' : "Jain"
    };
    axios.post('http://127.0.0.1:5000/check', {
      data : data
    }).then((response) => {
      console.log(response.data);
      setAll(response.data)
    }).catch((error) => {
      console.log(error);
    });
  }



  return (
    <div className="App">
      <nav>
        <h2>POC</h2>
        {content}
      </nav>
      <button style={{height : "50px", width: "50px", color: "black"}} onClick={callHandler}>CLICK</button>
      {<div dangerouslySetInnerHTML={{ __html: allhtml }}></div>}
    </div>
  );
}

export default App;
