import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const data = [
  { time: '2024-07-01', message: 10 },
  { time: '2024-07-02', message: 15 },
  { time: '2024-07-03', message: 7 },
  { time: '2024-07-04', message: 12 },
  { time: '2024-07-05', message: 13 },
  { time: '2024-07-06', message: 20 },
  // Thêm các dữ liệu khác
];

const LineChart = () => (
    <ResponsiveLine
      data={[{ id: 'messages', data: data.map(d => ({ x: d.time, y: d.message })) }]}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
      curve="linear"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 45,
        legend: 'Time',
        legendOffset: 36,
        legendPosition: 'middle'
      }}
      axisLeft={{
        orient: 'left',
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'Messages',
        legendOffset: -40,
        legendPosition: 'middle'
      }}
      enableGridX={false}
      enableGridY={true}
      enablePoints={true}
      animate={true}
      motionConfig="wobbly"
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
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: 'left-to-right',
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: 'circle',
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
    />
  );

export default LineChart;
