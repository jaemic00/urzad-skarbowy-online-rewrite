import React from 'react'
import '../css/footer.css'
import Row from 'react-bootstrap/Row'

const Footer = () => {
  return (
    <>
        <div className="Footer-info">Materiał promocyjny został sfinansowany ze środków finansowych pochodzących z 1% podatku dochodowego od osób fizycznych.</div>
        <div className="Footer-body">
          <p>Korzystając z usług wsparcia w wypełnianiu formularzy podatkowych PIT, akceptujesz warunki <a href="https://www.pitax.pl/o-firmie/dokumenty/">Regulaminu Świadczenia Usług Drogą Elektroniczną</a> firmy PITax.pl Łatwe podatki sp. z o.o. z siedzibą we Wrocławiu.</p>
          <p>Korzystając z witryny bez zmiany ustawień przeglądarki wyrażasz zgodę na użycie plików cookies, zobacz <a href="https://www.pitax.pl/o-firmie/dokumenty/">Polityka Cookies.</a> W każdej chwili możesz swobodnie zmienić ustawienia przeglądarki decydujące o ich zapisywaniu.</p>
          <p>Program PIT jest zgodny z <a href="https://www.google.pl/intl/pl/about/unwanted-software-policy.html">Wymaganiami Google Inc. Dotyczącymi Oprogramowania</a>, ma prosty i zrozumiały proces instalacji oraz usuwania.</p>
          <br/>Program do uruchomienia wymaga systemu Windows 7 lub nowszego.
          <p>Program ten nie umożliwia swobodnego wyboru i przekazania 1% podatku dochodowego od osób fizycznych wybranej Organizacji Pożytku Publicznego </p>
          <p>Procedura odinstalowania aplikacji:</p>
          <ol>
          <li>Wchodzimy w Panel Sterowania i z listy wybieramy opcję „Dodaj/Usuń programy”;</li>
          <li>Szukamy aplikacji pod nazwą "PITax.pl Łatwe podatki", a następnie ją zaznaczamy (klikamy w nią);</li>
          <li>Gdy dana aplikacja jest podświetlona, włączamy opcję „Usuń";</li>
          <li>Następnie postępujemy zgodnie z informacjami wyświetlanymi na ekranie.</li>
          </ol>
          <p> © 2021 Urząd Skarbowy Online, PITax.pl Łatwe podatki sp. z o.o. <br />Wszelkie prawa zastrzeżone.</p>
        </div>
    </>
  )
}

export default Footer