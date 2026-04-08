import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Advantages from './components/Advantages/Advantages'
import Training from './components/Training/Training'
import Contacts from './components/Contacts/Contacts'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Training />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}
