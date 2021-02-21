import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CarbonRegions from '../component/CarbonRegions';
import RegionDetails from '../component/RegionDetails';
import GenerationRegions from '../component/GenerationRegions';
import GenerationDetails from '../component/GenerationDetails';
import NavBar from '../component/NavBar';
import ErrorPage from '../component/ErrorPage';
import HomePage from '../component/HomePage';
import {Pie} from 'react-chartjs-2';


const CarbonContainer = () => {

    const [regions, setRegions] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [chartData, setChartData] = useState([]);

    const getRegions = () => {
        console.log("getting the places data...");
        fetch('https://api.carbonintensity.org.uk/regional')
        .then(res => res.json())
        .then(data => setRegions(data.data[0].regions))
    }

    useEffect (() => {
        getRegions();
    },[]);

    useEffect (() => {
        chart()
    }, [])

    const handleSelectedRegion = (region) => {
        setSelectedRegion(region)
    }

    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'level of thickness',
                    data: [32, 45, 12, 76, 69],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(255, 25, 104, 0.6'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }


    return (
        <Router>
        <>
            <NavBar />
            <CarbonRegions regions={regions} onSelectRegion={handleSelectedRegion}/>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/$regionid" render={routerProps => 
                    <RegionDetails {...routerProps} region={selectedRegion}/>}/>
                <Route path="/generation/$regionid" render={routerProps => 
                    <GenerationDetails {...routerProps} region={selectedRegion} regions={regions} chartData={chartData} setChartData={setChartData}/> }/>
                <Route path="/chart" render={() => <Pie chartData={chartData} /> }/>
                <Route component={ErrorPage} />
            </Switch>
        </>
      </Router>
      ); 
}

export default CarbonContainer;
