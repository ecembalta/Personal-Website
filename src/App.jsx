import "./App.css";
import Settings from "./components/Settings/Settings";
import Navigate from "./components/Navigate/Navigate";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="container">
        <Settings />
        <Navigate />
        <Header />
        <Skills />
        <Profile />
        <Projects />
      </div>
      <Footer />
    </>
  );
}

export default App;
