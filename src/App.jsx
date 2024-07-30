import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LogIn from "./pages/login";
import Register from "./pages/register";
import Listings from "./pages/listings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/listing" element={<Listings />} />
      </Routes>
    </Router>
  );
}

export default App;
