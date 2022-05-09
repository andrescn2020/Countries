import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"

export default function Home(){

  return (

      <div>
    <h1>Welcome</h1>
    <aside className='exploreContainer'>
    <Link to = "api/countries/">
      <span className='exploreLink'>Explore</span>
    </Link>
    </aside>
    </div>
    
      )

}
 


 


