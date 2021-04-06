import * as React from "react"
//Styling imports
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/actionbutton.css'
import Button from 'react-bootstrap/Button'

// Index Page
const ActionButton = (props) => {
  if(props.inline){
    return (
      <>
        <a href={ props.href }>
          <Button className="actionbutton actionbutton-inline" variation="light" >{ props.value }</Button>
        </a>
      </>
      )
  } else {
    return (
      <>
        <a href={ props.href }>
          <Button className="actionbutton" variation="primary">{ props.value }</Button>
        </a>
      </>
      )
  }
  
}

export default ActionButton
