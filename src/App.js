import Home from "./components/home/Home";
//const toursData=require("./data/db.json");
import toursData from './data/db.json';

function App() {
 return(
  <>
  <Home data={toursData}  />

  </>
 );
}

export default App;
