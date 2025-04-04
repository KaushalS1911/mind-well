import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Stack,
  styled 
} from '@mui/material';

const ProcessStep = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'flex-start',
  marginBottom: theme.spacing(3)
}));

const StepNumber = styled(Box)(({ theme }) => ({
  background: '#E8F1FF',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.primary.main,
  fontWeight: 600
}));

const HowHazelWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Student Needs Healthcare',
      description: "When a student doesn't feel well or needs mental health support, they can visit the school nurse or counselor."
    },
      {
      number: '2',
      title: 'Connect with Hazel',
      description: 'School staff connect the student with a Hazel provider through our secure telehealth platform.'
    },
    {
      number: '3',
      title: 'Virtual Visit',
      description: 'The student has a video visit with a pediatrician or therapist who can diagnose, treat, and provide follow-up care.'
    },
    {
      number: '4',
      title: 'Coordinated Care',
      description: "We communicate with families, prescribe medications if needed, and coordinate with the student's primary care provider."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" component="h2" fontWeight="600" mb={2}>
          How Hazel Works in Schools
        </Typography>
        <Typography color="text.secondary">
          Our simple process makes it easy for schools to provide high-quality healthcare to all students.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Left side - Image */}
        <Box flex={1}>
          <Card
            sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: 3
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                backgroundColor: '#FF7F6A',
                zIndex: 1
              }}
            />
            <Box
              component="img"
              src="/path-to-students-image.jpg"
              alt="Students learning"
              sx={{
                width: '100%',
                height: 'auto',
                position: 'relative',
                zIndex: 2
              }}
            />
          </Card>
        </Box>

        {/* Right side - Steps */}
        <Stack flex={1} justifyContent="center">
          {steps.map((step) => (
            <ProcessStep key={step.number}>
              <StepNumber>{step.number}</StepNumber>
              <Box>
                <Typography variant="h6" fontWeight="600" mb={0.5}>
                  {step.title}
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {step.description}
                </Typography>
              </Box>
            </ProcessStep>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default HowHazelWorks; 