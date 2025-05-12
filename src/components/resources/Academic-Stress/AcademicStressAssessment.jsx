// import React, {useState} from 'react';
// import {
//     Box,
//     Container,
//     Typography,
//     Button,
//     Grid,
//     Paper,
//     RadioGroup,
//     FormControlLabel,
//     FormLabel,
//     Checkbox, Radio
// } from '@mui/material';
// import { styled } from '@mui/material/styles';
// import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import img5 from "../../../assets/images/Resources/Assessments/Academic_Stress2.jpg";
// import { useNavigate } from 'react-router-dom';
//
// const StyledPaper = styled(Paper)(({ theme }) => ({
//     padding: theme.spacing(4),
//     backgroundColor: '#FFFFFF',
//     borderRadius: '16px',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
//     height: '100%',
// }));
//
// const IconBox = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     alignItems: 'center',
//     marginBottom: theme.spacing(2),
//     '& .MuiSvgIcon-root': {
//         marginRight: theme.spacing(1),
//         color: '#FF7F1E',
//     },
// }));
//
// const StartButton = styled(Button)(({ theme }) => ({
//     backgroundColor: '#FF7F1E',
//     color: '#FFFFFF',
//     padding: '12px 32px',
//     fontSize: '16px',
//     fontWeight: 600,
//     borderRadius: '8px',
//     textTransform: 'none',
//     '&:hover': {
//         backgroundColor: '#E66C00',
//     },
// }));
//
// const CommonTypography = styled(Typography)(({ theme }) => ({
//     fontFamily: 'Poppins',
//     color: '#4B5563',
//     fontSize: '14px',
//     lineHeight: 1.6,
// }));
//
// const HeaderTypography = styled(Typography)(({ theme }) => ({
//     fontFamily: 'Montserrat',
//     color: '#012765',
//     fontWeight: 700,
//     fontSize: '32px',
//     [theme.breakpoints.down('sm')]: {
//         fontSize: '28px',
//     },
//     [theme.breakpoints.down('xs')]: {
//         fontSize: '24px',
//     },
// }));
//
// const AcademicStressAssessment = () => {
//     const navigate = useNavigate();
//     const [check, setCheck] = useState()
//     const [language, setLanguage] = useState()
//
//     const handleChange = (e) => {
//         setLanguage(e.target.checked)
//         sessionStorage.setItem("language", e.target.value)
//     }
//
//     return (
//         <Box sx={{
//             minHeight: 'calc(100vh - 72px)',
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: '#F3F4F6',
//             mt: { xs: '64px', sm: '72px' },
//             py: { xs: 4, md: 6 },
//         }}>
//             <Container maxWidth="lg" sx={{ my: 'auto' }}>
//                 <Grid container spacing={4} justifyContent="center">
//                     {/* Left Column - Main Content */}
//                     <Grid item xs={12} md={8}>
//                         <StyledPaper>
//                             <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
//                                 <img
//                                     src={img5}
//                                     alt="General Stress and Anxiety"
//                                     style={{
//                                         width: '64px',
//                                         height: '64px',
//                                         borderRadius: '50%',
//                                         marginRight: '16px',
//                                     }}
//                                 />
//                                 <HeaderTypography>
//                                     Academic Stress (Age 16-25)
//                                 </HeaderTypography>
//                             </Box>
//
//                             <CommonTypography sx={{ mb: 4 }}>
//                                 This assessment helps measure your current stress and anxiety levels, identifying potential areas of concern and providing insights into your mental well-being. Your responses will help us understand your situation better and offer appropriate guidance.
//                             </CommonTypography>
//
//                             <Box sx={{ mb: 4 }}>
//                                 <IconBox>
//                                     <TimerOutlinedIcon />
//                                     <CommonTypography>
//                                         Time to complete: ~5 minutes
//                                     </CommonTypography>
//                                 </IconBox>
//                                 <IconBox>
//                                     <HelpOutlineIcon />
//                                     <CommonTypography>
//                                         5 questions to answer
//                                     </CommonTypography>
//                                 </IconBox>
//                                 <IconBox>
//                                     <DescriptionOutlinedIcon />
//                                     <CommonTypography>
//                                         Receive immediate results and recommendations
//                                     </CommonTypography>
//                                 </IconBox>
//                             </Box>
//                             <Box display={{sm: "flex"}} alignItems="center" margin="normal" my={2}
//                                  sx={{fontWeight: 700}} className={"overpass"}>
//                                 <FormLabel sx={{color: '#012765', fontFamily: 'Poppins'}}>Language
//                                     :</FormLabel>
//                                 <RadioGroup
//                                     onChange={handleChange}
//                                     row
//                                 >
//                                     <FormControlLabel value="english" control={<Radio/>} label="English"
//                                                       sx={{color: "#012765", ml: 1}}/>
//                                     <FormControlLabel value="hindi" control={<Radio/>} label="Hindi"
//                                                       sx={{color: "#012765"}}/>
//                                 </RadioGroup>
//                             </Box>
//                             <Box sx={{display: "flex", alignItems: "center"}}>
//                                 <Checkbox onChange={(e) => setCheck(e.target.checked)}/>
//                                 <Box sx={{
//                                     color: "#012765",
//                                 }}>
//                                     I accept the terms and conditions outlined above.
//                                 </Box>
//                             </Box>
//                             <Box sx={{display: {sm: "flex"}, justifyContent: "end"}}>
//                                 <Box sx={{mt: "20px", display: {sm: "flex"}, justifyContent: "end"}}>
//                                     <Button
//                                         onClick={() => navigate('/resources/assessments')}
//                                         sx={{
//                                             backgroundColor: "#FF7F1E",
//                                             py: "5px",
//                                             px: "28px",
//                                             textTransform: "unset",
//                                             fontSize: "18px",
//                                             color: "white",
//                                             borderRadius: "0.375rem",
//                                             "&:hover": {
//                                                 backgroundColor: "#DA5E05",
//                                             },
//                                             mt: "10px",
//                                             marginRight: 1,
//                                             width: {xs: "100%", sm: "unset"}
//                                         }}
//                                     >
//                                         Cancel
//                                     </Button>
//                                     <Button
//                                         onClick={() => navigate("/assessments/academic-stress/academic-assessment-form")}
//                                         disabled={check && language === true ? false : true}
//                                         sx={{
//                                             backgroundColor: "#FF7F1E",
//                                             py: "5px",
//                                             px: "28px",
//                                             textTransform: "unset",
//                                             fontSize: "18px",
//                                             color: "white",
//                                             borderRadius: "0.375rem",
//                                             "&:hover": {
//                                                 backgroundColor: "#DA5E05",
//                                             },
//                                             mt: "10px",
//                                             width: {xs: "100%", sm: "unset"}
//                                         }}
//                                     >
//                                         I Agree
//                                     </Button>
//                                 </Box>
//
//                             </Box>
//
//                             {/*<StartButton*/}
//                             {/*    variant="contained"*/}
//                             {/*    endIcon={<ArrowForwardIcon />}*/}
//                             {/*    onClick={handleStartAssessment}*/}
//                             {/*>*/}
//                             {/*    Start Assessment*/}
//                             {/*</StartButton>*/}
//                         </StyledPaper>
//                     </Grid>
//
//                     {/* Right Column - Additional Info */}
//                     <Grid item xs={12} md={4}>
//                         <StyledPaper>
//                             <HeaderTypography variant="h6" sx={{ mb: 2 }}>
//                                 Before you begin
//                             </HeaderTypography>
//
//                             <Box sx={{ mb: 3 }}>
//                                 {[
//                                     '• Find a quiet, comfortable space where you won’t be interrupted',
//                                     '• Answer honestly - there are no right or wrong answers',
//                                     '• Consider how you’ve been feeling over the past two weeks',
//                                     '• Your responses are confidential and secure',
//                                 ].map((text, index) => (
//                                     <CommonTypography key={index} sx={{ mb: 2 }}>
//                                         {text}
//                                     </CommonTypography>
//                                 ))}
//                             </Box>
//
//                             <Box sx={{
//                                 p: 2,
//                                 bgcolor: '#FFF5EB',
//                                 borderRadius: 2,
//                                 border: '1px solid #FFE4CC'
//                             }}>
//                                 <Typography sx={{
//                                     color: '#FF7F1E',
//                                     fontSize: '14px',
//                                     fontWeight: 600,
//                                     mb: 1,
//                                 }}>
//                                     DISCLAIMER:
//                                 </Typography>
//                                 <CommonTypography>
//                                     This assessment is not a diagnostic tool. If you're experiencing severe distress, please seek professional help immediately.
//                                 </CommonTypography>
//                             </Box>
//                         </StyledPaper>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </Box>
//     );
// };
//
// export default AcademicStressAssessment;










