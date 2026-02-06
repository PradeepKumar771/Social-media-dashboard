import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import Notifications from './pages/Notifications/Notifications';
import Messages from './pages/Messages/Messages';
import { ThemeProvider } from './context/ThemeContext';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-wrapper">
          <Header />
          
          <div className="app-layout">
            <aside className="sidebar">
              <Navbar />
            </aside>
            
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/messages" element={<Messages />} />
              </Routes>
            </main>

            <div className="right-panel">
              <h4>Suggestions for you</h4>
              <div className="suggestion-item">
                <div className="suggestion-avatar" style={{
                  background:'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                }}>JD</div>
                <div className="suggestion-info">
                  <div className="suggestion-username">jane_doe</div>
                  <div className="suggestion-label">Popular</div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="suggestion-item">
                <div className="suggestion-avatar" style={{
                  background:'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                }}>MK</div>
                <div className="suggestion-info">
                  <div className="suggestion-username">mike_kim</div>
                  <div className="suggestion-label">Suggested</div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
              <div className="suggestion-item">
                <div className="suggestion-avatar" style={{
                  background:'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                }}>SL</div>
                <div className="suggestion-info">
                  <div className="suggestion-username">sarah_lee</div>
                  <div className="suggestion-label">New to InstaClone</div>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;