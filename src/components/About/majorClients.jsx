import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Images
import img1 from "../../assets/images/about/majorClients/logo_agribid-removebg-preview.png";
import img2 from "../../assets/images/about/majorClients/Drishti_IAS-removebg-preview.png";
import img3 from "../../assets/images/about/majorClients/wingsss.png";
import img4 from "../../assets/images/about/majorClients/IES-removebg-preview.png";
import img5 from "../../assets/images/about/majorClients/TathaGat.png";
import img6 from "../../assets/images/about/majorClients/Delhi.png";
import img7 from "../../assets/images/about/majorClients/Aimt.png";
import img8 from "../../assets/images/about/majorClients/AwEs.png";
import img9 from "../../assets/images/about/majorClients/Army.png";

// Image Array
const images = [
    { image: img1, title: "Agribid", location: "Mumbai" },
    { image: img2, title: "Drishti IAS", location: "All Centers" },
    { image: img3, title: "Wingsss", location: "Pune" },
    { image: img4, title: "IES", location: "Thane" },
    { image: img5, title: "TathaGat", location: "New Delhi" },
    { image: img6, title: "ACMS" , location: "New Delhi" },
    { image: img7, title: "AIMT", location: "Gr. Noida" },
    { image: img8, title: "APS" , location: "12 Branches" },
    { image: img9, title: "AIE", location: "Gr. Noida" },
];

// Reusable Styles
const imageBoxStyle = {
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: "15px",
    transition: "transform 0.4s ease-in-out, background-color 0.4s ease-in-out",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
    "&:hover": {
        transform: "scale(1.1)",
        backgroundColor: "#f1e4dc",
    },
};

const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
};

const MajorClients = () => {
    return (
        <Box sx={{ px: { sm: "30px", xs: "0", xl: "0" } }}>
            {/* Section Heading */}
            <Box sx={{ mb: 5, textAlign: "center" }}>
                <Typography
                    className="Montserrat"
                    sx={{
                        fontSize: {
                            xs: '1.7rem',
                            sm: '1.85rem',
                            md: '2rem',
                            lg: '2.125rem'
                        },
                        lineHeight: "40px",
                        color: "#012765",
                        fontWeight: 700,
                        letterSpacing: "-1px",
                    }}
                >
                    Major Clients
                </Typography>
            </Box>

            {/* Swiper Container */}
            <Container maxWidth="lg">
                <Swiper
                    modules={[Autoplay , Navigation]}
                    spaceBetween={0}
                    slidesPerView={2}
                    loop={true}
                    autoplay={{
                        delay: 1500,

                        disableOnInteraction: false
                    }}
                    allowTouchMove={false}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                        1500: { slidesPerView: 5 },
                    }}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{ py: 2, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <Box sx={imageBoxStyle}>
                                    <Box component="img" src={img.image} alt={img.title} sx={imageStyle} />
                                </Box>
                                <Typography
                                    variant="body2"
                                    sx={{ mt: 2,fontSize:"17px", fontWeight: 600, color: "#012765", textAlign: "center" }}
                                >
                                    {img.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ mt: 2,fontSize:"17px", fontWeight: 600, color: "#012765", textAlign: "center" }}
                                >
                                    {img.location}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default MajorClients;
