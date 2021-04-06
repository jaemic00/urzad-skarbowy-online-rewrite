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
  articleHeader : "Wybraliśmy dla Państwa proste, wygodne i bezpieczne rozliczenie e-PIT – naszym zdaniem najlepsze w Polsce",
  articleText : "Twój e-PIT to zeznanie podatkowe PIT-28, PIT-36, PIT-36L, PIT-37, PIT-38 lub PIT-39, które można wygenerować za pomocą programu PITax.pl Łatwe Podatki. Udostępniamy go dla Państwa zupełnie za darmo. Program PITax.pl umożliwia rozliczenie Twoje e-PITy online - bez wychodzenia z domu, 24/7, na dowolnym urządzeniu. Od 2021 roku jako pierwszy program na rynku umożliwia rozliczanie Twój e-PIT w postaci PIT-37 na telefonie. Program uruchamiany jest w przeglądarce internetowej i automatycznie dostosowuje się do rozdzielczości ekranu. Uwaga, w PITax.pl rozliczą się osoby z przychodami z działalności gospodarczej i działów specjalnych produkcji rolnej, czego nie można zrobić w innych znanych programach.",
  adPassed: false
}

const buttonValue = "Rozpocznij Rozliczenie e-PIT";

// Index Page
const EPityPage = () => {
  const [headerValue, setHeaderValue] = useQueryParam("utm_header", StringParam);
  return (
  <>
      <Helmet title="e-Urząd Skarbowy Online &raquo; Rozliczenie e-PIT 2021 za rok 2020 z oficjalnym Urzędowym Poświadczeniem Odbioru" description="Urząd Skarbowy Online" />
      <Container style={{padding: '0'}} fluid>
      <Menubar />
      <MainBanner header={ typeof(headerValue) != "undefined" ? headerValue : "e-PITy z PITax.pl" } buttonValue={buttonValue}/>
      <PartnersBar />
      <MainArticle {...mainArticle } buttonValue={buttonValue} />
      <Recommendations buttonValue={buttonValue} />
      <Footer />
    </Container>
  </>
  )
}

export default EPityPage
