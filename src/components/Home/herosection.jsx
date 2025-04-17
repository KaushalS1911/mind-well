import React, {useState} from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    List,
    ListItem,
    ListItemText,
    Card,
    Stack, AvatarGroup, Avatar, Paper, TextField, MenuItem, IconButton, Autocomplete
} from '@mui/material';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import img1 from '../../assets/images/Home/Herosection/home.svg';
import img2 from '../../assets/images/Home/Herosection/flat-creativity.jpg';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Controller, useForm} from "react-hook-form";
import {Navigation, Pagination} from 'swiper/modules';
import img1 from '../../assets/images/Home/Herosection/hero.jpeg'

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
    }
];

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


const Herosection = () => {
    const [serviceIndex, setServiceIndex] = useState(0);
    const [benefitIndex, setBenefitIndex] = useState(0);
    const navigationPrevRef = React.useRef(null);
    const navigationNextRef = React.useRef(null);
    const [swiperInstance, setSwiperInstance] = React.useState(null);

    React.useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
            swiperInstance.params.navigation.nextEl = navigationNextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <Box >
            <Box>
                <Box
                    sx={{
                        position: "relative",
                        mt: { md: 9, xs: 0 },
                        color: "white",
                        padding: "150px 0",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        overflow: "hidden",
                    }}
                >
                    {/* Background Image */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${img1})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            zIndex: 1,
                        }}
                    />

                    {/* Black Overlay */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            zIndex: 2,
                        }}
                    />

                    {/* Content */}
                    <Container maxWidth={"xl"} sx={{ position: "relative", zIndex: 3 }}>
                        <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                            <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
                                <Box
                                    className={"Montserrat"}
                                    sx={{
                                        fontSize: { lg: '48px', sm: '40px', xs: '32px' },
                                        lineHeight: { xs: '1.4', sm: '1.6', md: '1.75' },
                                        fontWeight: "700",
                                        color: "#FE6A00",
                                        opacity: "0.9"
                                    }}
                                >
                                    Building Mindsets
                                </Box>
                                <Box
                                    sx={{
                                        marginTop: "20px",
                                        fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                        lineHeight: { xs: '24px', sm: '26px', md: '28px' },
                                        width: "80%"
                                    }}
                                >
                                   Well People feel Well, They Perform Well
                                </Box>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Box>

    );
};

export default Herosection;
