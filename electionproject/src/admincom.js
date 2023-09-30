import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addelection from "./pages/election";
import Viewcandidate from "./pages/viewcandidate";
import Addparty from "./pages/party";
import Viewvotersdetails from "./pages/viewvoter";
import AdminNavbar from "./pages/adminhome";
import Home from "./pages/home";
const Admincomponent = () => {
    return (
        <BrowserRouter>
            <AdminNavbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/election" element={<Addelection />} />
                <Route path="/viewcandidate" element={<Viewcandidate />} />
                <Route path="/addparty" element={<Addparty />} />
                <Route path="/viewvoter" element={<Viewvotersdetails />} />
            </Routes>
        </BrowserRouter>);
}

export default Admincomponent;