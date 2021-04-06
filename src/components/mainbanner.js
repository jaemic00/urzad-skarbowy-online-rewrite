import * as React from "react"
//Styling imports
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/mainbanner.css'
//Other imports
import {Row, Container, Col} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import ActionButton from './actionbutton.js'

//The main banner
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
          <ActionButton href="https://www.pitax.pl/online/?krs=0000435915" value={props.buttonValue} />
          <div className="MainBanner-pitaxlogo">
            <div className="MainBanner-subtextlogo">Bezpieczne, proste i wygodne rozliczenie zapewnia</div>
            <StaticImage 
              src="../images/pitax_logo_b.svg"
              width={200} />
          </div>
        </Col>
        <Col className="MainBanner-splash" md={6}>
        </Col>
      </Row>
    </Container>
  </>
  )
}

export default MainBanner
