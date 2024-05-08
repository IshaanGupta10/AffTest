import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [numberType, setNumberType] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setNumberType(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE1MTQ2NTA1LCJpYXQiOjE3MTUxNDYyMDUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg0OTc1MjlkLTc5ZDItNDVlNS1hYjU3LTk5M2EwNGFmYzc1MSIsInN1YiI6ImlzaGFhbjIzNThAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI4NDk3NTI5ZC03OWQyLTQ1ZTUtYWI1Ny05OTNhMDRhZmM3NTEiLCJjbGllbnRTZWNyZXQiOiJyeE9jd0dja0ZnQ0pUSmVtIiwib3duZXJOYW1lIjoiSXNoYWFuIiwib3duZXJFbWFpbCI6ImlzaGFhbjIzNThAZ21haWwuY29tIiwicm9sbE5vIjoiMjEwNTk2NSJ9.pEM2el8e9O9x4CZ6lCQIJMKut0Xbytz8kHGI_dPjvlk'
        }
      };
      let apiUrl = '';
      switch (numberType) {
        case 'p':
          apiUrl = 'http://20.244.56.144/test/primes';
          break;
        case 'f':
          apiUrl = 'http://20.244.56.144/test/fibo';
          break;
        case 'e':
          apiUrl = 'http://20.244.56.144/test/even';
          break;
        case 'r':
          apiUrl = 'http://20.244.56.144/test/rand';
          break;
        default:
          setError('Invalid number type');
          return;
      }
      const response = await axios.get(apiUrl, config);
      setResponse(response.data);
      setError(null);
    } catch (error) {
      setError('Error fetching data from server.');
    }
  };

  return (
    <div className="App">
      <h1>Average Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Number Type:
          <input type="text" value={numberType} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
      {response && (
        <div>
          <h2>Previous Window State:</h2>
          <p>{response.windowPrevState ? response.windowPrevState.join(', ') : ''}</p>
          <h2>Current Window State:</h2>
          <p>{response.windowCurrState ? response.windowCurrState.join(', ') : ''}</p>
          <h2>Numbers:</h2>
          <p>{response.numbers ? response.numbers.join(', ') : ''}</p>
          <h2>Average:</h2>
          <p>{response.avg}</p>
        </div>
      )}
    </div>
  );
}

export default App;
