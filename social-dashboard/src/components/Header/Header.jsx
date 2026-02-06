import React from 'react';
import { Search, PlusSquare, Heart, MessageCircle } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>InstaClone</h1>
        
        <div className={styles.searchBar}>
          <Search size={16} className={styles.searchIcon} />
          <input type="text" placeholder="Search..." />
        </div>

        <div className={styles.actions}>
          <button className={styles.iconBtn} title="Create Post">
            <PlusSquare size={24} />
          </button>
          <button className={styles.iconBtn} title="Notifications">
            <Heart size={24} />
            <span className={styles.badge}>3</span>
          </button>
          <button className={styles.iconBtn} title="Messages">
            <MessageCircle size={24} />
            <span className={styles.badge}>5</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;