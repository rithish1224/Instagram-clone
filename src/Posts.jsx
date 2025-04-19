import React, { useEffect, useState } from 'react'

function Posts() {

  const [posts , SetPosts] = useState([]);

    useEffect (() =>{
      fetch('http://localhost:3000/posts').
      then((data)=> data.json()).
      then((data)=> SetPosts(data)).
      catch(err=> console.log(err))
    },[]
    )

  return (
    <div className='d-flex justify-content-center'>
    {posts.length > 0 ? (
      <div>
        {posts.map((post) => (
          <div key={post.id} className='my-3'>
            <div className='d-flex'>
              <div className='d-flex'>
              <img className="dp rounded-circle" src={post.profileImage} />
              <h5 className='username'>{post.username}</h5>
              </div>
              <div className='ms-auto dots'><i className="bi bi-three-dots"></i></div>
            </div>
            <div>
              <img className="image" src={post.postImage} alt="Post" />
            </div>
            <div className='mt-2'>
              <i className="bi bi-heart post-icon"></i>
              <i className="bi bi-chat post-icon"></i>
              <i className="bi bi-send post-icon"></i>
            </div>
            <div>
            <p className='likes'>{post.likes} likes</p>
            </div>
            <div>
              {post.caption}
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>Loading Post</div>
    )}
  </div>
  )
}

export default Posts