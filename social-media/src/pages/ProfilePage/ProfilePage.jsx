import React, { useState } from 'react';
import { currentUser, postsData } from '../../utils/mockData';
import { Grid, Bookmark, Tag } from 'lucide-react';
import styles from './Profile.module.css';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className={styles.profileContainer}>
      <div className={styles.header}>
        <img src={currentUser.avatar} alt="Profile" className={styles.avatarBig} />
        <div className={styles.info}>
          <h2>{currentUser.username}</h2>
          <div className={styles.stats}>
            <span><strong>{currentUser.posts}</strong> posts</span>
            <span><strong>{currentUser.followers.toLocaleString()}</strong> followers</span>
            <span><strong>{currentUser.following}</strong> following</span>
          </div>
          <p><strong>{currentUser.name}</strong></p>
          <p>{currentUser.bio}</p>
          <button className={styles.editBtn}>Edit Profile</button>
        </div>
      </div>
      
      <hr />
      
      <div className={styles.tabs}>
        <button 
          className={activeTab === 'posts' ? styles.active : ''}
          onClick={() => setActiveTab('posts')}
        >
          <Grid size={16} style={{marginRight: '6px', verticalAlign: 'middle'}} />
          Posts
        </button>
        <button 
          className={activeTab === 'saved' ? styles.active : ''}
          onClick={() => setActiveTab('saved')}
        >
          <Bookmark size={16} style={{marginRight: '6px', verticalAlign: 'middle'}} />
          Saved
        </button>
        <button 
          className={activeTab === 'tagged' ? styles.active : ''}
          onClick={() => setActiveTab('tagged')}
        >
          <Tag size={16} style={{marginRight: '6px', verticalAlign: 'middle'}} />
          Tagged
        </button>
      </div>
      
      <div className={styles.grid}>
        {activeTab === 'posts' && postsData.slice(0, 6).map((post, index) => (
          <div key={index} className={styles.placeholderBox}>
            <img src={post.image} alt={`Post ${index + 1}`} className={styles.postImage} />
          </div>
        ))}
        {activeTab === 'saved' && (
          <>
            <div className={styles.placeholderBox}>🔖 Saved 1</div>
            <div className={styles.placeholderBox}>🔖 Saved 2</div>
            <div className={styles.placeholderBox}>🔖 Saved 3</div>
          </>
        )}
        {activeTab === 'tagged' && (
          <>
            <div className={styles.placeholderBox}>🏷️ Tagged 1</div>
            <div className={styles.placeholderBox}>🏷️ Tagged 2</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;