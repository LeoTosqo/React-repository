import "./App.css";
import { BrowserRouter as Router , Routes, Route, Navigate} from "react-router-dom";
import Home from "./pagesFolder/Home";
import About from "./pagesFolder/About";
import Contact from "./pagesFolder/Contact";
import Store from "./pagesFolder/Store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pagesFolder/Login";
import NotFound from "./pagesFolder/NotFound";
import Timeline from "./pagesFolder/Timeline";
import SingleTweet from "./pagesFolder/SingleTweet";


//store page ----/store
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/about us" element={<Navigate to="/about" />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/store" element={<Store />} />
          <Route path="/login" element={<Login />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/timeline/:id" element={<SingleTweet/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
