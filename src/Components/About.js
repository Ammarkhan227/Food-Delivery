import React from 'react';
import UserClass from "./userClass";

class About extends React.Component {
    constructor() {
        super();
        console.log("Parent Consutructor")
    }
    componentDidMount() {
        console.log("Parent conponentDidMount")
    }

    render() {
        console.log("Parent render")
        return (
            <div style={{ color: 'white' }}>
                <UserClass />
            </div>
        )
    }
}

export default About;