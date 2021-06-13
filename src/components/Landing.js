import React from 'react';
import Header from './Header'
import Home from './Home';
import Work from './Work';
import Contact from './Contact';

import data from '../yourdata';

const Landing = ()=>{
    return(
    <div className="App">
      <div className="fullpage">
        <Header name={data.name} contactEmail = {data.contactEmail}/>
        <Home name={data.landingPageName} paragraph = {data.landingPagePara} authorImage={data.landingPageImage}/>
      </div>
      <Work projects={data.projects}/>
      <Contact contactEmail = {data.contactEmail} contactPara={data.contactPara} socialLinks={data.social}/>
    </div>
    )
}

export default Landing
