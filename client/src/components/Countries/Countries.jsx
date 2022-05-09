import { useDispatch, useSelector } from "react-redux";
import Country from "../Country/Country";
import { getAllCountries, getAllActivities } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Countries.css"

export default function Countries(props) {

    const { history: { push } } = props;

    const { countries, activities } = useSelector((state) => state);

    const [currentPage, setCurrentPage] = useState(1);

    const [countriesPerPage] = useState(10);

    const [searchActivity, setSearchActivity] = useState('');

    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch();

    // USEEFECTS ///////////////////////////////////////////////////////

    useEffect(() => {

        dispatch(getAllActivities())

    }, [dispatch])

    useEffect(() => {

        dispatch(getAllCountries())

    }, [dispatch])

    function handleNavigate(id) {

        push(`/api/countries/${id}`);

    }

    // VARIABLES //////////////////////////////////////////////////////

    let currentCountry = [];

    let indexOfFirstCountry = 0;

    let indexOfLastCountry = 0;

    let filterActivity = [];

    let size = 10;

    let totalPages = Math.ceil(countries.length / size);

    let buttons = [];

    for (let i = 1; i <= totalPages + 1; i++) {

        buttons.push(i);

    }

    // HANDLECHANGES //////////////////////////////////////////////////////

    function handleChangeActivity(e) {

        setSearchActivity((prevState) => {

            const newState = {
                ...prevState,
                [e.target.name]: e.target.value
            };

            return newState;

        });

        setCurrentPage(1);

    }

    // FUNCIONES FILTRO //////////////////////////////////////////////////////

    function getFilteredCountries(searchTerm, countries) {

        let transformToLowerCase = searchTerm.toLowerCase();

        let filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(transformToLowerCase));

        let newSize = Math.ceil(filteredCountries.length / 10);

        buttons = [];

        for (let i = 1; i <= newSize; i++) {

            if (newSize === 1) {

                buttons.push(i);

            } else {

                buttons.push(i);

            }

        }

        if (currentPage === 1) {

            return filteredCountries.slice(0, 9);

        } else {

            indexOfLastCountry = currentPage * countriesPerPage;

            indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

            return filteredCountries.slice(indexOfFirstCountry - 1, indexOfLastCountry - 1);

        }

    }

    function getFilteredActivities(searchActivity) {

        filterActivity = activities.filter((activity) => activity.id === searchActivity.searchActivity);

        currentCountry = filterActivity[0].countries;

        let newSize = Math.ceil(currentCountry.length / 10);

        buttons = [];

        for (let i = 1; i <= newSize; i++) {

            if (newSize === 1) {

                buttons.push(i);

            } else {

                buttons.push(i);

            }

        }

        if (currentPage === 1) {

            return currentCountry.slice(0, 9);

        } else {

            indexOfLastCountry = currentPage * countriesPerPage;

            indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

            return currentCountry.slice(indexOfFirstCountry - 1, indexOfLastCountry - 1);

        }

    }

    // CONDICIONES //////////////////////////////////////////////////////

    if (currentPage === 1) {

        currentCountry = countries.slice(0, 9);

    } else {

        indexOfLastCountry = currentPage * countriesPerPage;

        indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

        currentCountry = countries.slice(indexOfFirstCountry - 1, indexOfLastCountry - 1);

    }

    if (searchTerm) {

        currentCountry = getFilteredCountries(searchTerm, countries);

    } else if (currentPage === 1) {

        currentCountry = currentCountry.slice(0, 9);

    } else {

        indexOfLastCountry = currentPage * countriesPerPage;

        indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

        currentCountry = countries.slice(indexOfFirstCountry - 1, indexOfLastCountry - 1);

    }

    if (searchActivity) {

        currentCountry = getFilteredActivities(searchActivity)

    } else if (currentPage === 1) {

        currentCountry = currentCountry.slice(0, 9);

    } else {

        indexOfLastCountry = currentPage * countriesPerPage;

        indexOfFirstCountry = indexOfLastCountry - countriesPerPage;

        currentCountry = countries.slice(indexOfFirstCountry - 1, indexOfLastCountry - 1);

    }

    // PAGINADO //////////////////////////////////////////////////////

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // RENDERIZADO //////////////////////////////////////////////////////

    return (

        <main>

            <div className="filterCointainers">

            <Link to="/api/countries/">
                <button>Home</button>
            </Link>

            <Link to="/api/countries/AtoZ">
                <button>Sort from A to Z</button>
            </Link>

            <Link to="/api/countries/ZtoA">
                <button>Sort from Z to A</button>
            </Link>

            <Link to="/api/countries/FilterAfrica">
                <button>Africa Countries</button>
            </Link>

            <Link to="/api/countries/FilterAmerica">
                <button>America Countries</button>
            </Link>

            <Link to="/api/countries/FilterAntartida">
                <button>Antarctic Countries</button>
            </Link>

            <Link to="/api/countries/FilterAsia">
                <button>Asia Countries</button>
            </Link>

            <Link to="/api/countries/FilterOceania">
                <button>Oceania Countries</button>
            </Link>

            <Link to="/api/countries/FilterHighPop">
                <button>Highest population</button>
            </Link>

            <Link to="/api/countries/FilterLowPop">
                <button>Lowest population</button>
            </Link>

            <Link to="/api/activity/">
                <button>Create Tourist Activity</button>
            </Link>

            </div>

            <div className="buttonsContainer">

                {buttons.map((number) => (
                    <button className="buttons" onClick={() => paginate(number)} key={number}>{number}</button>
                ))}

            </div>

            <select className="activityBar" name="searchActivity" value={searchActivity} onChange={handleChangeActivity}>

                <option>Search by Tourist Activity</option>

                {activities.map((activity) => (

                    <option key={activity.id} value={activity.id}>{activity.name}</option>

                ))}

            </select>

            <input className="searchBar" type="text" placeholder="Search..."
                onChange={(e) => {

                    setSearchTerm(e.target.value)
                    setCurrentPage(e.target = 1)

                }}

            />

            <div className="countriesContainer">

                {currentCountry.map((country) => (

                    <Country
                        key={country.id}
                        country={country}
                        navigate={handleNavigate}
                    />

                ))}

            </div>



        </main>

    )

}