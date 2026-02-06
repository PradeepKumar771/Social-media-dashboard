import React from 'react';
import Post from '../../components/Post/Post';
import { postsData } from '../../utils/mockData';

const Home = () => {
  return (
    <div className="page-container">
      {postsData.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Home;