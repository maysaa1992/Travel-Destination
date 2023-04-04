import Tour from './tour/Tour'
function Tours (props){
  return(
    <>
    {
    props.tourdata.data.map(tour=>{
      return(
        <Tour tour={tour} key={tour.id} />

      )
    })
  }
    </>
  )
}
export default Tours;