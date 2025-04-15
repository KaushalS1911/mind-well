import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
  useTheme,
  styled,
  Button,
} from "@mui/material";
import {
  BusinessCenter,
  Groups2,
  Handshake,
  Psychology,
  TrendingUp,
  EmojiObjects,
  ArrowForward,
} from "@mui/icons-material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: "100%",
  backgroundColor: "#F9FAFB",
  borderRadius: "16px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    background: "#FF7F1E",
  },
}));

const IconWrapper = styled(Box)(() => ({
  width: "64px",
  height: "64px",
  borderRadius: "50%",
  backgroundColor: "#E6EAF3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "24px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#012765",
    transform: "scale(1.1)",
    "& svg": {
      color: "#ffffff !important",
    },
  },
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: "center",
  borderRadius: "12px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
}));

const VectorImage = styled("img")({
  width: "100%",
  maxWidth: "500px",
  height: "auto",
  margin: "0 auto",
  display: "block",
});

function AboutHeader() {
  const theme = useTheme();

  const stats = [
    { number: "100+", label: "Programs Delivered" },
    { number: "50+", label: "Expert Trainers" },
    { number: "1000+", label: "Lives Impacted" },
  ];

  return (
    <Box>
      <Box
        sx={{
          padding: "150px 0 100px 0",
          bgcolor: "#012765",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(1, 39, 101, 0.9) 0%, rgba(1, 39, 101, 0.7) 100%)",
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="xl" sx={{ position: "relative", zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                className="Montserrat"
                sx={{
                  fontSize: { xs: "32px", sm: "36px", md: "42px" },
                  marginBottom: { xs: "25px", sm: "10px" },
                  lineHeight: "1.2",
                  color: "#fff",
                  fontWeight: "700",
                }}
              >
                Transforming Emotional Wellness
              </Box>
              <Divider
                sx={{
                  backgroundColor: "#FE6A00",
                  height: 4,
                  width: 100,
                  my: 4,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "rgba(255, 255, 255, 0.9)",
                  mb: 4,
                }}
              >
                We're on a mission to empower individuals and organizations
                through emotional intelligence and well-being.
              </Typography>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                sx={{
                  backgroundColor: "#FF7A00",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#E66A00",
                  },
                }}
              >
                Learn More
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <VectorImage
                src="/images/about-hero.svg"
                alt="Emotional Wellness"
              />
            </Grid>
          </Grid>

          {/* Stats Section */}
          <Grid container spacing={3} sx={{ mt: 8 }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <StatCard elevation={0}>
                  <Typography
                    variant="h3"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      mb: 1,
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.8)",
                      fontSize: "1.1rem",
                    }}
                  >
                    {stat.label}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Overview Section */}
      <Box sx={{ py: 10, backgroundColor: "#F8FAFC" }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <EmojiObjects sx={{ fontSize: 32, color: "#012765" }} />
                </IconWrapper>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: "#012765" }}
                >
                  Overview
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "15px",
                    color: "#4B5563",
                    lineHeight: "1.6",
                    fontFamily: "Poppins",
                  }}
                >
                  Emotionally Yours is an initiative by MTPL, a private limited
                  company established in 2022 and recognised under the Start-Up
                  India programme. We design structured, process-orientated
                  programmes that enhance emotional intelligence and cultivate
                  transformative mindsets. Our mission is to empower individuals
                  and organisations to build resilience, navigate challenges
                  with clarity, and nurture meaningful relationships.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <VectorImage
                src="/images/about-overview.svg"
                alt="Emotional Wellness Overview"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutHeader;
