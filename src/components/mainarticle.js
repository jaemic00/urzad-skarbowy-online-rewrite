import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Row, Col} from 'react-bootstrap'
import '../css/mainarticle.css'

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
            height={208} />
        </Col>
        <Col sm={12} md={9}>
          <h2>{props.articleHeader}</h2>
          <p>{props.articleText}</p>
        </Col>
      </Row>
    </>
  )
  
}

export default MainArticle
