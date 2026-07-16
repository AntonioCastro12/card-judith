import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Categories from './components/Categories'
import ContactButtons from './components/ContactButtons'
import QRSection from './components/QRSection'
import Footer from './components/Footer'

const cardUrl = import.meta.env.VITE_CARD_URL || window.location.href

function App() {
  return (
    <main className="page-shell">
      <div className="intro-zoom" aria-hidden="true">
        <div className="intro-logo-shell">
          <img src="/judit-white-logo-full.png" alt="" />
        </div>
      </div>

      <article className="digital-card" aria-label="Tarjeta digital Judit White">
        <Header />
        <Hero />
        <Categories />
        <ContactButtons cardUrl={cardUrl} />
        <QRSection cardUrl={cardUrl} />
        <Footer />
      </article>
    </main>
  )
}

export default App
