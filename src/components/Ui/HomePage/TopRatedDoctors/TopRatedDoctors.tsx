import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
const TopRatedDoctors = async () => {
  const res = await fetch("http://localhost:5000/api/v1/doctor?page=1&limit=3");
  const { data: doctors } = await res.json();
  console.log(doctors);
  return (
    <Box
      sx={{
        my: 10,
        py: 30,
        backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Our Top Rated Doctors
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography>
      </Box>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{
            mt: 4,
          }}
        >
          {doctors.map((doctor: any) => (
            <Grid key={doctor.id} size={{ md: 4 }}>
              <Card>
                <CardMedia
                  sx={{ width: "100%", height: 300, objectFit: "cover" }}
                  image={doctor.profilePhoto}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {doctor.name}
                  </Typography>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {doctor.qualification}, {doctor.designation}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary", marginTop: 1 }}
                  >
                    <LocationOnIcon />
                    {doctor.address}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button size="small">Book Now</Button>
                  <Button size="small" variant="outlined">
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginTop: "20px",
            }}
            component={Link}
            href="/doctors"
          >
            View ALL
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default TopRatedDoctors;
