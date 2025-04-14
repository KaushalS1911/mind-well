import React from "react";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

// Images
import img1 from "../../assets/images/about/majorClients/logo_agribid-removebg-preview.png";
import img2 from "../../assets/images/about/majorClients/Drishti_IAS-removebg-preview.png";
import img3 from "../../assets/images/about/majorClients/logo_rkhk-removebg-preview.png";
import img4 from "../../assets/images/about/majorClients/IES-removebg-preview.png";
import img5 from "../../assets/images/about/majorClients/msme__1_-removebg-preview.png";
import img6 from "../../assets/images/about/majorClients/startup-india-hub-logo-vector-removebg-preview.png";

const images = [img1, img2, img3, img4, img5, img6];

const imageBoxStyle = {
    width: "120px",
    height: "120px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    padding: "15px",
    transition: "all 0.4s ease-in-out",
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

function MajorClients() {
    return (
        <Box sx={{ py: 10 }}>
            {/* Section Heading */}
            <Box sx={{ mb: 10, textAlign: "center" }}>
                <Box
                    className="Montserrat"
                    sx={{
                        fontSize: { xs: "28px", sm: "32px", md: "36px" },
                        lineHeight: "40px",
                        color: "#012765",
                        fontWeight: "700",
                        mb: 3,
                    }}
                >
                    Major Clients
                </Box>
                <Box
                    sx={{
                        border: "2px solid #012765",
                        width: { xs: "20%", sm: "10%", md: "7%", lg: "5%" },
                        height: "1px",
                        margin: "0 auto",
                    }}
                />
            </Box>

            <Container maxWidth="lg">
                {/* Swiper visible on all screen sizes */}
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    loop={true}
                    breakpoints={{
                        600: { slidesPerView: 3 },
                        900: { slidesPerView: 4 },
                        1200: { slidesPerView: 5 },
                    }}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    centeredSlides={true}
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{ py: 2, display: "flex", justifyContent: "center" }}>
                                <Box sx={imageBoxStyle}>
                                    <Box
                                        component="img"
                                        src={img}
                                        alt={`Client ${index + 1}`}
                                        sx={imageStyle}
                                    />
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
}

export default MajorClients;
