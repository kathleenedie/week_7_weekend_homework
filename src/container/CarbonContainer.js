import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CarbonRegions from '../component/CarbonRegions';
import RegionDetails from '../component/RegionDetails';
import GenerationRegions from '../component/GenerationRegions';
import GenerationDetails from '../component/GenerationDetails';
import NavBar from '../component/NavBar';
import ErrorPage from '../component/ErrorPage';
import HomePage from '../component/HomePage';


const CarbonContainer = ({match}) => {

    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);

    const getRegions = () => {
        console.log("getting the places data...");
        fetch('https://api.carbonintensity.org.uk/regional')
        .then(res => res.json())
        .then(data => setRegions(data.data[0].regions))
    }

    useEffect (() => {
        getRegions();
    },[]);

    const handleSelectedRegion = (region) => {
        setSelectedRegion(region)
    }

    return (
        <Router>
        <>
            <NavBar />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/regions" exact render={() => <CarbonRegions regions={regions} onSelectRegion={handleSelectedRegion}/>}/>
                <Route path="/regions/$regionid" render={routerProps => <RegionDetails {...routerProps} region={selectedRegion}/>}/>
                <Route path="/generation" exact render={() => <GenerationRegions regions={regions} onSelectRegion={handleSelectedRegion}/> }/>
                <Route component={ErrorPage} />
            </Switch>
        </>
      </Router>
      ); 
}

export default CarbonContainer;
