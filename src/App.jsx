import Header from "./components/header";
import { Hero, About, Experience, Projects, Contact } from "@sections";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </BrowserRouter>
  );
}

export default App;
