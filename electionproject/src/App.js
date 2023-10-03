import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Navbar from './pages/navbar'
import Addelection from './pages/election';
import Candidate from './pages/candidate';
import Viewcandidate from './pages/viewcandidate';
import Viewvotersdetails from './pages/viewvoter';
import Voters from './pages/voters';
import Ballot from './ballot';
import Partylogo from './pages/partylogo';
import BarChart from './pages/resultchar';
import LoginAuth from './pages/loginauthendication';
import Register from './pages/registerauth';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registerauth" element={<Register />} />
          <Route path="/voters" element={<Voters />} />
          <Route path="/election" element={<Addelection />} />
          <Route path="/viewcandidate" element={<Viewcandidate />} />
          <Route path="/addparty" element={<Partylogo />} />
          <Route path="/viewvoter" element={<Viewvotersdetails />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/ballot" element={<Ballot />} />
          <Route path="/login" element={<LoginAuth />} />
          <Route path="/result" element={<BarChart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App