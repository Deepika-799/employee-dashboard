import React from 'react';
import '../styles/profile.css';

function Profile() {
  const profileData = {
    fullName: 'Kunkatla Sai Sri Naga Deepika',
    employeeId: 'EMP-LBNG-2025-045',
    role: 'Employee',
    email: 'deepikakunkatla4@gmail.com',
    phoneNumber: '7842320632',
    department: 'web development',
    hireDate: 'December 10, 2025'
  };

  return (
    <div className="profile">
      <h2>My Profile</h2>
      <div className="profile-content">
        <div className="profile-avatar">
          <div className="avatar-large">KS</div>
        </div>
        <div className="profile-details">
          <div className="detail-group">
            <label>Full Name:</label>
            <span>{profileData.fullName}</span>
          </div>
          <div className="detail-group">
            <label>Employee ID:</label>
            <span>{profileData.employeeId}</span>
          </div>
          <div className="detail-group">
            <label>Role:</label>
            <span>{profileData.role}</span>
          </div>
          <div className="detail-group">
            <label>Email:</label>
            <span>{profileData.email}</span>
          </div>
          <div className="detail-group">
            <label>Phone Number:</label>
            <span>{profileData.phoneNumber}</span>
          </div>
          <div className="detail-group">
            <label>Department:</label>
            <span>{profileData.department}</span>
          </div>
          <div className="detail-group">
            <label>Hire Date:</label>
            <span>{profileData.hireDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
