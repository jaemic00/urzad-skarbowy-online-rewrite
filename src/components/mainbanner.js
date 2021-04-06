import * as React from "react"
//Styling imports
import 'bootstrap/dist/css/bootstrap.min.css'
import {Row, Container, Col, Button} from 'react-bootstrap'
import '../css/mainbanner.css'
import { StaticImage } from "gatsby-plugin-image"

// Index Page
const MainBanner = (props) => {
  return (
  <>
    <Container className="MainBanner-container" fluid>
      <Row style={{height: "100%"}}>
        <Col xs={12} sm={6}>
          <span className="MainBanner-subheader">Rozlicz PIT od ręki, bez obaw</span>
          <h1 style={{fontSize: props.header.length > 20 ? "40px" : "56px"}} >{ props.header }</h1>
          <p>
            Rozlicz nowe, wysokie ulgi i&nbsp;odliczenia i&nbsp;zapłać <span className="PitaxColor">niższy&nbsp;podatek&nbsp;PIT</span>
          </p>
          <a href="https://pitax.pl/online/?krs=0000435915">
            <Button  className="MainBanner-actionbutton" variation="primary">Zaczynamy Rozliczenie PIT</Button>
          </a>
          <div className="MainBanner-pitaxlogo">
            <div className="MainBanner-subtextlogo">Bezpieczne, proste i wygodne rozliczenie zapewnia</div>
            <StaticImage 
              src="../images/pitax_logo_b.svg"
              width={200} />
          </div>
        </Col>
        <Col className="MainBanner-splash" xs={0} sm={6}>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default MainBanner
