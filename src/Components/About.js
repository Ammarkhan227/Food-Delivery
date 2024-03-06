import UserClass from "./userClass";
import UserFunction from "./userFunction";

const About = () => {
    return (
        <div style={{ color: 'white' }}>
            <UserClass name={"Ammar"} contact={"6306101991"} email={"ammakhan101010@gmail.com"} />
            {/* <UserFunction name={"Abhishek"} contact={"9412564789"} email={"abhishekshukla@gmail.com"} /> */}
        </div>

    )
}

export default About;