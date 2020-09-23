import React from 'react'
import {Link} from "react-router-dom";

class AboutUs extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p>Company: ThoughtWorks Local</p>
                    <p>Location: Xi'an</p>
                </div>
                <div>
                    <p>For more information, please </p>
                    <p>view our <Link to='/'>website</Link></p>
                </div>
            </div>
        )
    }
}


export default AboutUs;