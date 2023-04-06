import Home from "./components/home/Home";
//const toursData=require("./data/db.json");
import toursData from './data/db.json';
import { Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import TourDetails from "./components/TourDetails/TourDetails"

function App() {

 return(
  <>
  <NavBar/>
  <Routes>
    <Route path='/' element={<Home data={toursData} />}></Route>
<Route path='/city/:id' element={<TourDetails />}></Route>

  </Routes>

  </>
 );
}

export default App;
