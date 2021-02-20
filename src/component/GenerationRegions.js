import React from 'react';

const GenerationRegions = ({regions, onSelectRegion}) => {

    const dropdownRegion = regions.map((region) => {
        return(
            <option value={region.regionid} key={region.regionid}>{region.shortname}</option>
        )
    })

    const handleChange = (event) => {
        const foundRegion = regions.find((region) => {
            return region.regionid === event.target.value
        })
        onSelectRegion(foundRegion)
    }


    return(
        <>
        <select onChange={handleChange} defaultValue="default">
        <option disabled value="default">Choose a region...</option>
        { dropdownRegion }
        </select>
        </>
    )
}

export default GenerationRegions;