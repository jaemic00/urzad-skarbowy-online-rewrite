import * as React from "react"
import { Helmet } from "react-helmet"
//Styling imports
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/css_icons.css'
import '../css/global.css'
//Component imports
import Menubar from "../components/menubar"
import MainBanner from "../components/mainbanner"

// Index Page
const IndexPage = () => {
  return (
  <>
    <Menubar />
    <MainBanner header="e-PIT z PITax.pl"/>
  </>
  )
}

export default IndexPage
