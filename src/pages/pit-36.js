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
import Recommendations from "../components/recommendations"
import Footer from "../components/footer"
import Container from "react-bootstrap/Container"
import { useQueryParam, StringParam } from "use-query-params";


const mainArticle = {
  articleHeader : "Wybraliśmy dla Państwa proste, wygodne i bezpieczne rozliczenie PIT 36 – naszym zdaniem najlepsze w Polsce",
  articleText : "Udostępniamy Państwu, zupełnie za darmo, system do rozliczeń podatku PIT 36, który dba o finanse podatnika oraz wskazuje należne mu ulgi podatkowe. Dzięki temu podatnicy korzystający z PITax.pl Łatwe podatki pięć razy częściej rozliczają ulgę na internet i średnio dwa razy częściej inne ulgi. Jest to rozwiązanie wyróżniające się – wśród programów i usług rozliczenia podatku dostępnych na rynku – prostotą i funkcjonalnością. Rozliczenie w PITax.pl obejmuje gwarancję 100% poprawności obliczeń, wskazuje dokumenty potrzebne do kontroli skarbowej i przekazuje Oficjalne Urzędowe Poświadczenie Odbioru złożonego zeznania.",
  adPassed: false
}

const buttonValue = "Rozpocznij Rozliczenie PIT 36";


const PIT36Page = () => {
  const [headerValue, setHeaderValue] = useQueryParam("utm_header", StringParam);
  
  return (
  <>
      <Helmet title="e-Urząd Skarbowy Online &raquo; Rozliczenie PIT-36 2021 za rok 2020 z oficjalnym Urzędowym Poświadczeniem Odbioru" description="Urząd Skarbowy Online" />
      <Container style={{padding: '0'}} fluid>
      <Menubar />
      <MainBanner header={ typeof(headerValue) != "undefined" ? headerValue : "PIT-36 z PITax.pl" } buttonValue={buttonValue}/>
      <PartnersBar />
      <MainArticle {...mainArticle } buttonValue={buttonValue} />
      <Recommendations buttonValue={buttonValue} />
      <Footer />
    </Container>
  </>
  )
}

export default PIT36Page
