import React from 'react';
import './css/Hero.css';
import { Link } from 'react-router-dom'; 
function NotFound() {
    return ( 
  <div className='container p-2 mb-5'>
 <div className='row text-center'>


<h1 className='mb-4'>404 Not Found</h1>
<p className='mb-4' >We couldn’t find the page you were looking for.Visit <Link to={"/"}>Zerodha’s home page</Link></p>
 </div>
</div>
       
     );
}

export default NotFound;