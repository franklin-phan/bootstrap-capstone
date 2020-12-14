import React from 'react';
import ControlledTabs from './TabS'
import ListGroupComp from './ListGroup'
import Footer from './Footer'
import {Jumbotron, Button} from 'react-bootstrap'

function Homepage() {
    return(
        <div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <ControlledTabs />
            <ListGroupComp />
            <Footer />
        </div>
    )
}

export default Homepage