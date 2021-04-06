import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {Row, Col} from 'react-bootstrap'
import '../css/partnersbar.css'

// Index Page
const PartnersBar = (props) => {
  return (
  <>
  <Row>
    <Col>
      <div className="PartnersBar-mainbar" style={{width:'100%'}}>
        <ul style={{textAlign:'center'}}>
          <li><StaticImage height={props.imgheight} src="../images/partners/unia-europejska-kolor-2.gif" alt="Unia Europejska, Europejski fundusz rozwoju regionalnego"/></li>
          <li><StaticImage height={props.imgheight} src="../images/partners/pitax_logo_vert.png" alt="PITax.pl"/></li>
          <li><StaticImage height={props.imgheight} src="../images/e-deklaracje-pitax.png" alt="e Deklaracje"/></li>
          <li><StaticImage height={props.imgheight} src="../images/partners/comodo-pitax.png" alt="Comodo Secure"/></li>
          <li><StaticImage height={props.imgheight} src="../images/partners/rzetelna-firma-pitax.png" alt="Rzetelna Firma"/></li>
          <li><StaticImage height={props.imgheight} src="../images/partners/innowacyjna-gospodarka-pitax2.png" alt="Innowacyjna gospodarka"/></li>
        </ul>
      </div>
    </Col>
  </Row>
  </>
  )
}

export default PartnersBar