// import { useParams } from 'react-router-dom';
// import { Routes, Route } from "react-router-dom";
// import TourDetails from "../TourDetails/TourDetails"
// let {id}=useParams;

function Tour(props){
    // function handelClick(){
    //     <Routes>
    //         <Route path='/TourDetails' element={<TourDetails  useParams={id} />}></Route>

    //     </Routes>


    // }
    return(
        <>
            <h1>{props.name}</h1>    
           <img src={props.image} alt={props.name} />
                


        </>
    )
}
export default Tour;
