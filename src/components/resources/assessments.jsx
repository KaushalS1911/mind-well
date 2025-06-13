import React, {useState} from "react";
import {Box, Grid, Container, TextField, DialogContent, DialogTitle, Dialog, Button, IconButton} from "@mui/material";
import {useNavigate} from "react-router-dom";
import BoltIcon from "@mui/icons-material/Bolt";
import img1 from "../../assets/images/Resources/Assessments/exam1.jpg";
import img2 from "../../assets/images/Resources/Assessments/Shape_K12.jpeg";
import img3 from "../../assets/images/Resources/Assessments/stress.jpg";
import img4 from "../../assets/images/Resources/Assessments/awerness.jpg";
import img5 from "../../assets/images/Resources/Assessments/Academic_Stress2.jpg";
import img6 from "../../assets/images/Resources/Assessments/Self_Esteem_Scale1.jpg";
import img7 from "../../assets/images/Resources/Assessments/worklife-Balance.jpg";
import img8 from "../../assets/images/Resources/Assessments/cheerful-girl-kid-enjoy-color-painting-with-creativity-ideas-present-messy-hand-home.jpg";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import ShareIcon from '@mui/icons-material/Share';
import { ToastContainer, toast } from 'react-toastify';

function Assessments({sx}) {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [open, setOpen] = useState(false);
    const [assessmentUrl, setAssessmentUrl] = useState("");

    const handleAssessmentClick = (index) => {
        setSelectedIndex(index);
        const url = assessments[index].url;
        setAssessmentUrl(window.location.origin + url);
        navigate(url);
    };

    const handleOpen = (index) => {
        const url = assessments[index].url;
        setAssessmentUrl(window.location.origin + url);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(assessmentUrl);
        const notify = () => toast("Copied!");
        notify();
    };


    const assessments = [
        {
            img: img1,
            title: "Competitive Exam Stress",
            subTitle: "(Age 18-21)",
            description: "Evaluate your anxiety levels and identify potential triggers",
            url: '/assessments/exam-stress',
            questions: "20 questions",
            time: "~ 10 min"
        },
        // {
        //     img: img2,
        //     title: "SHAPE K12",
        //     subTitle: "(Age 18-21)",
        //     description: "Evaluate your anxiety levels and identify potential triggers",
        //     url: '/assessments/shape-k12',
        //     questions: "20 questions",
        //     time: "~ 10 min"
        // },
        {
            img: img3,
            title: "General Stress & Anxiety",
            subTitle: "(Age 18+)",
            description: "Measure your current stress levels and coping mechanisms",
            url: '/assessments/general-stress',
            questions: "12 questions",
            time: "~ 6 min"
        },
        {
            img: img4,
            title: "Emotional Awareness & Regulation",
            subTitle: "(Age 4-10)",
            description: "Understand your emotional intelligence and self-awareness",
            url: '/assessments/emotional-awareness',
            questions: "15 questions",
            time: "~ 7 min"
        },
        {
            img: img5,
            title: "Academic Stress",
            subTitle: "(Age 16-25)",
            description: "Analyze stress levels related to academic pressure and workload",
            url: '/assessments/academic-stress',
            questions: "20 questions",
            time: "~ 10 min"
        },
        {
            img: img6,
            title: "Self-Esteem Scale for Pre-Adolescents",
            subTitle: "(Age 11-13)",
            description: "Measure your self-esteem and confidence levels",
            url: '/assessments/self-esteem-scale',
            questions: "20 questions",
            time: "~ 10 min"
        },
        {
            img: img7,
            title: "Work-Life Balance",
            subTitle: "(Age 21+)",
            description: "Evaluate your balance between work and personal life",
            url: '/assessments/work-life-balance',
            questions: "15 questions",
            time: "~ 7 min"
        },
        // {
        //     img: img8,
        //     title: "Child Learning Ability",
        //     subTitle: "(Age 4–13)",
        //     description: "Assess your child's cognitive strengths, learning style, and academic readiness.",
        //     url: '/assessments/child-learning-ability',
        //     questions: "25 questions",
        //     time: "~ 13 min"
        // },
    ];

    return (
        <Box sx={{
            mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }
        }}>
        <Container maxWidth="xl">
            <Box sx={sx}>
                <Box sx={{p: {xs: 3, md: 5}, bgcolor: "#012765", borderRadius: 3, color: "#fff"}}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <Box sx={{display: "flex", alignItems: "center", mb: "24px"}}>
                                <Box
                                    sx={{
                                        bgcolor: "#FE6A00",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "30px",
                                        padding: "10px",
                                        fontSize: {xs: 16, md: 20},
                                        mr: 2,
                                    }}
                                >
                                    <BoltIcon/>
                                </Box>
                                <Box className={"Montserrat"}
                                     sx={{fontWeight: "700", fontSize: {xs: "24px", md: "30px"}}}>
                                    Self Assessments
                                </Box>
                            </Box>
                            <Box fontSize={{xs: 14, md: 18}} color="#CBD5E1" sx={{mb: "40px"}}>
                                Start with a quick do-it-yourself mental health screening. These tools offer valuable insights into your emotional well-being and can help you determine if you might benefit from professional support. For a deeper understanding, we also recommend proper, professionally administered psychometric tests designed with scientific rigor
                            </Box>
                            <Grid container spacing={2}>
                                <Grid container spacing={2}>
                                    {assessments.map((assessment, index) => (
                                        <Grid item xs={12} md={6} lg={4} key={index}>
                                            <Box
                                                sx={{
                                                    p: 2,
                                                    borderRadius: 2,
                                                    bgcolor: "#FFFFFF1A",
                                                    color: "#fff",
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    ml: {xs:2,md:0}
                                                }}
                                            >
                                                <Box display="flex" alignItems="center"
                                                     sx={{justifyContent: "space-Between"}} mb={1.5}>
                                                    <Box sx={{display: "flex", alignItems: "center"}}>
                                                        <img
                                                            src={assessment.img}
                                                            alt={assessment.title}
                                                            style={{
                                                                width: 40,
                                                                height: 40,
                                                                borderRadius: "50%",
                                                                marginRight: 12,
                                                            }}
                                                        />
                                                        <Box display="flex" flexDirection="column">
                                                            <Box fontWeight={600} sx={{
                                                                fontSize: {xs: 16, md: 17},
                                                                display: "flex",
                                                                alignItems: "center"
                                                            }}>
                                                                {assessment.icon} <span
                                                                style={{marginLeft: 6}}>{assessment.title}</span>
                                                            </Box>
                                                            {assessment.subTitle && (
                                                                <Box sx={{
                                                                    fontSize:14,
                                                                    color: "#fff",
                                                                    fontWeight: 400,
                                                                }}>
                                                                    {assessment.subTitle}
                                                                </Box>
                                                            )}
                                                        </Box>
                                                    </Box>
                                                    <IconButton
                                                        onClick={() => handleOpen(index)}
                                                        sx={{
                                                            backgroundColor: "#FE6A00",
                                                            color: "#fff",
                                                            p: 0.3,
                                                            borderRadius: 2,
                                                            "&:hover": {
                                                                backgroundColor: "#FE6A00"
                                                            }
                                                        }}
                                                    >
                                                        <ShareIcon/>
                                                    </IconButton>

                                                </Box>

                                                <Box color="#CBD5E1" mb={2} sx={{fontSize: 14}}>
                                                    {assessment.description}
                                                </Box>

                                                <Box display="flex" gap={1} alignItems="center" mt={2}>
                                                    <Box
                                                        sx={{
                                                            bgcolor: "#FFFFFF33",
                                                            px: 1.5,
                                                            py: 0.5,
                                                            fontSize: 12,
                                                            color: "#fff",
                                                            borderRadius: 10,
                                                        }}
                                                    >
                                                        {assessment.questions}
                                                    </Box>
                                                    <Box
                                                        sx={{
                                                            bgcolor: "#FFFFFF33",
                                                            px: 1.5,
                                                            py: 0.5,
                                                            fontSize: 12,
                                                            color: "#fff",
                                                            borderRadius: 10,
                                                        }}
                                                    >
                                                        {assessment.time}
                                                    </Box>
                                                </Box>

                                                <Box sx={{flexGrow: 1}}/>

                                                <Box
                                                    sx={{
                                                        alignSelf: "flex-end",
                                                        fontWeight: 400,
                                                        fontSize: 14,
                                                        color: "#FE6A00",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        transition: "0.5s",
                                                        cursor: "pointer",
                                                        mt: {xs: 3},
                                                        '&:hover': {
                                                            color: "#fff",
                                                        },
                                                    }}
                                                    onClick={() => handleAssessmentClick(index)}
                                                >
                                                    TAKE ASSESSMENT <KeyboardDoubleArrowRightIcon/>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Dialog open={open}  onClose={handleClose}>
                <DialogTitle>Share this URL</DialogTitle>
                <DialogContent>
                    <TextField fullWidth value={assessmentUrl} InputProps={{readOnly: true}} sx={{mt: 1}}/>
                    <Button variant="contained" onClick={handleCopy} sx={{mt: 2}}>Copy URL</Button>
                    <ToastContainer />
                </DialogContent>
            </Dialog>
        </Container>
        </Box>
    );
}

export default Assessments;
