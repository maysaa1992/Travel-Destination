 import Header from "../header/Header";
 import Footer from "../footer/Footer";
 import Tours from "../tours/Tours";
 function Home (props){
return(
    <>
    <Header/>
    
    {
    props.data.map(tour=>{
      return(
        <Tours Tours_Name={tour.name} Tours_Image={tour.image}/>
      )
    })
  }
  <Footer/>
    </>
)

}
export default Home;