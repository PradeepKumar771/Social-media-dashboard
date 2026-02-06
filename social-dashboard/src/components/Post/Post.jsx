import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import styles from './Post.module.css';

const Post = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [commentInput, setCommentInput] = useState('');

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (!commentInput.trim()) return;
    const newComment = { id: Date.now(), user: 'you', text: commentInput };
    setComments([...comments, newComment]);
    setCommentInput('');
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <img src={post.avatar} alt={post.username} className={styles.avatar} />
        <span className={styles.username}>{post.username}</span>
        <span className={styles.time}>{post.timestamp}</span>
      </div>
      
      <img src={post.image} alt="Post content" className={styles.image} />
      
      <div className={styles.actions}>
        <button onClick={handleLike} className={isLiked ? styles.liked : ''}>
          <Heart fill={isLiked ? "currentColor" : "none"} />
        </button>
        <button><MessageCircle /></button>
        <button><Send /></button>
        <button style={{marginLeft: 'auto'}}><Bookmark /></button>
      </div>

      <div className={styles.content}>
        <p><strong>{likes.toLocaleString()} likes</strong></p>
        <p><span className={styles.username}>{post.username}</span> {post.caption}</p>
        
        {comments.length > 0 && (
          <div className={styles.comments}>
            {comments.map(c => (
              <p key={c.id}><span className={styles.username}>{c.user}</span> {c.text}</p>
            ))}
          </div>
        )}
        
        <form onSubmit={handleComment} className={styles.commentForm}>
          <input 
            type="text" 
            placeholder="Add a comment..." 
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
          />
          <button type="submit" disabled={!commentInput.trim()}>Post</button>
        </form>
      </div>
    </div>
  );
};

export default Post;