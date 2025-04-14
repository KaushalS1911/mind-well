import React from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  useTheme,
} from "@mui/material";
import {
  Work,
  Psychology,
  Group,
  TrendingUp,
  ArrowForward,
  FiberManualRecord,
} from "@mui/icons-material";

export default function ESOPMUI() {
  const theme = useTheme();

  const colors = {
    primary: "#0E3D7B",
    secondary: "#FF7A00",
    text: "#0E3D7B",
    lightText: "#4A5568",
    background: "#F8FAFC",
  };

  const styles = {
    heroSection: {
      background: "#022662",
      position: "relative",
      overflow: "hidden",
      padding: theme.spacing(12, 0),
      color: "white",
    },
    heroPattern: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.1,
      backgroundSize: "24px 24px",
    },
    logoCircle: {
      backgroundColor: colors.secondary,
      borderRadius: "50%",
      width: 64,
      height: 64,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0 auto",
      marginBottom: theme.spacing(3),
    },
    section: {
      padding: theme.spacing(10, 0),
    },
    featureCard: {
      height: "100%",
      transition: "all 0.3s ease",
      "&:hover": {
        boxShadow: theme.shadows[10],
      },
    },
    cardHeader: {
      borderTop: `3px solid ${colors.secondary}`,
      padding: 0,
    },
    iconContainer: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    icon: {
      backgroundColor: `${colors.primary}10`,
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      color: colors.primary,
    },
    listItemDot: {
      color: colors.secondary,
      fontSize: "small",
    },
    statCard: {
      height: "100%",
    },
    statValue: {
      color: colors.secondary,
      fontWeight: "bold",
    },
    divider: {
      backgroundColor: colors.secondary,
      height: 4,
      width: 100,
      margin: theme.spacing(3, "auto"),
    },
    ctaCard: {
      borderRadius: theme.shape.borderRadius * 2,
      overflow: "hidden",
    },
    ctaCardHeader: {
      backgroundColor: colors.secondary,
      height: 8,
    },
    primaryButton: {
      backgroundColor: colors.secondary,
      color: "white",
      "&:hover": {
        backgroundColor: theme.palette.augmentColor({
          color: { main: colors.secondary },
        }).dark,
      },
    },
    lightBg: {
      backgroundColor: `${colors.primary}05`,
    },
  };

  const pillars = [
    {
      title: "Proactive Burnout Prevention",
      icon: <Psychology fontSize="large" />,
      points: [
        "Conduct expert-led sessions on stress management, emotional resilience, and sustainable work-life balance",
        "Utilise self-assessment tools and advanced psychometric tests to assess early burnout risks and cognitive fatigue",
        "Deliver data-driven insights and personalised interventions to safeguard employee well-being",
      ],
    },
    {
      title: "Holistic Engagement for Emotional Well-Being",
      icon: <Group fontSize="large" />,
      points: [
        "Foster peer-support communities that encourage open dialogue and collective growth",
        "Provide time tested self-care techniques and guided mindfulness practices through an interactive wellness session",
        "Introduce gamified well-being challenges and immersive engagement activities to build sustainable emotional health habits",
      ],
    },
    {
      title: "Sustaining Motivation and Enhancing Retention",
      icon: <Work fontSize="large" />,
      points: [
        "Offer confidential one-on-one coaching with experienced psychologists to boost emotional resilience and professional fulfilment",
        "Implement reinforcement strategies with measurable metrics to enhance organisational sustainability growth and individual's long-term commitment",
        "Recognise and celebrate emotional intelligence, fostering a culture where well-being and performance go hand in hand",
      ],
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#022662",
          padding: "120px 0 60px 0",
        }}
      >
        <Box textAlign="center" maxWidth="md" mx="auto" sx={{ mb: 0 }}>
          <Box
            className={"Montserrat"}
            sx={{
              fontSize: "48px",
              lineHeight: 1,
              fontWeight: "700",
              color: "#fff",
              mb: 2,
              mt: 8,
            }}
          >
            ESOP
          </Box>
          <Divider
            sx={{
              backgroundColor: colors.secondary,
              height: 4,
              width: 100,
              mx: "auto",
              my: 3,
            }}
          />
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "rgba(255,255,255,0.9)" }}
          >
            Emotional Wellness Program for Workplace
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{
              color: "rgba(255,255,255,0.7)",
              mb: 4,
              maxWidth: "lg",
              mx: "auto",
            }}
          >
            A strategic, research-driven emotional wellness program designed to
            elevate workplace well-being, boost employee engagement, and
            cultivate resilience.
          </Typography>
        </Box>
      </Box>

      {/* Program Overview */}
      <Container maxWidth={"xl"}>
        <Box sx={{ padding: "96px 0 0 0" }}>
          <Grid container spacing={4} mb={8}>
            <Grid item xs={12} lg={8}>
              <Typography
                className={"Montserrat"}
                fontWeight="bold"
                gutterBottom
                sx={{ color: colors.primary, fontSize: "30px", mb: 3 }}
              >
                Comprehensive Emotional Wellness for Workplace
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Tailored for business teams and HR leaders, this initiative
                integrates evidence-based practices that strengthen emotional
                intelligence, enhance team dynamics, and drive sustainable
                growth within organizational culture.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Our program focuses on creating a resilient workforce through
                proactive burnout prevention, holistic engagement, and
                sustainable motivation strategies.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Paper
                elevation={1}
                sx={{
                  p: 3,
                  borderRadius: 2,
                  backgroundColor: "grey.50",
                  borderTop: `4px solid ${colors.secondary}`,
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ color: colors.primary }}
                >
                  Program Highlights
                </Typography>
                <List disablePadding>
                  {[
                    "Proactive burnout prevention",
                    "Holistic emotional well-being",
                    "Enhanced team dynamics",
                    "Sustainable motivation strategies",
                    "Data-driven insights",
                  ].map((item, index) => (
                    <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                      <ListItemIcon sx={{ minWidth: 24 }}>
                        <FiberManualRecord
                          sx={{ color: colors.secondary, fontSize: 10 }}
                        />
                      </ListItemIcon>
                      <ListItemText
                        primary={item}
                        sx={{ color: "text.secondary" }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* Three-Pillar Approach */}
        <Box sx={{ padding: "96px 0" }}>
          <Box textAlign="center" mb={6}>
            <Typography
              className={"Montserrat"}
              variant="h4"
              fontWeight="bold"
              gutterBottom
              sx={{ color: colors.primary }}
            >
              Our Three-Pillar Approach
            </Typography>
            <Divider
              sx={{
                backgroundColor: colors.secondary,
                height: 4,
                width: 100,
                mx: "auto",
                my: 3,
              }}
            />
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: "md", mx: "auto" }}
            >
              ESOP delivers workplace emotional wellness through three
              integrated components that work together to create lasting
              positive impact for organizations and their employees.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {pillars.map((pillar, idx) => (
              <Grid item xs={12} md={6} lg={4} key={idx}>
                <Card elevation={3} sx={styles.featureCard}>
                  <Box sx={styles.cardHeader} />
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={styles.iconContainer}>
                      <Box sx={styles.icon}>{pillar.icon}</Box>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        sx={{ color: colors.primary }}
                      >
                        {pillar.title}
                      </Typography>
                    </Box>
                    <List disablePadding>
                      {pillar.points.map((item, index) => (
                        <ListItem
                          key={index}
                          disablePadding
                          sx={{
                            py: 1.5,
                            pl: 2,
                            borderLeft: `2px solid ${colors.secondary}`,
                            mb: 1.5,
                          }}
                        >
                          <ListItemText
                            primary={item}
                            sx={{ color: "text.secondary", m: 0 }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
