import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Typography, IconButton, Grid, Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ip = "3.0.55.208"

const WorkoutList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editingWorkout, setEditingWorkout] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get(`http://${ip}:4000/api/workouts`);
        setWorkouts(response.data);
      } catch (error) {
        console.error('Error fetching workouts:', error);
      }
    };

    fetchWorkouts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://${ip}:4000/api/workouts/${id}`);
      setWorkouts(workouts.filter(workout => workout._id !== id));
    } catch (error) {
      console.error('Error deleting workout:', error);
    }
  };

  const handleEdit = (workout) => {
    setEditingWorkout(workout);
    setOpen(true);
  };

  const handleUpdate = async () => {
    console.log('Updating workout with ID:', editingWorkout._id);

    try {
      const name = await axios.patch(`http://${ip}:4000/api/workouts/${editingWorkout._id}`, editingWorkout);
      console.log(name);
      
    }  catch (error) {
      console.log(error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingWorkout({
      ...editingWorkout,
      [name]: value,
    });
  };

  const handleClose = () => {
    setOpen(false);
    setEditingWorkout(null);
  };

  return (
    <>
      <Grid container direction="column" spacing={2} sx={{ marginTop: 5 }}>
        {workouts.map((workout, index) => (
          <Grid item key={index}>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: 'brown', marginBottom: 1.5 }}>
                {workout.title}
              </Typography>
              <Typography sx={{ fontSize: 16 }}><strong>Reps:</strong> {workout.reps}</Typography>
              <Typography sx={{ fontSize: 16 }}><strong>Load(kg):</strong> {workout.load}</Typography>
              <Typography sx={{ fontSize: 12 }}>{workout.createdAt}</Typography>
              <Grid container justifyContent="flex-end">
                <IconButton aria-label="edit" onClick={() => handleEdit(workout)}>
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={() => handleDelete(workout._id)}>
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Workout</DialogTitle>
        <DialogContent>
          {editingWorkout && (
            <form onSubmit={handleUpdate}>
              <TextField
                label="Title"
                name="title"
                value={editingWorkout.title}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Reps"
                name="reps"
                value={editingWorkout.reps}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <TextField
                label="Load (kg)"
                name="load"
                value={editingWorkout.load}
                onChange={handleChange}
                fullWidth
                margin="normal"
              />
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    ':hover': {
                      backgroundColor: 'primary.main',
                    },
                  }}
                >
                  Update Workout
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClose}
                  sx={{
                    marginLeft: 2,
                  }}
                >
                  Cancel
                </Button>
              </DialogActions>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorkoutList;
