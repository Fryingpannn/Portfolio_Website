import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import Peepo from './Peepo';

const Contact = ({contactEmail, contactPara, socialLinks})=>{
    return (
      <div className="contact_container">
        <h1>Get in touch.</h1>
        <p>{contactPara}</p>
        <a className="email_link" href={`mailto:${contactEmail}`}>
          {contactEmail}
        </a>
        <div className="social_links">
          <ul>
            <li>
              <a id="end" href={`mailto:${contactEmail}`}>
                <FaEnvelope/>
              </a>
            </li>
            <li>
              <a href={socialLinks[0].url}>
                <FaLinkedin/>
              </a>
            </li>
            <li>
              <a href={socialLinks[1].url}>
                <FaGithub/>
              </a>
            </li>
          </ul>
        </div>
        <Peepo style={{position: "absolute", height: "10%", bottom: 0, right: 0}}/>
      </div>
    );
}

export default Contact
