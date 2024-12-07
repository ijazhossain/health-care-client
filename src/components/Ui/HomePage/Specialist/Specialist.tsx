import { Box, Container, Typography } from "@mui/material";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const specialties = await res.json();
  console.log(specialties);
  return (
    <Container>
      <Box>
        <Typography variant="h4" component="h1" fontWeight={600}>
          Explore Treatments Across Specialties
        </Typography>
        <Typography
          variant="h4"
          component="p"
          fontWeight={300}
          fontSize={18}
          marginTop={2}
        >
          Find experienced doctors across all specialties
        </Typography>
      </Box>
    </Container>
  );
};

export default Specialist;
