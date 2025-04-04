import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Grid,
  styled 
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const StyledListItem = styled(ListItem)({
  padding: '12px 0',
});

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: '32px',
  '& .MuiSvgIcon-root': {
    fontSize: '8px',
    color: '#FF7F6A'
  }
});

const benefits = [
  {
    title: 'Increased Productivity',
    description: 'Employees with good mental health are 12% more productive.'
  },
  {
    title: 'Reduced Absenteeism',
    description: 'Mental health programs reduce absenteeism by up to 30%.'
  },
  {
    title: 'Improved Retention',
    description: 'Companies with wellness programs see 31% lower turnover rates.'
  },
  {
    title: 'Cost-Effective Solution',
    description: 'Every $1 invested in mental health returns $4 in improved productivity.'
  }
];

const CorporateWellness = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box 
        sx={{ 
          bgcolor: '#0A2472', // Dark blue background
          borderRadius: 4,
          overflow: 'hidden'
        }}
      >
        <Grid container>
          {/* Left Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ p: { xs: 4, md: 6 } }}>
              <Typography 
                variant="h4" 
                component="h2" 
                fontWeight="600" 
                color="white"
                mb={2}
              >
                Invest in Your Employees and Build Thriving Teams
              </Typography>

              <Typography 
                color="rgba(255, 255, 255, 0.8)"
                mb={4}
              >
                Support your team's mental wellbeing with our comprehensive corporate wellness programs 
                designed to boost productivity and reduce turnover.
              </Typography>

              <List>
                {benefits.map((benefit, index) => (
                  <StyledListItem key={index}>
                    <StyledListItemIcon>
                      <CircleIcon />
                    </StyledListItemIcon>
                    <ListItemText
                      primary={
                        <Typography 
                          variant="subtitle1" 
                          color="white"
                          fontWeight="600"
                        >
                          {benefit.title}
                        </Typography>
                      }
                      secondary={
                        <Typography 
                          variant="body2" 
                          sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                        >
                          {benefit.description}
                        </Typography>
                      }
                    />
                  </StyledListItem>
                ))}
              </List>

              <Button 
                variant="contained"
                sx={{ 
                  mt: 4,
                  bgcolor: '#FF7F6A',
                  '&:hover': {
                    bgcolor: '#ff6b52'
                  },
                  px: 4,
                  py: 1.5
                }}
              >
                Schedule a Corporate Consultation
              </Button>
            </Box>
          </Grid>

          {/* Right Image */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                height: '100%',
                width: '100%',
                position: 'relative'
              }}
            >
              <Box
                component="img"
                src="/path-to-businessman-image.jpg"
                alt="Professional in business attire"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default CorporateWellness; 