import React, { useState } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [responseData, setResponseData] = useState([]);
  const [error, setError] = useState(null);
  const [updatedLeadIds,setUpdatedLeadIds]=useState([]);


  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://servicesbmc-47ed805c0931.herokuapp.com/lead/get-data');
      if (!response.data) {
        throw new Error('Failed to fetch data');
      }
      console.log('Received data:', response.data); 
      setResponseData(response.data);
      // await autoUpdate();
    } catch (error) {
      setError(error.message);
    }
  };
  

  // const autoUpdate = async () => {
  //   try {
  //     const response = await axios.get('https://servicesbmc-47ed805c0931.herokuapp.com/lead/get-data');
      
  //     const leadDataArray = response.data.filter(leadData => leadData.is_final_call_attempt);
  
  //     const newLeads = leadDataArray.filter(leadData => !updatedLeadIds.includes(leadData._id));
  
  //     console.log("New leads to be updated:", newLeads);
  
  //     const updatedLeads = await Promise.all(newLeads.map(async (leadData) => {
  //       const sampleObject = {
  //         fields: {
  //           name: leadData.contact_name,
  //           phone: leadData.phone_number,
  //           SquadstackCallRecording: leadData.recording_url,
  //           AdditionalNotes: leadData.question_answers.find(answer => answer.question === "additional_notes")?.answer || "",
  //           EventTimeline: leadData.question_answers.find(answer => answer.question === "event_timeline")?.answer || "",
  //           SquadStackStatus: leadData.call_outcome,
  //           cities: leadData.question_answers.find(answer => answer.question === "other_city")?.answer || ""
  //         },
  //         actions: [{ type: "SYSTEM_NOTE" }]
  //       };
  
  //       const headers = {
  //         'Content-Type': 'application/json',
  //         'Authorization': 'Bearer 44e03335-c176-4929-8bad-43d924f118891710764190404:9a3e0bff-d65e-4f8b-8096-42d86b3b8036'
  //       };
  
  //       const teleCRMResponse = await axios.post('https://api.telecrm.in/enterprise/65a4ef495caf37c09f8c5772/autoupdatelead', sampleObject, { headers });
        
  //       if (teleCRMResponse.status === 200) {
  //         return { leadId: leadData._id, message: 'Lead updated successfully in TeleCRM' };
  //       } else {
  //         throw new Error(`Failed to update lead ${leadData._id} in TeleCRM: ${teleCRMResponse.statusText}`);
  //       }
  //     }));
  
  //     console.log("Updated leads:", updatedLeads); 
  
  //     const newlyUpdatedLeadIds = updatedLeads.map(lead => lead.leadId);
  //     setUpdatedLeadIds([...updatedLeadIds, ...newlyUpdatedLeadIds]);
  
  //     if (updatedLeads.length === newLeads.length) {
  //       return { message: 'All leads updated successfully' };
  //     } else {
  //       return { message: 'Some leads were not updated successfully', errors: updatedLeads };
  //     }
  //   } catch (error) {
  //     console.error("Error updating leads in TeleCRM:", error);
  //     throw new Error(`Error updating leads in TeleCRM: ${error.message}`);
  //   }
  // };
  
  const autoUpdate = async () => {
    try {
      const response = await axios.get('https://servicesbmc-47ed805c0931.herokuapp.com/lead/get-data');
      
      // Find the lead with the specific lead_id
      const leadToUpdate = response.data.find(leadData => leadData.phone_number === "918374661803" && leadData.lead_id === "918374661803");
      
      if (!leadToUpdate) {
        console.log("Lead with the specified ID not found.");
        return { message: 'Lead with the specified ID not found.' };
      }
      
      const sampleObject = {
        fields: {
          name: leadToUpdate.contact_name,
          phone: leadToUpdate.phone_number,
          SquadstackCallRecording: leadToUpdate.recording_url,
          AdditionalNotes: leadToUpdate.question_answers.find(answer => answer.question === "additional_notes")?.answer || "",
          EventTimeline: leadToUpdate.question_answers.find(answer => answer.question === "event_timeline")?.answer || "",
          SquadStackStatus: leadToUpdate.call_outcome,
          cities: leadToUpdate.question_answers.find(answer => answer.question === "other_city")?.answer || ""
        },
        actions: [{ type: "SYSTEM_NOTE" }]
      };
  
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer 44e03335-c176-4929-8bad-43d924f118891710764190404:9a3e0bff-d65e-4f8b-8096-42d86b3b8036'
      };
  
      const teleCRMResponse = await axios.post('https://api.telecrm.in/enterprise/65a4ef495caf37c09f8c5772/autoupdatelead', sampleObject, { headers });
      
      if (teleCRMResponse.status === 200) {
        console.log('Lead updated successfully in TeleCRM');
        return { leadId: leadToUpdate._id, message: 'Lead updated successfully in TeleCRM' };
      } else {
        throw new Error(`Failed to update lead ${leadToUpdate._id} in TeleCRM: ${teleCRMResponse.statusText}`);
      }
    } catch (error) {
      console.error("Error updating lead in TeleCRM:", error);
      throw new Error(`Error updating lead in TeleCRM: ${error.message}`);
    }
  };
  
  
  

  

  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <div>Error: {error}</div>}
      {responseData && (
        <div>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Id</th>
                <th>phone_number</th>
                <th>contact_name</th>
                <th>lead_id</th>
                <th>latest_recording_url</th>
                <th>campaign_id</th>
                <th>lead_outcome</th>
              </tr>
            </thead>
            <tbody>
              {
                responseData.map((row,index) => (
                  <tr key={index}>
                    <td>{row._id}</td>
                    <td>{row.phone_number}</td>
                    <td>{row.contact_name}</td>
                    <td>{row.lead_id}</td>
                    <td>{row.recording_url}</td>
                    <td>{row.campaign_id}</td>
                    <td>{row.latest_called_at}</td>
                    <td>{row.call_outcome}</td>
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
