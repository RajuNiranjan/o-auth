import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogIn from "./pages/login";
import Register from "./pages/register";
import Listings from "./pages/listings";
import PrivateRoute from "./components/privateRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/listing" element={<Listings />} />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
