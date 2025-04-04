import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  styled 
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const SliderDot = styled(FiberManualRecordIcon)(({ active }) => ({
  fontSize: '12px',
  margin: '0 4px',
  color: active ? '#4169E1' : '#CBD5E0',
  cursor: 'pointer'
}));

const services = [
  {
    title: 'Physical Health',
    items: [
      'Preventive care',
      'Acute illness treatment',
      'Chronic condition management'
    ],
    image: '/path-to-physical-health-image.jpg'
  },
  {
    title: 'Mental Health',
    items: [
      'Therapy sessions',
      'Anxiety & depression support',
      'Crisis intervention'
    ],
    image: '/path-to-mental-health-image.jpg'
  },
  // Add more service categories if needed
];

const ComprehensiveCare = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === services.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={6} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="h3" component="h2" fontWeight="700" mb={2}>
            Comprehensive Care Services
          </Typography>
          
          <Typography color="text.secondary" mb={4}>
            Our platform provides access to both physical and mental health 
            services, ensuring students receive holistic care.
          </Typography>

          <Box sx={{ display: 'flex', gap: 4, mb: 4 }}>
            {services.map((service, index) => (
              <Box
                key={index}
                sx={{
                  flex: 1,
                  bgcolor: 'background.paper',
                  p: 3,
                  borderRadius: 2,
                  boxShadow: currentSlide === index ? 3 : 0,
                  transition: 'box-shadow 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': { boxShadow: 3 }
                }}
                onClick={() => setCurrentSlide(index)}
              >
                <Typography variant="h6" fontWeight="600" mb={2}>
                  {service.title}
                </Typography>
                <List dense>
                  {service.items.map((item, idx) => (
                    <ListItem key={idx} sx={{ px: 0 }}>
                      <ListItemText 
                        primary={item}
                        primaryTypographyProps={{
                          color: 'text.secondary',
                          fontSize: '0.9rem'
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>

          {/* Slider Controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton onClick={handlePrevSlide} size="small">
              <ArrowBackIosNewIcon />
            </IconButton>
            
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {services.map((_, index) => (
                <SliderDot 
                  key={index}
                  active={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </Box>

            <IconButton onClick={handleNextSlide} size="small">
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* Right Image */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              position: 'relative',
              bgcolor: '#F8E6FF', // Light purple background
              borderRadius: 4,
              p: 2
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                width: '80%',
                height: '80%',
                bgcolor: '#9747FF', // Purple circle
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100px',
                height: '100px',
                bgcolor: '#98F8E1', // Mint green accent
                borderRadius: 2,
                transform: 'rotate(45deg)',
                zIndex: 1
              }}
            />
            <Box
              component="img"
              src={services[currentSlide].image}
              alt={services[currentSlide].title}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                position: 'relative',
                zIndex: 2
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ComprehensiveCare; 