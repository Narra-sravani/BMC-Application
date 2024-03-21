import './style.css'; // Import CSS file
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function FilterNav() {
  const [activeKey, setActiveKey] = useState('home'); // Set initial active key to 'home'

  return (
    <Tabs
      activeKey={activeKey}
      id="uncontrolled-tab-example"
      className="mb-3"
      onSelect={(key) => setActiveKey(key)} // Set active key when a tab is clicked
    >
      <Tab eventKey="home" title="All" className="custom-tab">
        {/* Content for the 'All' tab */}
      </Tab>
      <Tab eventKey="profile" title="Booked" className="custom-tab">
        {/* Content for the 'Booked' tab */}
      </Tab>
      <Tab eventKey="contact" title="Accepted" className="custom-tab">
        {/* Content for the 'Accepted' tab */}
      </Tab>
      <Tab eventKey="ready" title="Ready" className="custom-tab">
        {/* Content for the 'Ready' tab */}
      </Tab>
      <Tab eventKey="completed" title="Completed" className="custom-tab">
        {/* Content for the 'Completed' tab */}
      </Tab>
      <Tab eventKey="rejected" title="Rejected" className="custom-tab">
        {/* Content for the 'Rejected' tab */}
      </Tab>
    </Tabs>
  );
}

export default FilterNav;
