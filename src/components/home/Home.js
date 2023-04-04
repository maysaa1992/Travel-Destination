 import Header from "../header/Header";
 import Footer from "../footer/Footer";
 import Tours from "../tours/Tours";

 function Home (props){
  console.log(props)
return(
    <>
    <Header/>
    
      
        <Tours tourdata={props}/>
    
  
  <Footer/>
    </>
)

}
export default Home;