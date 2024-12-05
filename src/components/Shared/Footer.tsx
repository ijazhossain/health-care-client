import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedinIcon from "@/assets/landing_page/linkedin.png";
const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)">
      <Container>
        <Stack direction="row" justifyContent="center" gap={4} py={5}>
          <Typography color="#ffffff" component={Link} href="/consultation">
            Consultation
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            Health Plans
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            Medicine
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            Diagnostics
          </Typography>
          <Typography color="#ffffff" component={Link} href="/">
            NGOs
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" gap={4}>
          <Image src={facebookIcon} width={30} height={30} alt="facebookIcon" />
          <Image
            src={instagramIcon}
            width={30}
            height={30}
            alt="facebookIcon"
          />
          <Image src={twitterIcon} width={30} height={30} alt="facebookIcon" />
          <Image src={linkedinIcon} width={30} height={30} alt="facebookIcon" />
        </Stack>
        <div className="border-b-[1px] border-dashed pt-6"></div>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography color="white">
            &copy;2024 Ph HealthCare. All Rights Reserved.
          </Typography>
          <Typography
            variant="h4"
            component={Link}
            href="/"
            fontWeight={600}
            color="white"
          >
            P
            <Box component="span" color="primary.main">
              H
            </Box>{" "}
            Health Care
          </Typography>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
