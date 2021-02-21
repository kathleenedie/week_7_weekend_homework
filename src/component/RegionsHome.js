import React from 'react';
import CarbonRegions from './CarbonRegions';
import RegionDetails from './RegionDetails';

const RegionsHome = ({regions, onSelectRegion, selectedRegion}) => {

    return(
        <div>
            <CarbonRegions />
            <RegionDetails />
        </div>
    )

}

export default RegionsHome;