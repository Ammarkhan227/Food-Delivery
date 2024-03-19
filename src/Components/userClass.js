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
            <div className='flex justify-around my-24 rounded-lg bg-yellow-100'>
                <div className='text-size-7 w-1/2 my-8'>
                    {/* <h1 className=''>My name is : {name}</h1>
                    <h2>Created At: {created_at}</h2> */}
                    <h3 className='text-slate-800'>Hello there! I'm Ammar, a passionate and aspiring web developer with a keen interest in crafting immersive digital experiences.

                        Ever since I laid my hands on coding, I've been captivated by the endless possibilities it offers to create innovative solutions and bring ideas to life on the web.

                        My journey into web development has been driven by a combination of curiosity and a relentless pursuit of excellence. I thrive in environments where creativity meets functionality, and I'm always eager to dive deep into new technologies to expand my skill set.

                        In addition to technical skills, I bring a collaborative and proactive approach to every project I undertake. I believe in effective communication, attention to detail, and a strong commitment to delivering high-quality work that exceeds expectations.

                        Whether it's building responsive websites, optimizing user experiences, or tackling complex challenges, I'm enthusiastic about leveraging my skills to contribute meaningfully to projects and make a positive impact.

                        Outside of coding, you can find me exploring the latest web development trends, attending tech meetups, or immersing myself in creative pursuits that inspire my work.</h3>
                </div>
                <div className='1/2 my-5'>
                    <img className='w-[20rem] rounded-full shadow-lg' src={avatar_url} />
                </div>
            </div>
        )
    }

}

export default UserClass; 