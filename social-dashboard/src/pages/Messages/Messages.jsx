import React, { useState } from 'react';
import { messagesData } from '../../utils/mockData';
import { Send } from 'lucide-react';
import styles from './Messages.module.css';

const Messages = () => {
  const [contacts] = useState(messagesData);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState(selectedContact.messages);

  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setMessages(contact.messages);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: messageInput,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newMessage]);
    setMessageInput('');
  };

  return (
    <div className={styles.messagesContainer}>
      <h2 className={styles.pageTitle}>Messages</h2>
      
      <div className={styles.chatWrapper}>
        {/* Sidebar: Contact List */}
        <div className={styles.sidebar}>
          <div className={styles.contactsList}>
            {contacts.map(contact => (
              <div 
                key={contact.id} 
                className={`${styles.contact} ${selectedContact.id === contact.id ? styles.active : ''}`}
                onClick={() => handleSelectContact(contact)}
              >
                {contact.avatar ? (
                  <img src={contact.avatar} alt={contact.name} className={styles.avatarImage} />
                ) : (
                  <div className={styles.avatar}>{contact.name[0]}</div>
                )}
                <div className={styles.info}>
                  <h4>{contact.name}</h4>
                  <p>{contact.lastMsg}</p>
                </div>
                {contact.unread && <div className={styles.unreadBadge}></div>}
              </div>
            ))}
          </div>
        </div>

        {/* Main: Chat Window */}
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <div>
              <strong>{selectedContact.name}</strong>
              <div className={styles.username}>@{selectedContact.username}</div>
            </div>
          </div>
          
          <div className={styles.messagesArea}>
            {messages.map(msg => (
              <div key={msg.id} className={styles.messageWrapper}>
                <div className={msg.sender === 'me' ? styles.msgSent : styles.msgReceived}>
                  {msg.text}
                </div>
                <div className={styles.msgTime} style={{textAlign: msg.sender === 'me' ? 'right' : 'left'}}>
                  {msg.time}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className={styles.inputArea}>
            <input 
              type="text" 
              placeholder="Message..." 
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button type="submit" disabled={!messageInput.trim()}>
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;