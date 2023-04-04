import Home from "./components/home/Home";
//const toursData=require("./data/db.json");
import toursData from './data/db.json';
import { Routes, Route} from "react-router-dom";
import { useParams } from "react-router-dom";

import TourDetails from "./components/TourDetails/TourDetails"

let {id}=useParams;
function App() {

 return(
  <>
  <Home data={toursData}  />
  <Routes>
    <Route path='/' element={<Home data={toursData} />}></Route>
<Route path='/city/:id' element={<TourDetails useParams={id}  data={toursData} />}></Route>

  </Routes>

  </>
 );
}

export default App;
