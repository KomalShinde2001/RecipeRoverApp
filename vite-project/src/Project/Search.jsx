import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Search.scss'

const Search = ({search}) => {
  const[data,setData]= useState([]);
  useEffect(()=>{
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}` )
          .then(d=>d.json())
          .then(d=>setData(d.meals))
  },[search])
  const navigate   = useNavigate();
  return (
    <div className='Search'> 
          
      <div className="search-box">
        {data!=null && data.map((item) => {
          return (
            <div key={item.idMeal} className="item-box">
              <img
                src={item.strMealThumb}
                className="img-meal"
                onClick={() => navigate("/aboutmeal", { state: { item } })}
              />
              <h1 className="name"    
               onClick={() => navigate("/aboutmeal", { state: { item } })} >{item.strMeal}</h1>
            </div>
          );
        })}
      </div>
      {
           data==null && <div className="notfound">
                    <h1>Sorry, no results found for your search. Please try again. </h1>  
             </div>
      }
     
    </div>
  )
}

export default Search