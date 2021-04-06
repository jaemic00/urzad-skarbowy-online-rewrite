import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import '../css/recommendations.css'
import Message from './message'
import ActionButton from './actionbutton'

const Recommendations = (props) => {
  return (
    <>
      <div className="RecommendationsScope">
        <Row style={{padding: "0 20%", marginTop: '100px'}}>
          <Col xs={12} xl={5}>
            <StaticImage
              width={500}
              alt="System rozliczeń PITax.pl"
              src="../images/screenshot.png" />
          </Col>
          <Col xs={12} xl={7}>
              <h1>PITax.pl</h1>
              <h2>Jest <span className="PitaxColor">intuicyjny i prosty</span></h2>
              <p>
              Duże kafle, symbole graficzne, proste pytania i podpowiedzi adekwatne do aktualnego momentu rozliczenia. Wskazane ulgi podatkowe, sprawnie wysłany PIT i duży zwrot podatku. Za to podatnicy uwielbiają PITax.pl
              </p>
          </Col>
        </Row>
        <Row style={{padding: "0 20%", marginTop: '100px'}}>
          <Col style={{marginTop: '40px'}} xs={12} xl={5}>
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
              </li><br />
              <ActionButton inline={true} href="https://www.pitax.pl/online/?krs=0000435915" value={props.buttonValue} />
            </ul>
          </Col>
          <Col xs={12} xl={7}>
              <Message user="@laragazzaalta35" message="Rozliczenie zajęło mi kilka minut. Bardzo łatwy i zrozumiały program. Po wypełnieniu wszystkich pół byłam szczęśliwa, że tak szybko i łatwo mi poszło." />
              <Message user="@spiderus70" message="Program jest znakomity, wypełnia się go w sposób prosty, a interfejs jest wręcz doskonały. Na pewno będę teraz korzystał z Waszego programu i polecał go znajomym." />
              <Message user="@margo_85" message="Cała ścieżka przygotowana jest bardzo precyzyjnie – wręcz intuicyjnie. Sądzę, iż niezależnie od wieku i posiadanej wiedzy w zakresie rozliczeń każdy doskonale poradzi sobie tutaj z deklaracją." />
          </Col>
        </Row>
        <Row style={{padding: "0 20%", marginTop: '100px'}}>
          <Col xs={12} xl={5}>
            <iframe className="Recommendation-video" style={{width: '100%', height: '100%'}} src="https://www.youtube.com/embed/k0N9-ZmVwt8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Col>
          <Col xs={12} xl={7}>
            <h2>PITax.pl zbiera nagrody</h2>
            <p style={{width: '100%', marginBottom: '0'}}>Rozliczenie w PITax.pl to sama przyjemność. W gąszczu przepisów podatkowych PITax.pl daje rozwiązanie. Nasz wideoeksplainer został nagrodzony w kwietniu 2018 roku przez Google jako najlepszy film reklamowy kwietnia.</p>
            <ActionButton inline={true} href="https://www.pitax.pl/online/?krs=0000435915" value={props.buttonValue} />
          </Col>
        </Row>
        <Row style={{padding: "0 20%", marginTop: '100px'}}>
          <Col xs={12} xl={5}>
              <h2>PITax.pl dla OPP</h2>
              <p style={{width: '100%', marginBottom: '0'}}>Rozliczając się wspierasz organizacje pozarządowe, które biorą udział w projekcie "PITax.pl dla OPP" realizowanym wspólnie z Instytutem Wsparcia Organizacji Pozarządowych.</p>
              <ActionButton inline={true} href="https://www.pitax.pl/online/?krs=0000435915" value={props.buttonValue} />
          </Col>
          <Col xs={12} xl={7}>
             <StaticImage
                alt="Rozliczając się wspierasz organizacje pozarządowe." 
                src="../images/jedenprocent.png" />
            </Col>
            
        </Row>
      </div>
    </>
  )
}

export default Recommendations