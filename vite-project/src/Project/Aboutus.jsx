import './Aboutus.scss'
import Img1 from './Images/aboutus1.jpeg' 
import Img2 from './Images/about-us2.jpg' 
import Img3 from './Images/img.webp' 
const Aboutus = () => {
  return (
    <div className="aboutus">
        <div className='firstsDiv'>
          <img src={Img1}/>
        <div>
        <h2> About Us  </h2>
Welcome to <span>Recipe Rover</span>, where culinary creativity meets passion for food! We are a team of dedicated food enthusiasts on a mission to inspire your kitchen adventures and elevate your dining experiences.
<br />
<br />

At <span>Recipe Rover</span>, we believe that cooking is not just about sustenance; it's an art form that brings people together, ignites the senses, and creates unforgettable memories. Whether you're a seasoned chef or a novice in the kitchen, our goal is to be your trusted companion on your culinary journey.

<br /><br />
Our website is a treasure trove of mouthwatering recipes, curated with love and attention to detail. From comforting classics to innovative culinary creations, we strive to offer something for every palate and occasion. Whether you're craving hearty comfort food, exploring exotic cuisines, or seeking healthy meal options, we've got you covered.
</div>
        </div>
        <div className='vision-statement'> 
          <div>
            <h2> Vision  </h2>
        <p>
        "At  <span>Recipe Rover</span> , our vision is to inspire and empower home cooks around the world to create delicious meals with confidence and joy. We believe that cooking is more than just a necessity; it's a creative expression, a way to nourish both body and soul, and a means to connect with loved ones around the table."
          </p> 
          <br />
          <br />
          <h2>Mission</h2>
          <p>
          "Our mission is to provide a comprehensive platform where individuals of all skill levels can discover, learn, and share recipes that excite the palate and ignite culinary passion. We aim to curate a diverse collection of recipes from various cuisines, dietary preferences, and cooking techniques, ensuring that there's something for everyone."
          </p>
         
          </div>
        <img src={Img2}/>
        </div>
        <div className='vision-statement1'> 
        <img  className='imagelast' src={Img3}/>
          <div className='listPara'>
            <h2> Our Goals  </h2>
            <ol>
              <li><b>Inspiration : </b> To spark creativity and excitement in the kitchen by offering a wide array of enticing recipes, culinary tips, and inspirational content.</li>
              <li><b>Education : </b> To empower home cooks with the knowledge and skills they need to tackle new recipes and cooking challenges with confidence.</li>
              <li><b>Community : </b> To foster a vibrant and supportive community where food enthusiasts can connect, share experiences, and celebrate their love for cooking.</li>
              <li><b>Accessibility : </b> To make cooking accessible to everyone, regardless of their culinary background or dietary restrictions, by providing clear instructions, helpful resources, and adaptable recipes.</li>
              <li><b>Quality : </b> To maintain the highest standards of quality in both our content and user experience, ensuring that every visit to our website is a delightful and enriching experience.</li>
            </ol>
          </div>

        </div>

    </div>
  )
}

export default Aboutus