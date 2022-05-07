export default function Country(props){

  const { country, navigate } = props;

  const { id, name , img, continent } = country;
  
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} alt=""/>
      <p>{continent}</p>
      <button onClick={() => navigate(id)}>Details</button> 
    </div>
  );
};

