import { useState } from "react";

const UserFunction = (props) => {
    const [count]=useState(0); // 1st State with default value of 0 
    const [count1]=useState(1); //2nd State with default value of 1

    return (
        <div>
            <h1>Count : {count}</h1>
            <h1>Count1 : {count1}</h1>
            <h1>My name is : {props.name}</h1>
            <h2>Contact Me on : {props.contact}</h2>
            <h3>Reach me on email : {props.email}</h3>
        </div>
    )
}
export default UserFunction;