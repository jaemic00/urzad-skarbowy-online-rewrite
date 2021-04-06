import * as React from "react"
import { Helmet } from "react-helmet"
//Styling imports
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/css_icons.css'
import '../css/global.css'
//Component imports
import Menubar from "../components/menubar"
import MainBanner from "../components/mainbanner"
import PartnersBar from "../components/partnersbar"
import MainArticle from "../components/mainarticle"
import Container from "react-bootstrap/Container"

const mainArticle = {
  articleHeader : "Wybraliśmy dla Państwa proste, wygodne i bezpieczne rozliczenie PIT – naszym zdaniem najlepsze w Polsce",
  articleText : "Udostępniamy Państwu, zupełnie za darmo, system do rozliczeń podatku PIT, który dba o finanse podatnika oraz wskazuje należne mu ulgi podatkowe. Dzięki temu podatnicy korzystający z PITax.pl Łatwe podatki pięć razy częściej rozliczają ulgę na internet i średnio dwa razy częściej inne ulgi. Jest to rozwiązanie wyróżniające się – wśród programów i usług rozliczenia podatku dostępnych na rynku – prostotą i funkcjonalnością. Rozliczenie w PITax.pl obejmuje gwarancję 100% poprawności obliczeń, wskazuje dokumenty potrzebne do kontroli skarbowej i przekazuje Oficjalne Urzędowe Poświadczenie Odbioru złożonego zeznania.",
  adPassed: false
}

const buttonValue = "Rozpocznij Rozliczenie PIT";

// Index Page
const IndexPage = () => {
  return (
  <>
    <Container style={{padding: '0'}} fluid>
      <Menubar />
      <MainBanner header="e-PIT z PITax.pl" buttonValue={buttonValue}/>
      <PartnersBar imgheight="50px" />
      <MainArticle {...mainArticle } buttonValue={buttonValue} />
    </Container>
  </>
  )
}

export default IndexPage
