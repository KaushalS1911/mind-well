import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled 
} from '@mui/material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const ResourceItem = styled(ListItem)({
  padding: '12px 0',
});

const ResourceIcon = styled(ListItemIcon)({
  minWidth: '40px',
  '& .MuiSvgIcon-root': {
    color: '#FF7F6A',
  }
});

const MentalHealthResources = () => {
  const resources = [
    {
      title: 'Stress Management Workbook',
      description: 'Practical exercises to identify stressors and develop effective coping mechanisms.'
    },
    {
      title: 'Mindfulness Practice Guide',
      description: 'Step-by-step instructions for incorporating mindfulness into your daily routine.'
    },
    {
      title: 'Sleep Improvement Toolkit',
      description: 'Evidence-based strategies to enhance sleep quality and establish healthy sleep patterns.'
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4} alignItems="center">
        {/* Left side - Content */}
        <Grid item xs={12} md={6}>
          <Box 
            sx={{ 
              bgcolor: '#0A2472', 
              color: 'white', 
              p: 6, 
              borderRadius: 4,
              height: '100%'
            }}
          >
            <Typography variant="h4" component="h2" fontWeight="600" mb={2}>
              Free Mental Health Resources
            </Typography>
            
            <Typography color="rgba(255, 255, 255, 0.8)" mb={4}>
              Access our collection of downloadable worksheets, guides, and exercises to support your 
              mental wellness journey.
            </Typography>

            <List sx={{ mb: 4 }}>
              {resources.map((resource, index) => (
                <ResourceItem key={index}>
                  <ResourceIcon>
                    <ArticleOutlinedIcon />
                  </ResourceIcon>
                  <ListItemText
                    primary={
                      <Typography 
                        variant="h6" 
                        component="div" 
                        sx={{ 
                          color: '#FF7F6A',
                          fontSize: '1rem',
                          fontWeight: 600,
                          mb: 0.5
                        }}
                      >
                        {resource.title}
                      </Typography>
                    }
                    secondary={
                      <Typography 
                        variant="body2" 
                        sx={{ color: 'rgba(255, 255, 255, 0.8)' }}
                      >
                        {resource.description}
                      </Typography>
                    }
                  />
                </ResourceItem>
              ))}
            </List>

            <Button 
              variant="contained" 
              sx={{ 
                bgcolor: 'white', 
                color: '#0A2472',
                '&:hover': {
                  bgcolor: 'rgba(255, 255, 255, 0.9)',
                }
              }}
            >
              Access Free Resources
            </Button>
          </Box>
        </Grid>

        {/* Right side - Image */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/path-to-person-with-mug.jpg"
            alt="Person holding a coffee mug"
            sx={{
              width: '100%',
              height: 'auto',
              objectFit: 'cover',
              borderRadius: 4
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MentalHealthResources; 