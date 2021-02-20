import React from 'react';
import Pie from 'chart.js'


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

    const fuel = region.generationmix.map((mix, index) => {
        return(mix.fuel)
        
    })
    console.log(fuel)

    const perc = region.generationmix.map((mix, index) => {
        return(mix.perc)
    })
    console.log(perc)


    return(
        <div className="detail-box-dynamic">
        <p>This is the generation list:</p>
        <ul>{generationdetail}</ul>
        </div>
    )
}

export default GenerationDetails;