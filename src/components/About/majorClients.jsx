import React from "react";
import {Box, Container} from "@mui/material";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation, Autoplay} from "swiper/modules";

// Images
import img1 from "../../assets/images/about/majorClients/logo_agribid-removebg-preview.png";
import img2 from "../../assets/images/about/majorClients/Drishti_IAS-removebg-preview.png";
import img3 from "../../assets/images/about/majorClients/wingsss.jpeg";
import img4 from "../../assets/images/about/majorClients/IES-removebg-preview.png";
import img5 from "../../assets/images/about/majorClients/TathaGat.jpeg";
import img6 from "../../assets/images/about/majorClients/Delhi.jpeg";
import img7 from "../../assets/images/about/majorClients/Aimt.jpeg";
import img8 from "../../assets/images/about/majorClients/AwEs.jpeg";
import img9 from "../../assets/images/about/majorClients/Army.jpeg";

// Image Array
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
        <Box sx={{
            px: {sm: "30px ", xs: "0", xl: "0"}
        }}>
            {/* Section Heading */}
            <Box sx={{mb: 5, textAlign: "center"}}>
                <Box
                    className="Montserrat"
                    sx={{
                        fontSize: {xs: '28px', sm: '34px', md: '42px', lg: '46px'},
                        lineHeight: "40px",
                        color: "#012765",
                        fontWeight: 700,
                        letterSpacing: "-1px",
                    }}
                >
                    Major Clients
                </Box>
            </Box>

            {/* Swiper Container */}
            <Container maxWidth="lg">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    breakpoints={{
                        600: {slidesPerView: 3},
                        900: {slidesPerView: 4},
                        1200: {slidesPerView: 5},
                    }}
                    autoplay={{delay: 1500, disableOnInteraction: false}}
                    modules={[Navigation, Autoplay]}
                    centeredSlides={true}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{py: 2, display: "flex", justifyContent: "center"}}>
                                <Box sx={imageBoxStyle}>
                                    <Box component="img" src={img} alt={`Client ${index + 1}`} sx={imageStyle}/>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
};

export default MajorClients;
