import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home(){

  return (

      <div>
    <h1>Welcome</h1>
    <aside className='exploreContainer'>
    <Link style={{"textDecoration": "none"}} to = "api/countries/">
      <button className='exploreLink'>Explore</button>
    </Link>
    </aside>
    </div>
    
      )

}
 


 


