import './App.css'
// import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Navbar from './pages/navbar'
import Addelection from './pages/election';
import Candidate from './pages/candidate';
import Addparty from './pages/party';
// import Products from './pages/Products'
// import Blog from './pages/Blog'
function App() {
  return (
    <>
    <Addparty/>
    {/* <Candidate/> */}
    {/* <Addelection/> */}
      {/* <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} /> */}
      {/* </Routes> 
    </BrowserRouter>    */}
    </>
  )
}
export default App