import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Heart, MessageCircle, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import styles from './Navbar.module.css';

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>InstaClone</h1>
      <div className={styles.links}>
        <Link to="/" className={isActive('/') ? styles.active : ''}>
          <Home size={24} /> <span>Home</span>
        </Link>
        <Link to="/messages" className={isActive('/messages') ? styles.active : ''}>
          <MessageCircle size={24} /> <span>Messages</span>
        </Link>
        <Link to="/notifications" className={isActive('/notifications') ? styles.active : ''}>
          <Heart size={24} /> <span>Notifications</span>
        </Link>
        <Link to="/profile" className={isActive('/profile') ? styles.active : ''}>
          <User size={24} /> <span>Profile</span>
        </Link>
        <button onClick={toggleTheme} className={styles.themeBtn}>
          {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          <span>{darkMode ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;