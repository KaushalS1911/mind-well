import React from "react";
import {Box, Typography, Button, Card, Avatar, Grid, Container} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const testimonials = [
    {
        name: "Jason Davis",
        role: "Marketing Professional • Anxiety & Stress",
        review:
            "\"As a high-pressure marketing executive, I was constantly struggling with anxiety and burnout. MindWell matched me with Dr. Chen, who completely transformed my approach to work stress. The CBT techniques she taught me have been invaluable, and I can now manage my workload without sacrificing my mental health.\"",
        duration: "6 months with MindWell",
        sessions: "12 sessions completed",
        color: "#012765",
    },
    {
        name: "Sarah Rodriguez",
        role: "Graduate Student • Depression & Academic Stress",
        review:
            "\"Balancing PhD research with teaching duties sent me into a deep depression. MindWell's student program was affordable and life-changing. My therapist Robert understood academic pressure perfectly. He helped me develop practical strategies for academic success without sacrificing my mental wellbeing. I wouldn't have completed my degree without this support.\"",
        duration: "1 year with MindWell",
        sessions: "18 sessions completed",
        color: "#FF7F1E",
    },
];

const reviews = [
    {
        name: "Michael B.",
        role: "Financial Analyst • Stress & Anxiety",
        review:
            "\"The flexibility of scheduling sessions outside of work hours has been a game-changer. My therapist has helped me develop effective techniques to manage work-related stress. I'm sleeping better and finally achieving a healthier work-life balance.\"",
    },
    {
        name: "Alice T.",
        role: "College Student • Depression & Anxiety",
        review:
            "\"As a student, the affordable pricing was critical for me. My therapist has helped me manage my depression and anxiety during a really tough time. Being able to do sessions in my dorm room made getting help so much easier.\"",
    },
    {
        name: "James L.",
        role: "Software Engineer • Work-Life Balance",
        review:
            "\"I was skeptical about online therapy at first, but my therapist at MindWell has been amazing. They've helped me set boundaries at work and learn to disconnect. The convenience of video sessions fits perfectly with my unpredictable schedule.\"",
    },
    {
        name: "Kelly P.",
        role: "Healthcare Professional • Burnout",
        review:
            "\"After years of caring for others, I was suffering from severe burnout. My therapist at MindWell understood the unique stressors of healthcare work. The specialized techniques for compassion fatigue have been invaluable. I'm rediscovering my passion for my work.\"",
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
                <Typography className={"Montserrat"} sx={{textAlign: "center", opacity: 0.7, mb: 3, fontSize: "20px",}}>
                    Read what our community of students and professionals have to say <br/> about
                    their mental wellness journey with MindWell.
                </Typography>

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
                            <Typography sx={{color: "#FF7F1E", fontSize: {md: 48, sm: 40, xs: 35}, fontWeight: 700}}>
                                {item.value}
                            </Typography>
                            <Typography sx={{color: "#4A4A4A", fontSize: 16}}>
                                {item.label}
                            </Typography>
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
                                        <Typography sx={{fontWeight: 700, fontSize: 20, lineHeight: "28px"}}>
                                            {testimonial.name}
                                        </Typography>
                                        <Typography sx={{fontSize: 14, opacity: 0.8}}>
                                            {testimonial.role}
                                        </Typography>
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
                                <Typography sx={{mb: 3, fontSize: "18px", lineHeight: "28px", flexGrow: 1}}>
                                    {testimonial.review}
                                </Typography>

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
                                        <Typography sx={{fontWeight: 700, fontSize: "16px", color: "#012765"}}>
                                            {review.name}
                                        </Typography>
                                        <Typography sx={{fontSize: 14, opacity: 0.9}}>{review.role}</Typography>
                                    </Box>
                                </Box>

                                {/* Star Rating */}
                                <Box sx={{display: "flex", color: "#FF7F1E", mt: 2, mb: 2}}>
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} fontSize="small"/>
                                    ))}
                                </Box>

                                {/* Review Text (Flexible Height) */}
                                <Typography sx={{mb: 2, flexGrow: 1}}>{review.review}</Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{
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

                        <Box sx={{color: "#012765", pt: 2.4}}>
                            Video Testimonials
                        </Box>
                    </Box>


                    {/* Video Testimonial Text - Moved Below */}


                    {/* Quote Text */}
                    <Typography sx={{textAlign: "center", opacity: 0.7, fontStyle: "italic", mt: 1}}>
                        "MindWell has been life-changing for me. Watch these client stories to see the real impact
                        of our therapeutic approach."
                    </Typography>
                </Box>


                {/* Call to Action */}
                <Box
                    sx={{
                        mt: 6,
                        bgcolor: "#012765",
                        color: "#fff",
                        py: 5.5,
                        px: 7,
                        borderRadius: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box>
                        <Typography variant="h6" sx={{fontWeight: 700, mb: 1}}>
                            Ready to start your mental wellness journey?
                        </Typography>
                        <Typography sx={{opacity: 0.8, width: "90%"}}>
                            Join thousands of students and professionals who have improved their mental wellbeing with
                            MindWell.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        sx={{
                            bgcolor: "#FF7F1E",
                            color: "#fff",
                            fontWeight: 600,
                            px: 3,
                            py: 1.4,
                            "&:hover": {bgcolor: "#E56F1A"},
                        }}
                    >
                        Get Started Today
                    </Button>
                </Box>

            </Container>
        </Box>
    );
}

export default ClientsReview;
