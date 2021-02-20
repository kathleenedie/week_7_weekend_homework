import React from 'react';
import { Link } from 'react-router-dom';


const CarbonRegions = ({regions, onSelectRegion}) => {

    const carbonRegionList = regions.map((region) => {
        return(
        <li>
        <Link key={region.regionid} to={'/regions/$regionid'} onClick={() => {onSelectRegion(region)}}>{region.shortname}</Link>
        </li>
        )
    })


    return(
        <div>
            <ul>
                {carbonRegionList}
            </ul>
        </div>
      
    )
};

export default CarbonRegions;