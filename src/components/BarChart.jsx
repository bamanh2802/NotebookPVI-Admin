import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  { time: '2024-07-01', message: 1000 },
  { time: '2024-07-02', message: 1500 },
  { time: '2024-07-03', message: 700 },
  { time: '2024-07-04', message: 1200 },
  { time: '2024-07-05', message: 1300 },
  { time: '2024-07-06', message: 2000 },
  { time: '2024-07-08', message: 1200 },
  { time: '2024-07-09', message: 1300 },
  { time: '2024-07-10', message: 2000 },
  { time: '2024-07-11', message: 1200 },
  { time: '2024-07-12', message: 1300 },
  { time: '2024-07-13', message: 2000 },

  // Thêm các dữ liệu khác
];

const BarChart = () => {


    return (
        <ResponsiveBar
        data={data}
        keys={['message']}
        indexBy="time"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 45,
          legend: 'Time',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Messages',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: '#ccc'
              }
            },
            legend: {
              text: {
                fontSize: 14,
                fill: '#ccc'
              }
            }
          }
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        
      />
    )
}

export default BarChart;
