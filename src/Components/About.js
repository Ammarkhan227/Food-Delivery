import React from 'react';
import UserClass from "./userClass";

class About extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        
    }

    render() {
        return (
            <div style={{ color: 'white' }}>
                <UserClass />
            </div>
        )
    }
}

export default About;