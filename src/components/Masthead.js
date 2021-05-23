import React from 'react';

import Scroll from '../components/Scroll';

import logo from '../assets/images/bottled-software.svg';
import demoDetails from '../assets/images/demo-details.png';

const MastHead = () => (
  <header className="masthead" id="page-top">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <img src={logo} className="logo" alt="" />
            <h1 className="mb-5">
              Als Experten der mobilen Softwareentwicklung
              unterstützen wir Sie in allen Belangen Ihrer
              App-Entwicklungsprojekte
            </h1>
            <Scroll type="id" element="contact">
              <a href="#contact" className="btn btn-outline btn-xl">
                Kontakt
              </a>
            </Scroll>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="image-container">
            <img src={demoDetails} className="img-fluid" alt="" />
          </div>
          <div className="button"></div>
        </div>
      </div>
    </div>
  </header>
)

export default MastHead;

