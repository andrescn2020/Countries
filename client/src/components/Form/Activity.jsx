import axios from "axios";
import { useEffect, useState } from "react";
import '../Form/Activity.css';
import { getAllCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Activity() {

    const { countries } = useSelector((state) => state);

    const dispatch = useDispatch();

    const [input, setInput] = useState({

        name: "",
        difficult: "",
        duration: "",
        season: "",
        country: []

    });

    const [error, setError] = useState({

        name: "",
        season: "",
        country: ""

    });

    const [disabled, setDisabled] = useState(true);

    const [deleteCountry, setDeleteCountry] = useState("");

    useEffect(() => {

        dispatch(getAllCountries())

    }, [dispatch])

    useEffect(() => {

        if (input.name && input.season && input.country && !error.name && !error.season && !error.country) {

            setDisabled(false);

        } else {

            setDisabled(true);

        }

    }, [input.name, input.season, input.country, error.name, error.season, error.country])

    function handleChange(e) {

        if (e.target.value === "Select") {

            setInput((prevState) => {


                const newState = {
                    ...prevState,
                    [e.target.name]: ""
                };

                setError(validate(newState));

                return newState;

            });

        } else

            setInput((prevState) => {

                const newState = {
                    ...prevState,
                    [e.target.name]: e.target.value
                };

                setError(validate(newState));

                return newState;

            });

    }

    function validate(input) {

        const errors = {};

        if (!input.name) {

            errors.name = 'Activity is required';

        } else if (/[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g.test(input.name)) {

            errors.name = 'Activity name is incorrect (Only can contains letters)';

        } else if (input.name.length >= 20) {

            errors.name = 'Name of activity is too long (Max 20 char.)';

        } else if (input.name.length <= 2) {

            errors.name = 'Name of activity is too short (Min 3 char.)';

        } else if (input.name.charAt(0) === input.name.charAt(0).toLowerCase()) {

            errors.name = 'First letter must be Upper Case';

        }

        if (!input.season) {

            errors.season = 'Season is required';

        }

        if (input.country.length === 0) {

            errors.country = 'Country is required';

        }

        return errors;

    }

    function handleChangeCountry(e) {

        if (e.target.value === "Select" || e.target.name === []) {

            setInput((prevState) => {


                const newState = {
                    ...prevState,
                    [e.target.name]: [...input.country]
                };

                setError(validate(newState));

                return newState;

            });

        }
        else if (input.country.includes(e.target.value)) {

            setInput((prevState) => {


                const newState = {
                    ...prevState,
                    [e.target.name]: [...input.country]
                };

                setError(validate(newState));

                return newState;

            });


        } else {

            setInput((prevState) => {


                const newState = {
                    ...prevState,
                    [e.target.name]: [...input.country, e.target.value]
                };

                setError(validate(newState));

                return newState;

            });

        }

    }

    if (deleteCountry) {

        if (input.country.length === 0) {

            error.country = "Country is required"

        } else {

            input.country = input.country.filter((e) => e !== deleteCountry);

        }

    }

    async function handleSubmit(e) {

        e.preventDefault();

        try {

            if (input.name && input.season && input.country && !error.name && !error.season && !error.country) {

                await axios.post("http://localhost:3001/api/activity/", input);

                alert('Actividad creada correctamente');

                setInput({

                    name: "",
                    difficult: "",
                    duration: "",
                    season: "",
                    country: []

                })

            }

        } catch (err) {

            console.log(err);;

        }

    }

    return (

        <div>

            <div className="homeButton">
                <Link to="/api/countries/">
                    <button>Home</button>
                </Link>
            </div>

            <h1>Create your activity</h1>

            <form onSubmit={handleSubmit}>

                <div className="inputName">

                    <label>Activity Name: </label>

                    <input
                        text="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                        className={error?.name && "danger"}
                    /> <br></br> {error.name && <span>{error.name}</span>}

                </div>

                <div>

                    <label>Difficult: </label>

                    <select name="difficult" value={input.difficult} onChange={handleChange}>

                        <option value="Unspecified" >Unspecified</option>
                        <option value="1 - Very Easy">1 - Very Easy</option>
                        <option value="2 - Easy">2 - Easy</option>
                        <option value="3 - Intermediate">3 - Intermediate</option>
                        <option value="4 - Hard">4 - Hard</option>
                        <option value="5 - Very Hard">5 - Very Hard</option>

                    </select>

                </div>

                <div>

                    <label>Duration: </label>

                    <select name="duration" value={input.duration} onChange={handleChange}>

                        <option value="Unspecified" >Unspecified</option>
                        <option value="1 Hour" >1 Hour</option>
                        <option value="2 Hours">2 Hours</option>
                        <option value="3 Hours">3 Hours</option>
                        <option value="4 Hours">4 Hours</option>
                        <option value="More than 5 Hours">More than 5 Hours</option>

                    </select>
                </div>

                <div>

                    <label>Season: </label>

                    <select name="season" value={input.season} onChange={handleChange}>

                        <option name="Select" value="Select" >---------------</option>
                        <option value="Autumn" >Autumn</option>
                        <option value="Spring" >Spring</option>
                        <option value="Summer" >Summer</option>
                        <option value="Winter" >Winter</option>

                    </select> <br></br> {error.season && <span>{error.season}</span>}

                </div>

                <div>

                    <label>Country: </label>

                    <select name="country" value={``} onChange={handleChangeCountry}>

                        <option value="Select">---------------</option>

                        {countries.map((country) => (

                            <option key={country.id} value={country.id}>{country.name}</option>

                        ))}



                    </select>

                    <br></br>

                    {error.country && <span>{error.country}</span>}

                    {input.country.map((country) => (

                        <button onClick={(e) => setDeleteCountry(e.target.value)} key={country} value={country}>{country} </button>

                    ))}

                </div>

                <div>

                    <input className="createActivity" type="submit" disabled={disabled} value="Create Activity" />

                </div>

            </form>

        </div>

    )

}