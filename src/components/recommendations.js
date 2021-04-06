import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import '../css/recommendations.css'

const Recommendations = () => {
  return (
    <>
      <div className="RecommendationsScope">
        <Row style={{padding: "0 25%", marginTop: '100px'}}>
          <Col xs={12} md={7}>
            <StaticImage
              width={500}
              alt="System rozliczeń PITax.pl"
              src="../images/screenshot.png" />
          </Col>
          <Col xs={12} md={5}>
              <h1>PITax.pl</h1>
              <h2>Jest <span className="PitaxColor">intuicyjny i prosty</span></h2>
              <p>
              Duże kafle, symbole graficzne, proste pytania i podpowiedzi adekwatne do aktualnego momentu rozliczenia. Wskazane ulgi podatkowe, sprawnie wysłany PIT i duży zwrot podatku. Za to podatnicy uwielbiają PITax.pl
              </p>
          </Col>
        </Row>
        <Row style={{padding: "0 25%", marginTop: '100px'}}>
          <Col xs={12} md={5}>
            <h1>Podatnicy</h1>
            <h2><span className="PitaxColor">uwielbiają</span> PITax.pl</h2>
            <p>Sprawdź najnowsze opinie. Codziennie przybywa zadowolonych klientów.</p>
            <ul>
              <li>
                <StaticImage
                      style ={{verticalAlign: 'middle'}}
                      width={30}
                      height={30} 
                      alt="Opinie na Google"
                      src="../images/opinion-icons/Google.png" />
                <a href="#">Opinie na Google</a>
              </li><br />
              <li>
                <StaticImage
                      style ={{verticalAlign: 'middle'}}
                      width={30}
                      height={30} 
                      alt="Opinie na Google"
                      src="../images/opinion-icons/Facebook.png" />
                <a href="#">Opinie na Facebooku</a>
              </li><br />
              <li>
                <StaticImage
                      style ={{verticalAlign: 'middle'}}
                      width={30}
                      height={30} 
                      alt="Opinie na Google"
                      src="../images/opinion-icons/Pitax.png" />
                <a href="#">Opinie na PITax.pl</a>
              </li>
            </ul>
          </Col>
          <Col xs={12} md={7}>
              
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Recommendations