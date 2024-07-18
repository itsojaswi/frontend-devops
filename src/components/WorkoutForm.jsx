import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import axios from 'axios';

const ip = "13.213.57.24"
const WorkoutForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    reps: '',
    load: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`https://ojaswi.learn.cloudlaya.com/api/workouts`, formData);
      console.log(response.data);
      setFormData({
        title: '',
        reps: '',
        load: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: "400px",
          marginLeft: 10
        }}
      >
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="reps"
            label="Reps"
            name="reps"
            type="number"
            value={formData.reps}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="load"
            label="Load"
            name="load"
            type="number"
            value={formData.load}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              height: "40px",
              marginTop: 2,
              background: "brown",
              ':hover': {
                backgroundColor: 'brown',
              }
            }}
          
          >
            Create Workout
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default WorkoutForm;
