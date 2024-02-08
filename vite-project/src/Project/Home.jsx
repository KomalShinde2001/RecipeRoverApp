import React, { useEffect, useState } from 'react'
import './Home.scss'
import { useNavigate } from 'react-router-dom'
const Home = ({search}) => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => res.json())
      .then((d) => setRandom(d.meals));
  }, []);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((d) => setData(d.categories));
  }, []);

  const navigate = useNavigate();
  const [data2, setData2] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((res) => res.json())
      .then((d) => setData2(d.meals));
  }, []);

  return (
    <div>
     
      <div className="home-random">
        {random.map((item) => {
          return (
            <div className="home-random-box" key={item.idMeal}>
              <div>
                <h1>
                  Today's Favourite Dish is <span>{item.strMeal}</span> of
                  Category <span>{item.strCategory}. </span>{" "}
                </h1>
              </div>
              <div>
                <img src={item.strMealThumb} alt="" />
              </div>
            </div>
          );
        })}
      </div>
      <h1 style={{ textAlign: "center" }}>Category</h1>
      <div className="box">
        {data.map((item) => {
          return (
            <div key={item.idCategory} className="item-box">
              <img
                src={item.strCategoryThumb}
                alt=""
                className="img"
                onClick={() => navigate("/about", { state: { item } })}
              />
              <h1
                className="name"
                onClick={() => navigate("/about", { state: { item } })}
              >
                {item.strCategory}
              </h1>
            </div>
          );
        })}{" "}
      </div>
      <h1 style={{ textAlign: "center" }}>Meals</h1>
      <div className="box">
        {data2.map((item) => {
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
    </div>
  );
};

export default Home;