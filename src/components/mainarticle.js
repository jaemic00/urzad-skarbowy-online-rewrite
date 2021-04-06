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
      <Row style={{padding: "0 25%", marginTop: '100px'}}>
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
            src="../images/landing/landing-09.svg"
            width={250}
            height={180} />
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
            src="../images/landing/landing-11.svg"
            width={250}
            height={180} />
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
            src="../images/landing/landing-05.svg"
            width={250}
            height={180} />
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
            src="../images/landing/landing-10.svg"
            width={250}
            height={180} />
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
            src="../images/landing/landing-08.svg"
            width={250}
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
            src="../images/landing/landing-07.svg"
            width={250}
            height={180} />
          <Card.Body>
            <Card.Text>
              Czuj się bezpieczny – podobnie jak systemy bankowe nigdy nie przechowujemy danych na komputerze użytkownika.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </>
  )
  
}

export default MainArticle
