import NavBar from "./components/NavBar/NavBar";
import Section from "../src/components/Section/Section";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="class">
      <NavBar />
      <Section />
      <Skills />
      <Works />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
