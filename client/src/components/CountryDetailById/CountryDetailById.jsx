import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './CountryDetailById.css';

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
            {country && (
                <>
                <img src={country.img} alt="" style={{width: "200px", height: "100px" }}/>
                <div>
                    <label>Name:  </label>
                    <span>{country.name}</span>
                </div>
                <div>
                    <label>Continent:  </label>
                    <span>{country.continent}</span>
                </div>
                <div>
                    <label>Capital:  </label>
                    <span>{country.capital}</span>
                </div>
                <div>
                    <label>Subregion:  </label>
                    <span>{country.subregion}</span>
                </div>
                <div>
                    <label>Area:  </label>
                    <span>{country.area} Km2</span>
                </div>
                <div>
                    <label>Population:  </label>
                    <span>{country.population}</span>
                </div>
                {<div>
                    <label>Tourist Activities:  </label><br></br>
                    {country.turismActivities.length === 0 
                    ? "This country doesn´t have any activity" 
                    : country.turismActivities.map((activity) => (

                        <span>{`Activity Name: "${activity.name}" ||  
                        Activity Duration: "${activity.duration}" ||    
                        Activity Difficult: "${activity.difficult}" ||   
                        Activity Season: "${activity.season}".`}</span>

                    ))}
                </div>}
                </>
            )}
        </div>

    )

}