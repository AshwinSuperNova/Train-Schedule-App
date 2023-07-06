import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
function HomePage() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const response = await axios.get('http://104.211.219.98/train/trains');
        if(!response.data)  throw Error("Request Failed");

        const currentTime = new Date();
        const filteredTrains = response.data.filter((train) => {

          const departureTime = new Date(
            currentTime.getFullYear(),
            currentTime.getMonth(),
            currentTime.getDate(),
            train.departureTime.Hours,
            train.departureTime.Minutes,
            train.departureTime.Seconds
          );
          const timeDifference = (departureTime - currentTime) / (1000 * 60); // Time difference in minutes
          return timeDifference > 30;
        });
        console.log(filteredTrains);
        setTrains(filteredTrains);
       
      } catch (error) {
        console.log(error);
        
      }
    };

    fetchTrains();
  }, []);

  return (
     <div>
      <Typography variant="h2" align="center" gutterBottom>
        Train Schedule
      </Typography>
      {trains.map((train) => (
        <Card key={train.trainNumber} variant="outlined">
          <CardContent>
            <Typography variant="h3">{train.trainName}</Typography>
            <Typography variant="body1">Train Number: {train.trainNumber}</Typography>
            <Typography variant="body1">
              Departure Time: {train.departureTime.Hours}:
              {train.departureTime.Minutes}:{train.departureTime.Seconds}
            </Typography>
            <Typography variant="body1">Seats Available:</Typography>
            <List>
              <ListItem>
                <ListItemText primary={`Sleeper: ${train.seatsAvailable.sleeper}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`AC: ${train.seatsAvailable.AC}`} />
              </ListItem>
            </List>
            <Typography variant="body1">Price:</Typography>
            <List>
              <ListItem>
                <ListItemText primary={`Sleeper: ${train.price.sleeper}`} />
              </ListItem>
              <ListItem>
                <ListItemText primary={`AC: ${train.price.AC}`} />
              </ListItem>
            </List>
            <Typography variant="body1">Delayed By: {train.delayedBy} minutes</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default HomePage;
