import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CountryDetailById.css';
import { Link } from "react-router-dom";

export default function CountryDetailById() {

    const { id } = useParams();

    const [ country, setCountry ] = useState();

    useEffect(() => {

        if(id.length === 3)

        axios
            .get(`http://localhost:3001/api/countries/${id}`)
            .then((response) => setCountry(response.data));

    }, [id]);

    return (

        <div>

        <div className="homeButton">
            <Link to="/api/countries/">
            <button>Home</button>
            </Link>
        </div>

        <div className="infoContainer">
            {country && (
                <>
                <img className="countryImg" src={country.img} alt="" style={{"width" : "250px", "height": "300px", "objectFit":"contain", "margin-bottom": "-50px"}}/>

                    <label>Name: {country.name}</label>

                    <label>Continent: {country.continent}</label>

                    <label>Capital: {country.capital}</label>

                    <label>Subregion: {country.subregion}</label>

                    <label>Area: {country.area} Km2</label>

                    <label>Population: {country.population}</label>

                {<div className="activityContainer">
                    <label>Tourist Activities:  </label>
                    {country.turismActivities.length === 0 
                    ? <p>This country doesn´t have any activity</p>
                    : country.turismActivities.map((activity) => (

                        <p>{`Activity Name: "${activity.name}" ||  
                        Activity Duration: "${activity.duration}" ||    
                        Activity Difficult: "${activity.difficult}" ||   
                        Activity Season: "${activity.season}".`}</p>

                    ))}
                </div>}
                </>
            )}
        </div>
        </div>

    )

}