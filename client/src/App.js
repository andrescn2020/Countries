import React from "react"
import { Route, Switch } from "react-router-dom";
import './App.css';
import Countries from "./components/Countries/Countries";
import CountryDetailById from "./components/CountryDetailById/CountryDetailById";
import FilterAfrica from "./components/Filters/FilterAfrica";
import FilterAmerica from "./components/Filters/FilterAmerica";
import FilterAntartida from "./components/Filters/FilterAntartida";
import FilterAsia from "./components/Filters/FilterAsia";
import FilterAtoZ from "./components/Filters/FilterAtoZ";
import FilterHighPop from "./components/Filters/FilterHighPop";
import FilterLowPop from "./components/Filters/FilterLowPop";
import FilterOceania from "./components/Filters/FilterOceania";
import FilterZtoA from "./components/Filters/FilterZtoA";
import Activity from "./components/Form/Activity";
import Home from "./components/Home/Home";

function App() {

  return (

    <div>

      <Switch>

        <Route path="/" exact component={Home} />
        <Route path="/api/countries/" exact component={Countries} />
        <Route path="/api/countries/ZtoA" exact component={FilterZtoA} />
        <Route path="/api/countries/AtoZ" exact component={FilterAtoZ} />
        <Route path="/api/countries/FilterAfrica" exact component={FilterAfrica} />
        <Route path="/api/countries/FilterAmerica" exact component={FilterAmerica} />
        <Route path="/api/countries/FilterAntartida" exact component={FilterAntartida} />
        <Route path="/api/countries/FilterAsia" exact component={FilterAsia} />
        <Route path="/api/countries/FilterOceania" exact component={FilterOceania} />  
        <Route path="/api/countries/FilterTurismActivity" exact component={FilterZtoA} />
        <Route path="/api/countries/FilterHighPop" exact component={FilterHighPop} />
        <Route path="/api/countries/FilterLowPop" exact component={FilterLowPop} />
        <Route path="/api/activity/" exact component={Activity} />
        <Route path="/api/countries/:id" exact component={CountryDetailById} />
        {/* <Route path="*" component={NotFound} /> */}

      </Switch>


    </div>

  )

}

export default App;

