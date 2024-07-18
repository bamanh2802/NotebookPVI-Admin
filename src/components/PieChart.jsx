import React from 'react';
import { ResponsivePie } from '@nivo/pie';

const data = [
  { id: 'User 1', value: 150 },
  { id: 'User 2', value: 200 },
  { id: 'User 3', value: 75 },
  { id: 'User 4', value: 300 },
  { id: 'User 5', value: 120 },
];

const PieChart = () => (
  <ResponsivePie
  data={data}
  margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
  innerRadius={0.5}
  padAngle={0.7}
  cornerRadius={3}
  activeOuterRadiusOffset={8}
  borderWidth={1}
  borderColor={{
    from: 'color',
    modifiers: [['darker', 0.2]],
  }}
  arcLinkLabelsSkipAngle={10}
  arcLinkLabelsTextColor="#333333"
  arcLinkLabelsThickness={2}
  arcLinkLabelsColor={{ from: 'color' }}
  arcLabelsSkipAngle={10}
  arcLabelsTextColor={{
    from: 'color',
    modifiers: [['darker', 2]],
  }}
  legends={[
    {
      anchor: 'bottom',
      direction: 'row',
      justify: false,
      translateX: 0,
      translateY: 56,
      itemsSpacing: 0,
      itemWidth: 100,
      itemHeight: 18,
      itemTextColor: '#999',
      itemDirection: 'left-to-right',
      itemOpacity: 1,
      symbolSize: 18,
      symbolShape: 'circle',
      effects: [
        {
          on: 'hover',
          style: {
            itemTextColor: '#000',
          },
        },
      ],
    },
  ]}
/>
  );
  

export default PieChart;
