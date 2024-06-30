import { useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MySkills from "./components/MySkills";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const home = useRef(null);
  const about = useRef(null);
  const skill = useRef(null);
  const contact = useRef(null);

  return (
    <>
      <Header about={about} contact={contact} skill={skill} home={home}/>
      <Hero ref={home} />
      <About ref={about} />
      <MySkills ref={skill} />
      <Contact ref={contact} />
      <Footer about={about} contact={contact}/>
    </>
  );
}

export default App;
