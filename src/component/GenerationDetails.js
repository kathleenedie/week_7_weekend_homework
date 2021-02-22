import React from 'react';
import Pie, { defaults } from 'react-chartjs-2'
import { withRouter } from 'react-router-dom';

defaults.global.legend.position = 'left';

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

            <p>How power is generated in: {region.shortname}</p>
            <Pie 
                data={{
                    labels: fuel,
                        datasets: [
                        {
                            label: 'percentage generated',
                            data: perc,
                            backgroundColor: [
                                'rgb(247, 127, 0)',
                                'rgb(107, 44, 57)',
                                'rgb(161, 42, 49',
                                'rgb(214, 40, 40)',
                                'rgb(231, 84, 20)',
                                'rgb(0, 48, 73)',
                                'rgb(252, 191, 73)',
                                'rgb(243, 209, 128)',
                                'rgb(234, 226, 183)'
                                ]
                        }
                    ]
                }}
                options={{
                    maintainAspectRatio: false,
                    legend: {
                        labels:{
                            fontSize: 15,
                            fontColor: 'white',
                        },
                    }
                }}
                
                />
            
        </div>
    )
}

export default GenerationDetails;