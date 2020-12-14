import {React, useState} from 'react'
import {Tabs, Tab} from 'react-bootstrap'

function ControlledTabs() {
    const [key, setKey] = useState('home');
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Home">
          <p>Hello</p>
        </Tab>
        <Tab eventKey="profile" title="Profile">
        <p>Hello</p>
        </Tab>
        <Tab eventKey="contact" title="Contact">
        <p>Hello</p>
        </Tab>
      </Tabs>
    );
  }
  
export default ControlledTabs