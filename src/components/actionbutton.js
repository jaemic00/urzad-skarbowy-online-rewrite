import * as React from "react"
//Styling imports
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

// Index Page
const ActionButton = (props) => {
  return (
  <>
    <a href={ props.href }>
      <Button className="MainBanner-actionbutton" variation="primary">{ props.value }</Button>
    </a>
  </>
  )
}

export default ActionButton
