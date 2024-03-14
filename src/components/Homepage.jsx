import React, { useState } from 'react';

const Homepage = () => {
  const [message, setMessage] = useState('');
  const [postData, setPostData] = useState('');
  const [postResponse, setPostResponse] = useState('');

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/data');
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const postDataToServer = async () => {
    try {
      const response = await fetch('http://localhost:3001/post-data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: postData }),
      });
      const data = await response.json();
      setPostResponse(data.message);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const handleInputChange = (event) => {
    setPostData(event.target.value);
  };

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {message && <p>{message}</p>}
      <input type="text" value={postData} onChange={handleInputChange} /><br/>
      <button onClick={postDataToServer}>Post Data</button>
      {postResponse && <p>{postResponse}</p>} {/* Display response message */}
    </div>
  );
};

export default Homepage;
