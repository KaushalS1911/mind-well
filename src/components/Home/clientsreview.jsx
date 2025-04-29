import React from "react";
import { Box, Typography, Avatar, Card, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
    {
        name: "Jason Davis",
        role: "Marketing Professional • Anxiety & Stress",
        review:
            "\"As a high-pressure marketing executive, I was constantly struggling with anxiety and burnout. EmotionallYours matched me with Dr. Chen, who completely transformed my approach to work stress. The CBT techniques she taught me have been invaluable, and I can now manage my workload without sacrificing my mental health.\"",
        duration: "6 months with EmotionallYours",
        sessions: "12 sessions completed",
        color: "#012765",
    },
    {
        name: "Sarah Rodriguez",
        role: "Graduate Student • Depression & Academic Stress",
        review:
            "\"Balancing PhD research with teaching duties sent me into a deep depression. EmotionallYours student program was affordable and life-changing. My therapist Robert understood academic pressure perfectly. He helped me develop practical strategies for academic success without sacrificing my mental wellbeing. I wouldn't have completed my degree without this support.\"",
        duration: "1 year with EmotionallYours",
        sessions: "18 sessions completed",
        color: "#FF7F1E",
    },
    {
        name: "Sarah Rodriguez",
        role: "Graduate Student • Depression & Academic Stress",
        review:
            "\"Balancing PhD research with teaching duties sent me into a deep depression. EmotionallYours student program was affordable and life-changing. My therapist Robert understood academic pressure perfectly. He helped me develop practical strategies for academic success without sacrificing my mental wellbeing. I wouldn't have completed my degree without this support.\"",
        duration: "1 year with EmotionallYours",
        sessions: "18 sessions completed",
        color: "#012765",
    },
];

function ClientsReview() {
    return (
        <Box sx={{ padding:"96px 0 0 0" ,px: {sm:"30px ",xs:"0",xl:"0"},}}>
            <Container maxWidth="xl">
                <Typography
                    className={"Montserrat"}
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        textAlign: "center",
                        color: "#012765",
                        mb: 2,
                        fontFamily: "Montserrat",
                        letterSpacing: "-1px",
                    }}
                >
                    What Our Clients Say
                </Typography>
                <Box sx={{ textAlign: "center", opacity: 0.7, mb: 4, fontSize: "20px" }}>
                    Read what our community of students and professionals have to say <br />
                    about their mental wellness journey with EmotionallYours.
                </Box>

                <Swiper
                    modules={[A11y, Autoplay]}
                    spaceBetween={24}
                    slidesPerView={1}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        960: { slidesPerView: 2 },
                        1280: { slidesPerView: 2 },
                    }}
                >
                    {testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                            <Box sx={{ height: "100%", display: "flex" }}>
                                <Card
                                    sx={{
                                        p: 3,
                                        bgcolor: testimonial.color,
                                        color: "#fff",
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: "100%",
                                        width: "100%",
                                        minHeight: 400, // optional fixed height for uniformity
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                        <Avatar
                                            sx={{
                                                bgcolor: index % 2 === 0 ? "#FF7F1E" : "#012765",
                                                color: "#fff",
                                                fontWeight: "bold",
                                                mr: 2,
                                                width: 65,
                                                height: 65,
                                                fontSize: 20,
                                            }}
                                        >
                                            {testimonial.name
                                                .split(" ")
                                                .map((n) => n[0])
                                                .join("")}
                                        </Avatar>

                                        <Box>
                                            <Box sx={{ fontWeight: 700, fontSize: 20, lineHeight: "28px" }}>
                                                {testimonial.name}
                                            </Box>
                                            <Box sx={{ fontSize: 14, opacity: 0.8 }}>{testimonial.role}</Box>
                                        </Box>
                                    </Box>

                                    <Box sx={{ display: "flex", gap: 0.5, mb: 3 }}>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <StarIcon
                                                key={i}
                                                sx={{ color: index % 2 === 0 ? "#FF7F1E" : "#012765" }}
                                            />
                                        ))}
                                    </Box>

                                    <Box sx={{ mb: 3, fontSize: "18px", lineHeight: "28px", flexGrow: 1 }}>
                                        {testimonial.review}
                                    </Box>

                                    <Box sx={{ display: "flex", gap: 2, fontSize: 14 }}>
                                        <Box
                                            sx={{
                                                bgcolor: "rgba(255, 255, 255, 0.2)",
                                                px: 2,
                                                py: 0.8,
                                                borderRadius: 10,
                                            }}
                                        >
                                            {testimonial.duration}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: 14,
                                                alignSelf: "center",
                                                color: index % 2 === 0 ? "#AEB3C3" : "#FFD3B3",
                                            }}
                                        >
                                            {testimonial.sessions}
                                        </Box>
                                    </Box>
                                </Card>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </Box>
    );
}

export default ClientsReview;
