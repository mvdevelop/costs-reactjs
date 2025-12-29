
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Home from "./components/Home";
import Company from "./components/Company";
import Contact from "./components/Contact";
import NewProject from "./components/NewProject";
import Container from "./components/layout/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Project from "./components/Project";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Container customClass="minHeight">
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/projects' element={<Projects />} />
              <Route exact path='/company' element={<Company />} />
              <Route exact path='/contact' element={<Contact />} />
              <Route exact path='/newproject' element={<NewProject />} />
              <Route exact path='/project/:id' element={<Project />} />
            </Routes>
          </Container>
        </main>
        <Footer />
      </div>
      
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Router>
  );
}

export default App;
