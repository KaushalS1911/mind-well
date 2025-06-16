// import React, {useEffect, useState} from 'react';
// import {
//     Box,
//     Container,
//     Typography,
//     Button,
//     Paper,
//     Radio,
//     RadioGroup,
//     FormControlLabel,
//     FormControl,
//     LinearProgress,
//     CircularProgress,
//     Grid,
//     Card, Dialog, DialogActions,
// } from '@mui/material';
// import {styled} from '@mui/material/styles';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import {useNavigate} from 'react-router-dom';
// import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
// import PdfView from "../../global/pdf-view.jsx";
//
// const StyledPaper = styled(Paper)(({theme}) => ({
//     padding: theme.spacing(4),
//     backgroundColor: '#FFFFFF',
//     borderRadius: '16px',
//     boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
// }));
//
// const NavigationButton = styled(Button)(({theme}) => ({
//     padding: '12px 24px',
//     fontSize: '16px',
//     fontWeight: 600,
//     borderRadius: '8px',
//     textTransform: 'none',
//     fontFamily: 'Poppins',
// }));
//
// const englishScore = (score) => {
//     if (score >= 61 && score <= 80) {
//         return {
//             level: "Strong Work-Life Balance",
//             interpretation: "This Self-Assessment shows an indicative result based on your responses. These are not Psychometric Tests. For accurate and scientific approach, you should consult professional psychology practitioners.",
//             recommendations: [
//                 {
//                     description: "\"Your responses reflect a strong ability to balance work and personal life effectively. You set clear boundaries, prioritize self-care, and manage your time well, which leads to both professional success and personal satisfaction. Continue practicing these healthy habits and remain mindful of maintaining this balance even during challenging times."
//                 },
//             ]
//         };
//     } else if (score >= 41 && score <= 60) {
//         return {
//             level: "Moderate Work-Life Balance; Improvement Needed",
//             interpretation: "This Self-Assessment shows an indicative result based on your responses. These are not Psychometric Tests. For accurate and scientific approach, you should consult professional psychology practitioners.",
//             recommendations: [
//                 {
//                     description: "You have a fair degree of balance between your work and personal life, but some areas may need attention. Consider focusing on improving specific aspects such as stress management, setting clearer boundaries, or dedicating more time to personal well-being. By addressing these areas, you can elevate your overall sense of harmony and satisfaction."
//                 },
//             ]
//         };
//     } else if (score <= 40) {
//         return {
//             level: "Significant Challenges Requiring Immediate Attention",
//             interpretation: "This Self-Assessment shows an indicative result based on your responses. These are not Psychometric Tests. For accurate and scientific approach, you should consult professional psychology practitioners.",
//             recommendations: [
//                 {
//                     description: "Your score indicates significant challenges in maintaining a healthy work-life balance. You may experience stress, burnout, or dissatisfaction due to a lack of boundaries or insufficient time for personal needs. It's essential to reevaluate your priorities, develop better time management strategies, and incorporate regular self-care practices into your routine. Seeking guidance from a mentor, counselor, or professional may also be beneficial in helping you regain balance and improve your overall well-being."
//                 },
//             ]
//         };
//     }
// }
// const hindiScore = (score) => {
//     if (score >= 61 && score <= 80) {
//         return {
//             level: " उच्च स्कोर ",
//             interpretation: "आपने उत्कृष्ट तनाव प्रबंधन, भावनात्मक दृढ़ता, और निर्णय लेने के कौशल का प्रदर्शन किया है, जो आपकी परीक्षा की तैयारी के लिए बहुत महत्वपूर्ण हैं। दबाव में शांत रहने और सकारात्मक सोच बनाए रखने की आपकी क्षमता सराहनीय है, और ये गुण न केवल आपकी परीक्षाओं में बल्कि आपके भविष्य के करियर में भी आपको अच्छी तरह से सेवा देंगे। अच्छा काम जारी रखें, अपने कौशल को परिष्कृत करते रहें, और याद रखें कि निरंतर प्रयास और आत्मविश्वास आपके लक्ष्यों को प्राप्त करने की कुंजी हैं। आपके दृढ़ संकल्प और दृढ़ता के साथ, आप किसी भी चुनौती को पार करने के लिए अच्छी तरह से सुसज्जित हैं।",
//             recommendations: [
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//             ]
//         };
//     }
//     else if (score >= 41 && score <= 60) {
//         return {
//             level: "मध्यम स्कोर ",
//             interpretation: "आपने अच्छे कौशल और व्यवहार का प्रदर्शन किया है, लेकिन कुछ क्षेत्रों में सुधार की आवश्यकता है। आने वाली चुनौतियों के लिए पूरी तरह से तैयार होने के लिए अपने तनाव प्रबंधन तकनीकों और निर्णय लेने की रणनीतियों को बढ़ाने पर ध्यान दें। तनाव प्रबंधन कौशल को विकसित करना आपको दबाव में शांत और केंद्रित रहने में मदद करेगा, जबकि निर्णय लेने की रणनीतियों को परिष्कृत करना सुनिश्चित करेगा कि आप जटिल परिस्थितियों को आत्मविश्वास के साथ संभाल सकें। इन क्षेत्रों पर काम करके, आप किसी भी बाधा का मुकाबला करने और अपने लक्ष्यों को अधिक प्रभावी ढंग से प्राप्त करने के लिए बेहतर सुसज्जित होंगे।\"",
//             recommendations: [
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//             ]
//         };
//     } else if (score <= 40) {
//         return {
//             level: "मध्यम स्कोर",
//             interpretation: "आपमें संभावना है, लेकिन कई क्षेत्रों में विशेष अभिवृद्धि की आवश्यकता है। अपनी रूटीन में नियमित तनाव-मुक्ति तकनीकों, भावनात्मक बुद्धिमत्ता प्रशिक्षण, और संरचित निर्णय लेने की प्रथाओं को शामिल करने का विचार करें। तनाव-मुक्ति तकनीकों का अभ्यास आपको दबाव के तहत शांत रहने और सकारात्मक दृष्टिकोण बनाए रखने में मदद करेगा, भावनात्मक बुद्धिमत्ता प्रशिक्षण आपको अपनी भावनाओं को समझने और प्रभावी रूप से प्रबंधित करने में मदद करेगा, और संरचित निर्णय लेने की प्रथाएँ आपको जटिल स्थितियों को समझने और उन्हें हल करने में मदद करेंगी। इन सभी उपायों को अपनाकर, आप अपनी क्षमताओं को सुधार सकते हैं और अपने लक्ष्यों की दिशा में प्रगति कर सकते हैं",
//             recommendations: [
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//             ]
//         };
//     }
// }
//
// const getScoreCategory = (score,language) => {
//     if(language == "english") {
//         return englishScore(score);
//     }else{
//         return hindiScore(score);
//     }
// };
//
// const GaugeChartComponent = ({score, maxScore}) => {
//     const percentage = (score / maxScore) * 100;
//     const data = [
//         {name: 'Score', value: percentage},
//         {name: 'Remaining', value: 100 - percentage}
//     ];
//
//     const getColor = (percentage) => {
//         if (percentage <= 25) return '#4CAF50';
//         if (percentage <= 50) return '#FFC107';
//         if (percentage <= 75) return '#FF9800';
//         return '#F44336';
//     };
//
//     const getStressLevel = (percentage) => {
//         if (percentage <= 25) return 'Low';
//         if (percentage <= 50) return 'Moderate';
//         if (percentage <= 75) return 'High';
//         return 'Severe';
//     };
//
//     return (
//         <Box sx={{
//             width: '100%',
//             height: 300,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             mb: 4,
//             position: 'relative'
//         }}>
//             <Box sx={{
//                 width: '100%',
//                 height: '100%',
//                 position: 'relative',
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                     <PieChart>
//                         <Pie
//                             data={data}
//                             cx="50%"
//                             cy="50%"
//                             innerRadius={80}
//                             outerRadius={100}
//                             startAngle={90}
//                             endAngle={-270}
//                             paddingAngle={5}
//                             dataKey="value"
//                         >
//                             <Cell fill={getColor(percentage)}/>
//                             <Cell fill="#E6EAF3"/>
//                         </Pie>
//                         <Tooltip
//                             formatter={(value) => [`${value.toFixed(1)}%`, '']}
//                             contentStyle={{
//                                 backgroundColor: '#FFFFFF',
//                                 border: '1px solid #E6EAF3',
//                                 borderRadius: '8px',
//                                 fontFamily: 'Poppins'
//                             }}
//                         />
//                     </PieChart>
//                 </ResponsiveContainer>
//                 <Box sx={{
//                     position: 'absolute',
//                     textAlign: 'center',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     alignItems: 'center',
//                     gap: 1
//                 }}>
//                     <Typography variant="h2" sx={{
//                         color: getColor(percentage),
//                         fontWeight: 700,
//                         fontFamily: 'Montserrat',
//                         lineHeight: 1,
//                         fontSize: {xs: '3rem', sm: '4rem'}
//                     }}>
//                         {score}
//                     </Typography>
//                     <Typography sx={{
//                         color: '#4B5563',
//                         fontSize: '1rem',
//                         fontFamily: 'Poppins',
//                         fontWeight: 500
//                     }}>
//                         Points
//                     </Typography>
//                 </Box>
//             </Box>
//             <Box sx={{
//                 mt: 2,
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 1,
//                 backgroundColor: `${getColor(percentage)}20`,
//                 padding: '8px 16px',
//                 borderRadius: '20px',
//                 border: `1px solid ${getColor(percentage)}40`
//             }}>
//                 <Typography sx={{
//                     color: getColor(percentage),
//                     fontSize: '1rem',
//                     fontFamily: 'Poppins',
//                     fontWeight: 600
//                 }}>
//                     {getStressLevel(percentage)} Stress Level
//                 </Typography>
//             </Box>
//         </Box>
//     );
// };
//
// const WorkLifeBalanceQuestions = () => {
//     const navigate = useNavigate();
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [answers, setAnswers] = useState(Array(20).fill(''));
//     const [showResults, setShowResults] = useState(false);
//     const [totalScore, setTotalScore] = useState(0);
//     const [language, setLanguage] = useState(null);
//
//     useEffect(() => {
//         const lang = sessionStorage.getItem('language');
//         setLanguage(lang);
//     }, []);
//
//     const questions = language === "english" ? [
//         {
//             id: 1,
//             text: " How often do you feel you have enough time for both work-related and personal activities?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 2,
//             text: "How frequently do you finish your work within scheduled hours?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 3,
//             text: "How confident are you in managing your time between professional and personal responsibilities?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "Very", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//         {
//             id: 4,
//             text: "How often do you feel overwhelmed by your job demands?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 5,
//             text: " How frequently does work-related stress affect your personal life?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 6,
//             text: "How often do you feel emotionally present when spending time with family and friends?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 7,
//             text: "How confident are you in setting boundaries between your work and personal life?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "Very", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//         {
//             id: 8,
//             text: "How often does your workload allow you to take breaks or time off without guilt?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 9,
//             text: "How comfortable do you feel saying no to extra work that could affect your personal time?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "Very", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//         {
//             id: 10,
//             text: "How often do you engage in hobbies or personal activities you enjoy?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 11,
//             text: "How satisfied are you with the quality time you spend with your loved ones?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "Very", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//         {
//             id: 12,
//             text: "How often do your personal relationships feel unaffected by work responsibilities?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 13,
//             text: "How regularly do you make time for activities that support your physical or mental well-being?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 14,
//             text: "How frequently does work negatively impact your sleep or eating habits? ",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 15,
//             text: "How satisfied are you with the balance between your professional ambitions and personal happiness?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "Very", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//     ] : [
//         {
//             id: 16,
//             text: "आप सामान्यतः उच्च दबाव वाली स्थितियों को कैसे संभालते हैं?",
//             options: [
//                 {label: "शांत और केंद्रित रहते हैं", value: "0"},
//                 {label: "चिंतित हो जाते हैं लेकिन फिर भी संभालते हैं", value: "1"},
//                 {label: "संयम बनाए रखने में संघर्ष करते हैं", value: "2"},
//                 {label: "स्थिति से बचने की कोशिश करते हैं", value: "3"}
//             ]
//         },
//         {
//             id: 17,
//             text: "जब आपके पास कई समय-सीमाएं होती हैं, तो आप कार्यों को कैसे प्राथमिकता देते हैं?",
//             options: [
//                 {label: "तत्कालता और महत्व के आधार पर", value: "0"},
//                 {label: "केवल समय-सीमाओं के आधार पर", value: "1"},
//                 {label: "बेतरतीब ढंग से", value: "2"},
//                 {label: "अक्सर उलझन में पड़ जाते हैं और निर्णय लेने में देरी करते हैं", value: "3"}
//             ]
//         }
//     ]
//
//     const handleAnswerChange = (event) => {
//         const newAnswers = [...answers];
//         newAnswers[currentQuestion] = event.target.value;
//         setAnswers(newAnswers);
//     };
//
//     const calculateScore = () => {
//         return answers.reduce((sum, value) => sum + parseInt(value || '0', 10), 0);
//     };
//
//     const handleNext = () => {
//         if (currentQuestion < questions.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//         } else {
//             const score = calculateScore();
//             setTotalScore(score);
//             setShowResults(true);
//         }
//     };
//
//     const handlePrevious = () => {
//         if (currentQuestion > 0) {
//             setCurrentQuestion(currentQuestion - 1);
//         }
//     };
//
//     const progress = ((currentQuestion + 1) / questions.length) * 100;
//
//     if (showResults) {
//         const result = getScoreCategory(totalScore,language);
//         const percentage = (totalScore / 80) * 100;
//
//         return (
//             <>
//                 <Container maxWidth="lg">
//                     <Box
//                         mt={12}
//                         sx={{
//                             py: 5,
//                             px: {xs: 2, md: 4},
//                             minHeight: '100vh',
//                             display: 'flex',
//                             flexDirection: 'column',
//                         }}>
//                         {/* Header Section */}
//                         <Box sx={{textAlign: 'center', mb: 4}}>
//                             <Typography
//                                 className={"Montserrat"}
//                                 variant="h3"
//                                 sx={{
//                                     color: '#0D2152',
//                                     fontWeight: 700,
//                                     mb: 2,
//                                     fontSize: {
//                                         xs: '1.7rem',
//                                         sm: '1.85rem',
//                                         md: '2rem',
//                                         lg: '2.125rem'
//                                     },
//                                 }}
//                             >
//                                 Your Assessment Results
//                             </Typography>
//
//                         </Box>
//
//                         <Grid container spacing={4}>
//                             {/* Score Display Section */}
//                             <Grid item xs={12} md={6}>
//                                 <Card sx={{
//                                     p: 4,
//                                     height: '100%',
//                                     background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
//                                     boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
//                                     borderRadius: 4,
//                                     display: 'flex',
//                                     flexDirection: 'column',
//                                     alignItems: 'center',
//                                     justifyContent: "space-between"
//                                 }}>
//                                     <Box>
//                                         <Box sx={{
//                                             position: 'relative',
//                                             display: 'flex',
//                                             justifyContent: 'center',
//                                             alignItems: 'center',
//                                             mb: 3
//                                         }}>
//                                             <CircularProgress
//                                                 variant="determinate"
//                                                 value={percentage}
//                                                 size={200}
//                                                 thickness={4}
//                                                 sx={{
//                                                     color: totalScore >= 61 ? '#ff4d4d' :
//                                                         totalScore >= 41 ? '#ffa500' :
//                                                             totalScore >= 21 ? '#ffdd00' : totalScore >= 11 ? '#90EE90' : '#47e447',
//                                                 }}
//                                             />
//                                             {/*<CircularProgress*/}
//                                             {/*    variant="determinate"*/}
//                                             {/*    value={percentage}*/}
//                                             {/*    size={200}*/}
//                                             {/*    thickness={4}*/}
//                                             {/*    sx={{*/}
//                                             {/*        color: totalScore >= 61 ? '#ff4d4d' :*/}
//                                             {/*            totalScore >= 41 ? '#ffa500' :*/}
//                                             {/*                totalScore >= 21 ? '#ffff00' :*/}
//                                             {/*                    totalScore >= 11 ? '#90EE90' : '#00ff00',*/}
//                                             {/*        position: 'absolute',*/}
//                                             {/*        left: 34,*/}
//                                             {/*    }}*/}
//                                             {/*/>*/}
//                                             <Box
//                                                 sx={{
//                                                     position: 'absolute',
//                                                     display: 'flex',
//                                                     flexDirection: 'column',
//                                                     alignItems: 'center',
//                                                 }}
//                                             >
//                                                 <Typography variant="h3" sx={{fontWeight: 700, color: '#0D2152'}}>
//                                                     {totalScore}
//                                                 </Typography>
//                                                 <Typography variant="h5" sx={{color: '#4A5568'}}>
//                                                     out of 80
//                                                 </Typography>
//                                             </Box>
//                                         </Box>
//
//                                         <Typography
//                                             variant="h5"
//                                             sx={{
//                                                 color: '#F5811E',
//                                                 fontWeight: 600,
//                                                 mb: 2,
//                                                 textAlign: 'center',
//                                             }}
//                                         >
//                                             {result.level}
//                                         </Typography>
//                                     </Box>
//                                     <Typography
//                                         variant="body1"
//                                         sx={{
//                                             p: 2.5,
//                                             borderRadius: 2,
//                                             bgcolor: 'rgb(227,234,246)',
//                                             border: '1px solid rgba(245, 129, 30, 0.1)',
//                                             transition: 'transform 0.2s',
//                                             textAlign: "justify",
//                                             '&:hover': {
//                                                 transform: 'translateY(-2px)',
//                                                 boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
//                                             }
//                                         }}
//                                     >
//                                         {result.interpretation}
//                                     </Typography>
//                                 </Card>
//                             </Grid>
//
//                             {/* Recommendations Section */
//                             }
//                             <Grid item xs={12} md={6}>
//                                 <Card sx={{
//                                     p: 4,
//                                     height: '100%',
//                                     background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
//                                     boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
//                                     borderRadius: 4
//                                 }}>
//                                     <Box sx={{
//                                         display: 'flex',
//                                         alignItems: 'center',
//                                         mb: 2
//                                     }}>
//                                         <TipsAndUpdatesIcon sx={{color: '#F5811E', mr: 2, fontSize: 30}}/>
//                                         <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
//                                             Recommendations
//                                         </Typography>
//                                     </Box>
//
//                                     <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
//                                         {result.recommendations.map((rec, index) => (
//                                             <Box
//                                                 key={index}
//                                                 sx={{
//                                                     p: 2.5,
//                                                     borderRadius: 2,
//                                                     bgcolor: 'rgba(245, 129, 30, 0.05)',
//                                                     border: '1px solid rgba(245, 129, 30, 0.1)',
//                                                     transition: 'transform 0.2s',
//                                                     '&:hover': {
//                                                         transform: 'translateY(-2px)',
//                                                         boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
//                                                     }
//                                                 }}
//                                             >
//                                                 <Typography
//                                                     variant="h6"
//                                                     sx={{
//                                                         color: '#F5811E',
//                                                         fontSize: "19px",
//                                                         fontWeight: 600,
//                                                         mb: 1,
//                                                         display: 'flex',
//                                                         alignItems: 'center',
//                                                         gap: 1
//                                                     }}
//                                                 >
//                                                     {/*<AssignmentTurnedInIcon sx={{fontSize: 20}}/>*/}
//                                                     {rec.title}
//                                                 </Typography>
//                                                 <Typography variant="body1"
//                                                             sx={{color: '#4A5568', textAlign: "justify",}}>
//                                                     {rec.description}
//                                                 </Typography>
//                                             </Box>
//                                         ))}
//                                     </Box>
//                                 </Card>
//                             </Grid>
//                         </Grid>
//
//                         {/* Action Buttons */
//                         }
//                         <Box
//                             sx={{
//                                 display: "flex",
//                                 gap: 2,
//                                 justifyContent: "center",
//                                 mt: 4,
//                             }}
//                         >
//                             {/* Save Results Button - Downloads PDF */}
//                             <PDFDownloadLink
//                                 document={<PdfView data={{
//                                     totalScore: totalScore,
//                                     level: result.level,
//                                     interpretation: result.interpretation,
//                                     recommendations: result.recommendations
//                                 }}/>}
//                                 fileName="Work_Life_Balance_Report.pdf"
//                                 style={{textDecoration: "none"}}
//                             >
//                                 {({loading}) => (
//                                     <Button
//                                         variant="outlined"
//                                         sx={{
//                                             color: "#F5811E",
//                                             borderColor: "#F5811E",
//                                             py: 1.5,
//                                             px: 4,
//                                             "&:hover": {
//                                                 borderColor: "#E26C0A",
//                                                 bgcolor: "rgba(245, 129, 30, 0.1)",
//                                             },
//                                         }}
//                                     >
//                                         {loading ? "Preparing..." : "Download Results"}
//                                     </Button>
//                                 )}
//                             </PDFDownloadLink>
//
//                             <Button
//                                 variant="contained"
//                                 onClick={() => navigate("/resources/assessments")}
//                                 sx={{
//                                     bgcolor: "#F5811E",
//                                     color: "#fff",
//                                     py: 1.5,
//                                     px: 4,
//                                     "&:hover": {bgcolor: "#E26C0A"},
//                                 }}
//                             >
//                                 Return to Assessments
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Container>
//             </>
//         );
//     }
//
//     return (
//         <Box sx={{
//             minHeight: 'calc(100vh - 72px)',
//             display: 'flex',
//             alignItems: 'center',
//             backgroundColor: '#F3F4F6',
//             mt: {xs: '64px', sm: '72px'},
//             py: {xs: 4, md: 6},
//         }}>
//             <Container maxWidth="md">
//                 <StyledPaper>
//                     <Box sx={{mb: 4}}>
//                         <Typography variant="h6" sx={{
//                             mb: 1,
//                             color: '#012765',
//                             fontFamily: 'Montserrat'
//                         }}>
//                             Question {currentQuestion + 1} of {questions.length}
//                         </Typography>
//                         <LinearProgress
//                             variant="determinate"
//                             value={progress}
//                             sx={{
//                                 height: 8,
//                                 borderRadius: 4,
//                                 backgroundColor: '#E6EAF3',
//                                 '& .MuiLinearProgress-bar': {
//                                     backgroundColor: '#FF7F1E',
//                                 }
//                             }}
//                         />
//                     </Box>
//
//                     <Typography sx={{
//                         mb: 4,
//                         color: '#012765',
//                         fontSize: '20px',
//                         fontWeight: 600,
//                         lineHeight: 1.5,
//                         fontFamily: 'Poppins'
//                     }}>
//                         {questions[currentQuestion].text}
//                     </Typography>
//
//                     <FormControl component="fieldset" sx={{width: '100%', mb: 4}}>
//                         <RadioGroup
//                             value={answers[currentQuestion]}
//                             onChange={handleAnswerChange}
//                         >
//                             {questions[currentQuestion].options.map((option) => (
//                                 <FormControlLabel
//                                     key={option.label}
//                                     value={option.value}
//                                     control={
//                                         <Radio
//                                             sx={{
//                                                 color: '#012765',
//                                                 '&.Mui-checked': {
//                                                     color: '#FF7F1E',
//                                                 },
//                                             }}
//                                         />
//                                     }
//                                     label={
//                                         <Typography sx={{
//                                             fontFamily: 'Poppins',
//                                             fontSize: '16px',
//                                             color: '#4B5563'
//                                         }}>
//                                             {option.label}
//                                         </Typography>
//                                     }
//                                     sx={{
//                                         mb: 1,
//                                         p: 1.5,
//                                         borderRadius: 2,
//                                         width: '100%',
//                                         backgroundColor: answers[currentQuestion] === option.value ? '#FFF5EB' : 'transparent',
//                                         '&:hover': {
//                                             backgroundColor: '#F8FAFC',
//                                         },
//                                     }}
//                                 />
//                             ))}
//                         </RadioGroup>
//                     </FormControl>
//
//                     <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
//                         {currentQuestion !== 0 ?
//                             <NavigationButton
//                                 variant="outlined"
//                                 startIcon={<ArrowBackIcon/>}
//                                 onClick={handlePrevious}
//                                 sx={{color: '#012765', borderColor: '#012765'}}
//                             >
//                                 Back
//                             </NavigationButton> : <Box/>}
//                         <NavigationButton
//                             variant="contained"
//                             endIcon={<ArrowForwardIcon/>}
//                             onClick={handleNext}
//                             disabled={!answers[currentQuestion]}
//                             sx={{
//                                 backgroundColor: '#FF7F1E',
//                                 '&:hover': {backgroundColor: '#E66C00'},
//                                 '&.Mui-disabled': {
//                                     backgroundColor: '#E6EAF3',
//                                     color: '#9CA3AF',
//                                 }
//                             }}
//                         >
//                             {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
//                         </NavigationButton>
//                     </Box>
//                 </StyledPaper>
//             </Container>
//         </Box>
//     );
// };
//
// export default WorkLifeBalanceQuestions;


