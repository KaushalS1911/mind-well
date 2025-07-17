import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  styled
} from '@mui/material';
import img2 from "../../assets/images/career/istockphoto2.jpg";

// Styled Components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 15px rgba(0, 0, 0, 0.1)',
  }
}));

// Hero Section Component
const HeroSection = () => (
  <Box sx={{
    py: { xs: 8, sm: 10, md: 18 },
    position: 'relative',
    backgroundImage: `url(${img2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    textAlign: "center",
  }}>
    <Box sx={{
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.8)',
      zIndex: 1
    }}/>
    <Container sx={{ position: 'relative', zIndex: 2 }}>
      <Typography 
        className={"Montserrat"} 
        sx={{
          fontSize: { xs: '1.7rem', sm: '2rem', md: '2.25rem' },
          fontWeight: '700',
          color: "#FE6A00",
          mt: 8,
          mb: 2
        }}
      >
        Join Our Team
      </Typography>
      <Divider 
        sx={{ 
          backgroundColor: "#FF7A00", 
          height: 4, 
          width: 100, 
          margin: "auto", 
          my: 3 
        }}
      />
      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 400 }}>
        Be part of our mission to transform emotional wellness and make a lasting impact on individuals
        and organizations
      </Typography>
    </Container>
  </Box>
);

// Application Form Component
const ApplicationForm = () => (
  <Box sx={{ pt: 10 }}>
    <Container maxWidth="md">
      <StyledPaper elevation={3}>
        <Typography variant="h5" gutterBottom sx={{ color: '#012765', mb: 4 }}>
          We're Hiring!
        </Typography>
        <Typography variant="body1">
          If you are a Psychologist, Special Educator, Psychotherapists, Content Writer, Flutter Developer, 
          React Developer, Accounts and Finance, Sales Professionals, HR then reach us at{' '}
          <span style={{ color: "#FE6A00" }}>hr@emotionallyours.com</span> to explore exciting career opportunities
        </Typography>
      </StyledPaper>
    </Container>
  </Box>
);

// Main Component
function Careers() {
  return (
    <Box>
      <HeroSection />
      <Box sx={{
        mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }
      }}>
        <ApplicationForm />
      </Box>
    </Box>
  );
}

export default Careers;