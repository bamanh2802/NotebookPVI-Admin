import React, { useEffect, useState } from "react";
import { Typography, Box, Button, IconButton, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { tokens } from "../theme";
import '../scenes/dashboard/dashboard.css'
import CircularProgress from '@mui/material/CircularProgress';


const CustomTooltip = ({ point }) => (
  <div className="custom-tooltip">
    <strong>{point.data.xFormatted}</strong>
    <br />
    Tokens: {point.data.yFormatted}
  </div>
);


const LineChart = ({data}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette)
  const [days, setDays] = useState(30);

  const legends = data[0].id + '';
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(()=> {
    if(data[0].data[0]) {
      setIsLoadingData(false)
    } else {
      setIsLoadingData(true)
    }
  }, [data])

  const filteredData = [
    {
      id: data[0].id,
      data: data[0].data.slice(-days),
    },
  ];

  return (
    <Box>
      {
        isLoadingData ? (
          <Box height='250px' display='flex' justifyContent='center' alignItems='center'>
            <CircularProgress color="success"/>
          </Box>
      ) : (
        <Box>
      <Box position='absolute' zIndex='1000' top='-24px' right='24px'>
        <Button sx={{ 
                    backgroundColor: colors.primary[500], 
                    color: colors.grey[900], 
                    fontSize:"14px",
                    padding: "7px 20px",
                    ml:'12px',
                    borderRadius:'0px'
                    
                }} onClick={() => setDays(7)}>7 Days</Button >
        <Button sx={{ 
                    backgroundColor: colors.primary[500], 
                    color: colors.grey[900], 
                    fontSize:"14px",
                    padding: "7px 20px",
                    ml:'12px',
                    borderRadius:'0px'
                    
                }} onClick={() => setDays(30)}>30 Days</Button >
        <Button sx={{ 
                    backgroundColor: colors.primary[500], 
                    color: colors.grey[900], 
                    fontSize:"14px",
                    padding: "7px 20px",
                    ml:'12px',
                    borderRadius:'0px'
                    
                }} onClick={() => setDays(90)}>90 Days</Button >
      </Box>
      <Box style={{ height: "250px" }}>
      <ResponsiveLine
          data={filteredData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Date",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: legends,
            legendOffset: -40,
            legendPosition: "middle",
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
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
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          gridXValues={[]}
          gridYValues={[]}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          tooltip={CustomTooltip}
        />
      </Box>
        </Box>
      )
      }
    </Box>
  );
};

export default LineChart;