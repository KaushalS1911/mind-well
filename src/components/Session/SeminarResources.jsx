import React from 'react';
import {Box, Typography, Grid, Button, Paper, Link} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const resources = [
    {
        type: 'download',
        label: 'Session Slides (PDF)',
        url: '#',
    },
    {
        type: 'download',
        label: 'Workshop Workbook',
        url: '#',
    },
    {
        type: 'link',
        label: 'Recommended Reading',
        url: 'https://example.com',
    },
    {
        type: 'link',
        label: 'Feedback Form',
        url: 'https://example.com/feedback',
    },
];

const SeminarResources = () => (
    <Box sx={{py: 8, bgcolor: '#F4F7FE'}}>
        <Typography variant="h4" sx={{
            fontWeight: 700,
            color: '#012765',
            mb: 5,
            textAlign: 'center',
            fontSize: {xs: '1.3rem', sm: '2rem'}
        }}>
            Seminar Resources
        </Typography>
        <Grid container spacing={4} justifyContent="center">
            {resources.map((res, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}>
                    <Paper sx={{
                        p: {xs: 2, sm: 3},
                        boxShadow: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        height: '100%'
                    }}>
                        {res.type === 'download' ? (
                            <DownloadIcon sx={{color: '#FF6200', fontSize: 40, mb: 2}}/>
                        ) : (
                            <InsertLinkIcon sx={{color: '#FF6200', fontSize: 40, mb: 2}}/>
                        )}
                        <Typography sx={{
                            fontWeight: 600,
                            color: '#012765',
                            fontSize: {xs: '1rem', sm: '1.1rem'},
                            mb: 2,
                            textAlign: 'center'
                        }}>
                            {res.label}
                        </Typography>
                        {res.type === 'download' ? (
                            <Button
                                variant="contained"
                                color="primary"
                                href={res.url}
                                startIcon={<DownloadIcon/>}
                                sx={{
                                    bgcolor: '#FF6200',
                                    color: '#fff',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    fontSize: {xs: '0.95rem', sm: '1.05rem'},
                                    borderRadius: '8px',
                                    px: 3,
                                    '&:hover': {bgcolor: '#FF8C00'},
                                }}
                                fullWidth
                                download
                            >
                                Download
                            </Button>
                        ) : (
                            <Link
                                href={res.url}
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{
                                    fontWeight: 700,
                                    color: '#FF6200',
                                    fontSize: {xs: '0.95rem', sm: '1.05rem'},
                                    mt: 1,
                                    '&:hover': {textDecoration: 'underline', color: '#FF8C00'},
                                }}
                            >
                                Visit Link
                            </Link>
                        )}
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default SeminarResources; 