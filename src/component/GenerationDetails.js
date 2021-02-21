import React from 'react';
import Pie from 'react-chartjs-2'


const GenerationDetails = ({region, chartData, setChartData}) => {

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

    const ChartTest = () => {
        setChartData({
            width: 300,
            height: 300,
            type: 'pie',
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
            <p>This is a table</p>
            <Pie chartData={chartData}/>
        </div>
    )
}

export default GenerationDetails;