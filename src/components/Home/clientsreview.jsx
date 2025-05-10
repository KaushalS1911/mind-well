import React from "react";
import { Box, Typography, Avatar, Card, Container } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img1 from '../../assets/images/Home/ClientsReview/SHailesh Sutaria.png'
import img2 from '../../assets/images/Home/ClientsReview/Manoj_Suvarna.png'
import img3 from '../../assets/images/Home/ClientsReview/Rajat_Kumar.png'
import img4 from '../../assets/images/Home/ClientsReview/Mukinda Sawale.jpeg'

const testimonials = [
    {
        image: img1,
        name: "Sh. S Sutaria",
        role: "Principal,RKHK Academy, Surat",
        review:
            "I saw a huge difference in attaining timely deliveries of our product with the new rejuvenated students, parents and teachers. In just 8 months, the premise is livelier than before. Way to go Team Mahadevasth",
        duration: "2 years with \"Emotionally Yours\"",
        sessions: "650 sessions completed",
        color: "#012765",
    },
    {
        image: img2,
        name: "Sh. Manoj Suvarna",
        role: "Director, Agribid",
        review:
            "\"We are happy to tie up with Mahadevasth Technologies. They are a digital platform for Emotional Wellness that brings Healing through Awareness, Diagnosis and Evaluation. This tie-up is contributing towards Agribid’s initiatives in bringing growth and positive developments in the lives of the Farmers. Good mental and emotional health is essential; we must prioritize it.\"",
        duration: "2 years with \"Emotionally Yours\"",
        sessions: "100 sessions completed",
        color: "#FF7F1E",
    },
    {
        image: img3,
        name: "Sh. Rajat Kumar",
        role: "Founder, Tathagat Tutorials",
        review:
            "\"A healthy mind is imperative for a healthy life . Team Mahadev is successfully delivering this important element of human development that focuses on Emotional and Mental well being.I congratulate and thank them for this great initiative . I highly recommend thi to all growing kids and even grown ups.\"",
        duration: "1 year with \"Emotionally Yours\"",
        sessions: "18 sessions completed",
        color: "#012765",
    },
    {
        image: img4,
        name: "Mukinda Sawale",
        role: "Principal",
        review:
            "\"I commend the efforts of the  team  Emotionally Yours and facilitators for conducting a thoughtful and well-structured counselling program through out the year.The sessions effectively addressed students' academic, emotional, and personal development needs. Such initiatives play a vital role in fostering a supportive school environment and equipping our students with essential life skills. I encourage the continuation and regular enhancement of this program to further benefit our student community.\"",
        duration: "1 year with \"Emotionally Yours\"",
        sessions: "15 sessions completed",
        color: "#FF7F1E",
    },
];



function ClientsReview() {
    return (
        <Box component="section" sx={{mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' },padding:"96px 0 0 0"}}>
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
                        fontSize: {
                            xs: '1.7rem',
                            sm: '1.85rem',
                            md: '2rem',
                            lg: '2.125rem'
                        },
                    }}
                >
                    What Our Clients Say
                </Typography>
                <Box sx={{ textAlign: "center", opacity: 0.7, mb: 4, fontSize: { xs: '0.99rem', sm: '1rem', md: '1.2rem' }, }}>
                    Read what our community of students and professionals have to say
                    about their mental wellness journey with "Emotionally Yours".
                </Box>

                <Swiper
                    modules={[A11y , Autoplay]}
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
                            <Box sx={{  display: "flex" }}>
                                <Card
                                    sx={{
                                        p: 3,
                                        bgcolor: testimonial.color,
                                        color: "#fff",
                                        borderRadius: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        // height: {xs:"750px",sm:"470px",md:"550px",lg:"450px"},
                                        minHeight:"450px",
                                        width: "100%",
                                        // minHeight: 00,
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{
                                                mr: 2,
                                                width: 65,
                                                height: 65,
                                                backgroundColor:"#fff"
                                            }}
                                        />


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

                                    <Box sx={{ mb: 3, fontSize: "18px", lineHeight: "28px", flexGrow: 1 ,textAlign: "justify" }}>
                                        {testimonial.review}
                                    </Box>

                                    <Box sx={{gap: 2, fontSize: 14 }}>
                                        <Box
                                            sx={{
                                                bgcolor: "rgba(255, 255, 255, 0.2)",
                                                px: 2,
                                                py: 0.8,
                                                borderRadius: 10,
                                                display:"inline-block",
                                            }}
                                        >
                                            {testimonial.duration}
                                        </Box>
                                        <Box
                                            sx={{
                                                fontSize: 14,
                                                alignSelf: "center",
                                                color: index % 2 === 0 ? "#AEB3C3" : "#FFD3B3",
                                                mt:2,
                                                ml:1,
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
