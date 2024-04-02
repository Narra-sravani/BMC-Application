import React, { useState } from 'react';

const YourComponent = () => {
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://servicesbmc-47ed805c0931.herokuapp.com/lead/get-data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      console.log('Received data:', jsonData); // Logging the received data
      setResponseData(jsonData);
    } catch (error) {
      setError(error.message);
    }
  };
  

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <div>Error: {error}</div>}
      {responseData && (
        <div>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>phone_number</th>
                <th>lead_id</th>
                <th>latest_recording_url</th>
                <th>campaign_id</th>
                <th>latest_called_at</th>
                <th>lead_outcome</th>
              </tr>
            </thead>
            <tbody>
              {
                responseData.map((row,index) => (
                  <tr key={index}>
                    <td>{row._id}</td>
                    <td>{row.phone_number}</td>
                    <td>{row.lead_id}</td>
                    <td>{row.latest_recording_url}</td>
                    <td>{row.campaign_id}</td>
                    <td>{row.latest_called_at}</td>
                    <td>{row.lead_outcome}</td>
                  </tr>
                )
                )

              }
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default YourComponent;
