import  { useState } from 'react';
import { useParams } from 'react-router-dom';
const data=require('../../data/db')
const TourDetails=()=>{
   let {id}=useParams();
    const [seemore , setseemore] = useState(false);

return(
<>
  {
    data.map(element =>{
      console.log(element)
      if(element.id===id){
        return(
          <div>
            <h2>{element.name}</h2>
            <img src={element.image} alt={element.name}/>
            <p>{element.price}</p>
          <div>
          {
            seemore?<>
            <p>{element.info}</p>
            <button  onClick={()=> setseemore(false)}> show less</button>
            </>
            :

            <>
            <p>{(element.info).substring(0,200)}</p>
            <button  onClick={()=> setseemore(true)}> show more</button>
             </>

          }
          </div>
          </div>

        )
      }

    })
    }
    </>
)
  }
  
  
export default TourDetails;