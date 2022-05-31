import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios'
import SingleUser from './SingleUser';
    // https://randomuser.me/api/?results=10

const UserList=()=>{

    const [users,setUsers]=useState([]);
    
    const fetchUser=async()=>{
        const res=await axios.get("https://randomuser.me/api/?results=10");
        setUsers(res.data.results);
    }

    useEffect(()=>{
        fetchUser();
    },[])

    return(
        <div className='user-list'>
            
                {users.map((user,idx)=>(
                    
                        <SingleUser user={user} key={idx}/>
                    

                ))}
            
        </div>
    )
}

export default UserList;