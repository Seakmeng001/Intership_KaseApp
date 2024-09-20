import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/home/HomePage';
import Layout from './component/Layout/Layout';
import TracePage from './pages/trace/TracePage';
import MarketPage from './pages/market/MarketPage';
import MarketDetailPage from './pages/market/MarketDetailPage';
import FarmPage from './pages/farm/FarmPage';
import AuthMiddleware from './component/ProtectRoute/ProtectRouteLogin';
import OtpPage from './pages/auth/OtpPage';
import ThemeProvider from './context/ThemeProvider';
import UserContextProvider from './context/UserProvider';
import TermandCondition from './pages/policy/TermandCondition'
import AppPolicy from './pages/policy/AppPolicy';



function App() {
  return (
    <ThemeProvider>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="term" element={<TermandCondition />} />
            <Route path="policy" element={<AppPolicy/>} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="otp" element={<OtpPage/>} />

            {/* Protected Routes with Layout */}
            <Route element={<AuthMiddleware><Layout/></AuthMiddleware>}>
              <Route path="home" element={<HomePage />} />
              <Route path="trace" element={<TracePage />} />
              <Route path="market" element={<MarketPage />} />
              <Route path="market_detail" element={<MarketDetailPage />} />
              <Route path="farm" element={<FarmPage />} />
            </Route>

            {/* Fallback Route for undefined paths */}
            <Route path="*" element={<h1>Route Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
