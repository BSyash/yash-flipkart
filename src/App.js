import './App.css';
import Categories from './Category/Categories';
import NavBar from './NavBar/NavBar';
import OfferSlider from './OfferSlider/OfferSlider';
import TopOffers from './TopOffers/TopOffers';
import { Switch, Route } from 'react-router-dom'
import MobileCategories from './MobileCategory/MobileCategories';
import FashionCategory from './FashionCategory/FashionCategory';
import MobileViewDetails from './MobileCategory/MobileViewDetails';
import CartItems from './CartItems/CartItems';
import BuyMobile from './MobileCategory/BuyMobile';
import Cards from './Card/Cards';
import Sliders from './Slider/Sliders';


// const CardSubtitleData = [
//   {
//     tag: '',
//     title: '',
    
//   }
// ]
function App() {
  

  return (
    <div className="App">

      <NavBar />

      <Switch>
        <Route exact path='/'>
          <Categories />
          <div className='flipcartBody'>
            <OfferSlider />
            <div className='discountLabels'>
              <h2>Discount Section</h2>
            </div>
            <div className='TopOffersPanel'>

              <div className='sideTopoffers'>
                <h2>Offers</h2>
              </div>

              <div className='TopOfferSlider'>
                <TopOffers />
              </div>

              <div className='sideTopoffers'>
                <h2>Offers</h2>
              </div>

            </div>
          </div>
        </Route>
        <Route exact path='/mobiles'>
          <MobileCategories />
        </Route>
        <Route exact path='/fashion'>
          <FashionCategory />
        </Route>
        <Route exact path='/mobileview'>
          <MobileViewDetails />
        </Route>
        <Route exact path='/cartitems'>
          <CartItems />
        </Route>
        <Route exact path='/buymobile'>
          <BuyMobile />
        </Route>
        <Route exact path='/slider'>
          <Sliders />
        </Route>
        {/* <Route exact path='/cards'>
          <Cards />
        </Route> */}
      </Switch>


    </div>
  );
}

export default App;
