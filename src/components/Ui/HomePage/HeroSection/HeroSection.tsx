import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
const HeroSection = () => {
  return (
    <Container
      sx={{
        display: "flex",
        my: 16,
        direction: "row",
      }}
    >
      <Box sx={{ flex: 1, position: "relative" }}>
        <Box
          sx={{
            flex: 1,
            position: "absolute",
            width: "700px",
            top: "-90px",
            left: "-120px",
          }}
        >
          <Image src={assets.svgs.grid} alt="grid" />
        </Box>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Healthier Hearts
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Comes From
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Preventive Care
        </Typography>
        <Typography
          variant="h6"
          component="p"
          fontWeight={400}
          sx={{
            width: "50%",
            marginY: "20px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia odit
          illum in veritatis vitae, repellat quibusdam? Cum temporibus
          laboriosam recusandae odit odio labore blanditiis perspiciatis
          doloremque quasi nemo.
        </Typography>
        <Button>Make Appointment</Button>
        <Button variant="outlined" sx={{ marginLeft: "10px" }}>
          Contact Us
        </Button>
      </Box>
      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: "center",
          position: "relative",
          mt: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "250px",
            top: "-30px",
          }}
        >
          <Image src={assets.svgs.arrow} alt="arrow" />
        </Box>
        <Stack direction="row" gap={2} position="relative">
          <Box>
            <Image
              width={240}
              height={380}
              src={assets.images.doctor1}
              alt="doctor1"
            />
          </Box>
          <Box>
            <Image
              width={240}
              height={350}
              src={assets.images.doctor2}
              alt="doctor2"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              top: "220px",
              left: "150px",
            }}
          >
            <Image
              width={240}
              height={350}
              src={assets.images.doctor3}
              alt="doctor3"
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              bottom: "-20px",
              right: 0,
              zIndex: "-1",
            }}
          >
            <Image
              src={assets.images.stethoscope}
              width={180}
              height={180}
              alt="doctor3"
            />
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default HeroSection;
