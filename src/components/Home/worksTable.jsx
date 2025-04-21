import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from '@mui/icons-material/Circle';
import img1 from "../../assets/images/Home/workstable/Establish-Leadership.jpeg";
import img2 from "../../assets/images/Home/workstable/Initial-Evaluations – Laying-the-Groundwork1.jpg";
import img3 from "../../assets/images/Home/workstable/Awareness-Creation-for-Meaningful-Impact.jpg";
import img4 from "../../assets/images/Home/workstable/Insight-Driven-Personalised-Enrichment.jpg";
import img5 from "../../assets/images/Home/workstable/Strengthening-Impact-Through-Measurable-Metrices1.jpg";

const steps = [
  {
    image: img1,
    title: "Establish a Leadership Task force",
    details: [
      "Amplify awareness of emotional intelligence as a leadership cornerstone.",
      "Pinpoint challenges and uncover pathways for growth.",
      "Develop a precision-driven strategy for lasting impact.",
    ],
  },
  {
    image: img2,
    title: "Initial Evaluations – Laying the Groundwork",
    details: [
      "Facilitate introspective self-assessments to foster personal growth.",
      "Conduct comprehensive wellness evaluations for participants.",
      "Deliver data-driven insights to empower organisational strategies.",
    ],
  },
  {
    image: img3,
    title: "Awareness Creation for Meaningful Impact",
    details: [
      "Develop demographic-specific curricula tailored by gender, age, and region.",
      "Foster engagement through interactive workshops and training.",
      "Empower self-help groups as first responders and feedback hubs.",
    ],
  },
  {
    image: img4,
    title: "Inight-Driven Personalised Enrichment",
    details: [
      "Curate meticulously designed sessions for profound growth.",
      "Provide customised guidance to cultivate essential life skills.",
      "Detect underlying risks and elevate organisational consciousness.",
    ],
  },
  {
    image: img5,
    title: "Strengthening Impact Through Measurable Metrices",
    details: [
      "Assess intervention effectiveness with follow-up evaluations.",
      "Facilitate collaborative feedback sessions for shared learning.",
      "Develop a strategic roadmap with leadership for sustained success.",
    ],
  },
];

function WorksTable() {
  return (
    <Container fixed>
      <Box sx={{ padding: "96px 0 0 0" }}>
        <Typography
          className="Montserrat"
          variant="h4"
          align="center"
          fontWeight={700}
          color="#012765"
          gutterBottom
          sx={{
            fontSize: { xs: "32px", md: "40px" },
          }}
        >
          How we Make a Difference
        </Typography>

        <Box
          align="center"
          sx={{
            mx: { xs: 2, sm: 6, md: 12 },
            color: "#4B5563",
            fontSize: { xs: 18, sm: 20 },
            lineHeight: 1.75,
          }}
        >
          With EmotionallYours, you can embark on a transformative journey to
          enhance your emotional well-being through a few simple and effective
          steps.
        </Box>

        <Box sx={{ position: "relative", mt: { xs: 4, sm: 6 } }}>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: { md: "4px", xs: 0 },
              bgcolor: "#f3e2d3",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                position: "relative",
                mt: index === 0 ? 0 : { xs: 4 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: {lg:"50%",md:"50%",sm:"50%"},
                  left: {lg:"-2.1%",md:"-2.8%",sm:"-4.8%"},
                  display: { xs: "none", sm: "inline-flex" },
                  alignItems: "center",
                  justifyContent: "center",
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  bgcolor: "#FE6A00",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: 18,
                  transform: "translateY(-50%)",
                  zIndex: 1,
                }}
              >
               <CircleIcon/>
                {/*{index + 1}*/}
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  bgcolor: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  borderRadius: 2,
                  p: { xs: 3, sm: 3, md: 4 },
                  gap: 4,
                  ml: { md: 5, xs: 0 },
                  position: "relative",
                  transition: "0.3s",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: "10px",
                    right: "12px",
                    display: { xs: "inline-flex", sm: "none" },
                    alignItems: "center",
                    justifyContent: "center",
                    width: 35,
                    height: 35,
                    borderRadius: "50%",
                    bgcolor: "#FE6A00",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 14,
                  }}
                >
                  {/*{index + 1}*/}
                  <CircleIcon/>
                </Box>
                <Grid container spacing={4}>
                  <Grid
                    item
                    xs={12}
                    sm={7}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                  >
                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: { xs: 23, sm: 25, md: 28 },
                        mb: 2,
                        color: "#002F6C",
                      }}
                    >
                      {step.title}
                    </Typography>

                    {step.details.map((detail, i) => (
                      <Box key={i} display="flex" alignItems="center" mb={1}>
                        <CheckCircleIcon
                          sx={{ color: "#FE6A00", mr: 1, fontSize: 20 }}
                        />
                        <Typography
                          sx={{ fontSize: { xs: 14, sm: 18 }, lineHeight: 1.5 }}
                        >
                          {detail}
                        </Typography>
                      </Box>
                    ))}
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    sm={5}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      sx={{
                        height: "220px",
                        width: "400px",
                      }}
                    >
                      <img
                        src={step.image}
                        alt={step.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "contain",
                          borderRadius: 8,
                          transition: "transform 0.3s ease-in-out",
                        }}
                        className="hover-scale-image"
                      />
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          ))}
        </Box>

        {/*<Grid container justifyContent="center" sx={{mt: {xs: 4, sm: 6}}}>*/}
        {/*    <Box*/}
        {/*        sx={{*/}
        {/*            bgcolor: '#FE6A00',*/}
        {/*            color: '#fff',*/}
        {/*            fontWeight: 600,*/}
        {/*            fontSize: 16,*/}
        {/*            px: 4,*/}
        {/*            py: 1.5,*/}
        {/*            borderRadius: "6px",*/}
        {/*            display: 'inline-block',*/}
        {/*            cursor: "pointer",*/}
        {/*            textTransform: 'none',*/}
        {/*            transition: '0.3s',*/}
        {/*            '&:hover': {bgcolor: '#dd6006'}*/}
        {/*        }}*/}
        {/*    >*/}
        {/*        Start Your Journey Today*/}
        {/*    </Box>*/}
        {/*</Grid>*/}

        {/*<Box sx={{textAlign: "center", fontSize: 14, mt: 2, color: '#4B5563'}}>*/}
        {/*    No commitment required. Free consultation available.*/}
        {/*</Box>*/}
      </Box>
    </Container>
  );
}

export default WorksTable;
