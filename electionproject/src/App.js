import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Navbar from './pages/navbar'
import Addelection from './pages/election';
import Candidate from './pages/candidate';
import Addparty from './pages/party';
import Viewcandidate from './pages/viewcandidate';
import AdminNavbar from './pages/adminhome';
import Viewvotersdetails from './pages/viewvoter';
import Voters from './pages/voters';
import Ballot from './ballot';
import Partylogo from './pages/partylogo';
import BarChart from './pages/resultchar';
import LoginAuth from './pages/loginauthendication';
import SignUp1 from './pages/registerauth';
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

      {/* <Partylogo/> */}
      {/* <Ballot /> */}
      {/* <BarChart/> */}
    
      {/* <Candidate/>
      // {/*  */}
      <BrowserRouter>
        {/* <Navbar />  */}
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registerauth" element={<SignUp1/>} />
          {/* <Route path="/voters" element={<Voters />} /> */}
          <Route path="/election" element={<Addelection />} />
          <Route path="/viewcandidate" element={<Viewcandidate />} />
          <Route path="/addparty" element={<Partylogo />} />
          <Route path="/viewvoter" element={<Viewvotersdetails />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/ballot" element={<Ballot />} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App