import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img5 from "../../../assets/images/Resources/Assessments/Academic_Stress2.jpg";
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    height: '100%',
}));

const IconBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    '& .MuiSvgIcon-root': {
        marginRight: theme.spacing(1),
        color: '#FF7F1E',
    },
}));

const StartButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#FF7F1E',
    color: '#FFFFFF',
    padding: '12px 32px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#E66C00',
    },
}));

const CommonTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Poppins',
    color: '#4B5563',
    fontSize: '14px',
    lineHeight: 1.6,
}));

const HeaderTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Montserrat',
    color: '#012765',
    fontWeight: 700,
    fontSize: '32px',
    [theme.breakpoints.down('sm')]: {
        fontSize: '28px',
    },
    [theme.breakpoints.down('xs')]: {
        fontSize: '24px',
    },
}));

const AcademicStressAssessment = () => {
    const navigate = useNavigate();

    const handleStartAssessment = () => {
        navigate('/assessments/academic-stress/academic-assessment-form');
    };

    return (
        <Box sx={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: '#F3F4F6',
            mt: { xs: '64px', sm: '72px' },
            py: { xs: 4, md: 6 },
        }}>
            <Container maxWidth="lg" sx={{ my: 'auto' }}>
                <Grid container spacing={4} justifyContent="center">
                    {/* Left Column - Main Content */}
                    <Grid item xs={12} md={8}>
                        <StyledPaper>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                <img
                                    src={img5}
                                    alt="General Stress and Anxiety"
                                    style={{
                                        width: '64px',
                                        height: '64px',
                                        borderRadius: '50%',
                                        marginRight: '16px',
                                    }}
                                />
                                <HeaderTypography>
                                    Academic Stress (Age 16-25)
                                </HeaderTypography>
                            </Box>

                            <CommonTypography sx={{ mb: 4 }}>
                                This assessment helps measure your current stress and anxiety levels, identifying potential areas of concern and providing insights into your mental well-being. Your responses will help us understand your situation better and offer appropriate guidance.
                            </CommonTypography>

                            <Box sx={{ mb: 4 }}>
                                <IconBox>
                                    <TimerOutlinedIcon />
                                    <CommonTypography>
                                        Time to complete: ~5 minutes
                                    </CommonTypography>
                                </IconBox>
                                <IconBox>
                                    <HelpOutlineIcon />
                                    <CommonTypography>
                                        5 questions to answer
                                    </CommonTypography>
                                </IconBox>
                                <IconBox>
                                    <DescriptionOutlinedIcon />
                                    <CommonTypography>
                                        Receive immediate results and recommendations
                                    </CommonTypography>
                                </IconBox>
                            </Box>

                            <StartButton
                                variant="contained"
                                endIcon={<ArrowForwardIcon />}
                                onClick={handleStartAssessment}
                            >
                                Start Assessment
                            </StartButton>
                        </StyledPaper>
                    </Grid>

                    {/* Right Column - Additional Info */}
                    <Grid item xs={12} md={4}>
                        <StyledPaper>
                            <HeaderTypography variant="h6" sx={{ mb: 2 }}>
                                Before you begin
                            </HeaderTypography>

                            <Box sx={{ mb: 3 }}>
                                {[
                                    '• Find a quiet, comfortable space where you won’t be interrupted',
                                    '• Answer honestly - there are no right or wrong answers',
                                    '• Consider how you’ve been feeling over the past two weeks',
                                    '• Your responses are confidential and secure',
                                ].map((text, index) => (
                                    <CommonTypography key={index} sx={{ mb: 2 }}>
                                        {text}
                                    </CommonTypography>
                                ))}
                            </Box>

                            <Box sx={{
                                p: 2,
                                bgcolor: '#FFF5EB',
                                borderRadius: 2,
                                border: '1px solid #FFE4CC'
                            }}>
                                <Typography sx={{
                                    color: '#FF7F1E',
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    mb: 1,
                                }}>
                                    Note:
                                </Typography>
                                <CommonTypography>
                                    This assessment is not a diagnostic tool. If you're experiencing severe distress, please seek professional help immediately.
                                </CommonTypography>
                            </Box>
                        </StyledPaper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default AcademicStressAssessment;
