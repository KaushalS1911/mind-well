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
//             level: "Severe Stress/Anxiety",
//             interpretation: " Significant levels of stress and anxiety are present. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, it is strongly advised that you engage with certified Psychologists and Professionals.",
//         };
//     } else if (score >= 41 && score <= 60) {
//         return {
//             level: "High Stress/Anxiety",
//             interpretation: "Your stress and anxiety levels may be impacting your daily life. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, it is recommended that you engage with certified Psychologists and Professionals.",
//         };
//     } else if (score >= 21 && score <= 40) {
//         return {
//             level: "Moderate Stress/Anxiety",
//             interpretation: "You may be experiencing stress or anxiety at manageable levels. Consider mindfulness, self-care, or seeking support if needed. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, we suggest to engage with certified Psychologists and Professionals.",
//         };
//     } else if (score <= 20) {
//         return {
//             level: "Low Stress/Anxiety",
//             interpretation: "You appear to control Strain and tension well. Keep Practicing healthful habits. The results are indicative basis the Self-Assessment questions and are not Psychometric Tests. For better and accurate results and consultation, we suggest to engage with certified Psychologists and Professionals.",
//         };
//     }
// }
// const hindiScore = (score) => {
//     if (score >= 61 && score <= 80) {
//         return {
//             level: " उच्च स्कोर ",
//             interpretation: "आपने उत्कृष्ट तनाव प्रबंधन, भावनात्मक दृढ़ता, और निर्णय लेने के कौशल का प्रदर्शन किया है, जो आपकी परीक्षा की तैयारी के लिए बहुत महत्वपूर्ण हैं। दबाव में शांत रहने और सकारात्मक सोच बनाए रखने की आपकी क्षमता सराहनीय है, और ये गुण न केवल आपकी परीक्षाओं में बल्कि आपके भविष्य के करियर में भी आपको अच्छी तरह से सेवा देंगे। अच्छा काम जारी रखें, अपने कौशल को परिष्कृत करते रहें, और याद रखें कि निरंतर प्रयास और आत्मविश्वास आपके लक्ष्यों को प्राप्त करने की कुंजी हैं। आपके दृढ़ संकल्प और दृढ़ता के साथ, आप किसी भी चुनौती को पार करने के लिए अच्छी तरह से सुसज्जित हैं।",
//         };
//     }
//     else if (score >= 41 && score <= 60) {
//         return {
//             level: "मध्यम स्कोर ",
//             interpretation: "आपने अच्छे कौशल और व्यवहार का प्रदर्शन किया है, लेकिन कुछ क्षेत्रों में सुधार की आवश्यकता है। आने वाली चुनौतियों के लिए पूरी तरह से तैयार होने के लिए अपने तनाव प्रबंधन तकनीकों और निर्णय लेने की रणनीतियों को बढ़ाने पर ध्यान दें। तनाव प्रबंधन कौशल को विकसित करना आपको दबाव में शांत और केंद्रित रहने में मदद करेगा, जबकि निर्णय लेने की रणनीतियों को परिष्कृत करना सुनिश्चित करेगा कि आप जटिल परिस्थितियों को आत्मविश्वास के साथ संभाल सकें। इन क्षेत्रों पर काम करके, आप किसी भी बाधा का मुकाबला करने और अपने लक्ष्यों को अधिक प्रभावी ढंग से प्राप्त करने के लिए बेहतर सुसज्जित होंगे।\"",
//         };
//     } else if (score >= 21 && score <= 40) {
//         return {
//             level: "मध्यम स्कोर",
//             interpretation: "आपमें संभावना है, लेकिन कई क्षेत्रों में विशेष अभिवृद्धि की आवश्यकता है। अपनी रूटीन में नियमित तनाव-मुक्ति तकनीकों, भावनात्मक बुद्धिमत्ता प्रशिक्षण, और संरचित निर्णय लेने की प्रथाओं को शामिल करने का विचार करें। तनाव-मुक्ति तकनीकों का अभ्यास आपको दबाव के तहत शांत रहने और सकारात्मक दृष्टिकोण बनाए रखने में मदद करेगा, भावनात्मक बुद्धिमत्ता प्रशिक्षण आपको अपनी भावनाओं को समझने और प्रभावी रूप से प्रबंधित करने में मदद करेगा, और संरचित निर्णय लेने की प्रथाएँ आपको जटिल स्थितियों को समझने और उन्हें हल करने में मदद करेंगी। इन सभी उपायों को अपनाकर, आप अपनी क्षमताओं को सुधार सकते हैं और अपने लक्ष्यों की दिशा में प्रगति कर सकते हैं",
//         };
//     } else if (score >= 11 && score <= 20) {
//         return {
//             level: "कम स्कोर",
//             interpretation: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।",
//         };
//     }
//     else {
//         return {
//             level: "बहुत कम स्कोर",
//             interpretation: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें। इन कौशलों को सही दिशा में विकसित करना मुश्किलाहटों को सफलतापूर्वक निभाने और अपने लक्ष्यों को प्राप्त करने के लिए महत्वपूर्ण है। पेशेवर मार्गदर्शन या प्रशिक्षण लेना इन क्षेत्रों में आपके विकास को गति देने के लिए महत्वपूर्ण हो सकता है। इन बुनियादी कौशलों को सुधारने के लिए प्रतिबद्ध रहकर, आप अपनी तैयारी को मजबूत करेंगे और अपने प्रयासों में सफलता प्राप्त करने की क्षमता को बढ़ाएंगे।",
//         };
//     }
// }
//
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
// const ChildLearningAbilityQuestions = () => {
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
//
//     const questions = language === "english" ? [
//         {
//             id: 1,
//             text: " I have Experienced Headaches, Muscle Tension or Unexplained Pain or Aches.",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 2,
//             text: "I experienced trouble falling asleep, staying asleep, or woke up interrupted",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 3,
//             text: "I experienced Fatigue and felt tired even after resting",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 4,
//             text: "I experienced rapid heartbeat, shortness of breath and sweating",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 5,
//             text: "Was unable to cope up with daily tasks and felt overwhelmed",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 6,
//             text: "Worried excessively with unlikely or about small problems",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 7,
//             text: "I feel irritable and easily frustrated",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 8,
//             text: "I have trouble concentrating and staying focused",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 9,
//             text: "I avoid situations or tasks if they make me anxious",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 10,
//             text: " I procrastinate (Delay my Tasks) due to feeling stressed or overwhelmed",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 11,
//             text: "I have eating issues (Overeating or Undereating) or rely on substances (Caffeine, Nicotine, Alcohol) to manage stress.",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//         {
//             id: 12,
//             text: "I find it hard to relax even during non-working or leisure hours",
//             options: [
//                 {label: "Always", value: "0"},
//                 {label: "Often", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Rarely", value: "3"},
//                 {label: "Never", value: "4"}
//             ]
//         },
//     ] : [
//         {
//             id: 21,
//             text: "आप सामान्यतः उच्च दबाव वाली स्थितियों को कैसे संभालते हैं?",
//             options: [
//                 {label: "शांत और केंद्रित रहते हैं", value: "0"},
//                 {label: "चिंतित हो जाते हैं लेकिन फिर भी संभालते हैं", value: "1"},
//                 {label: "संयम बनाए रखने में संघर्ष करते हैं", value: "2"},
//                 {label: "स्थिति से बचने की कोशिश करते हैं", value: "3"}
//             ]
//         },
//         {
//             id: 22,
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
//                 <Container maxWidth="md">
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
//                         <Card sx={{
//                             p: 4,
//                             height: '100%',
//                             background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
//                             boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
//                             borderRadius: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                             justifyContent: "space-between"
//                         }}>
//                             <Box>
//                                 <Box sx={{
//                                     position: 'relative',
//                                     display: 'flex',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                     mb: 3
//                                 }}>
//                                     <CircularProgress
//                                         variant="determinate"
//                                         value={percentage}
//                                         size={200}
//                                         thickness={4}
//                                         sx={{
//                                             color: totalScore >= 61 ? '#ff4d4d' :
//                                                 totalScore >= 41 ? '#ffa500' :
//                                                     totalScore >= 21 ? '#ffdd00' : totalScore >= 1 ? '#90EE90' : '#47e447',
//                                         }}
//                                     />
//                                     {/*<CircularProgress*/}
//                                     {/*    variant="determinate"*/}
//                                     {/*    value={percentage}*/}
//                                     {/*    size={200}*/}
//                                     {/*    thickness={4}*/}
//                                     {/*    sx={{*/}
//                                     {/*        color: totalScore >= 61 ? '#ff4d4d' :*/}
//                                     {/*            totalScore >= 41 ? '#ffa500' :*/}
//                                     {/*                totalScore >= 21 ? '#ffff00' :*/}
//                                     {/*                    totalScore >= 11 ? '#90EE90' : '#00ff00',*/}
//                                     {/*        position: 'absolute',*/}
//                                     {/*        left: 34,*/}
//                                     {/*    }}*/}
//                                     {/*/>*/}
//                                     <Box
//                                         sx={{
//                                             position: 'absolute',
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             alignItems: 'center',
//                                         }}
//                                     >
//                                         <Typography variant="h3" sx={{fontWeight: 700, color: '#0D2152'}}>
//                                             {totalScore}
//                                         </Typography>
//                                         <Typography variant="h5" sx={{color: '#4A5568'}}>
//                                             out of 80
//                                         </Typography>
//                                     </Box>
//                                 </Box>
//
//                                 <Typography
//                                     variant="h5"
//                                     sx={{
//                                         color: '#F5811E',
//                                         fontWeight: 600,
//                                         mb: 2,
//                                         textAlign: 'center',
//                                     }}
//                                 >
//                                     {result.level}
//                                 </Typography>
//                             </Box>
//                             <Typography
//                                 variant="body1"
//                                 sx={{
//                                     p: 2.5,
//                                     borderRadius: 2,
//                                     bgcolor: 'rgb(227,234,246)',
//                                     border: '1px solid rgba(245, 129, 30, 0.1)',
//                                     transition: 'transform 0.2s',
//                                     textAlign: "justify",
//                                     '&:hover': {
//                                         transform: 'translateY(-2px)',
//                                         boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
//                                     }
//                                 }}
//                             >
//                                 {result.interpretation}
//                             </Typography>
//                         </Card>
//
//                         {/* Action Buttons */}
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
//                                     recommendations: result.recommendations,
//                                     language
//                                 }}/>}
//                                 fileName="General_stress_Report.pdf"
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
//         )
//             ;
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
//
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
// export default ChildLearningAbilityQuestions;


