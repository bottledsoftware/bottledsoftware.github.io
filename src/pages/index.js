import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Social from '../components/Social';
import MastHead from '../components/MastHead';

import demoPreisalarm from '../assets/images/demo-preisalarm.png';
import gplay from '../assets/images/google-play-badge.svg';
import astore from '../assets/images/app-store-badge.svg';

const IndexPage = () => (
  <Layout>
    <Header/>
    <MastHead/>

    <section className="download bg-primary text-center" id="download">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <h2 className="section-heading">
              In den Stores
            </h2>
            <p>
              Besuchen Sie uns im App Store oder auf Google Play. Unsere App 1-2-3 Tanken ist auf allen gängigen Geräten verfügbar, kostenlos zum Download!
            </p>
            <div className="badges">
              <a className="badge-link" href="https://play.google.com/store/apps/developer?id=Bottled+Software+GmbH">
                <img src={gplay} alt=""/>
              </a>
              <a className="badge-link" href="https://apps.apple.com/de/developer/bottled-software-gmbh/id530238613">
                <img src={astore} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="features" id="features">
      <div className="container">
        <div className="section-heading text-center">
          <h2>
            Sie haben eine Idee für eine mobile Applikation?
          </h2>
          <p className="text-muted">
            Sie haben eine Idee für eine mobile Applikation? Wir
            helfen Ihnen dabei diese Idee unter Einsatz der aktuellsten
            Technologien umzusetzen. Mit unserer Hilfe erhalten Sie in
            kurzer Zeit eine ausgereifte App zu einem fairen Preis.
            Kontaktieren Sie uns einfach und wir erstellen Ihnen gerne
            ein unverbindliches Angebot zu Ihrer App-Idee.
          </p>
          <hr/>
        </div>
        <div className="section-heading text-center">
          <h2>
            Sie möchten für Ihr Unternehmen eine App entwickeln?
          </h2>
          <p className="text-muted">
            Sie wollen eine App betriebsintern bereitstellen, um Ihre
            Prozesse zu optimieren oder zu unterstützen? Wir helfen
            Ihnen dabei zu identifizieren wie Sie am besten durch
            mobile Applikationen profitieren können. Anschließend
            entwickeln wir Ihre Applikation spezifisch zu Ihren
            Geschäftsanforderungen und integrieren die Applikation
            bestmöglich mit Ihren bestehenden IT-Systemen.
          </p>
          <hr/>
        </div>
        <div className="section-heading text-center">
          <h2>
            Sie entwickeln selbst Software?
          </h2>
          <p className="text-muted">
            Fehlt Ihnen Erfahrung mit der Entwicklung von mobiler
            Software? Wir unterstützen Sie bei der Entwicklung Ihrer
            App, egal ob beim Oberflächen-Design, der Implementierung
            oder bei der Veröffentlichung. Kontaktieren Sie uns einfach
            und wir diskutieren gemeinsam wie wir Ihnen helfen können.
          </p>
          <hr/>
        </div>
        <div className="row">
          <div className="col-lg-4 my-auto">
            <div className="image-container">
              <img src={demoPreisalarm} className="img-fluid" alt=""/>
            </div>
            <div className="button"></div>
          </div>
          <div className="col-lg-8 my-auto">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-screen-smartphone text-primary"></i>
                    <h3>Alle Geräte</h3>
                    <p className="text-muted">
                      Wir bieten Erfahrung mit allen modernen Apple und Android Geräten
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-camera text-primary"></i>
                    <h3>App Entwicklung</h3>
                    <p className="text-muted">
                      Wir entwickeln Ihre App professionell, schnell und kostengünstig
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-present text-primary"></i>
                    <h3>Unternehmensberatung</h3>
                    <p className="text-muted">
                      Wir verbessern Ihre Prozesse durch den Einsatz mobiler Technologien
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-item">
                    <i className="icon-lock-open text-primary"></i>
                    <h3>Entwicklungsberatung</h3>
                    <p className="text-muted">
                      Wir unterstützen Sie bei der Eigenentwicklung von mobilen Apps
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta" id="contact">
      <div className="cta-content">
        <div className="container">
          <h2>
            Kontaktieren Sie uns noch heute
            <br />
            Wir beraten unverbindlich
          </h2>
          <a href="mailto:info@bottledsoftware.de" className="btn btn-outline btn-xl">
            E-Mail
          </a>
          <a href="tel:+4970218669268" className="btn btn-outline btn-xl">
            Telefon
          </a>

        </div>
      </div>
      <div className="overlay"></div>
    </section>

    <Footer/>
  </Layout>
);

export default IndexPage;
