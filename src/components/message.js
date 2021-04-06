import React from 'react'
import {Card} from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"
import '../css/message.css'

const Message = (props) => {
  return (
    <>
      <div className="Message-rect">
        <StaticImage
          style={{verticalAlign: 'middle', marginRight: '10px'}}
          width={30}
          height={30}
          alt="Użytkownik"
          src="../images/opinion-icons/user.png" />
        <span className="PitaxColor" style={{fontWeight: 'bold'}}>{props.user}</span>
        <p>{props.message}</p>
      </div>
    </>
  )
}

export default Message