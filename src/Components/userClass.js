import React from 'react';
import UserFunction from './userFunction';

class UserClass extends React.Component {

    constructor(props) { //Passing props in a class based compenents !!!
        super(props);
        // preventDefault();

        this.state = {  //creating the default values for state
            userInfo: {
                name: "Dummy",
                location: "Dummy"
            } // First State
        }
        // console.log("Child Constructor")
    }

    async componentDidMount() { // fetching the data by api
        const data = await fetch("https://api.github.com/users/Ammarkhan227");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        // console.log(json);

    }

    componentDidUpdate() {
        console.log("Component Updated")
    }
    componentWillUnmount() {
        console.log("Component will be removed from DOM")
    }
    render() {
        const { name, location, avatar_url, created_at } = this.state.userInfo;  //destructuring assignment !!!
        console.log("Child Render with API Data")
        return (
            <div>
                <h1>My name is : {name}</h1>
                <h2>Created At: {created_at}</h2>
                <h3><img src={avatar_url} /></h3>
            </div>
        )
    }

}

export default UserClass; 