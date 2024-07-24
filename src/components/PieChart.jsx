import React, { useEffect, useState } from 'react';
import { Box } from "@mui/material";
import { ResponsivePie } from '@nivo/pie';
import CircularProgress from '@mui/material/CircularProgress';

const PieChart = ({ data, totalData }) => {

  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => { 
    if(data.length !== 0) {
      setIsLoadingData(false)
    } else {
      setIsLoadingData(true)
    }
  },[data])

  const sortedData = data.sort((a, b) => b.total_resource_used - a.total_resource_used);

  const topUsers = sortedData.slice(0, 3);

  const topUsersForChart = topUsers.map(item => ({
    id: item.user_name,
    value: item.total_resource_used
  }))

  const topUsersTotal = topUsers.reduce((total, item) => total + item.total_resource_used, 0);

  const otherUsersTotal = sortedData.slice(3).reduce((total, item) => total + item.total_resource_used, 0);

  const remainingTotal = totalData - topUsersTotal - otherUsersTotal;

  const chartData = [
    ...topUsersForChart,
    { id: 'Other Users', value: otherUsersTotal },
    { id: 'Remaining', value: remainingTotal },
  ];

  return (
    <Box height='250px'>
      {isLoadingData ? (
        <Box height='250px' display='flex' justifyContent='center' alignItems='center'>
          <CircularProgress color="success"/>
        </Box>
      ) : (
        <ResponsivePie
          data={chartData}
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
      )}
    </Box>
    
  );
};

export default PieChart;