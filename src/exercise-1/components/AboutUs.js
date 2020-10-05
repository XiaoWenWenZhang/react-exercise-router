import React from 'react'
import {Link} from "react-router-dom";

class AboutUs extends React.Component {
    render() {
        return (
            <div className="page">
                <p>Company: ThoughtWorks Local</p>
                <p>Location: Xi'an</p>
                <br />
                <p>For more information, please </p>
                <p>view our <Link to='/'>website</Link></p>
            </div>
        )
    }
}


export default AboutUs;