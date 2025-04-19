import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'

function viewStory() {

    const {id,tot}=useParams();
    const [story,setStory] = useState(null);
    const navigate = useNavigate();

    

    useEffect(() => {

        fetch(`http://localhost:3000/story/${id}`).
        then(data => data.json()).
        then(data => setStory(data)).
        catch(err => console.log(err))
    },[id,tot,navigate])

if(id>tot || id<=0){
  navigate('/')
}

   
  return (
    <div>
        {story ? <div className='d-flex justify-content-center align-items-center'>
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i className="bi bi-arrow-left-circle"></i></Link>
            <img className="view-story" src={story.postImage}></img>
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i className="bi bi-arrow-right-circle"></i></Link>
        </div> 
        : <p>Loading</p>}
    </div>
  )
}

export default viewStory;