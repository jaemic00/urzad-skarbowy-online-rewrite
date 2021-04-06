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
  articleHeader : "Wybraliśmy dla Państwa proste, wygodne i bezpieczne rozliczenie e-Deklaracji – naszym zdaniem najlepsze w Polsce",
  articleText : "W dzisiejszych czasach Internet ułatwia nam wykonanie wielu czynności. Pozwala również na stworzenie takich programów, które umożliwiają kontakt z Urzędem Skarbowym Przez Internet, szczególnie w czasach pandemii. Zaletą PIT Online w tym roku - 2021 jest to, że obejmuje wszystkie rodzaje zeznań podatkowych jak na przykład PIT 28, PIT 36, PIT 36L, PIT 37, PIT 38 czy PIT 39. Tak więc w 2021 roku można rozliczyć PIT za 2020 online. Korzystamy z takich programów, gdzie rozliczenie PIT Online jest dostępne dla wszystkich. Program Rozliczenie PIT Online w PITax.pl jest proste i intuicyjne. Zabiera niewiele czasu a można przy tym mieć z głowy coroczny obowiązek. Zaletą jest również to, że przez cały czas można liczyć na darmową pomoc ekspertów.",
  adPassed: false
}

const buttonValue = "Rozpocznij Rozliczenie e-Deklaracji";

// Index Page
const EDeklaracjePage = () => {
  const [headerValue, setHeaderValue] = useQueryParam("utm_header", StringParam);
  return (
  <>
      <Helmet title="e-Urząd Skarbowy Online &raquo; Rozliczenie e-Deklaracji 2021 za rok 2020 z oficjalnym Urzędowym Poświadczeniem Odbioru" description="Urząd Skarbowy Online" />
      <Container style={{padding: '0'}} fluid>
      <Menubar />
      <MainBanner header={ typeof(headerValue) != "undefined" ? headerValue : "e-Deklaracje z PITax.pl" } buttonValue={buttonValue}/>
      <PartnersBar />
      <MainArticle {...mainArticle } buttonValue={buttonValue} />
      <Recommendations buttonValue={buttonValue} />
      <Footer />
    </Container>
  </>
  )
}

export default EDeklaracjePage
