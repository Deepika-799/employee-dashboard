import React, { useState } from 'react';
import '../styles/settings.css';

function Settings() {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match.');
      return;
    }
    // Here you would typically send the data to the backend
    setMessage('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="settings">
      <h2>Settings</h2>
      <div className="settings-content">
        <h3>Change Password</h3>
        <form onSubmit={handleSubmit} className="password-form">
          <div className="form-group">
            <label htmlFor="currentPassword">Current Password</label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New Password</label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm New Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="change-password-btn">Change Password</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default Settings;
