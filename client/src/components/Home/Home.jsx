import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){

  return (
      <div>
    <h1>PI Countries</h1>
    <h3>Countries</h3>
    <Link to = "api/countries/">
      Explore
    </Link>
    </div>
      )

}
 


 


