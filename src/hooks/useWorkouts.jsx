// useWorkouts.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    axios.get('api/workouts')
      .then(response => setWorkouts(response.data))
      .catch(error => console.log('Error fetching the data:', error));
  }, []);

  return { workouts };
};

export default useWorkouts;
