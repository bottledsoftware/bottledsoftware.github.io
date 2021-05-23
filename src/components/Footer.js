import React from 'react';

import Social from '../components/Social';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 order-2 order-md-1">
            <ul className="list-inline">
              <li className="list-inline-item heading">
                <strong>Haftungsausschluss</strong> (Quelle: <a href="http://www.e-recht24.de">http://www.e-recht24.de</a>)
              </li>
              <li className="list-inline-item">
                <p>
                  <strong>Haftung für Inhalte</strong> &ndash; Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.  Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
                <p>
                  <strong>Haftung für Links</strong> &ndash; Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
                <p>
                  <strong>Urheberrecht</strong> &ndash; Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </li>
              <li className="list-inline-item heading">
                <strong>Datenschutzerklärung</strong>
              </li>
              <li className="list-inline-item">
                <p>
                  Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-Mails, vor.
                </p>
                <p>
                  Quellverweis: Datenschutzerklärung von <a href="http://www.e-recht24.de/muster-datenschutzerklaerung.html">eRecht24</a>, dem Portal zum Internetrecht von Rechtsanwalt Sören Siebert.
                </p>
              </li>
            </ul>
          </div>
          <div class="col-md-4 order-1 order-md-2">
            <ul className="list-inline">
              <li className="list-item heading">
                <strong>Impressum</strong>
              </li>
              <li className="list-item">
                Angaben gemäß § 5 TMG:<br/>
                Bottled Software GmbH<br/>
                Kettelerstr. 25<br/>
                68789 St. Leon-Rot<br/>
              </li>
              <li className="list-item">
                Vertreten durch:<br/>
                Geschäftsführer: Florian Reinhart und Kevin Schlieper<br/>
              </li>
              <li className="list-item heading">
                Kontakt
              </li>
              <li className="list-item">
                E-Mail: <a href="mailto:info@bottledsoftware.de">info@bottledsoftware.de</a><br/>
                Telefon: <a href="tel:+4970218669268">+4970218669268</a><br/>
                Web: <a href="www.bottledsoftware.de">www.bottledsoftware.de</a><br/>
              </li>
              <li className="list-item social">
                <Social/>
              </li>
              <li className="list-item heading">
                <strong>Registereintrag</strong>
              </li>
              <li className="list-item">
                Eintragung im Handelsregister.<br/>
                Registergericht: Amtsgericht Mannheim<br/>
                Registernummer: HRB 713981<br/>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: DE282043778<br/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
