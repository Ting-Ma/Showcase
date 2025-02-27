import styles from "./App.module.css";
import { Navbar } from "./componets/Navbar/Navbar";
import { Hero } from "./componets/Hero/Hero";
import { About } from "./componets/About/About";
import { Projects } from "./componets/Projects/Projects";
import { Contact } from "./componets/Contact/Contact";

function App() {
  return (
   <div className={styles.App}>
   <Navbar />
   <Hero />
   <About />
   <Projects />
   <Contact />
   </div>
  );
}

export default App