import React, {useEffect, useState} from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Paper,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    LinearProgress,
    CircularProgress,
    Grid,
    Card, Dialog, DialogActions,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import PdfView from "../../global/pdf-view.jsx";
import {GaugeComponent} from "react-gauge-component";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

const StyledPaper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(4),
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
}));

const NavigationButton = styled(Button)(({theme}) => ({
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '8px',
    textTransform: 'none',
    fontFamily: 'Poppins',
}));

const questions = [
    {
        id: 1,
        text: "How often do you feel you have enough time for both work-related and personal activities?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 2,
        text: "How frequently do you finish your work within scheduled hours?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 3,
        text: "How confident are you in managing your time between professional and personal responsibilities?",
        options: [
            {label: "Not at all", value: "1"},
            {label: "Slightly", value: "2"},
            {label: "Moderately", value: "3"},
            {label: "Very", value: "4"},
            {label: "Extremely", value: "5"}
        ]
    },
    {
        id: 4,
        text: "How often do you feel overwhelmed by your job demands?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 5,
        text: " How frequently does work-related stress affect your personal life?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 6,
        text: "How often do you feel emotionally present when spending time with family and friends?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 7,
        text: "How confident are you in setting boundaries between your work and personal life?",
        options: [
            {label: "Not at all", value: "1"},
            {label: "Slightly", value: "2"},
            {label: "Moderately", value: "3"},
            {label: "Very", value: "4"},
            {label: "Extremely", value: "5"}
        ]
    },
    {
        id: 8,
        text: "How often does your workload allow you to take breaks or time off without guilt?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 9,
        text: "How comfortable do you feel saying no to extra work that could affect your personal time?",
        options: [
            {label: "Not at all", value: "1"},
            {label: "Slightly", value: "2"},
            {label: "Moderately", value: "3"},
            {label: "Very", value: "4"},
            {label: "Extremely", value: "5"}
        ]
    },
    {
        id: 10,
        text: "How often do you engage in hobbies or personal activities you enjoy?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 11,
        text: "How satisfied are you with the quality time you spend with your loved ones?",
        options: [
            {label: "Not at all", value: "1"},
            {label: "Slightly", value: "2"},
            {label: "Moderately", value: "3"},
            {label: "Very", value: "4"},
            {label: "Extremely", value: "5"}
        ]
    },
    {
        id: 12,
        text: "How often do your personal relationships feel unaffected by work responsibilities?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 13,
        text: "How regularly do you make time for activities that support your physical or mental well-being?",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 14,
        text: "How frequently does work negatively impact your sleep or eating habits? ",
        options: [
            {label: "Never", value: "1"},
            {label: "Rarely", value: "2"},
            {label: "Sometimes", value: "3"},
            {label: "Often", value: "4"},
            {label: "Always", value: "5"}
        ]
    },
    {
        id: 15,
        text: "How satisfied are you with the balance between your professional ambitions and personal happiness?",
        options: [
            {label: "Not at all", value: "1"},
            {label: "Slightly", value: "2"},
            {label: "Moderately", value: "3"},
            {label: "Very", value: "4"},
            {label: "Extremely", value: "5"}
        ]
    },
];

