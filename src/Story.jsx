import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Story() {
  
  const [storys,setStorys] = useState([]);
  const navigate = useNavigate();
  let tot=0;

  useEffect(() =>{
    fetch('http://localhost:3000/story').
    then(data => data.json()).
    then(data => setStorys(data)). 
    catch(err => console.log(err))
  },[])
  return (
    <div className='story d-flex justify-content-center'>
      <div className='d-none'>{tot = storys.length}</div>
      {storys.length>0 ? (
        storys.map((story)=>(
          <div key={story.id} className='mx-2' onClick={()=>{navigate(`/story/${story.id}/${tot}`)}}>
            <div className='gradient-border'>
            <img className="story-dp rounded-circle" src={story.profileImage}/>
            </div>
            <p className='text-truncate' style={{width:"50px"}}>{story.username}</p>
          </div>
        ))
      ):(<p>Loading</p>)}
    </div>
)
}

export default Story