import Header from "./components/header";
import { Hero, Blogs ,About} from "@sections";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Hero />
        <About />
        <Blogs />
      </main>
    </BrowserRouter>
  );
}

export default App;