const getScoreCategory = (score) => {
    if (score >= 60 && score <= 75) {
        return {
            level: "Strong Work-Life Balance",
            Analysis: "Your responses indicate that you have a strong and consistent ability to manage your professional and personal life effectively. You appear to use your time well, set healthy boundaries, handle stress constructively, and make space for personal fulfillment and relationships.",
            interpretation: "This balance suggests that you are highly self-aware and intentional in how you spend your time and energy. You likely complete tasks within work hours, engage meaningfully with your loved ones, maintain your well-being, and preserve space for hobbies or relaxation.",
            recommendations: ["To maintain this level of balance, continue nurturing the habits that work well for you. Keep checking in with yourself during busy or stressful periods, and don’t hesitate to recalibrate if needed. You may also find it rewarding to support others by sharing tips or practices that help you manage well."],
            actionPlan: ["As someone who already demonstrates strong work-life balance, your main goal should be to sustain and protect this rhythm. Regular self-reflection every few months can help you stay grounded. Take time to celebrate your efforts and, when possible, mentor colleagues or friends who may be struggling. If you're part of a team, you might offer to lead informal discussions or sessions on time management or well-being. Most importantly, continue prioritizing rest, personal time, and emotional presence, even during professional peaks."],
            supportMessage: "You’re doing great! To keep thriving, explore our expert-backed tips and well-being resources. And if you're ever curious, the app also offers ways to guide others who may benefit from your strong habits."
        };
    } else if (score >= 45 && score <= 59) {
        return {
            level: "Moderate Work-Life Balance (Needs Improvement)",
            Analysis: "Your answers suggest that you are managing work and personal responsibilities reasonably well, but with occasional strain or imbalance in specific areas. You may find yourself struggling to disconnect from work, facing stress spillover into personal time, or sacrificing self-care more often than you'd like.",
            interpretation: "This moderate balance is common and manageable, but it can become draining if left unaddressed. You might be doing well overall but may feel stretched, guilty for taking breaks, or uncertain about how to set boundaries or say no when needed.",
            recommendations: ["Now is a great time to pause and explore what’s consuming more of your energy than necessary. Identify which habits, expectations, or routines might need adjusting. Focus on strengthening stress management skills, creating clearer boundaries, and reclaiming more time for activities that energize and fulfill you."],
            actionPlan: ["To improve your work-life balance, start by identifying one or two small but meaningful changes. For example, you could try blocking specific hours for uninterrupted personal time or limiting after-hours work communication. Explore simple relaxation techniques like deep breathing or journaling to handle stress. Setting weekly personal goals—like reconnecting with a hobby, taking short breaks, or spending tech-free time with family—can help bring intentional balance. Also, learn to communicate boundaries confidently and tactfully. With these focused efforts, you can shift from a place of occasional imbalance to a more consistent and rewarding routine."],
            supportMessage: "\"You’re doing fairly well, but some support could make things smoother. You can explore practical tips, guided tools, and expert advice available on the app to help strengthen your balance and reduce stress.\""
        };
    } else {
        return {
            level: "Significant Challenges (Needs Immediate Attention)",
            Analysis: "Your responses reflect a high level of strain, with work demands likely overshadowing personal needs and well-being. You may feel overwhelmed, emotionally exhausted, disconnected from loved ones, or unable to prioritize self-care or boundaries.",
            interpretation: "This level of imbalance can seriously impact your physical health, emotional stability, and relationships if not addressed soon. It indicates a strong need for immediate adjustments in your routine, expectations, and support systems. The good news is that with focused attention and small intentional steps, you can regain a sense of control and fulfillment.",
            recommendations: ["Begin by acknowledging that it's okay to ask for help or make changes. It’s essential to reevaluate how you manage your time, expectations, and emotional energy. Consider setting very clear start and end times for your workday. Practice saying no to non-urgent tasks that interfere with your personal time, and reintroduce basic self-care practices like proper meals, rest, and movement into your routine."],
            actionPlan: ["Your priority should be to slow down and reset. Start by dedicating one small block of time each day just for yourself—whether it's a quiet walk, listening to music, or even doing nothing at all. If you feel overwhelmed, talking to a professional counselor, mentor, or trusted peer can offer valuable support and perspective. It’s also important to review your current workload—identify what is essential and what can be delegated or rescheduled. Build simple, non-negotiable personal rituals into your day: regular meals, 7–8 hours of sleep, limited screen time before bed, and short breaks every few hours. Rebuilding balance is not about drastic change but steady, compassionate choices that prioritize you."],
            supportMessage: "You don’t have to navigate this alone. The app offers guided support, self-care resources, and expert tools designed to help you rebuild your work-life balance—step by step, at your pace."
        };
    }
};


