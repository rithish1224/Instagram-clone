import React from 'react'

function Sidebar() {
  return (
    <div className='position-fixed'>
    <div className='d-flex'>
      <div className='d-flex flex-column gap-3  sb-1'>
        <img className="logo-text mx-2" src="instagram-text-icon.png" alt="text" />
        <div className='side-cont'>
        <div><i className="bi bi-house-door-fill si"></i>Home</div>
        <div className='mt-4' ><i className="bi bi-search si"></i>Search</div>
        <div className='mt-4'><i className="bi bi-compass si"></i>Explore</div>
        <div className='mt-4'><i className="bi bi-play-btn si"></i>Reels</div>
        <div className='mt-4'><i className="bi bi-chat-dots si"></i>Messages</div>
        <div className='mt-4'><i className="bi bi-heart si"></i>Notifications</div>
        <div className='mt-4'><i className="bi bi-plus-square si"></i>Create</div>
        <div className='mt-4'><i className="bi bi-person-circle si"></i>Profile</div>
        </div>
      </div>
      <div className='vl'></div>
    </div>

    <div className='position-fixed bottom-0  d-flex flex-column gap-3 mb-3 sb-2'>
        <div><i className="bi bi-threads si"></i>Threads</div>
        <div><i className="bi bi-list si"></i>More</div>
    </div>
    </div>
  )
}

export default Sidebar;