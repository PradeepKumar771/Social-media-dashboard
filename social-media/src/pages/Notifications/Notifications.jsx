import React, { useState } from 'react';
import { notificationsData } from '../../utils/mockData';
import styles from './Notification.module.css';

const Notifications = () => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [following, setFollowing] = useState([]);

  const handleFollow = (notifId, username) => {
    setFollowing([...following, username]);
  };

  return (
    <div className={styles.container}>
      <h2>Notifications</h2>
      <div className={styles.list}>
        {notifications.map((notif) => (
          <div key={notif.id} className={styles.item}>
            {notif.avatar ? (
              <img src={notif.avatar} alt={notif.user} className={styles.avatarImage} />
            ) : (
              <div className={styles.avatarPlaceholder}>
                {notif.user.charAt(0).toUpperCase()}
              </div>
            )}
            <div className={styles.text}>
              <span className={styles.username}>{notif.user}</span> {notif.text}
              <span className={styles.time}>{notif.time}</span>
            </div>
            {notif.type === 'follow' && !following.includes(notif.user) && (
              <button 
                className={styles.followBtn}
                onClick={() => handleFollow(notif.id, notif.user)}
              >
                Follow
              </button>
            )}
            {notif.type === 'follow' && following.includes(notif.user) && (
              <button 
                className={styles.followBtn}
                style={{backgroundColor: 'var(--hover-bg)', color: 'var(--text-color)'}}
              >
                Following
              </button>
            )}
            {(notif.type === 'like' || notif.type === 'comment') && notif.postImage && (
              <img src={notif.postImage} alt="Post" className={styles.postThumbImage} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;