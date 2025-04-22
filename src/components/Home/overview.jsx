import React from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/about/aboutHeader/overview.jpg';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

function Overview() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        py: { xs: 12, md: 20 },
        backgroundColor: "#F3F4F6",
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-200px" }}
        >
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInRight}>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: "#002F6C",
                      mb: 2,
                      letterSpacing: "1px",
                      textTransform: "uppercase"
                    }}
                  >
                    About Us
                  </Typography>
                  
                  <Typography
                    variant="h3"
                    className="Montserrat"
                    fontWeight="700"
                    lineHeight={1.1}
                    sx={{
                      letterSpacing: "-1px",
                      fontSize: { lg: "44px", md: "36px", sm: "32px", xs: "28px" },
                      color: "#062957",
                      mb: 4
                    }}
                  >
                    Transforming Mindsets, 
                    <br />
                    Building Resilience
                  </Typography>
                  
                  <Box
                    sx={{
                      position: "relative",
                      pl: 4,
                      mb: 5,
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        backgroundColor: "#002F6C",
                        borderRadius: "4px"
                      }
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: { md: '18px', xs: '16px' },
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        fontFamily: 'Poppins',
                      }}
                    >
                      EmotionallyYours is an initiative by MTPL, a private limited
                      company established in 2022 and recognised under the Start-Up
                      India programme. We design structured, process-orientated
                      programmes that enhance emotional intelligence and cultivate
                      transformative mindsets.
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { md: '18px', xs: '16px' },
                      color: 'text.secondary',
                      lineHeight: 1.7,
                      fontFamily: 'Poppins',
                    }}
                  >
                    Our mission is to empower individuals
                    and organisations to build resilience, navigate challenges
                    with clarity, and nurture meaningful relationships.
                  </Typography>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    position: 'relative',
                    height: { xs: '400px', md: '500px' },
                    width: '100%',
                  }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -15, 0],
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                    }}
                    style={{ height: '100%' }}
                  >
                    <Box
                      sx={{
                        position: 'relative',
                        height: '100%',
                        width: '100%',
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 0,
                          width: "100%",
                          height: "100%",
                          borderRadius: "12px",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                          zIndex: -1
                        }
                      }}
                    >
                      <img
                        src={img1}
                        alt="Emotional Wellness Overview"
                        style={{
                          height: '100%',
                          width: '100%',
                          objectFit: 'cover',
                          borderRadius: '12px',
                        }}
                      />
                    </Box>
                  </motion.div>
                  
                  {/* Background decoration */}
                  <Box
                    sx={{
                      position: 'absolute',
                      right: -40,
                      bottom: -40,
                      width: '200px',
                      height: '200px',
                      backgroundColor: 'rgba(0,47,108,0.04)',
                      borderRadius: '12px',
                      zIndex: -1,
                      display: { xs: 'none', md: 'block' }
                    }}
                  />
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
}

export default Overview;
