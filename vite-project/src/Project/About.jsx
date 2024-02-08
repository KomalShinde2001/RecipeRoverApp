import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./About.scss";
const About = ({ search }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const specificFood = location.state.item;
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?c=${specificFood.strCategory}`  )
      .then((res) => res.json())
      .then((d) => setMeals(d.meals))
      .catch((d)=>setMeals(null) );
  }, []);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((res) => res.json())
      .then((d) => setData2(d.meals));
  }, []);
  return (
    <div>
      <div className="about-box">
        <h3 className="about-head">{specificFood.strCategory}</h3>
        <img src={specificFood.strCategoryThumb} className="about-main-img" />
        <h2 className="description">Food Category Description</h2>
        <p className="about-desc">{specificFood.strCategoryDescription}</p>
      </div>
      <h1 style={{ textAlign: "center" }}>Category</h1>
      <div className="box" id="about-item-box">
        {meals!=null && meals.map((item) => {
          return (
            <div key={item.idMeal} className="item-box">
              <img
                src={item.strMealThumb}
                className="img"
                onClick={() => navigate("/aboutmeal", { state: { item } })}
              />
              <h1
                className="name"
                onClick={() => navigate("/aboutmeal", { state: { item } })}
              >
                {item.strMeal}
              </h1>
            </div>
          ) }) 
        }
        {
          meals== null && <div>
            <h2>Result not found !</h2>
          </div>
        }
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
              <h1
                className="name"
                onClick={() => navigate("/aboutmeal", { state: { item } })}
              >
                {item.strMeal}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
