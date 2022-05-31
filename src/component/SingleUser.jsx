import React from 'react'


const SingleUser=({user,idx})=>{
    
    return(
       <div className='single-user'>
           <img src={user.picture.large} alt=""/>
           <div className='single-info'>
               <h2>Name:{user.name.first}</h2>
               <h2>Surname:{user.name.last}</h2>
               <h2>Age:{user.dob.age}</h2>
               <div className='email'>
               <h2>Email:{user.email}</h2>
               </div>
           </div>
       </div>
    )
}

export default SingleUser;