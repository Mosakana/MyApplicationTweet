/*import React, { useState } from 'react';
import './PublicBoard.css';

function PublicBoard(props) {
  const [announcement, setAnnouncement] = useState('');
  const [search, setSearch] = useState('');

  const handleAnnouncementChange = (event) => {
    setAnnouncement(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleAnnouncementSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic to submit announcement to the backend
    setAnnouncement('');
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // TODO: Add logic to search for users or content
    setSearch('');
  };

  return (
    <div className="public-board">
      <h1>Welcome to the Social Network!</h1>
      <div className="announcement-section">
        <h2>Announcements</h2>
        <form onSubmit={handleAnnouncementSubmit}>
          <input
            type="text"
            placeholder="What's new?"
            value={announcement}
            onChange={handleAnnouncementChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
      <div className="button-section">
        <button onClick={props.onLogout}>Logout</button>
        <button>Friends</button>
        <button>Profile</button>
      </div>
      <div className="search-section">
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for users or content"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default PublicBoard;
*/

import React, { useState } from 'react';

function PublicBoard(props) {
  const [announcement, setAnnouncement] = useState('');
  const [search, setSearch] = useState('');

  const handleAnnouncementChange = (event) => {
    setAnnouncement(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleAnnouncementSubmit = (event) => {
    event.preventDefault();
    setAnnouncement('');
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    setSearch('');
  };

  return (
    <div style={{
      backgroundColor: 'rgba(242, 227, 190, 0.8)',
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
      borderRadius: '10px'
    }}>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px'
      }}>
        <span style={{ marginRight: '20px' }}><button onClick={props.onLogout}>Logout</button></span>
        <span style={{ marginRight: '20px' }}><button>Friends</button></span>
        <span style={{ marginRight: '20px' }}><button>Profile</button></span>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search for users or content"
            value={search}
            onChange={handleSearchChange}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
      }}>
        <h2>Announcements</h2>
        <form onSubmit={handleAnnouncementSubmit}>
          <input
            type="text"
            placeholder="What's new?"
            value={announcement}
            onChange={handleAnnouncementChange}
          />
          <button type="submit">Post</button>
        </form>
        {/* TODO: Add logic to display announcements */}
      </div>
      
      <div style={{
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
      }}>
        
      </div>
    </div>
  );
}

export default PublicBoard;
