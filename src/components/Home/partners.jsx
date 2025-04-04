import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Card,
  Stack,
  styled
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const SliderDot = styled(FiberManualRecordIcon)(({ active }) => ({
  fontSize: '8px',
  margin: '0 4px',
  color: active ? '#4169E1' : '#CBD5E0',
  cursor: 'pointer'
}));

const Partners = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const benefits = [
    {
      items: [
        'Improved attendance rates',
        'Better academic performance',
        'Reduced healthcare disparities'
      ]
    },
    {
      items: [
        'Enhanced student wellbeing',
        'Increased parent satisfaction',
        'Cost-effective healthcare delivery'
      ]
    }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? benefits.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => (prev === benefits.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ display: 'flex', gap: 6, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" component="h2" fontWeight="700" mb={2}>
            Trusted by School Districts
          </Typography>

          <Typography color="text.secondary" mb={4}>
            Leading school districts across the country trust MindWellness to
            provide quality healthcare to their students.
          </Typography>

          <Typography color="text.secondary" mb={3}>
            Trusted by leading school districts nationwide
          </Typography>

          <Stack direction="row" spacing={4} mb={4}>
            <Box
              component="img"
              src="/path-to-lausd-logo.png"
              alt="LAUSD"
              sx={{
                height: 40,
                filter: 'grayscale(100%)',
                opacity: 0.7,
                transition: 'all 0.3s ease',
                '&:hover': {
                  filter: 'grayscale(0%)',
                  opacity: 1
                }
              }}
            />
            {/* Add more district logos here */}
          </Stack>

          {/* Navigation */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton
              onClick={handlePrevSlide}
              sx={{ border: '1px solid #E2E8F0' }}
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {benefits.map((_, index) => (
                <SliderDot
                  key={index}
                  active={currentSlide === index}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </Box>

            <IconButton
              onClick={handleNextSlide}
              sx={{ border: '1px solid #E2E8F0' }}
            >
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>

        {/* Right Content */}
        <Box sx={{ flex: 1 }}>
          <Card
            sx={{
              p: 3,
              borderRadius: 4,
              bgcolor: '#F0FFF4',
              border: '1px solid #98F8E1',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)'
            }}
          >
            <Stack spacing={2}>
              {benefits[currentSlide].items.map((benefit, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <CheckCircleOutlineIcon
                    sx={{
                      color: '#4169E1',
                      fontSize: '1.5rem'
                    }}
                  />
                  <Typography>{benefit}</Typography>
                </Box>
              ))}
            </Stack>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Partners;