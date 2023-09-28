import './App.css'
// import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Navbar from './pages/navbar'
import Addelection from './pages/election';
import Candidate from './pages/candidate';
import Addparty from './pages/party';
import Viewcandidate from './pages/viewcandidate';
import AdminNavbar from './pages/adminhome';
import Viewvotersdetails from './pages/viewvoter';
import Voters from './pages/voters';
function App() {
  // function PrivateRoute({children}){   // use can component also
  //   let value =true;
  
  //   if (!value)
  //   {
  //     return <Navigate to='/taskpage/login' />
  //   } 
  //   else
  //   {
  //     return children
  //   }
  // }
  return (
    <>
     
      {/*  */}
      {/* <Candidate/>
      // {/*  */}
       <BrowserRouter> 
        <Navbar />
         {/* <AdminNavbar /> */}
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Voters/>} />
          <Route path="/election" element={<Addelection />} />
          <Route path="/viewcandidate" element={<Viewcandidate />} />
          <Route path="/addparty" element={<Addparty />} />
          <Route path="/viewvoter" element={<Viewvotersdetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App