import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  styled 
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column'
}));

const StyledListItem = styled(ListItem)({
  padding: '4px 0',
});

const StyledListItemIcon = styled(ListItemIcon)({
  minWidth: '32px',
  '& .MuiSvgIcon-root': {
    fontSize: '8px',
    color: '#FF7F6A'
  }
});

const ChallengeCard = ({ title, image, challenges }) => (
  <StyledCard>
    <Box
      component="img"
      src={image}
      alt={title}
      sx={{
        width: '100%',
        height: '200px',
        objectFit: 'cover',
        borderRadius: 2,
        mb: 2
      }}
    />
    <Typography variant="h6" fontWeight="600" mb={2}>
      {title}
    </Typography>
    <List>
      {challenges.map((challenge, index) => (
        <StyledListItem key={index}>
          <StyledListItemIcon>
            <CircleIcon />
          </StyledListItemIcon>
          <ListItemText 
            primary={
              <Typography variant="body2" color="text.secondary">
                {challenge}
              </Typography>
            }
          />
        </StyledListItem>
      ))}
    </List>
  </StyledCard>
);

const Struggling = () => {
  const categories = [
    {
      title: 'Personal Challenges',
      image: '/path-to-personal-image.jpg',
      challenges: [
        'Anxiety & Stress',
        'Depression',
        'Self-Esteem Issues',
        'Trauma & PTSD',
        'Grief & Loss'
      ]
    },
    {
      title: 'Relationship Issues',
      image: '/path-to-relationship-image.jpg',
      challenges: [
        'Couples Conflict',
        'Communication Problems',
        'Family Issues',
        'Parenting Challenges',
        'Trust Issues'
      ]
    },
    {
      title: 'Professional Challenges',
      image: '/path-to-professional-image.jpg',
      challenges: [
        'Workplace Stress',
        'Career Transitions',
        'Burnout',
        'Work-Life Balance',
        'Academic Pressure'
      ]
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        fontWeight="600" 
        textAlign="center"
        mb={6}
        sx={{
          color: '#4169E1' // Royal blue color
        }}
      >
        What Are You Struggling With?
      </Typography>

      <Grid container spacing={4}>
        {categories.map((category, index) => (
          <Grid item xs={12} md={4} key={index}>
            <ChallengeCard
              title={category.title}
              image={category.image}
              challenges={category.challenges}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Struggling;
