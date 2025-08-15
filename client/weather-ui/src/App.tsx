import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { WeatherProvider } from "./contexts/WeatherContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import ViewWeather from "./pages/ViewWeather";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route
            path="/weather"
            element={
              <ProtectedRoute>
                <MainLayout />
                {/* only for logged in users */}
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path=":cityId" element={<ViewWeather />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
          {/* fallback redirect */}
        </Routes>
      </Router>
    </WeatherProvider>
  );
}

export default App;
