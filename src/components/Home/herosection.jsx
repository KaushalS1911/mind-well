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
import img1 from '../../assets/images/Home/Herosection/home.svg';
import img2 from '../../assets/images/Home/Herosection/lausd.svg';
import img3 from '../../assets/images/Home/Herosection/ocps.svg';
import img4 from '../../assets/images/Home/Herosection/Atlanta.svg';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {Controller, useForm} from "react-hook-form";
import {Navigation, Pagination} from 'swiper/modules';

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
        <Box sx={{
            '.swiper-wrapper': {alignItems: 'center', cursor: 'grab'},
            '.swiper-pagination-bullet': {
                backgroundColor: 'white',
                opacity: 1,
            },
            '.swiper-pagination-bullet-active': {
                backgroundColor: '#FE6A00',
                opacity: 1,
            },
        }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                onSwiper={(swiper) => setSwiperInstance(swiper)}
                pagination={{clickable: true}}
                style={{
                    height: "100%",
                    backgroundColor: "#002f6c"
                }}
            >
                {/* Slide 0: Hero Section */}
                <SwiperSlide style={{height: "100%"}}>
                    <Box sx={{
                        position: "relative",
                        mt: {md: 9, xs: 0},
                        color: "white",
                        padding: "80px 0",
                        height: "100%",
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Container maxWidth={"xl"}>
                            <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                                <Box
                                    sx={{
                                        position: "absolute",
                                        display: {lg: "flex", xs: "none"},
                                        width: "50px",
                                        height: "50px",
                                        backgroundColor: "#FE6A00",
                                        borderRadius: "50%",
                                        top: {xs: "10%", sm: "12%", md: "15%"},
                                        left: {xs: "45%", sm: "50%", md: "55%"},
                                        transform: "translate(-50%, -50%)",
                                    }}
                                />

                                <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
                                    <Box
                                        className={"Montserrat"}
                                        sx={{
                                            fontSize: "48px",
                                            lineHeight: 1,
                                            fontWeight: "700",
                                        }}
                                    >
                                        Your Mental Wellbeing Matters
                                    </Box>
                                    <Box sx={{marginTop: "20px", fontSize: "20px", lineHeight: "28px", width: "80%"}}>
                                        Connect with licensed therapists online and start your journey to better mental
                                        health
                                        today. Professional support whenever and wherever you need it.
                                    </Box>
                                    {/*<Box sx={{marginTop: "30px", display: "flex"}}>*/}
                                    {/*    <Box sx={{*/}
                                    {/*        backgroundColor: "#FE6A00",*/}
                                    {/*        marginRight: "10px",*/}
                                    {/*        padding: "12px 24px",*/}
                                    {/*        fontSize: "16px",*/}
                                    {/*        display: "inline-block",*/}
                                    {/*        borderRadius: "0.375rem",*/}
                                    {/*        fontWeight: "600",*/}
                                    {/*        cursor: "pointer",*/}
                                    {/*        transition: "0.3s",*/}
                                    {/*        '&:hover': {*/}
                                    {/*            backgroundColor: "#E05D00",*/}
                                    {/*        }*/}
                                    {/*    }}>*/}
                                    {/*        Get Started*/}
                                    {/*    </Box>*/}
                                    {/*    <Box sx={{*/}
                                    {/*        borderColor: "white",*/}
                                    {/*        color: "white",*/}
                                    {/*        padding: "12px 24px",*/}
                                    {/*        fontSize: "16px",*/}
                                    {/*        backgroundColor: "transparent",*/}
                                    {/*        border: "1px solid #fff",*/}
                                    {/*        borderRadius: "0.375rem",*/}
                                    {/*        fontWeight: "600",*/}
                                    {/*        cursor: "pointer",*/}
                                    {/*        transition: "0.3s",*/}
                                    {/*        '&:hover': {*/}
                                    {/*            backgroundColor: "#1B3D75",*/}
                                    {/*        }*/}
                                    {/*    }}>*/}
                                    {/*        Learn More*/}
                                    {/*    </Box>*/}
                                    {/*</Box>*/}
                                    <Box sx={{marginTop: "40px", display: "flex", alignItems: "center",}}>

                                        <AvatarGroup spacing="medium" sx={{marginBottom: {xs: "30px", md: "0px"}}}>
                                            <Avatar sx={{bgcolor: "#D9D9D9", color: "black"}}>J</Avatar>
                                            <Avatar sx={{bgcolor: "#D9D9D9", color: "black"}}>S</Avatar>
                                            <Avatar sx={{bgcolor: "#D9D9D9", color: "black"}}>M</Avatar>
                                        </AvatarGroup>


                                        <Box sx={{
                                            fontSize: "14px",
                                            marginLeft: "10px",
                                            color: "white",
                                            marginBottom: {xs: "30px", md: "0px"}
                                        }}>
                                            Trusted by <b>10,000+</b> students and professionals
                                        </Box>
                                    </Box>
                                </Grid>


                                <Grid item xs={12} md={4}>
                                    <Box sx={{textAlign: "left"}}>
                                        <Paper sx={{padding: "30px", borderRadius: "12px"}}>
                                            <Box variant="h6" fontWeight="bold" sx={{color: "#002F6C"}}>
                                                Take the first step
                                            </Box>
                                            <form onSubmit={handleSubmit(onSubmit)}>

                                                <Controller
                                                    name="name"
                                                    control={control}
                                                    defaultValue=""
                                                    rules={{required: "Name is required"}}
                                                    render={({field}) => (
                                                        <TextField
                                                            {...field}
                                                            fullWidth
                                                            label="Your name"
                                                            variant="outlined"
                                                            sx={{marginTop: "15px"}}
                                                            error={!!errors.name}
                                                            helperText={errors.name?.message}
                                                        />
                                                    )}
                                                />


                                                <Controller
                                                    name="email"
                                                    control={control}
                                                    defaultValue=""
                                                    rules={{
                                                        required: "Email is required",
                                                        pattern: {
                                                            value: /^\S+@\S+\.\S+$/,
                                                            message: "Invalid email format"
                                                        },
                                                    }}
                                                    render={({field}) => (
                                                        <TextField
                                                            {...field}
                                                            fullWidth
                                                            label="Your email"
                                                            variant="outlined"
                                                            sx={{marginTop: "15px"}}
                                                            error={!!errors.email}
                                                            helperText={errors.email?.message}
                                                        />
                                                    )}
                                                />


                                                <Controller
                                                    name="concern"
                                                    control={control}
                                                    defaultValue={null}
                                                    rules={{required: "Please select your concern"}}
                                                    render={({field}) => (
                                                        <Autocomplete
                                                            {...field}
                                                            options={[
                                                                "Anxiety",
                                                                "Depression",
                                                                "Stress",
                                                                "Relationship Issues",
                                                                "Self-esteem",
                                                                "Grief",
                                                                "Other",
                                                            ]}
                                                            onChange={(_, value) => field.onChange(value)}
                                                            value={field.value || null}
                                                            renderInput={(params) => (
                                                                <TextField
                                                                    {...params}
                                                                    label="What are you struggling with?"
                                                                    variant="outlined"
                                                                    fullWidth
                                                                    sx={{marginTop: "15px"}}
                                                                    error={!!errors.concern}
                                                                    helperText={errors.concern?.message}
                                                                />
                                                            )}
                                                        />
                                                    )}
                                                />


                                                <Box sx={{
                                                    backgroundColor: "#FE6A00",
                                                    margin: "16px 0 0",
                                                    padding: "12px 24px",
                                                    fontSize: "16px",
                                                    color: "#fff",
                                                    fontWeight: "600",
                                                    borderRadius: "0.375rem",
                                                    textAlign: "center",
                                                    cursor: "pointer",
                                                }}>
                                                    Submit
                                                </Box>
                                            </form>

                                            <Box
                                                sx={{
                                                    display: "block",
                                                    marginTop: "10px",
                                                    textAlign: "center",
                                                    fontSize: "12px"
                                                }}>
                                                By continuing, you agree to our{" "}
                                                <a href="#" style={{color: "#002F6C", fontWeight: "bold"}}>
                                                    Terms of Service
                                                </a>{" "}
                                                and{" "}
                                                <a href="#" style={{color: "#002F6C", fontWeight: "bold"}}>
                                                    Privacy Policy
                                                </a>
                                            </Box>
                                        </Paper>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </SwiperSlide>

                {/* Slide 1: Comprehensive Care */}
                <SwiperSlide style={{height: "100%"}}>
                    <Box sx={{
                        height: '100%',
                        position: "relative",
                        mt: {md: 5, xs: 0},
                        color: "white",
                        py: {xs: 6, md: 10},
                        display: "flex",
                        alignItems: "center",
                    }}>
                        <Container maxWidth="xl">
                            <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                                {/* Text Content */}
                                <Grid item xs={12} md={6}>
                                    <Box className={"Montserrat"}
                                         sx={{
                                             fontSize: {xs: "28px", sm: "34px", md: "45px"},
                                             lineHeight: 1.2,
                                             fontWeight: 700,
                                         }}
                                    >
                                        Comprehensive Care Services
                                    </Box>

                                    <Typography
                                        sx={{
                                            mt: 2,
                                            fontSize: {xs: "16px", sm: "18px", md: "20px"},
                                            lineHeight: "28px",
                                            width: {xs: "100%", sm: "90%", md: "80%"},
                                            mb: 3,
                                        }}
                                    >
                                        Our platform provides access to both physical and mental health
                                        services, ensuring students receive holistic care.
                                    </Typography>

                                    <Box
                                        sx={{display: 'flex', flexDirection: {xs: 'column', sm: 'row'}, gap: 2, mb: 4}}>
                                        {services.map((service, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    flex: 1,
                                                    bgcolor: 'background.paper',
                                                    p: 2,
                                                    borderRadius: 2,
                                                    boxShadow: serviceIndex === index ? 3 : 0,
                                                    cursor: 'pointer',
                                                    transition: 'box-shadow 0.3s ease',
                                                    '&:hover': {boxShadow: 3},
                                                }}
                                                onClick={() => setServiceIndex(index)}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: "#FE6A00",
                                                        fontSize: "20px",
                                                        fontWeight: 600,
                                                        mb: 1,
                                                    }}
                                                >
                                                    {service.title}
                                                </Typography>
                                                {service.items.map((item, idx) => (
                                                    <ListItemText
                                                        key={idx}
                                                        primary={item}
                                                        primaryTypographyProps={{
                                                            color: 'text.secondary',
                                                            fontSize: '15px',
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        ))}
                                    </Box>
                                </Grid>

                                {/* Image */}
                                <Grid item xs={12} md={4} xl={6}>
                                    <Box
                                        sx={{
                                            bgcolor: '#F8E6FF',
                                            borderRadius: 4,
                                            p: 1,
                                            height: {xs: '100%', lg: '72%'},
                                            width: {xs: '100%', lg: '72%'},
                                            mx: 'auto',

                                        }}
                                    >
                                        <img
                                            src={img1}
                                            alt="img1"
                                            style={{
                                                height: '100%',
                                                width: '100%',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide style={{alignItems: 'center', display: 'flex', justifyContent: 'center'}}>
                    <Box sx={{
                        position: "relative",
                        mt: {md: 5, xs: 0},
                        color: "white",
                        py: {xs: 6, md: 10},
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <Container maxWidth="xl" sx={{py: {xs: 4, md: 8}}}>
                            <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                                {/* Left Column */}
                                <Grid item xs={12} md={6}>
                                    <Box className={"Montserrat"}
                                         sx={{
                                             fontSize: {xs: "28px", sm: "34px", md: "45px"},
                                             fontWeight: 700,
                                             lineHeight: 1.2,
                                         }}
                                    >
                                        Trusted by School Districts
                                    </Box>

                                    <Typography
                                        sx={{
                                            mt: 2,
                                            fontSize: {xs: "16px", sm: "18px", md: "20px"},
                                            lineHeight: "28px",
                                            width: {xs: "100%", sm: "90%", md: "80%"},
                                            mb: 3,
                                        }}
                                    >
                                        Leading school districts across the country trust MindWellness to
                                        provide quality healthcare to their students.
                                    </Typography>

                                    <Typography
                                        sx={{
                                            fontSize: {xs: "16px", sm: "15px", md: "18px"},
                                            color: "#FE6A00",
                                            mb: 6,
                                        }}
                                    >
                                        Trusted by leading school districts nationwide
                                    </Typography>

                                    {/*<Box sx={{*/}
                                    {/*    display: "flex",*/}
                                    {/*    alignItems: "center",*/}
                                    {/*    height: "100px",*/}
                                    {/*    width: "300px",*/}
                                    {/*    gap: {sm:10,xs:4}*/}
                                    {/*}}>*/}
                                    {/*    {[img2, img3, img4].map((img, index) => (*/}
                                    {/*        <img*/}
                                    {/*            key={index}*/}
                                    {/*            src={img}*/}
                                    {/*            alt={`img${index}`}*/}
                                    {/*            style={{*/}
                                    {/*                height: '100%',*/}
                                    {/*                width: '100px',*/}
                                    {/*                objectFit: 'contain',*/}
                                    {/*            }}*/}
                                    {/*        />*/}
                                    {/*    ))}*/}
                                    {/*</Box>*/}

                                </Grid>

                                {/* Right Column */}
                                <Grid item xs={12} md={4}>
                                    <Box sx={{
                                        bgcolor: '#b3eacb',
                                        borderRadius: 4,
                                        p: 3,
                                        mx: 'auto',
                                    }}>
                                        <Card
                                            sx={{
                                                p: {xs: 2, sm: 3},
                                                borderRadius: 4,
                                                bgcolor: "#fff",
                                                border: "1px solid #98F8E1",
                                                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                                            }}
                                        >
                                            <Stack spacing={2}>
                                                {benefits[benefitIndex].items.map((benefit, index) => (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: 2,
                                                            flexWrap: "wrap",
                                                        }}
                                                    >
                                                        <CheckCircleOutlineIcon
                                                            sx={{color: "#4169E1", fontSize: "1.5rem"}}
                                                        />
                                                        <Typography sx={{fontSize: {xs: "14px", md: "16px"}}}>
                                                            {benefit}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        </Card>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </SwiperSlide>

            </Swiper>

            <IconButton
                ref={navigationPrevRef}
                sx={{
                    position: "absolute",
                    transform: "translate(50%, -550%)",
                    zIndex: 10,
                    color: "#666",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    width: "50px",
                    height: "50px",
                    opacity: 0.9,
                    ":hover": {
                        backgroundColor: "#fff",
                        opacity: 1,
                    },
                    display: { xs: "none", lg: "flex" },
                }}
            >
                <ArrowBackIosNewIcon />
            </IconButton>



            <IconButton
                ref={navigationNextRef}
                sx={{
                    position: "absolute",
                    right: 0,
                    transform: "translate(-50%, -550%)",
                    zIndex: 10,
                    color: "#666",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#fff",
                    width: "50px",
                    height: "50px",
                    opacity: 0.9,
                    ":hover": {
                        backgroundColor: "#fff",
                        opacity: 1,
                    },
                    display: { xs: "none", lg: "flex" },
                }}
            >
                <ArrowForwardIosIcon />
            </IconButton>

        </Box>
    );
};

export default Herosection;
