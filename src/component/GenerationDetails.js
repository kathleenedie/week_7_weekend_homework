import React from 'react';

const GenerationDetails = ({region}) => {

    if(!region){
        return(null)
    }

    const generationdetail = region.generationmix.map((mix, index) => {
        return(
        <>
        <li key={index}>{mix.fuel}: {mix.perc}</li>
        </>
        )
    })

    

    return(
        <div>
        <p>This is the generation list:</p>
        <ul>{generationdetail}</ul>
        </div>
    )
}

export default GenerationDetails;