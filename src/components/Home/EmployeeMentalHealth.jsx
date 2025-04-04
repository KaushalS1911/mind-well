import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  styled 
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';

const StatCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  background: '#FFFFFF',
  borderRadius: theme.spacing(1),
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)'
}));

const FeatureItem = styled(ListItem)({
  padding: '16px 0',
  alignItems: 'flex-start'
});

const FeatureIcon = styled(ListItemIcon)({
  minWidth: '48px',
  '& .MuiSvgIcon-root': {
    fontSize: '24px',
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: '#FF7F6A',
    color: 'white'
  }
});

const EmployeeMentalHealth = () => {
  const stats = [
    { value: '86%', description: 'of employees report improved productivity with wellness programs' },
    { value: '3.6x', description: 'return on investment for mental health programs' },
    { value: '40%', description: 'reduction in employee turnover with wellness benefits' },
    { value: '31%', description: 'fewer sick days taken by employees with mental health support' }
  ];

  const features = [
    {
      icon: <PersonOutlineIcon />,
      title: 'Personalized Care for Every Employee',
      description: 'Each team member receives access to our therapist network with personalized matching based on their specific needs and preferences.'
    },
    {
      icon: <WorkspacePremiumOutlinedIcon />,
      title: 'Workshops and Training',
      description: "Skill building sessions on stress management, resilience, work-life balance, and communication, customized for your organization's needs."
    },
    {
      icon: <SecurityOutlinedIcon />,
      title: 'Confidentiality Guaranteed',
      description: 'All sessions and interactions remain strictly confidential. Employees can seek help without concerns about workplace privacy.'
    },
    {
      icon: <InsightsOutlinedIcon />,
      title: 'Data-Driven Insights',
      description: 'Anonymous aggregate reporting helps you understand program utilization and impact while maintaining employee privacy.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" component="h2" fontWeight="600" mb={2}>
          Employee Mental Health Program
        </Typography>
        <Typography color="text.secondary" mb={4}>
          Invest in your team's wellbeing to build a healthier, more productive workplace culture.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {/* Left side - Image and Stats */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              mb: 4,
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3
            }}
          >
            <Box
              component="img"
              src="/path-to-businessman-image.jpg"
              alt="Professional in business attire"
              sx={{
                width: '100%',
                height: 'auto'
              }}
            />
            <Box sx={{ p: 2, bgcolor: '#0A2472', color: 'white' }}>
              <Typography variant="body2">
                Empower your team with professional mental health support
              </Typography>
            </Box>
          </Card>

          <Grid container spacing={2}>
            {stats.map((stat, index) => (
              <Grid item xs={6} key={index}>
                <StatCard>
                  <Typography variant="h4" color="primary" fontWeight="bold" mb={1}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.description}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right side - Features */}
        <Grid item xs={12} md={6}>
          <Typography variant="h5" fontWeight="600" mb={3}>
            Build Thriving Teams Through Mental Wellness
          </Typography>
          <Typography color="text.secondary" mb={3}>
            Support your employees' mental health with our comprehensive workplace program designed for 
            today's professional challenges.
          </Typography>

          <List>
            {features.map((feature, index) => (
              <FeatureItem key={index}>
                <FeatureIcon>
                  {feature.icon}
                </FeatureIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontSize: '1.1rem', mb: 0.5 }}>
                      {feature.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  }
                />
              </FeatureItem>
            ))}
          </List>

          <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
            <Button 
              variant="contained" 
              color="primary"
            >
              Request Company Demo
            </Button>
            <Button 
              variant="outlined" 
              color="primary"
            >
              Download Brochure
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EmployeeMentalHealth; 