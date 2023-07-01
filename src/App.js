import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:3002/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
      <p>{ message }</p>
    </div>
  );
}

export default App;