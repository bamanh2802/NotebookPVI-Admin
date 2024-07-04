import React from 'react';
import { Box, useTheme } from '@mui/material';
import { ResponsiveLine } from '@nivo/line';
import Header from '../../components/Header';
import { tokens } from '../../theme';


const data = [
  {
    id: 'Questions',
    data: [
      { x: '2023-06-01', y: 42 },
      { x: '2023-06-02', y: 51 },
      { x: '2023-06-03', y: 38 },
      { x: '2023-06-04', y: 47 },
      { x: '2023-06-05', y: 55 },
      { x: '2023-06-06', y: 49 },
      { x: '2023-06-07', y: 43 },
      { x: '2023-07-01', y: 62 },
      { x: '2023-07-02', y: 58 },
      { x: '2023-07-03', y: 54 },
      { x: '2023-08-01', y: 71 },
      { x: '2023-08-02', y: 65 },
      { x: '2023-08-03', y: 68 },
    ],
  },
];

const Chart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)



    return (
        <Box m="20px" height="500px">
        <Header title="Report Data" subtitle="Chart" />
        <Box
            width="50%"
            height="50%"
        >
            <ResponsiveLine 
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: colors.grey[100]
                        }
                    },
                    legend: {
                        text: {
                            fill: colors.grey[100]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: colors.grey[100],
                            strokeWidth: 1
                        },
                        text: {
                            fill: colors.grey[100]
                        }
                    }
                },
                legend: {
                    text: {
                        fill: colors.grey[100]
                    }
                }
            }}
            data={data}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
                type: 'time',
                format: '%Y-%m-%d',
                useUTC: false,
                precision: 'day',
            }}
            xFormat="time:%Y-%m-%d"
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: false,
                reverse: false,
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                format: '%b %d',
                tickValues: 'every 2 days',
                legend: 'Date',
                legendOffset: 36,
                legendPosition: 'middle',
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Questions',
                legendOffset: -40,
                legendPosition: 'middle',
            }}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabel="y"
            pointLabelYOffset={-12}
            useMesh={true}
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
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                    on: 'hover',
                    style: {
                        itemBackground: 'rgba(0, 0, 0, .03)',
                        itemOpacity: 1,
                    },
                    },
                ],
                },
            ]}
            />
        </Box>
      </Box>
    )


}

export default Chart;