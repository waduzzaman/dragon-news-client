import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories]=useState([]);

    
    // load data from api: 
    useEffect(()=>{

        fetch('http://localhost:5000/news-categories')
        .then(res=>res.json())
        // .then(data=>console.log(data));
        .then(data=>setCategories(data));


    },[])

    return (
        <div>
            {/* Modudle 60.6 to get the details information  */}
           <h4>All Category{categories.length}</h4>
           <div>
            {
                categories.map(category=><p key={category.id}>
                    <Link to={`/category/${category.id}`}>{category.name}</Link>
                </p>)
            }
           </div>
            
        </div>
    );
};

export default LeftSideNav;