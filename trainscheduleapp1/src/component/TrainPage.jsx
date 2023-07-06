import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainPage() {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    const fetchTrain = async () => {
      try {
        const response = await axios.get('http://104.211.219.98/train/trains/2344');

        console.log(response.data);
        setTrain(response.data);
     
      } catch (error) {
        console.log(error);
        
      }
    };

    fetchTrain();
  }, []);

  if (!train) {
    return <p>Loading train details...</p>;
  }

  return (
    <div>
      <h2>{train.trainName}</h2>
      <p>Train Number: {train.trainNumber}</p>
      <p>
        Departure Time: {train.departureTime.Hours}:
        {train.departureTime.Minutes}:{train.departureTime.Seconds}
      </p>
      <p>Seats Available:</p>
      <ul>
        <li>Sleeper: {train.seatsAvailable.sleeper}</li>
        <li>AC: {train.seatsAvailable.AC}</li>
      </ul>
      <p>Price:</p>
      <ul>
        <li>Sleeper: {train.price.sleeper}</li>
        <li>AC: {train.price.AC}</li>
      </ul>
      <p>Delayed By: {train.delayedBy} minutes</p>
    </div>
  );
}

export default TrainPage;
