import React, { useEffect, useState } from 'react'

function Suggestions() {
  
  const[profile , Setprofile] = useState(null);
  const[suggestions , SetSuggestions] = useState([]);

  useEffect(()=>{

    fetch('http://localhost:3000/profile')
    .then(data => data.json())
    .then(data => Setprofile(data))
    .catch(err=> console.log(err))
  },[])

  useEffect(()=>{

    fetch('http://localhost:3000/suggestions')
    .then(data => data.json())
    .then(data => SetSuggestions(data))
    .catch(err=> console.log(err))
  },[]
  )
  
  return (
    <div>
      <div className='suggestions mt-4 ml-10'>
      {profile ?
      <div className='d-flex'>
          <img className="dp rounded-circle" src={profile.profileImage} />
          <h5 className='username'>{profile.username}</h5>
          <small className='ms-auto text-primary'>Switch</small>
      </div>:
      <p>Loading</p>}

      <div className='d-flex wrapper-1 mt-3'>
        <p className='sfy'>Suggested for you</p>
        <p className='ms-auto sa'>See All</p>
      </div>

      <div>
      <div className='d-flex'>
    {suggestions.length > 0 ? (
      <div>
        {suggestions.map((suggestion) => (
          <div key={suggestions.id} className='my-3'>
            <div className='d-flex'>
              <img className="dp rounded-circle " src={suggestion.profileImage} />
              <h5 className='username'>{suggestion.username}</h5>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div>Loading Post</div>
    )}
  </div>
      </div>


      </div>
    </div>
  )
}

export default Suggestions