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
// import img1 from '../../assets/images/Home/Herosection/hero.jpg'
import img1 from '../../assets/images/Vectors/top banner2.png'

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
        <Box>
            <Box>
                <Box
                    sx={{
                        position: "relative",
                        mt: {md: 12, xs: 0},
                        color: "white",
                        padding: "290px 0",
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
                            backgroundRepeat: "no-repeat",
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
                    <Container maxWidth={"xl"} sx={{position: "relative", zIndex: 3}}>
                        <Box
                            data-aos="fade-down"
                            className={"Montserrat"}
                            sx={{
                                fontSize: {lg: '72px', sm: '64px', xs: '54px'},
                                lineHeight: {xs: '1.2', sm: '1.3', md: '1.5'},
                                fontWeight: "700",
                                color: "#FE6A00",
                            }}
                        >
                            Building Mindsets
                        </Box>
                        <Box
                            sx={{
                                fontSize: {xs: '18px', sm: '22px', md: '26px'},
                                lineHeight: {xs: '24px', sm: '26px', md: '28px'},
                            }}
                        >
                            When People feel Well, They Perform Well
                        </Box>

                    </Container>
                </Box>
            </Box>
        </Box>

    );
};

export default Herosection;
