import { Box, Container, Typography } from "@mui/material";
import assets from "@/assets";
import Image from "next/image";
import chooseUsImg from "@/assets/choose-us.png";
import Grid from "@mui/material/Grid2";
const servicesData = [
  {
    imageSrc: assets.svgs.award,
    title: "Award Winning Service",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.care,
    title: "Best Quality Pregnancy Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.equipment,
    title: "Complete Medical Equipments",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
  {
    imageSrc: assets.svgs.call,
    title: "Dedicated Emergency Care",
    description:
      "Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui offici",
  },
];
const WhyUs = () => {
  return (
    <Container>
      <Box
        sx={{
          margin: "20px 0px",
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          textAlign="center"
          fontWeight={600}
          color="primary.main"
        >
          Why Us
        </Typography>
        <Typography
          textAlign="center"
          variant="h4"
          component="h1"
          fontWeight={600}
        >
          Why Choose Us
        </Typography>
      </Box>

      <Grid container>
        <Grid size={{ sm: 6 }}>
          <Box
            sx={{
              backgroundColor: "rgba(245, 245, 245,1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "15px 40px 15px 15px",
              borderRadius: "10px 10px 100px 10px",
              margin: "20px 0px",
            }}
          >
            <Box sx={{ backgroundColor: "white", padding: "10px" }}>
              <Image
                src={servicesData[0].imageSrc}
                width={50}
                alt="service icon"
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h3">
                {servicesData[0].title}
              </Typography>
              <Typography variant="body2" component="p" color="text.secondary">
                {servicesData[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(245, 245, 245,1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "15px 40px 15px 15px",
              borderRadius: "10px 100px 10px 10px",
              margin: "20px 0px",
            }}
          >
            <Box sx={{ backgroundColor: "white", padding: "10px" }}>
              <Image
                src={servicesData[1].imageSrc}
                width={50}
                alt="service icon"
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h3">
                {servicesData[1].title}
              </Typography>
              <Typography variant="body2" component="p" color="text.secondary">
                {servicesData[1].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(245, 245, 245,1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "15px 40px 15px 15px",
              borderRadius: "10px 10px 100px 10px",
              margin: "20px 0px",
            }}
          >
            <Box sx={{ backgroundColor: "white", padding: "10px" }}>
              <Image
                src={servicesData[2].imageSrc}
                width={50}
                alt="service icon"
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h3">
                {servicesData[2].title}
              </Typography>
              <Typography variant="body2" component="p" color="text.secondary">
                {servicesData[2].description}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "rgba(245, 245, 245,1)",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              padding: "15px 40px 15px 15px",
              borderRadius: "10px 100px 10px 10px",
              margin: "20px 0px",
            }}
          >
            <Box sx={{ backgroundColor: "white", padding: "10px" }}>
              <Image
                src={servicesData[3].imageSrc}
                width={50}
                alt="service icon"
              />
            </Box>
            <Box>
              <Typography variant="h5" component="h3">
                {servicesData[3].title}
              </Typography>
              <Typography variant="body2" component="p" color="text.secondary">
                {servicesData[3].description}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          size={{ md: 6 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={chooseUsImg} width={"400"} alt="img" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhyUs;
