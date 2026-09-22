import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Footer from "./components/Fotter";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Contacts />
      </main>

      <Footer />
    </>
  );
}

export default App;