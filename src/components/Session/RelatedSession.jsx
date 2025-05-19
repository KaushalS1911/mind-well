import React from 'react';
import {Box, Typography, Grid, Button, Paper, Container} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const RelatedSession = ({currentId, seminars}) => {
    const navigate = useNavigate();
    const related = seminars.filter(s => s.id !== Number(currentId)).slice(0, 3);

    if (related.length === 0) return null;

    return (
        <Box sx={{py: 8}}>
            <Typography variant="h4" sx={{
                fontWeight: 700,
                color: '#012765',
                mb: 5,
                textAlign: 'center',
                fontSize: {
                    xs: '1.7rem',
                    sm: '1.85rem',
                    md: '2rem',
                    lg: '2.225rem'
                },
            }}>
                Related Session
            </Typography>
            <Container maxWidth={"xl"}>
                <Grid container spacing={4} display="flex" justifyContent="space-between" alignItems="center">
                    {related.map(seminar => (
                        <Grid item xs={12} sm={6} md={4} key={seminar.id}>
                            <Paper sx={{p: 0, boxShadow: 2, overflow: 'hidden', height: '100%'}}>
                                <Box
                                    component="img"
                                    src={seminar.image}
                                    alt={seminar.title}
                                    sx={{width: '100%', height: {xs: 180, sm: 220}, objectFit: 'cover'}}
                                />
                                <Box sx={{p: {xs: 2, sm: 3}}}>
                                    <Typography variant="h6" sx={{
                                        fontWeight: 700,
                                        color: '#012765',
                                        fontSize: {xs: '1.1rem', sm: '1.2rem'},
                                        mb: 1
                                    }}>
                                        {seminar.title}
                                    </Typography>
                                    <Typography sx={{color: '#4A5568', fontSize: {xs: '0.95rem', sm: '1rem'}, mb: 2}}>
                                        {seminar.date}
                                    </Typography>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: '#FF6200',
                                            borderColor: '#FF6200',
                                            fontWeight: 700,
                                            textTransform: 'none',
                                            fontSize: {xs: '0.95rem', sm: '1.05rem'},
                                            '&:hover': {bgcolor: '#FFF3E6', borderColor: '#FF6200'},
                                        }}
                                        onClick={() => navigate(`/${seminar.id}/session`)}
                                        fullWidth
                                    >
                                        View Seminar
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default RelatedSession;