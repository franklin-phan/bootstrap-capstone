import React from 'react';
import {ListGroup} from 'react-bootstrap'

function ListGroupComp() {
    return(
        <ListGroup>
          <ListGroup.Item action href="#channels">
            Channels
          </ListGroup.Item>
          <ListGroup.Item action href="#roles">
            Roles
          </ListGroup.Item>
          <ListGroup.Item action href="#photos">
            Photos
          </ListGroup.Item>

        </ListGroup>
      )}
  
 
export default ListGroupComp