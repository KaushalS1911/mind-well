import React from "react";
import {Box, Typography, Button, Card, Avatar, Grid, Container} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import Consultation from "../global/consultation.jsx";

const testimonials = [
    {
        name: "Jason Davis",
        role: "Marketing Professional • Anxiety & Stress",
        review:
            "\"As a high-pressure marketing executive, I was constantly struggling with anxiety and burnout. Emotionally Yours matched me with Dr. Chen, who completely transformed my approach to work stress. The CBT techniques she taught me have been invaluable, and I can now manage my workload without sacrificing my mental health.\"",
        duration: "6 months with Emotionally Yours",
        sessions: "12 sessions completed",
        color: "#012765",
    },
    {
        name: "Sarah Rodriguez",
        role: "Graduate Student • Depression & Academic Stress",
        review:
            "\"Balancing PhD research with teaching duties sent me into a deep depression. Emotionally Yours student program was affordable and life-changing. My therapist Robert understood academic pressure perfectly. He helped me develop practical strategies for academic success without sacrificing my mental wellbeing. I wouldn't have completed my degree without this support.\"",
        duration: "1 year with Emotionally Yours",
        sessions: "18 sessions completed",
        color: "#FF7F1E",
    },
];

const reviews = [
    {
        name: "Sh. S Sutaria",
        role: "Principal,RKHK Academy, Surat",
        review: "\"I saw a huge difference in attaining timely deliveries of our product with the new rejuvenated students, parents and teachers. In just 8 months, the premise is livelier than before. Way to go Team Mahadevasth\"",
    },
    {
        name: "Sh. Manoj Suvarna",
        role: "Director, Agribid",
        review: "\"We are happy to tie up with Mahadevasth Technologies. They are a digital platform for Emotional Wellness that brings Healing through Awareness, Diagnosis and Evaluation. This tie-up is contributing towards Agribid’s initiatives in bringing growth and positive developments in the lives of the Farmers. Good mental and emotional health is essential; we must prioritize it.\n"},
    {
        name: "Sh. Rajat Kumar",
        role: "Founder, Tathagat Tutorials",
        review:"\"A healthy mind is imperative for a healthy life . Team Mahadev is successfully delivering this important element of human development that focuses on Emotional and Mental well being. I congratulate and thank them for this great initiative . I highly recommend thi to all growing kids and even grown ups.",
    },
    {
        name: "Kelly P.",
        role: "Healthcare Professional • Burnout",
        review:
            "\"After years of caring for others, I was suffering from severe burnout. My therapist at Emotionally Yours understood the unique stressors of healthcare work. The specialized techniques for compassion fatigue have been invaluable. I'm rediscovering my passion for my work.\"",
    },
    {
        name: "David H.",
        role: "Small Business Owner • Stress Management",
        review:
            "\"Running a business was taking a toll on my mental health. My therapist helped me implement stress management strategies and develop healthier leadership approaches. The investment in my mental health has paid dividends in my business success.\"",
    },
    {
        name: "Lisa M.",
        role: "Graduate Student • Academic Pressure",
        review:
            "\"The student discount made therapy affordable during my graduate studies. My therapist understood academic pressure and helped me manage perfectionism and impostor syndrome. I've improved both my mental health and academic performance.\"",
    },
];

