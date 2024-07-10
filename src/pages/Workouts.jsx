import { Container, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import WorkoutForm from '../components/WorkoutForm';
import WorkoutList from '../components/WorkoutList';
import useWorkouts from '../hooks/useWorkouts'; 

const Workouts = () => {
  const { workouts } = useWorkouts();

  return (
    <div>
      <NavBar />
      <Container maxWidth="lg">
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <WorkoutForm />
          </Grid>
          <Grid item xs={12}>
            <WorkoutList workouts={workouts} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Workouts;
