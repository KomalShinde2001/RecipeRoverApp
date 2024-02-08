import { Link, useNavigate } from "react-router-dom";
import "./Navbar.scss";
import { useState } from "react";
const Navbar = ({setSearch}) => {
  const navigate= useNavigate();
  const [check, setCheck] = useState(false);
  const [checkSearch, setCheckSearch] = useState(false);
  return (
    <div className="navbar">
      <nav className="nav">
        <div className="hide">
          <Link to={"/"} className="link">
            <div className="title color">
              R <span className="subtitle">R</span>
            </div>
          </Link>
        </div>

        <Link to={"/"} className="link">
          <div className="title color mhide">
            Recipe <span className="subtitle mhide">Rover</span>
          </div>
        </Link>

        <div className={(check)?'nav_head_menu':'nav_Head'} >
          <Link to={"/"} className="link color hover">
            Home
          </Link>
          <Link to={"/aboutus"} className="link color hover ">
            About us
          </Link>
        </div>
        <div  className={(checkSearch)?'searchHide':'mhide'} >
          <input
          onFocus={()=>{navigate('/search')}}
            className="color input-search "
            type="text"
            placeholder="Enter Dish"
            onChange={((d)=>{setSearch(d.target.value)})}
          />
          <Link to={"/search"}>
            <button className="color mhide hover">Search</button>
          </Link>
        </div>
        <div className="menu_icon  hide">
          <i onClick={()=>{(checkSearch)?setCheckSearch(false):setCheckSearch(true)}}
           className= { (checkSearch)?"fa-solid fa-xmark":"fa-solid fa-magnifying-glass color"}
          ></i>
          <i onClick={()=>{(check)?setCheck(false):setCheck(true)}}
           className= { (check)?"fa-solid fa-xmark": "fa-solid fa-bars color "}  ></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
