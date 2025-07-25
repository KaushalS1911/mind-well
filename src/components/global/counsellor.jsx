import React, { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Button,
    Container,
    Grid,
    Stack
} from '@mui/material';
import {useParams} from "react-router-dom";
import FlareIcon from '@mui/icons-material/Flare';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GradeIcon from '@mui/icons-material/Grade';

const SketchWrapper = ({children}) => (

    <Box
        sx={{
            position: 'relative',
            p: {xs: 3, md: 5},
            mb: 2,
            borderRadius: 3,
            overflow: 'hidden',
            backgroundColor: '#fff',
        }}
    >
        <Box sx={{position: 'relative', zIndex: 1}}>{children}</Box>
    </Box>
);

function Counsellor() {
    const {name} = useParams();
    const [counsellors, setCounsellors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://interactapiverse.com/mahadevasth/counsellors')
            .then(res => res.json())
            .then(result => {
                setCounsellors(result.data || []);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load counsellors');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (counsellors.length > 0 && name) {
            // Try to find by full_name (slugified), fallback to first
            const slug = n => n.toLowerCase().replace(/\s+/g, '-');
            const found = counsellors.find(c => slug(c.full_name) === name);
            setData(found || counsellors[0]);
        }
    }, [counsellors, name]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!data) return <div>No counsellor found.</div>;


    return (
        <section>
            <Box sx={{pt: 15, mx: {xs: '20px', sm: '70px', md: '90px', xl: '100px'}}}>
                <Container maxWidth="xl">
                    {/* First Block */}
                    <SketchWrapper>
                        <Box sx={{
                            position: 'absolute',
                            top: {lg: "10%", md: "5%"},
                            left: {lg: "45%", md: "80%"},
                            zIndex: 2,
                            display: {md: "flex", xs: "none"}
                        }}>
                            <FlareIcon sx={{fontSize: 40, color: '#012765'}}/>
                        </Box>
                        <Box sx={{
                            position: 'absolute',
                            top: {lg: "80%"},
                            left: {lg: "30%"},
                            zIndex: 2,
                            display: {lg: "flex", xs: "none"}
                        }}>
                            <GradeIcon sx={{fontSize: 40, color: '#012765'}}/>
                        </Box>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} lg={6}>
                                <Typography
                                    className="Montserrat"
                                    variant="h3"
                                    fontWeight={600}
                                    sx={{mb: 4, fontSize: {xs: '30px', md: '45px'}, width: {sm: "75%", xs: "100%"}}}
                                >
                                    {data.full_name}
                                </Typography>
                                <Typography color="text.secondary" sx={{mb: 3, maxWidth: '90%', textAlign: 'justify'}}>
                                    {data.email} {data.phone ? `| ${data.phone}` : ''}
                                </Typography>
                                <Button variant="contained" sx={{bgcolor: '#012765', p: 1.5}}>
                                    Contact
                                </Button>
                            </Grid>

                            <Grid item xs={12} lg={6}>
                                <Box sx={{borderRadius: 2}}>
                                    <img
                                        src={data.profile_image || 'https://via.placeholder.com/300x200?text=No+Image'}
                                        alt={data.full_name}
                                        style={{width: '100%', height: 'auto', objectFit: 'contain'}}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                    </SketchWrapper>
                </Container>
            </Box>
        </section>
    );
}

export default Counsellor;
