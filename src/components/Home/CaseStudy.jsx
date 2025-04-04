import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Button, 
  Grid,
  styled 
} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
  background: '#F7F9FF',
  padding: theme.spacing(4),
  borderRadius: 16,
  boxShadow: 'none'
}));

const StatCard = styled(Box)(({ theme }) => ({
  background: '#FFFFFF',
  padding: theme.spacing(2),
  borderRadius: 8,
  textAlign: 'center'
}));

const CaseStudy = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <StyledCard>
        <Grid container spacing={4} alignItems="center">
          {/* Left side - Image */}
          <Grid item xs={12} md={6}>
            <Box position="relative">
              <Box
                sx={{
                  position: 'absolute',
                  width: '110%',
                  height: '110%',
                  backgroundColor: '#98F8E1',
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0
                }}
              />
              <Box
                component="img"
                src="/path-to-your-students-image.jpg"
                alt="Students studying together"
                sx={{
                  width: '100%',
                  borderRadius: 4,
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </Box>
          </Grid>

          {/* Right side - Content */}
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Box
                component="img"
                src="/path-to-dps-logo.png"
                alt="Denver Public Schools"
                sx={{ height: 32 }}
              />
              <Typography variant="h5" fontWeight="600">
                Denver Public Schools
              </Typography>
            </Box>

            <Typography color="text.secondary" mb={4}>
              Denver Public Schools partnered with Hazel to address chronic 
              absenteeism and provide equitable healthcare access to all 
              students, particularly in underserved communities.
            </Typography>

            {/* Stats */}
            <Grid container spacing={2} mb={4}>
              <Grid item xs={6}>
                <StatCard>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    40%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Reduction in health-related absences
                  </Typography>
                </StatCard>
              </Grid>
              <Grid item xs={6}>
                <StatCard>
                  <Typography variant="h4" color="primary" fontWeight="bold">
                    92%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Student satisfaction rate
                  </Typography>
                </StatCard>
              </Grid>
            </Grid>

            {/* Quote */}
            <Typography 
              color="text.secondary" 
              mb={2} 
              sx={{ fontStyle: 'italic' }}
            >
              "Hazel has been transformative for our district. We've seen 
              improved attendance, better academic performance, and happier, 
              healthier students."
            </Typography>
            
            <Typography fontWeight="600" mb={3}>
              Dr. Alex Martinez, Health Services Director
            </Typography>

            {/* CTA Button */}
            <Button 
              variant="contained" 
              color="primary"
              size="large"
              endIcon={<span>→</span>}
            >
              Read Full Case Study
            </Button>
          </Grid>
        </Grid>
      </StyledCard>
    </Container>
  );
};

export default CaseStudy; 