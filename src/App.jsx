import './App.css';
import Card from "./components/Card";

const App = () => {

  return (
    <div className="App">
      <img src="canopy.jpg" alt="Banner" className="banner-image" />
      <h1>Food Truck Favorites</h1>
      <div className="container">
        <Card 
          name="Halal Guys"
          foodType="Halal"
          menuLink="https://thehalalguys.com/menu/"
          imageSrc="HalalGuys.jpg"
        />
        <Card 
          name="Los Tacos No.1"
          foodType="Mexican"
          menuLink="https://www.lostacos1.com/menus/"
          imageSrc="LosTacosNo1.jpg"
        />
        <Card 
          name="Mysttik Masaala"
          foodType="Indian"
          menuLink="https://indianfoodny.com/#menu_area"
          imageSrc="MysttikMsaala.jpg"
        />
        
      </div>
    </div>
  )
}

export default App
