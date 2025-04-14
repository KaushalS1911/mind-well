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
} from "@mui/material";
import {
  BusinessCenter,
  Groups2,
  Handshake,
  Psychology,
  TrendingUp,
  EmojiObjects,
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
          {/* Header */}
          <Box
            className="Montserrat"
            sx={{
              fontSize: { xs: "32px", sm: "36px", md: "42px" },
              marginBottom: { xs: "25px", sm: "10px" },
              lineHeight: "1.2",
              textAlign: "center",
              color: "#fff",
              fontWeight: "700",
            }}
          >
            About Us
          </Box>
          <Divider
            sx={{
              backgroundColor: "#FE6A00",
              height: 4,
              width: 100,
              mx: "auto",
              my: 4,
            }}
          />

          {/* Stats Section */}
          
          {/* Info Cards */}
          <Grid container spacing={{ xs: 2, md: 3 }}>
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <EmojiObjects sx={{ fontSize: 32, color: "#012765" }} />
                </IconWrapper>
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
                  transformative mindsets.
                </Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledPaper elevation={3}>
                <IconWrapper>
                  <TrendingUp sx={{ fontSize: 32, color: "#012765" }} />
                </IconWrapper>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "15px",
                    color: "#4B5563",
                    lineHeight: "1.6",
                    fontFamily: "Poppins",
                  }}
                >
                  Our mission is to empower individuals and organisations to
                  build resilience, navigate challenges with clarity, and
                  nurture meaningful relationships. Through insightful guidance
                  and impactful tools, we unlock potential and inspire
                  sustainable growth—one mindset at a time.
                </Typography>
              </StyledPaper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutHeader;
