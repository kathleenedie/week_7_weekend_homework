import React from 'react';

const RegionDetails = ({region}) => {

    if(!region){
        return(null)
    }
  

    return(
        <div className="detail-box-dynamic">
        <h4>Region: {region.shortname}</h4>
        <p>Company: {region.dnoregion}</p>
        <p>Index: {region.intensity.index}</p>
        <p>Forecast: {region.intensity.forecast}</p>
        </div>
    )
}

export default RegionDetails;