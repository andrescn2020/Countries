import { useDispatch, useSelector } from "react-redux";
import Country from "../Country/Country";
import { filterAmerica, getAllActivities } from "../../redux/actions";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function FilterAmerica(props) {

    const { history: { push } } = props;

    const { countries, activities } = useSelector((state) => state);

    const [currentPage, setCurrentPage] = useState(1);

    const [countriesPerPage] = useState(10);

    const [searchActivity, setSearchActivity] = useState('');

    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getAllActivities())

    }, [dispatch])

    useEffect(() => {

        dispatch(filterAmerica())

    }, [dispatch])

    function handleNavigate(id) {

        push(`/api/countries/${id}`);

    }

    let buttons = [];

    for (let i = 1; i <= 6; i++) {

        buttons.push(i);

    }

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

    const getFilteredCountries = (searchTerm, countries) => {

        if (!searchTerm) {

            return countries;

        }

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

    const getFilteredActivities = (searchActivity, countries) => {

        if (!searchActivity) {

            return countries;

        }

        filterActivity = activities.filter((activity) => activity.id === searchActivity.searchActivity)

        filterActivity = filterActivity[0].countries.filter((e) => e.continent === 'Americas')

        currentCountry = filterActivity;

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

    let currentCountry = [];

    let indexOfFirstCountry = 0;

    let indexOfLastCountry = 0;

    let filterActivity = [];

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

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (

        <main>

            <input type="text" placeholder="Search..." onChange={(e) => {

                setSearchTerm(e.target.value)
                setCurrentPage(e.target = 1)

            }} />

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
                <button>Sort by highest population</button>
            </Link>

            <Link to="/api/countries/FilterLowPop">
                <button>Sort by lowest population</button>
            </Link>

            <Link to="/api/activity/">
                <button>Create Tourist Activity</button>
            </Link>

            <select name="searchActivity" value={searchActivity} onChange={handleChangeActivity}>

                <option>Search by Tourist Activity</option>

                {activities.map((activity) => (

                    <option key={activity.id} value={activity.id}>{activity.name}</option>

                ))}

            </select>

            <div>

                {buttons.map((number) => (
                    <button onClick={() => paginate(number)} key={number}>{number}</button>
                ))}

            </div>

            <div>{currentCountry.length === 0 
            ? "There are no countries in America with this activity" 
            : currentCountry.map((country) => (

                <Country
                    key={country.id}
                    country={country}
                    navigate={handleNavigate}
                />

            ))}</div>

        </main>

    )

}