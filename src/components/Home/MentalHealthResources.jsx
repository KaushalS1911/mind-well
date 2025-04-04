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
import img1 from '../../assets/images/Home/Herosection/hime5.jpg';

const ResourceItem = styled(ListItem)(({ theme }) => ({
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
}));

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
        <Container maxWidth="xl" sx={{ py: { xs: 6, md: 8 } }}>
            <Grid container spacing={0} alignItems="center">
                {/* Left Content */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            bgcolor: '#0A2472',
                            color: 'white',
                            p: { xs: 4, lg: 6 },
                            height: '100%'
                        }}
                    >
                        <Typography sx={{
                            fontSize: { xs: '24px', sm: '26px', md: '28px' },
                            fontWeight: 500,
                            color: '#FF7F1E',
                            mb: 1
                        }}>
                            Free Mental Health Resources
                        </Typography>

                        <Typography sx={{
                            fontSize: { xs: '16px', sm: '17px', md: '18px' },
                            fontWeight: 400,
                            color: 'rgba(255, 255, 255, 0.8)',
                            mb: 2
                        }}>
                            Access our collection of downloadable worksheets, guides, and exercises to support your
                            mental wellness journey.
                        </Typography>

                        <Box sx={{ mb: 0 }}>
                            {resources.map((resource, index) => (
                                <ResourceItem key={index} sx={{ alignItems: 'flex-start' }}>
                                    <ResourceIcon>
                                        <ArticleOutlinedIcon sx={{ mt: 0.5 }} />
                                    </ResourceIcon>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                component="div"
                                                sx={{
                                                    color: '#FF7F1E',
                                                    fontSize: { xs: '16px', sm: '17px' },
                                                    fontWeight: 600,
                                                    mb: 0.5
                                                }}
                                            >
                                                {resource.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography sx={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: { xs: '14px', sm: '15px' } }}>
                                                {resource.description}
                                            </Typography>
                                        }
                                    />
                                </ResourceItem>
                            ))}
                        </Box>

                        <Button
                            variant="contained"
                            fullWidth
                            sx={{
                                bgcolor: '#FE6A00',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: { xs: "14px", sm: "16px" },
                                py: 1.5,
                                px: 4,
                                borderRadius: "0.375rem",
                                textTransform: 'none',
                                transition: '0.3s',
                                '&:hover': { bgcolor: '#dd6006' },
                                width: { xs: '100%', sm: 'auto' }
                            }}
                        >
                            Access Free Resources
                        </Button>
                    </Box>
                </Grid>

                {/* Right Image */}
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        height: '106%',
                        width: '106%'
                    }}>
                        <img src={img1} alt={"img1"}
                             style={{
                                 width: '100%',
                                 height: '100%',
                                 objectFit: 'fill',
                             }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default MentalHealthResources;
