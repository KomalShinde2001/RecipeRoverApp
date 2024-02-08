import { useState, useEffect } from "react";
import "./AboutMeal.scss";
import { useLocation, useNavigate } from "react-router-dom";
const AboutMeal = ({ search }) => {
  const location = useLocation();
  const specificMeal = location.state.item;
  const navigate = useNavigate();
  const [data2, setData2] = useState([]);
  const [myMeal, setMyMeal] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
      .then((res) => res.json())
      .then((d) => setData2(d.meals));
  }, [data2]);
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${specificMeal.idMeal}`
    )
      .then((res) => res.json())
      .then((d) => setMyMeal(d.meals[0]));
  }, [specificMeal]);
  return (
    <div className="AboutMeal">
      <div>
        {
          myMeal!=null && (
            <>
             <aside className="asideAboutMeal">
        <img src={myMeal.strMealThumb} alt="" className="meal-img" />
        <p>
          <span>
            <span className="mealkeyword">Dish Name </span>: {myMeal.strMeal}
          </span>
          <br />
          <br />
          <span>
            <span className="mealkeyword">Category</span>: {myMeal.strCategory}
          </span>
          <br />
          <br />
          <span>
            <span className="mealkeyword">Area </span>:{" "}
            <span>{myMeal.strArea}</span>
          </span>
        </p>
      </aside>
      <div className="mealDiscription">
        <span className="mealkeyword">Cooking Instructions </span>
        <p>{myMeal.strInstructions}</p>
      </div>
            </>
          )
        }
        {
          myMeal==null&&(
            <>
            <h2>Result not found ! </h2>
              </>
          )
        }
      </div>
     

      <section>
        <h1 style={{ textAlign: "center", margin: "50px 0", fontSize: "32px" }}>
          Meals
        </h1>
        <div className="box">
          {data2.map((item) => {
            return (
              <div key={item.idMeal} className="item-box">
                <img
                  src={item.strMealThumb}
                  className="img"
                  onClick={() => navigate("/aboutmeal", { state: { item } })}
                />
                <h1 className="name">{item.strMeal}</h1>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default AboutMeal;