import React, {useState} from 'react';
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
    Card, Grid, Divider,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {PDFDownloadLink} from "@react-pdf/renderer";
import {GaugeComponent} from 'react-gauge-component';
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import ChildLearningAbility_pdf_view from "../../global/childLearningAbility_pdf_view.jsx";

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

const options = [
    {label: "Never", value: "0"},
    {label: "Rarely", value: "1"},
    {label: "Sometimes", value: "2"},
    {label: "Often", value: "3"},
    {label: "Always", value: "4"},
];

const questions = [
    // Section A: Core Learning Skills (Thinking, Focus & Basics)
    { id: 1, text: "My child follows simple instructions the first or second time they are told.", section: "A", options },
    { id: 2, text: "My child can focus on one activity (like reading, homework, or drawing) for 15–30 minutes.", section: "A", options },
    { id: 3, text: "My child uses age-appropriate words and sentences while speaking.", section: "A", options },
    { id: 4, text: "My child remembers names, daily routines, or instructions easily.", section: "A", options },
    { id: 5, text: "My child can write or copy letters and numbers suitable for their age.", section: "A", options },
    { id: 6, text: "My child understands order or sequences, like days of the week or steps in a story.", section: "A", options },

    // Section B: Thinking Skills & Problem-Solving
    { id: 7, text: "My child understands “if this, then that” situations (cause and effect).", section: "B", options },
    { id: 8, text: "My child asks questions or shows curiosity to learn something new.", section: "B", options },
    { id: 9, text: "My child can group objects by color, size, or shape.", section: "B", options },
    { id: 10, text: "My child enjoys solving puzzles or brain games.", section: "B", options },
    { id: 11, text: "My child can move from one task to another without emotional upset.", section: "B", options },

    // Section C: Fine Motor Skills & Writing
    { id: 12, text: "My child holds a pencil or crayon correctly while writing or drawing.", section: "C", options },
    { id: 13, text: "My child can draw basic shapes or write their name clearly (for their age).", section: "C", options },
    { id: 14, text: "My child is able to cut with scissors, color within lines, or build with blocks.", section: "C", options },
    {
        id: 15,
        text: "My child avoids or complains about writing, coloring, or drawing activities.",
        section: "C",
        options: [
            {label: "Always", value: "0"},
            {label: "Often", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Rarely", value: "3"},
            {label: "Never", value: "4"}
        ]
    },

    // Section D: Language & Communication
    { id: 16, text: "My child speaks clearly and in full sentences as expected for their age.", section: "D", options },
    { id: 17, text: "My child listens when someone talks and gives a suitable reply.", section: "D", options },
    { id: 18, text: "My child can express their feelings or needs using words.", section: "D", options },
    {
        id: 19,
        text: "My child finds it difficult to understand what others say or what is written.",
        section: "D",
        options: [
            {label: "Always", value: "0"},
            {label: "Often", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Rarely", value: "3"},
            {label: "Never", value: "4"}
        ]
    },
    {
        id: 20,
        text: "My child avoids talking with others or speaking in a group.",
        section: "D",
        options: [
            {label: "Always", value: "0"},
            {label: "Often", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Rarely", value: "3"},
            {label: "Never", value: "4"}
        ]
    },

    // Section E: Emotional & Social Behavior
    { id: 21, text: "My child manages frustration or anger without hitting, shouting, or hurting.", section: "E", options },
    { id: 22, text: "My child gets along well with other children (sharing, taking turns, etc.).", section: "E", options },
    { id: 23, text: "My child shows confidence when learning or trying new things.", section: "E", options },
    { id: 24, text: "My child gets distracted easily or acts without thinking.", section: "E", options },
    { id: 25, text: "My child seems nervous, shy, or sad in school or social settings.", section: "E", options }
];

// Section-wise scoring and interpretations
const sectionData = {
    A: {
        name: "Core Learning Skills",
        maxScore: 24,
        questions: [1, 2, 3, 4, 5, 6],
        interpretations: [
            { min: 20, max: 24,
                level: "Excellent foundational skills",
                description: "The child is developmentally well-prepared to learn. Follows instructions, stays attentive, recalls information accurately, and is likely enjoying the learning process.",
                recommendation: "Continue with a stimulating environment full of books, games, and age-appropriate academic challenges.",
                actionPlan: [
                    "Encourage problem-solving through storytelling and age-appropriate tasks.",
                    "Use games that strengthen memory, such as matching pairs or story recall.",
                    "Reinforce positive learning behaviors with praise and small rewards."
                ]
            },
            { min: 15, max: 19,
                level: "Age-appropriate skills",
                description: "The child meets general learning expectations but may occasionally need extra reinforcement.",
                recommendation: "Monitor development and provide structured academic support if occasional difficulty arises.",
                actionPlan: [
                    "Use visual aids and schedules to enhance instruction-following.",
                    "Practice fun repetition activities (songs, rhymes, flashcards).",
                    "Encourage self-talk strategies like 'First I will do ___, then I will ___.'"
                ]
            },
            { min: 10, max: 14,
                level: "Mild delays",
                description: "The child may struggle with focus, memory, or task comprehension. This might affect classroom learning and homework.",
                recommendation: "Early identification and simple strategies at home can prevent future academic gaps.",
                actionPlan: [
                    "Provide short tasks with breaks in between.",
                    "Use multi-sensory tools (e.g., sand tracing, educational videos).",
                    "Coordinate with teachers for feedback and reinforce learning at home."
                ]
            },
            { min: 0, max: 9,
                level: "Needs attention",
                description: "Difficulty in essential learning skills could signal developmental or learning concerns.",
                recommendation: "Formal screening for learning difficulties is advised.",
                actionPlan: [
                    "Seek a child psychologist or special educator.",
                    "Begin early intervention programs to strengthen cognitive foundations.",
                    "Use simplified instructions, more visual learning, and predictable routines."
                ]
            }
        ]
    },
    B: {
        name: "Cognitive Processing & Problem Solving",
        maxScore: 20,
        questions: [7, 8, 9, 10, 11],
        interpretations: [
            { min: 17, max: 20,
                level: "Excellent reasoning and processing",
                description: "Strong abstract thinking, problem-solving, and intellectual curiosity. The child is eager to learn and think independently.",
                recommendation: "Offer creative, open-ended learning opportunities.",
                actionPlan: [
                    "Introduce age-appropriate puzzles, logic games, or coding activities.",
                    "Let the child lead inquiry projects (e.g., 'Why do stars shine?').",
                    "Foster exploration through science experiments and nature walks."
                ]
            },
            { min: 12, max: 16,
                level: "Good but may need enrichment",
                description: "The child processes information well but might benefit from more real-world challenges.",
                recommendation: "Add hands-on activities that connect learning to everyday life.",
                actionPlan: [
                    "Encourage 'thinking out loud' during problem-solving.",
                    "Play 'what happens if…' games to explore cause-effect.",
                    "Provide books and discussions that stretch thinking."
                ]
            },
            { min: 8, max: 11,
                level: "Support needed",
                description: "The child may struggle with logic or abstract thinking, leading to slower problem-solving or confusion.",
                recommendation: "Use visual and concrete learning strategies.",
                actionPlan: [
                    "Use manipulatives like blocks, counters, and sorting games.",
                    "Reduce multi-step instructions to 1-2 simple steps.",
                    "Scaffold thinking with guided questioning ('What do you think will happen?')"
                ]
            },
            { min: 0, max: 7,
                level: "High concern",
                description: "Significant challenges in cognitive processing. These may affect school performance and self-confidence.",
                recommendation: "Seek professional cognitive evaluation.",
                actionPlan: [
                    "Introduce individualized learning strategies.",
                    "Engage in guided play therapy or cognitive-behavioral sessions.",
                    "Avoid pressure; focus on joyful learning and encouragement."
                ]
            }
        ]
    },
    C: {
        name: "Fine Motor & Writing Skills",
        maxScore: 16,
        questions: [12, 13, 14, 15],
        interpretations: [
            { min: 13, max: 16,
                level: "Strong motor control",
                description: "The child shows age-appropriate development in writing, drawing, and fine motor activities.",
                recommendation: "Continue encouraging creativity and motor tasks.",
                actionPlan: [
                    "Promote activities like LEGO, origami, clay modeling, and drawing.",
                    "Provide different writing tools (pens, markers, crayons).",
                    "Allow journaling or creative writing."
                ]
            },
            { min: 9, max: 12,
                level: "Average; developing",
                description: "The child shows normal development but may need occasional help with coordination.",
                recommendation: "Use playful motor exercises to strengthen fine skills.",
                actionPlan: [
                    "Use tracing books, dot-to-dot activities, or lacing cards.",
                    "Encourage drawing shapes and practicing letters daily.",
                    "Include kitchen help (peeling, stirring, pouring) for grip training."
                ]
            },
            { min: 5, max: 8,
                level: "Motor difficulties present",
                description: "The child may struggle with grip, stamina, or fine muscle coordination. Writing tasks may feel overwhelming.",
                recommendation: "Consult with an occupational therapist for fine motor support.",
                actionPlan: [
                    "Provide thicker pencils, pencil grips, or slant boards.",
                    "Reduce writing load and allow more drawing/visual learning.",
                    "Encourage stress-ball play, hand squeezing, and cutting crafts."
                ]
            },
            { min: 0, max: 4,
                level: "Likely motor delay",
                description: "Persistent difficulty with fine motor skills. May indicate underlying developmental delays or sensory processing issues.",
                recommendation: "Immediate assessment and therapy required.",
                actionPlan: [
                    "Begin OT support without delay.",
                    "Integrate sensory-rich play (sand, beads, putty).",
                    "Avoid negative remarks about poor handwriting—focus on effort."
                ]
            }
        ]
    },
    D: {
        name: "Language & Communication",
        maxScore: 20,
        questions: [16, 17, 18, 19, 20],
        interpretations: [
            { min: 17, max: 20,
                level: "Excellent communication",
                description: "The child expresses and understands language well. Comfortable with social interaction.",
                recommendation: "Support higher-order communication: storytelling, debates, creative writing.",
                actionPlan: [
                    "Read together and discuss new words.",
                    "Play role-play or pretend games.",
                    "Introduce a 'word of the day' challenge."
                ]
            },
            { min: 12, max: 16,
                level: "Good but may need support",
                description: "Minor speech clarity, vocabulary, or listening issues may arise occasionally.",
                recommendation: "Monitor closely and provide more speaking opportunities.",
                actionPlan: [
                    "Encourage conversations with open-ended questions.",
                    "Narrate your daily routine and ask the child to do the same.",
                    "Use visual prompts and emotion cards to build expression."
                ]
            },
            { min: 8, max: 11,
                level: "Communication delay possible",
                description: "Trouble with forming sentences, understanding conversations, or articulating thoughts.",
                recommendation: "Speech and language enrichment needed.",
                actionPlan: [
                    "Read aloud and ask comprehension questions.",
                    "Use picture books, gesture games, and rhymes.",
                    "Consult a speech therapist if issues persist over 6 months."
                ]
            },
            { min: 0, max: 7,
                level: "Likely speech-language delay",
                description: "Major struggles in communication. May affect learning, friendships, and behavior.",
                recommendation: "Consult a speech-language pathologist immediately.",
                actionPlan: [
                    "Begin structured speech therapy sessions.",
                    "Build vocabulary through everyday activities (e.g., grocery, play).",
                    "Use assistive communication tools if advised."
                ]
            }
        ]
    },
    E: {
        name: "Social-Emotional Learning & Behavior",
        maxScore: 20,
        questions: [21, 22, 23, 24, 25],
        interpretations: [
            { min: 17, max: 20,
                level: "Emotionally stable",
                description: "The child manages emotions well, is socially confident, and responds well to challenges.",
                recommendation: "Encourage emotional expression and empathy-building.",
                actionPlan: [
                    "Use emotion wheels or diaries to reflect daily feelings.",
                    "Praise self-regulation behaviors (e.g., deep breathing, asking for help).",
                    "Encourage friendships and team play."
                ]
            },
            { min: 12, max: 16,
                level: "Some signs of difficulty",
                description: "Occasional anxiety, impulsivity, or emotional outbursts. These may affect school and home behavior.",
                recommendation: "Provide emotional scaffolding and safe spaces.",
                actionPlan: [
                    "Establish a calming corner or routine.",
                    "Practice breathing and grounding exercises together.",
                    "Use storybooks about emotions and social skills."
                ]
            },
            { min: 8, max: 11,
                level: "Emotional/social challenges",
                description: "The child may withdraw, avoid tasks, or act out. This may mask underlying stress or learning struggles.",
                recommendation: "Emotional coaching or counseling support is needed.",
                actionPlan: [
                    "Begin regular one-on-one talks.",
                    "Use art or play therapy approaches to explore feelings.",
                    "Partner with school counselor or child psychologist."
                ]
            },
            { min: 0, max: 7,
                level: "High emotional/behavioral risk",
                description: "Signs of chronic anxiety, sadness, aggression, or extreme shyness. The child is struggling to cope socially or emotionally.",
                recommendation: "Early mental health intervention is critical.",
                actionPlan: [
                    "Consult a child counselor or psychologist urgently.",
                    "Engage in emotion regulation therapy (CBT, art therapy, mindfulness).",
                    "Educate family members on how to offer consistent, safe emotional support."
                ]
            }
        ]
    }
};

const ChildLearningAbilityQuestions = () => {
    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [showResults, setShowResults] = useState(false);
    const [sectionScores, setSectionScores] = useState({});
    const [totalScore, setTotalScore] = useState(0);

    const handleAnswerChange = (event) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = event.target.value;
        setAnswers(newAnswers);
    };

    const calculateScores = () => {
        const scores = {};
        let total = 0;

        // Calculate score for each section
        for (const [sectionKey, sectionInfo] of Object.entries(sectionData)) {
            let sectionScore = 0;

            sectionInfo.questions.forEach(questionId => {
                const questionIndex = questions.findIndex(q => q.id === questionId);
                if (questionIndex !== -1 && answers[questionIndex]) {
                    sectionScore += parseInt(answers[questionIndex]);
                }
            });

            scores[sectionKey] = sectionScore;
            total += sectionScore;
        }

        setSectionScores(scores);
        setTotalScore(total);
        setShowResults(true);
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateScores();
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    const getSectionInterpretation = (sectionKey, score) => {
        const section = sectionData[sectionKey];
        for (const range of section.interpretations) {
            if (score >= range.min && score <= range.max) {
                return range;
            }
        }
        return null;
    };

    const getOverallInterpretation = (totalScore) => {
        const maxPossibleScore = Object.values(sectionData).reduce((sum, section) => sum + section.maxScore, 0);
        const percentage = (totalScore / maxPossibleScore) * 100;

        if (percentage >= 85) {
            return {
                level: "Excellent Overall Development",
                description: "The child shows strong development across all assessed areas with minimal concerns.",
                recommendation: "Continue providing a stimulating and supportive environment that challenges the child appropriately."
            };
        } else if (percentage >= 70) {
            return {
                level: "Good Overall Development",
                description: "The child is developing well in most areas with some minor areas that may need attention.",
                recommendation: "Focus on the specific areas identified as needing support while maintaining strengths in other areas."
            };
        } else if (percentage >= 50) {
            return {
                level: "Moderate Developmental Concerns",
                description: "The child shows several areas of concern that may be impacting their learning and development.",
                recommendation: "Implement targeted interventions for the areas of concern and consider professional assessment if issues persist."
            };
        } else {
            return {
                level: "Significant Developmental Concerns",
                description: "The child is experiencing challenges across multiple developmental areas that require immediate attention.",
                recommendation: "Seek comprehensive professional evaluation and implement structured interventions to support development."
            };
        }
    };

    if (showResults) {
        const overallInterpretation = getOverallInterpretation(totalScore);
        const maxPossibleScore = Object.values(sectionData).reduce((sum, section) => sum + section.maxScore, 0);
        const percentage = (totalScore / maxPossibleScore) * 100;

        const pdfData = {
            title: "Child Learning Ability Assessment",
            totalScore: totalScore,
            maxScore: maxPossibleScore,
            percentage: percentage,
            overallInterpretation: overallInterpretation,
            sections: Object.entries(sectionData).map(([sectionKey, sectionInfo]) => {
                const score = sectionScores[sectionKey];
                const interpretation = getSectionInterpretation(sectionKey, score);
                return {
                    name: sectionInfo.name,
                    score: score,
                    maxScore: sectionInfo.maxScore,
                    interpretation: interpretation
                };
            })
        };

        return (
            <Container maxWidth="md">
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

                    {/* Overall Score Section */}
                    <Card sx={{
                        p: 4,
                        mb: 2,
                        background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                        borderRadius: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
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
                                        formatTextValue: (value) => totalScore,
                                        maxDecimalDigits: 0,
                                        matchColorWithArc: true,
                                        style: { borderColor:'none', fontSize: "50px" }
                                    },
                                    tickLabels: {
                                        hideMinMax: true,
                                    }
                                }}
                                arc={{
                                    colorArray: [  '#EA4228','#5BE12C',],
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
                            {overallInterpretation.level}
                        </Typography>

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
                            {overallInterpretation.description}
                        </Typography>
                    </Card>

                    {/* Section-wise Results */}
                    {Object.entries(sectionData).map(([sectionKey, sectionInfo]) => {
                        const score = sectionScores[sectionKey];
                        const interpretation = getSectionInterpretation(sectionKey, score);
                        const percentage = (score / sectionInfo.maxScore) * 100;

                        return (
                            <Card key={sectionKey} sx={{
                                p: 3,
                                mb: 2,
                                background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                borderRadius: 4,
                            }}>
                                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2}}>
                                    <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
                                        {sectionInfo.name}
                                    </Typography>
                                    <Typography variant="h6" sx={{color: '#F5811E', fontWeight: 600}}>
                                        Score: {score} / {sectionInfo.maxScore}
                                    </Typography>
                                </Box>

                                <Divider sx={{my: 2}} />

                                <Box sx={{mb: 3}}>
                                    <Typography variant="subtitle1" sx={{color: '#0D2152', fontWeight: 600, mb: 1}}>
                                        {interpretation.level}
                                    </Typography>
                                    <Typography variant="body2" sx={{color: '#4A5568', textAlign: 'justify', mb: 2}}>
                                        {interpretation.description}
                                    </Typography>
                                </Box>

                                <Box sx={{mb: 3}}>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <TipsAndUpdatesIcon sx={{color: '#F5811E', mr: 1.5, fontSize: 20}}/>
                                        <Typography variant="subtitle1" sx={{color: '#0D2152', fontWeight: 600}}>
                                            Recommendations
                                        </Typography>
                                    </Box>
                                    <Typography variant="body2" sx={{color: '#4A5568', textAlign: 'justify', mb: 2}}>
                                        {interpretation.recommendation}
                                    </Typography>
                                </Box>

                                <Box>
                                    <Box sx={{display: 'flex', alignItems: 'center', mb: 1}}>
                                        <BuildCircleIcon sx={{color: '#F5811E', mr: 1.5, fontSize: 20}}/>
                                        <Typography variant="subtitle1" sx={{color: '#0D2152', fontWeight: 600}}>
                                            Action Plan
                                        </Typography>
                                    </Box>
                                    <ul style={{paddingLeft: '20px', marginTop: 0}}>
                                        {interpretation.actionPlan.map((action, index) => (
                                            <li key={index}>
                                                <Typography variant="body2" sx={{color: '#4A5568', textAlign: 'justify'}}>
                                                    {action}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                </Box>
                            </Card>
                        );
                    })}

                    {/* Action Buttons */}
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
                            document={<ChildLearningAbility_pdf_view data={pdfData} />}
                            fileName="Child_Learning_Ability_Report.pdf"
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
        );
    }

    return (
        <Box sx={{
            minHeight: 'calc(100vh - 72px)',
            display: 'flex',
            alignItems: 'center',
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

export default ChildLearningAbilityQuestions;