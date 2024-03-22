import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './style.css'; 

function FilterNav({ handleFilterSelection }) {
  return (
    <Tabs
      id="uncontrolled-tab-example"
      className="custom-tabs " 
      onSelect={(key) => handleFilterSelection(key)}
    >
      <Tab eventKey="All" title="All" />
      <Tab eventKey="Booked" title="Booked" className="custom-tab" />
      <Tab eventKey="Accepted" title="Accepted" className="custom-tab" />
      <Tab eventKey="Ready" title="Ready" className="custom-tab" />
      <Tab eventKey="Completed" title="Completed" className="custom-tab" />
      <Tab eventKey="Rejected" title="Rejected" className="custom-tab" />
    </Tabs>
  );
}

export default FilterNav;
