export const currentUser = {
  id: 1,
  username: 'dev_wizard',
  name: 'Alex Developer',
  avatar: 'https://i.pravatar.cc/150?u=dev_wizard',
  bio: 'Building things with React ⚛️ | Coffee Lover ☕',
  followers: 1205,
  following: 450,
  posts: 12
};

export const postsData = [
  {
    id: 1,
    username: 'design_daily',
    avatar: 'https://i.pravatar.cc/150?u=design',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1000&q=80',
    caption: 'Coding setup for the weekend! 💻 #coding #setup',
    likes: 45,
    timestamp: '2h ago',
    comments: [
      { id: 1, user: 'web_guru', text: 'Clean setup! 🔥' }
    ]
  },
  {
    id: 2,
    username: 'travel_lens',
    avatar: 'https://i.pravatar.cc/150?u=travel',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Sunset vibes in Kyoto 🇯🇵',
    likes: 128,
    timestamp: '5h ago',
    comments: []
  },
  {
    id: 3,
    username: 'food_explorer',
    avatar: 'https://i.pravatar.cc/150?u=food',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1000&q=80',
    caption: 'Homemade pasta from scratch! 🍝 Recipe in bio',
    likes: 234,
    timestamp: '8h ago',
    comments: [
      { id: 1, user: 'chef_mike', text: 'Looks amazing!' },
      { id: 2, user: 'pasta_lover', text: 'Need that recipe ASAP 😍' }
    ]
  },
  {
    id: 4,
    username: 'nature_shots',
    avatar: 'https://i.pravatar.cc/150?u=nature',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=80',
    caption: 'Mountain mornings hit different ⛰️',
    likes: 567,
    timestamp: '1d ago',
    comments: []
  }
];

export const notificationsData = [
  { 
    id: 1, 
    type: 'like', 
    user: 'sarah_m', 
    avatar: 'https://i.pravatar.cc/150?u=sarah',
    text: 'liked your photo.', 
    time: '10m',
    postImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=100&q=80'
  },
  { 
    id: 2, 
    type: 'follow', 
    user: 'mike_code', 
    avatar: 'https://i.pravatar.cc/150?u=mike',
    text: 'started following you.', 
    time: '2h' 
  },
  { 
    id: 3, 
    type: 'comment', 
    user: 'jenny_photos', 
    avatar: 'https://i.pravatar.cc/150?u=jenny',
    text: 'commented: "Amazing work! 🔥"', 
    time: '5h',
    postImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=100&q=80'
  },
  { 
    id: 4, 
    type: 'like', 
    user: 'alex_dev', 
    avatar: 'https://i.pravatar.cc/150?u=alex',
    text: 'liked your photo.', 
    time: '1d',
    postImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=100&q=80'
  },
];

export const messagesData = [
  { 
    id: 1, 
    name: 'Alice Johnson', 
    username: 'alice_j',
    avatar: 'https://i.pravatar.cc/150?u=alice',
    lastMsg: 'See you tomorrow!', 
    time: '5m',
    unread: true,
    messages: [
      { id: 1, text: 'Hey! How are you?', sender: 'them', time: '10:30 AM' },
      { id: 2, text: "I'm good, just coding. You?", sender: 'me', time: '10:32 AM' },
      { id: 3, text: 'See you tomorrow!', sender: 'them', time: '10:35 AM' }
    ]
  },
  { 
    id: 2, 
    name: 'Bob Smith', 
    username: 'bob_smith',
    avatar: 'https://i.pravatar.cc/150?u=bob',
    lastMsg: 'Can you send the file?', 
    time: '2h',
    unread: false,
    messages: [
      { id: 1, text: 'Can you send the file?', sender: 'them', time: '8:15 AM' },
      { id: 2, text: 'Sure, sending now', sender: 'me', time: '8:20 AM' }
    ]
  },
  { 
    id: 3, 
    name: 'Charlie Wilson', 
    username: 'charlie_w',
    avatar: 'https://i.pravatar.cc/150?u=charlie',
    lastMsg: 'Haha lol', 
    time: '1d',
    unread: false,
    messages: [
      { id: 1, text: 'Did you see that meme?', sender: 'them', time: 'Yesterday' },
      { id: 2, text: 'Haha lol', sender: 'them', time: 'Yesterday' }
    ]
  },
];