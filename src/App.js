import About from "./components/About";
import Blank from "./components/Blank";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Showcase from "./components/Showcase";
import "./sass/main.scss"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Showcase />
      <Blank />
      <Portfolio />
    </div>
  );
}

export default App;
