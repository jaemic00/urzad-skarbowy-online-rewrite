import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Row, Col, Card} from 'react-bootstrap'
import '../css/mainarticle.css'
import ActionButton from './actionbutton.js'


// Index Page
const MainArticle = (props) => {
  
  const adContent = props.adPassed == false ? "" : (
    <>
      <h2>{props.adHeader}</h2>
      <p>{props.adDesc}</p>
      <h3>{props.adSubheader}</h3>
    </>
  );

  return (
    <>
      <div className="MainArticleScope">
        <Row style={{padding: "0 20%", marginTop: '100px'}}>
          <Col sm={12} md={3}>
            <StaticImage
              src="../images/pitax_logo_ok.png"
              alt="PITax.pl Łatwe podatki"
              width={230}
              height={230} />
          </Col>
          <Col sm={12} md={9}>
            <h2>{props.articleHeader}</h2>
            <p>{props.articleText}</p>
          </Col>
        </Row>
        <Row style={{padding: "0 25%", marginTop: '100px'}}>
          <Col xs={12} md={6} lg={4}>
          <Card className="MainArticle-card">
            <StaticImage
              alt="Rozlicz dowolne przychody – obsługujemy wszystkie druki PIT wraz z załącznikami."
              src="../images/landing/landing-09.svg"
              height={200}
              height={180}/>
            <Card.Body>
              <Card.Text>
                Rozlicz dowolne przychody – obsługujemy wszystkie druki PIT wraz z załącznikami.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className="MainArticle-card">
            <StaticImage
              alt="Rozlicz nawet najbardziej zawiłe przychody w prosty sposób – spośród tysięcy pytań zadamy tylko te potrzebne."
              src="../images/landing/landing-11.svg"
              height={200}
              height={180}/>
            <Card.Body>
              <Card.Text>
                Rozlicz nawet najbardziej zawiłe przychody w prosty sposób – spośród tysięcy pytań zadamy tylko te potrzebne.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className="MainArticle-card">
            <StaticImage
              alt=" Zapisz, wydrukuj lub zachowaj w bezpiecznym repozytorium. Wysłane PITy przechowamy przez 5 lat."
              src="../images/landing/landing-05.svg"
              height={200}
              height={180}/>
            <Card.Body>
              <Card.Text>
                Zapisz, wydrukuj lub zachowaj w bezpiecznym repozytorium. Wysłane PITy przechowamy przez 5 lat.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className="MainArticle-card">
            <StaticImage
              alt="Odpowiedz na tylko proste pytania bez cytowania ustaw i języka prawnego."
              src="../images/landing/landing-10.svg"
              height={200}
              height={180}/>
            <Card.Body>
              <Card.Text>
                Odpowiedz na tylko proste pytania bez cytowania ustaw i języka prawnego.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className="MainArticle-card">
            <StaticImage
              alt="Wyślij przez internet do Urzędu Skarbowego – dostaniesz formalne Urzędowe Poświadczenie Odbioru."
              src="../images/landing/landing-08.svg"
              height={200}
              height={180} />
            <Card.Body>
              <Card.Text>
                Wyślij przez internet do Urzędu Skarbowego – dostaniesz formalne Urzędowe Poświadczenie Odbioru.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col xs={12} md={6} lg={4}>
          <Card className="MainArticle-card">
            <StaticImage
              alt="Czuj się bezpieczny – podobnie jak systemy bankowe nigdy nie przechowujemy danych na komputerze użytkownika."
              src="../images/landing/landing-07.svg"
              height={200}
              height={180}/>
            <Card.Body>
              <Card.Text>
                Czuj się bezpieczny – podobnie jak systemy bankowe nigdy nie przechowujemy danych na komputerze użytkownika.
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col style={{textAlign: 'center'}} xs={12}>
          <ActionButton inline={true} href="https://www.pitax.pl/online/?krs=0000435915" value={props.buttonValue} />
          </Col>
        </Row>
      </div>
    </>
  )
  
}

export default MainArticle
