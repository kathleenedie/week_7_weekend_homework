import React from 'react';
import { Link } from 'react-router-dom';
import pylon from '../pylon.png';
import chart from '../chart.png';


const CarbonRegions = ({regions, onSelectRegion}) => {

    const carbonRegionList = regions.map((region) => {
        return(
        <>
            <li className="region-list-item">

            <Link className="gen-icon" key={region.regionid} to={'/generation/$regionid'} 
            onClick={() => {onSelectRegion(region)}} ><img src={pylon} height="50" ></img></Link>

            <Link className="region-link" key={region.regionid} to={'/$regionid'} 
            onClick={() => {onSelectRegion(region)}}>{region.shortname}</Link>

            </li>
            
        </>
        )
    })


    return(
        <div className="regions">
            <ul className="region-list">
                {carbonRegionList}
            </ul>
        </div>
      
    )
};

export default CarbonRegions;