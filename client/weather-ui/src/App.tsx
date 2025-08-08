import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/dashboard" element={<MainLayout/>}>
            <Route index element={<Dashboard/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/" />} /> {/* fallback redirect */}
        </Routes>
      </Router>
    </>
  )
}

export default App
