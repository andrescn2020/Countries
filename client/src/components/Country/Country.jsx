import "./Country.css"

export default function Country(props){

  const { country, navigate } = props;

  const { id, name , img, continent } = country;
  
  return (
    <div className="countryContainer" onClick={() => navigate(id)}>
      <h1 className="countryName">{name}</h1>
      <img className="countryImg" src={img} alt=""/>
      <p className="countryContinent">{continent}</p>
    </div>
  );
};

