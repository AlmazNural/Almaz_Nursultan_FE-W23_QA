// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// pages
import Introduction from "./pages/Introduction";
import Contest from './pages/Сontest'
import User from './pages/User'
import './App.css'
// router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/User" element={<User />} />
        </Routes>
      </Router>

    </>
  )
}

export default App;



