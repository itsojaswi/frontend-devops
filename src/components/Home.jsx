import React from "react";
import { Box, Typography, Button} from "@mui/material";
import BackgroundImage from "../img/Background.jpg";
import Star from "../img/star.png";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "black",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "Oswald, sans-serif",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: { xs: "6rem", sm: "8rem", md: "10rem" },
          zIndex: 1,
          marginTop: { xs: "1rem", sm: "2rem", md: "3rem" },
        }}
      >
        Find your
        <br />
        strength
      </Typography>
      <Box
        sx={{
          height: { xs: "30vh", sm: "40vh", md: "50vh" },
          width: { xs: "80%", sm: "70%", md: "60%" },
          my: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center", 
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 15,
          gap: 4,
          p: { xs: 5, sm: 8, md: 10 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "4rem", sm: "5rem", md: "7rem" },
            fontFamily: '"Oswald", sans-serif',
            textTransform: "uppercase",
          }}
        >
          Inside and
          <br />
          out.
        </Typography>
      </Box>
      <img src={Star} alt="Before Image" style={{ maxWidth: "100px", marginBottom: "1rem" }} />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "3rem" },
          fontFamily: '"Oswald", sans-serif',
          gap: "0"
        }}
      >
        Fitness should be 
        <br />accessible to everyone
      </Typography>
      <Typography sx={{fontSize:20}}>
        Keep track of your workouts!
      </Typography>
      <Button
      variant="outlined"
      color="primary"
      sx={{
        borderRadius: 20,
        padding: "10px 50px",
        fontSize: "1.2rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        boxShadow: "none", 
        color: "grey",
        border: "2px solid grey",
        marginTop: "20px",
        marginBottom: "20px",
        "&:hover": {
          backgroundColor: "transparent", // Set background to transparent on hover
          color: "inherit", // Inherit color on hover
          border: "2px solid ", // Set outline color on hover
        }
      }}
    >
      join now
    </Button>
    </Box>
  );
};

export default Home;
