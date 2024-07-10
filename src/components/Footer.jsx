import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: "#696967",
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" sx={{ display: 'flex', justifyContent: 'center', mt: 2, color: "white" }}>
          &copy; {new Date().getFullYear()} All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, color: "white"}}>
          <IconButton sx={{ color: "white"}} aria-label="facebook" href="https://facebook.com">
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ color: "white"}} aria-label="twitter" href="https://twitter.com">
            <TwitterIcon />
          </IconButton>
          <IconButton sx={{ color: "white"}} aria-label="instagram" href="https://instagram.com">
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
