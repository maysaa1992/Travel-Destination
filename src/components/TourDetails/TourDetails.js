import  { useState } from 'react';


function TourDetails(props ){
   
    const [seemore , setseemore] = useState(false);
         const result = props.filter(Render);


    function Render(id) {
      return ;
    }

    function seemoreHandler(){
        // alert ("you are logged in");
    
        setseemore(!seemore) // inverter
    }
    function renderDetils(props){


    }
    return(

        <>
                <button  onClick={seemoreHandler}>{seemore? "see more" : "see less"}</button>

        </>)
    
}
export default TourDetails;