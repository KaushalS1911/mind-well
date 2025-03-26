import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  backgroundColor: '#F9FAFB',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '4px',
    height: '100%',
    background: '#FF7F1E',
  }
}));

const IconWrapper = styled(Box)(() => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#E6EAF3',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '24px',
}));

const Title = styled(Typography)(() => ({
  color: '#012765',
  fontWeight: 700,
  fontFamily: 'Montserrat',
  fontSize: '36px',
  lineHeight: '40px',
  textAlign: 'center',
  marginBottom: '16px',
}));

const SubTitle = styled(Typography)(() => ({
  color: '#4B5563',
  fontSize: '18px',
  textAlign: 'center',
  maxWidth: 800,
  margin: '0 auto 48px',
  lineHeight: '28px',
  fontFamily: 'Poppins, sans-serif',
}));

const SectionTitle = styled(Typography)(() => ({
  color: '#012765',
  fontWeight: 700,
  fontSize: '24px',
  marginBottom: '16px',
  fontFamily: 'Montserrat',
}));

const Description = styled(Typography)(() => ({
  color: '#4B5563',
  fontSize: '16px',
  lineHeight: '1.6',
  fontFamily: 'Poppins, sans-serif',
}));

const VisionMission = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Title>
          Our Vision & Mission
        </Title>
        <SubTitle>
          Empowering minds, nurturing well-being, and fostering academic excellence through comprehensive emotional support
        </SubTitle>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <IconWrapper>
                <VisibilityIcon sx={{ fontSize: 32, color: '#012765' }} />
              </IconWrapper>
              <SectionTitle>
                Our Vision
              </SectionTitle>
              <Description>
                To create a supportive educational ecosystem where emotional well-being and academic excellence go hand in hand. We envision a future where every student has access to the mental health resources they need to thrive academically and personally.
              </Description>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FF7F1E', 
                    mr: 2 
                  }} />
                  <Description>
                    Foster emotional resilience in educational communities
                  </Description>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FF7F1E', 
                    mr: 2 
                  }} />
                  <Description>
                    Integrate mental wellness into academic success
                  </Description>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FF7F1E', 
                    mr: 2 
                  }} />
                  <Description>
                    Create lasting positive impact on student well-being
                  </Description>
                </Box>
              </Box>
            </StyledPaper>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledPaper elevation={3}>
              <IconWrapper>
                <TrackChangesIcon sx={{ fontSize: 32, color: '#012765' }} />
              </IconWrapper>
              <SectionTitle>
                Our Mission
              </SectionTitle>
              <Description>
                To provide comprehensive emotional support and mental health services that enable students to overcome challenges, build resilience, and achieve their full academic potential while maintaining their well-being.
              </Description>
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FF7F1E', 
                    mr: 2 
                  }} />
                  <Description>
                    Deliver accessible mental health support
                  </Description>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FF7F1E', 
                    mr: 2 
                  }} />
                  <Description>
                    Implement evidence-based wellness programs
                  </Description>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box sx={{ 
                    width: '8px', 
                    height: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: '#FF7F1E', 
                    mr: 2 
                  }} />
                  <Description>
                    Build strong support networks for sustained growth
                  </Description>
                </Box>
              </Box>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VisionMission; 