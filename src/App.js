import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from "./Component/Header";
import CarouselSlide from "./Component/Carousel";
import Actualite from "./Component/Actualite";
import RowCamion from "./Component/RowCamion";
import Footer from "./Component/Footer/Footer";
import CardHorizontal from "./Pages/Product";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import ProductSale from "./Pages/Product";
import Product from "./Component/Product";


function App() {
  return (
           <>
               <Router>
                   <Navigation />
                   <Switch>
                       <Route path='/' exact component={Home} />
                       <Route path='/camion_mercedes' exact component={Product} />
                       <Route path='/camion_man' exact component={ProductSale} />
                       <Route path='/camion_daf' exact component={ProductSale} />
                       <Route path='/camion_scania' exact component={ProductSale} />
                   </Switch>
                   <Footer/>
               </Router>
           </>
  );
}

export default App;
