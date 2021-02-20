import React from 'react';
import { Pie } from 'react-chartjs-2'

const ChartTest = () => {

    return(
        <div>
            <Pie
                data={{
                    labels: ['Red', 'Blue', 'Yellow', 'Green'],
                    data: [12, 19, 3, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 232, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ]
                }}
                height={200}
                width={200}
                options={{ maintainAspectRatio:true}}
            />
        </div>
    )
};
export default ChartTest;