function ClientsReview() {
    return (
        <Box sx={{p: "96px 0", pt: 10, bgcolor: "#F8F9FC"}}>
            <Container maxWidth={"xl"}>
                {/* Header */}
                <Typography className={"Montserrat"}
                            variant="h4"
                            sx={{fontWeight: 700, textAlign: "center", color: "#012765", mb: "16px"}}
                >
                    What Our Clients Say
                </Typography>
                <Box sx={{textAlign: "center", opacity: 0.7, mb: 3, fontSize: "20px",}}>
                    Read what our community of students and professionals have to say <br/> about
                    their mental wellness journey with Emotionally Yours.
                </Box>

                {/* Statistics */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: {xs: 2, sm: 4},
                        mt: 5,
                        textAlign: "center",
                        mb: 4,
                    }}
                >
                    {[
                        {value: "15,000+", label: "Active Clients"},
                        {value: "4.9/5", label: "Average Rating"},
                        {value: "92%", label: "Success Rate"},
                        {value: "1,600+", label: "Licensed Therapists"},
                    ].map((item, index) => (
                        <Box key={index} sx={{
                            mb: 2
                        }}>
                            <Box sx={{color: "#FF7F1E", fontSize: {md: 48, sm: 40, xs: 35}, fontWeight: 700}}>
                                {item.value}
                            </Box>
                            <Box sx={{color: "#4A4A4A", fontSize: "16px"}}>
                                {item.label}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Featured Testimonials */}
                <Grid container spacing={3} sx={{justifyContent: "center"}}>
                    {testimonials.map((testimonial, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card
                                sx={{
                                    p: 3,
                                    bgcolor: testimonial.color,
                                    color: "#fff",
                                    borderRadius: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                {/* User Info */}
                                <Box sx={{display: "flex", alignItems: "center", mb: 2}}>
                                    <Avatar
                                        sx={{
                                            bgcolor: testimonial.name === "Jason Davis" ? "#FF7F1E" : "#012765",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            mr: 2,
                                            width: 65,
                                            height: 65,
                                            fontSize: 20,
                                        }}
                                    >
                                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                                    </Avatar>

                                    <Box>
                                        <Box sx={{fontWeight: 700, fontSize: 20, lineHeight: "28px"}}>
                                            {testimonial.name}
                                        </Box>
                                        <Box sx={{fontSize: 14, opacity: 0.8}}>
                                            {testimonial.role}
                                        </Box>
                                    </Box>
                                </Box>

                                {/* Star Rating */}
                                <Box sx={{display: "flex", gap: 0.5, mb: 3}}>
                                    {Array.from({length: 5}).map((_, i) => (
                                        <StarIcon
                                            key={i}
                                            sx={{
                                                color: testimonial.name === "Jason Davis" ? "#FF7F1E" : "#fff",
                                            }}
                                        />
                                    ))}
                                </Box>

                                {/* Review Text */}
                                <Box sx={{mb: 3, fontSize: "18px", lineHeight: "28px", flexGrow: 1}}>
                                    {testimonial.review}
                                </Box>

                                {/* Duration & Sessions */}
                                <Box sx={{display: "flex", gap: 2, fontSize: 14}}>
                                    <Box
                                        sx={{
                                            bgcolor: "rgba(255, 255, 255, 0.2)",
                                            px: 2,
                                            py: 0.8,
                                            color: "#fff",
                                            borderRadius: 10,
                                        }}
                                    >
                                        {testimonial.duration}
                                    </Box>
                                    <Box
                                        sx={{
                                            fontSize: 14,
                                            alignSelf: "center",
                                            color: testimonial.name === "Jason Davis" ? "#AEB3C3" : "#FFD3B3",
                                        }}
                                    >
                                        {testimonial.sessions}
                                    </Box>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Client Reviews */}
                <Grid container spacing={3} sx={{mt: 4}}>
                    {reviews.map((review, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card
                                sx={{
                                    p: 3,
                                    borderRadius: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                }}
                            >
                                {/* User Info */}
                                <Box sx={{display: "flex", alignItems: "center", mb: 1}}>
                                    <Avatar
                                        sx={{
                                            bgcolor: "#012765",
                                            color: "#fff",
                                            mr: 2,
                                            fontWeight: "700",
                                            width: 50,
                                            height: 50,
                                            fontSize: 15,
                                        }}
                                    >
                                        {review.name[0] + [1]}
                                    </Avatar>
                                    <Box>
                                        <Box sx={{fontWeight: 700, fontSize: "16px", color: "#012765"}}>
                                            {review.name}
                                        </Box>
                                        <Box sx={{fontSize: 14, opacity: 0.9}}>{review.role}</Box>
                                    </Box>
                                </Box>

                                {/* Star Rating */}
                                <Box sx={{display: "flex", color: "#FF7F1E", mt: 2, mb: 2}}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} fontSize="small"/>
                                    ))}
                                </Box>

                                {/* Review Text (Flexible Height) */}
                                <Box sx={{mb: 2, flexGrow: 1}}>{review.review}</Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box className={"Montserrat"} sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 8,
                    fontSize: 24,
                    mb: "32px",
                    fontWeight: 800,
                    color: "#012765"
                }}>
                    Hear from Our Clients
                </Box>

                {/* Video Testimonial */}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        mt: 6,
                        p: 3,
                        bgcolor: "#fff",
                        borderRadius: 3,
                        boxShadow: 2,
                        maxWidth: 800,
                        mx: "auto",
                    }}
                >
                    {/* Video Placeholder with Play Button */}
                    <Box
                        sx={{
                            width: "100%",
                            bgcolor: "#E8EAF0",
                            borderRadius: 2,
                            height: 120,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            mb: 1,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "10px 10px",
                                borderRadius: "50%",
                                backgroundColor: "#FF7F1E",
                                mb: 1
                            }}
                        >
                            <PlayArrowIcon sx={{fontSize: "36px", color: "#fff"}}/>
                        </Box>

                        <Box sx={{color: "#012765", pt: 2.4, fontSize: "16px"}}>
                            Video Testimonials
                        </Box>
                    </Box>

                    {/* Quote Text */}
                    <Box sx={{
                        fontSize: "16px",
                        color: "#374151",
                        textAlign: "center",
                        opacity: 0.7,
                        fontStyle: "italic",
                        mt: 1
                    }}>
                        "Emotionally Yours has been life-changing for me. Watch these client stories to see the real
                        impact
                        of our therapeutic approach."
                    </Box>
                </Box>

                {/*<Consultation title={"Ready to start your mental wellness journey?"}*/}
                {/*              Description={"Join thousands of students and professionals who have improved their mental wellbeing with Emotionally Yours."}*/}
                {/*              Btn={"Get Started Today"}/>*/}
            </Container>
        </Box>
    );
}

export default ClientsReview;
