import React from 'react';
import Header from './header';
import Contact from './Contact';
import data from './yourdata';

const Resume = () =>{
return (
  <div>
    <Header name={data.name} contactEmail={data.contactEmail}></Header>
    <div className="about_container">
      {/*<h1>{data.aboutTitle}</h1>
      <p>{data.aboutPara}</p>*/}
    <object width="100%" height="1100" type="application/pdf" data="assets/MatthewPan_Resume.pdf">
      <p>PDF cannot be displayed.</p>
    </object>
      <div className="spaceAbout">
      </div>
    </div>
  </div>
);
}
export default Resume;