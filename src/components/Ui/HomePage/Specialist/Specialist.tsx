import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const Specialist = async () => {
  const res = await fetch("http://localhost:5000/api/v1/specialties", {
    next: {
      revalidate: 30,
    },
  });
  const { data: specialties } = await res.json();
  //console.log(specialties);
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
      <Stack direction="row" gap={4} mt={5}>
        {specialties.slice(0, 6).map((specialty: any) => (
          <Box
            key={specialty.id}
            sx={{
              flex: 1,
              width: "150px",
              backgroundColor: "rgba(245, 245, 245,1)",
              border: "1px solid rgba(250, 250, 250, 1)",
              borderRadius: "10px",
              textAlign: "center",
              padding: "40px 10px",
              "& img": {
                width: "50px",
                height: "50px",
                margin: "0 auto",
              },
              "&:hover": {
                border: "1px solid rgba(36, 153, 239, 1)",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "all 0.5s",
              },
            }}
          >
            <Image
              src={specialty.icon}
              width={100}
              height={100}
              alt="specialty card"
            />
            <Box>
              <Typography component="p" fontWeight={600} fontSize={18} mt={2}>
                {specialty.title}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Specialist;