const WorkLifeBalanceQuestions = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(20).fill(''));
    const [showResults, setShowResults] = useState(false);
    const [totalScore, setTotalScore] = useState(0);

    const handleAnswerChange = (event) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = event.target.value;
        setAnswers(newAnswers);
    };

    const calculateScore = () => {
        return answers.reduce((sum, value) => sum + parseInt(value || '0', 10), 0);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            const score = calculateScore();
            setTotalScore(score);
            setShowResults(true);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    if (showResults) {
        const result = getScoreCategory(totalScore);
        const percentage = (totalScore / 75) * 100;

        return (
            <>
                <Container maxWidth="lg">
                    <Box
                        mt={12}
                        sx={{
                            py: 5,
                            px: {xs: 2, md: 4},
                            minHeight: '100vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: "center",
                        }}>
                        {/* Header Section */}
                        <Box sx={{textAlign: 'center', mb: 4}}>
                            <Typography
                                className={"Montserrat"}
                                variant="h3"
                                sx={{
                                    color: '#0D2152',
                                    fontWeight: 700,
                                    mb: 2,
                                    fontSize: {
                                        xs: '1.7rem',
                                        sm: '1.85rem',
                                        md: '2rem',
                                        lg: '2.125rem'
                                    },
                                }}
                            >
                                Your Assessment Results
                            </Typography>

                        </Box>

                        <Grid container spacing={4} sx={{mb:2}}>
                            {/* Score Display Section */}
                            <Grid item xs={12} md={6}>
                                <Card sx={{
                                    p: 4,
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    borderRadius: 4,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: "space-between"
                                }}>
                                    <Box>
                                        <Box sx={{
                                            position: 'relative',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            mb: 3
                                        }}>
                                            <GaugeComponent
                                                value={percentage}
                                                type="radial"
                                                style={{width: 300}}
                                                labels={{
                                                    valueLabel: {
                                                        formatTextValue: (value) => value,
                                                        maxDecimalDigits: 0,
                                                        matchColorWithArc: true,
                                                        style: {borderColor: 'none', fontSize: "50px"}
                                                    },
                                                    tickLabels: {
                                                        hideMinMax: true,
                                                    }
                                                }}
                                                arc={{
                                                    colorArray: ['#5BE12C', '#EA4228'],
                                                    subArcs: [{limit: 20}, {limit: 40}, {}, {}, {}],
                                                    padding: 0.02,
                                                    width: 0.3

                                                }}
                                                pointer={{
                                                    elastic: true,
                                                    type: "needle",
                                                    length: 0.8,
                                                    width: 14,
                                                    animate: true,
                                                    animationDuration: 2000,
                                                    animationDelay: 100
                                                }}
                                            />
                                            {/*<CircularProgress*/}
                                            {/*    variant="determinate"*/}
                                            {/*    value={percentage}*/}
                                            {/*    size={200}*/}
                                            {/*    thickness={4}*/}
                                            {/*    sx={{*/}
                                            {/*        color: totalScore >= 61 ? '#ff4d4d' :*/}
                                            {/*            totalScore >= 41 ? '#ffa500' :*/}
                                            {/*                totalScore >= 21 ? '#ffdd00' : totalScore >= 1 ? '#90EE90' : '#47e447',*/}
                                            {/*    }}*/}
                                            {/*/>*/}
                                            {/*<CircularProgress*/}
                                            {/*    variant="determinate"*/}
                                            {/*    value={percentage}*/}
                                            {/*    size={200}*/}
                                            {/*    thickness={4}*/}
                                            {/*    sx={{*/}
                                            {/*        color: totalScore >= 61 ? '#ff4d4d' :*/}
                                            {/*            totalScore >= 41 ? '#ffa500' :*/}
                                            {/*                totalScore >= 21 ? '#ffff00' :*/}
                                            {/*                    totalScore >= 11 ? '#90EE90' : '#00ff00',*/}
                                            {/*        position: 'absolute',*/}
                                            {/*        left: 34,*/}
                                            {/*    }}*/}
                                            {/*/>*/}
                                            {/*<Box*/}
                                            {/*    sx={{*/}
                                            {/*        position: 'absolute',*/}
                                            {/*        display: 'flex',*/}
                                            {/*        flexDirection: 'column',*/}
                                            {/*        alignItems: 'center',*/}
                                            {/*    }}*/}
                                            {/*>*/}
                                            {/*    <Typography variant="h3" sx={{fontWeight: 700, color: '#0D2152'}}>*/}
                                            {/*        {totalScore}*/}
                                            {/*    </Typography>*/}
                                            {/*    <Typography variant="h5" sx={{color: '#4A5568'}}>*/}
                                            {/*        out of 80*/}
                                            {/*    </Typography>*/}
                                            {/*</Box>*/}
                                        </Box>

                                        <Typography
                                            variant="h5"
                                            sx={{
                                                color: '#F5811E',
                                                fontWeight: 600,
                                                mb: 2,
                                                textAlign: 'center',
                                            }}
                                        >
                                            {result.level}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            p: 2.5,
                                            borderRadius: 2,
                                            bgcolor: 'rgb(227,234,246)',
                                            border: '1px solid rgba(245, 129, 30, 0.1)',
                                            transition: 'transform 0.2s',
                                            textAlign: "justify",
                                            '&:hover': {
                                                transform: 'translateY(-2px)',
                                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                            }
                                        }}
                                    >
                                        {result.supportMessage}
                                    </Typography>
                                </Card>
                            </Grid>

                            {/* Recommendations Section */
                            }
                            <Grid item xs={12} md={6}>
                                <Card sx={{
                                    p: 2.5,
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    borderRadius: 4,
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2
                                    }}>
                                        <TipsAndUpdatesIcon sx={{color: '#F5811E', mr: 1.5, fontSize: 30}}/>
                                        <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
                                            Recommendations
                                        </Typography>
                                    </Box>

                                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                        <Box
                                            // key={index}
                                            sx={{
                                                p: 2,
                                                mb:2,
                                                borderRadius: 2,
                                                bgcolor: 'rgba(245, 129, 30, 0.05)',
                                                border: '1px solid rgba(245, 129, 30, 0.1)',
                                                transition: 'transform 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                                }
                                            }}
                                        >
                                            {result?.recommendations?.map((rec, index) => (
                                                <Box key={index} sx={{display: 'flex'}}>
                                                    <CheckCircleIcon sx={{ color: '#FF7F1E', fontSize: 20, mr: 1, }} />
                                                    <Typography variant="body1"
                                                                sx={{
                                                                    color: '#4A5568',
                                                                    textAlign: "justify",
                                                                    fontSize: "15px",
                                                                    mb:2
                                                                }}>
                                                        {rec}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2
                                    }}>
                                        <BuildCircleIcon  sx={{color: '#F5811E', mr: 1.5, fontSize: 30}}/>
                                        <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
                                            Action Plan
                                        </Typography>
                                    </Box>
                                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                        <Box
                                            // key={index}
                                            sx={{
                                                p: 2,
                                                borderRadius: 2,
                                                bgcolor: 'rgba(245, 129, 30, 0.05)',
                                                border: '1px solid rgba(245, 129, 30, 0.1)',
                                                transition: 'transform 0.2s',
                                                '&:hover': {
                                                    transform: 'translateY(-2px)',
                                                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                                }
                                            }}
                                        >
                                            {result?.actionPlan?.map((rec, index) => (
                                                <Box key={index} sx={{display: 'flex'}}>
                                                    <CheckCircleIcon sx={{ color: '#FF7F1E', fontSize: 20, mr: 1, }} />
                                                    <Typography variant="body1"
                                                                sx={{
                                                                    color: '#4A5568',
                                                                    textAlign: "justify",
                                                                    fontSize: "14px",
                                                                    mb:2
                                                                }}>
                                                        {rec}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                        <Card sx={{
                            p: 3,
                            height: '100%',
                            background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                            borderRadius: 4,
                        }}>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2
                            }}>
                                <AutorenewIcon sx={{color: '#F5811E', mr: 1.5, fontSize: 30}}/>
                                <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
                                    Analysis
                                </Typography>
                            </Box>
                            <Box
                                // key={index}
                                sx={{
                                    p: 2,
                                    mb:2,
                                    borderRadius: 2,
                                    bgcolor: 'rgba(245, 129, 30, 0.05)',
                                    border: '1px solid rgba(245, 129, 30, 0.1)',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                    }
                                }}
                            >
                                {result.Analysis}
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 2
                            }}>
                                <ImportContactsIcon  sx={{color: '#F5811E', mr: 1.5, fontSize: 30}}/>
                                <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
                                    Interpretation
                                </Typography>
                            </Box>
                            <Box
                                // key={index}
                                sx={{
                                    p: 2,
                                    borderRadius: 2,
                                    bgcolor: 'rgba(245, 129, 30, 0.05)',
                                    border: '1px solid rgba(245, 129, 30, 0.1)',
                                    transition: 'transform 0.2s',
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                                    }
                                }}
                            >
                                {result.interpretation}
                            </Box>
                        </Card>

                        {/* Action Buttons */
                        }
                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                mt: 4,
                            }}
                        >
                            {/* Save Results Button - Downloads PDF */}
                            <PDFDownloadLink
                                document={<PdfView data={{
                                    title: "Work-Life Balance Assessments Result",
                                    maxScore: 75,
                                    totalScore1: percentage,
                                    totalScore: totalScore,
                                    level: result.level,
                                    interpretation: result.interpretation,
                                    recommendations: result.recommendations,
                                    actionPlan: result.actionPlan,
                                    supportMessage: result.supportMessage,
                                    Analysis: result.Analysis,
                                }}/>}
                                fileName="Work_Life_Balance.pdf"
                                style={{textDecoration: "none"}}
                            >
                                {({loading}) => (
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            color: "#F5811E",
                                            borderColor: "#F5811E",
                                            py: 1.5,
                                            px: 4,
                                            "&:hover": {
                                                borderColor: "#E26C0A",
                                                bgcolor: "rgba(245, 129, 30, 0.1)",
                                            },
                                        }}
                                    >
                                        {loading ? "Preparing..." : "Download Results"}
                                    </Button>
                                )}
                            </PDFDownloadLink>

                            <Button
                                variant="contained"
                                onClick={() => navigate("/resources/assessments")}
                                sx={{
                                    bgcolor: "#F5811E",
                                    color: "#fff",
                                    py: 1.5,
                                    px: 4,
                                    "&:hover": {bgcolor: "#E26C0A"},
                                }}
                            >
                                Return to Assessments
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </>
        );
    }

    return (
        <Box sx={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
            // backgroundColor: '#F3F4F6',
            mt: {xs: '64px', sm: '72px'},
            py: {xs: 4, md: 6},
        }}>
            <Container maxWidth="md">
                <StyledPaper>
                    <Box sx={{mb: 4}}>
                        <Typography variant="h6" sx={{
                            mb: 1,
                            color: '#012765',
                            fontFamily: 'Montserrat'
                        }}>
                            Question {currentQuestion + 1} of {questions.length}
                        </Typography>
                        <LinearProgress
                            variant="determinate"
                            value={progress}
                            sx={{
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: '#E6EAF3',
                                '& .MuiLinearProgress-bar': {
                                    backgroundColor: '#FF7F1E',
                                }
                            }}
                        />
                    </Box>

                    <Typography sx={{
                        mb: 4,
                        color: '#012765',
                        fontSize: '20px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        fontFamily: 'Poppins'
                    }}>
                        {questions[currentQuestion].text}
                    </Typography>

                    <FormControl component="fieldset" sx={{width: '100%', mb: 4}}>
                        <RadioGroup
                            value={answers[currentQuestion]}
                            onChange={handleAnswerChange}
                        >
                            {questions[currentQuestion].options.map((option) => (
                                <FormControlLabel
                                    key={option.label}
                                    value={option.value}
                                    control={
                                        <Radio
                                            sx={{
                                                color: '#012765',
                                                '&.Mui-checked': {
                                                    color: '#FF7F1E',
                                                },
                                            }}
                                        />
                                    }
                                    label={
                                        <Typography sx={{
                                            fontFamily: 'Poppins',
                                            fontSize: '16px',
                                            color: '#4B5563'
                                        }}>
                                            {option.label}
                                        </Typography>
                                    }
                                    sx={{
                                        mb: 1,
                                        p: 1.5,
                                        borderRadius: 2,
                                        width: '100%',
                                        backgroundColor: answers[currentQuestion] === option.value ? '#FFF5EB' : 'transparent',
                                        '&:hover': {
                                            backgroundColor: '#F8FAFC',
                                        },
                                    }}
                                />
                            ))}
                        </RadioGroup>
                    </FormControl>

                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        {currentQuestion !== 0 ?
                            <NavigationButton
                                variant="outlined"
                                startIcon={<ArrowBackIcon/>}
                                onClick={handlePrevious}
                                sx={{color: '#012765', borderColor: '#012765'}}
                            >
                                Back
                            </NavigationButton> : <Box/>}
                        <NavigationButton
                            variant="contained"
                            endIcon={<ArrowForwardIcon/>}
                            onClick={handleNext}
                            disabled={!answers[currentQuestion]}
                            sx={{
                                backgroundColor: '#FF7F1E',
                                '&:hover': {backgroundColor: '#E66C00'},
                                '&.Mui-disabled': {
                                    backgroundColor: '#E6EAF3',
                                    color: '#9CA3AF',
                                }
                            }}
                        >
                            {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
                        </NavigationButton>
                    </Box>
                </StyledPaper>
            </Container>
        </Box>
    );
};

export default WorkLifeBalanceQuestions;