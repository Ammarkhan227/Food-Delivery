import React from 'react';

class UserClass extends React.Component {
    constructor(props) { //Passing props in a class based compenents !!!
        super();

        this.state = {
            count: 0, // First State
            count1: 1 // 2nd State
        }
    }
    render() {
        const { name, contact, email } = this.props;  //destructuring assignment !!!
        const { count, count1 } = this.state;
        return (
            <div>
                <h1>Count : {count}</h1>
                 {/* <button onClick={this.setState({
                    count : this.state.count +1
                })}>For count</button> */}

                <h1>My name is : {name}</h1>
                <h2>Contact Me on : {contact}</h2>
                <h3>Reach me on email : {email}</h3>
            </div>
        )
    }

}

export default UserClass; 