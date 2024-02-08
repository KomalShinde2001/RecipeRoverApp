import'./Footer.scss'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-sub">
    <div className='footer-item'>
            <h2>R<span>R</span></h2>
           <div className="footer-item-sub">
           <p>Discover delicious recipes for every occasion!</p>
            <p>Explore our collection of mouthwatering dishes, from appetizers to desserts.</p>
           </div>
        </div>
        <div className="footer-item">
             Menu :
             <div className="footer-item-sub">
          <ul>
            <Link to={"/"} className='myLink'>
            <li>Home</li>
            </Link >
            <Link to={"/aboutus"}  className='myLink'>
            <li>About us</li>
            </Link>
            <Link to={"/category"}  className='myLink'>
            <li>Meal Category</li>
            </Link>
 
          </ul>
             </div> 
         </div>
        <div className='footer-item'>
           <p>Connect Us:</p>
           <div className="footer-item-sub">
           <p>Email: inforr@gmail.com</p>
           <p>Phone: 123-456-78900</p>
           <ul className='media-tag' >
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                </ul>
           </div>
  
        </div>
      
    </div>
               <div className='footer-bottom'>
                    <p>&copy; 2024 Recipe <span>Rover</span>  |  All rights reserved  | Created by Mayur Satbhai</p>
                </div>
    </div>
  )
}

export default Footer