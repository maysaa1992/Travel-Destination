function Tours (props){
  return(
    <>
    <h2>{props.Tours_Name}</h2>
    <img src={props.Tours_Image} alt={props.Tours_Name}/>
    </>
  )
}
export default Tours;