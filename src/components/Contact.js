import React, {useState} from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCodepen } from "react-icons/fa";

const Contact = ({contactEmail, contactPara, socialLinks})=>{
  const [count,setCount] = useState(0);
    return (
      <div className="contact_container">
        <h1>Get in touch.</h1>
        <p>{contactPara}</p>
        <br></br>
        <a className="email_link" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        <div className="social_links">
          <ul>
            <li>
              <a id="end" href={`mailto:${contactEmail}`}>
                <FaEnvelope></FaEnvelope>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin></FaLinkedin>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub></FaGithub>
              </a>
            </li>
          </ul>
        </div>
        <div className="space"></div>
        <h3 style={{marginTop: "5%", marginLeft: "80%"}}>
        <p style={{marginLeft: ""}}>Count: {count} </p>
        <button style={{marginLeft: "100%"}} onClick={() => setCount(count+1)}>Easter egg</button>
      </h3>
      </div>
    );
}

export default Contact