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
// const GeneralStressQuestions = () => {
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
// export default GeneralStressQuestions;










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
    CircularProgress,
    Grid,
    Card, Dialog, DialogActions,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import PdfView from "../../global/pdf-view.jsx";
import { GaugeComponent } from 'react-gauge-component';
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

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
    {label: "Always", value: "4"}
]

const questions = [
    {
        id: 1,
        text: "I feel nervous or worried for no clear reason.",
        options
    },
    {
        id: 2,
        text: "My heart beats fast even when I am not doing physical activity.",
        options
    },
    {
        id: 3,
        text: "I find it hard to relax or calm down.",
        options
    },
    {
        id: 4,
        text: "I overthink or replay situations in my mind again and again.",
        options
    },
    {
        id: 5,
        text: "I feel tired or drained, even after sleeping.",
        options
    },
    {
        id: 6,
        text: "I get irritated or angry quickly.",
        options
    },
    {
        id: 7,
        text: "I avoid people or situations because I feel anxious.",
        options
    },
    {
        id: 8,
        text: "I have trouble falling asleep or staying asleep.",
        options
    },
    {
        id: 9,
        text: "I feel restless or fidgety most of the time.",
        options
    },
    {
        id: 10,
        text: "I often feel like something bad is going to happen.",
        options
    },
    {
        id: 11,
        text: "I get headaches, stomach aches, or muscle pain without a clear reason.",
        options
    },
    {
        id: 12,
        text: "I feel overwhelmed by small tasks or decisions.",
        options
    },
    {
        id: 13,
        text: "I find it hard to concentrate or focus.",
        options
    },
    {
        id: 14,
        text: "I often feel like crying or feel helpless.",
        options
    },
    {
        id: 15,
        text: "I feel disconnected from my surroundings or people.",
        options
    },
    {
        id: 16,
        text: "I worry too much about things I can't control.",
        options
    },
    {
        id: 17,
        text: "I avoid doing things I used to enjoy.",
        options
    },
    {
        id: 18,
        text: "I feel like I am not doing “enough” even when I am busy.",
        options
    },
    {
        id: 19,
        text: "I feel tense in my shoulders, neck, or jaw.",
        options
    },
    {
        id: 20,
        text: "I use my phone or social media to escape my thoughts or feelings.",
        options
    }
];

const getScoreCategory = (score) => {
    if (score >= 61 && score <= 80) {
        return {
            level: "High Stress/Anxiety",
            Analysis: "You may be feeling emotionally exhausted, anxious, or even trapped in your thoughts and feelings.",
            interpretation: "These stress levels can seriously impact your health, mood, sleep, and relationships.",
            recommendations: [
                "It's okay to ask for help — and important to do so.",
                "You deserve to feel better, and there are many ways to begin."
            ],
            actionPlan: [
                "Begin with a guided emotional release session in your app.",
                "Follow a simple daily self-care routine — even if it’s just 10 minutes.",
                "Seek professional help through a counselor or mental health coach.",
                "Practice grounding techniques."
            ],
            supportMessage: "Your app offers access to support, calming tools, and someone to talk to. You are not alone."
        };
    } else if (score >= 41 && score <= 60) {
        return {
            level: "Moderate Stress/Anxiety",
            Analysis: "You are experiencing ongoing stress and anxiety that may be affecting your daily life.",
            interpretation: "Your emotional balance is disrupted, and it’s beginning to impact your thoughts, sleep, or energy.",
            recommendations: [
                "Don’t ignore these signs. They need attention and active care.",
                "Start with small changes that soothe your nervous system."
            ],
            actionPlan: [
                "Use the guided breathing or relaxation audio in your app.",
                "Set realistic daily goals to reduce overwhelm.",
                "Try a “worry time” technique — write your thoughts in a worry notebook and then let them go.",
                "If you feel stuck, book a session with a counselor or join a support group."
            ],
            supportMessage: "You’re not alone. Your app has guided tools and self-care support just for you."
        };
    } else if (score >= 21 && score <= 40) {
        return {
            level: "Mild Stress/Anxiety",
            Analysis: "You are showing signs of daily stress that may come and go.",
            interpretation: "These levels are manageable but can become problematic if ignored.",
            recommendations: [
                "Begin noticing what triggers your stress — situations, people, thoughts, etc.",
                "Build small, daily habits to stay emotionally grounded."
            ],
            actionPlan: [
                "Practice deep breathing 5 minutes a day.",
                "Reduce screen time before bed.",
                "Try journaling your emotions or taking short nature walks.",
                "Talk to someone you trust when you feel overwhelmed."
            ],
            supportMessage: "Use the emotional support tools in your app — anytime, anywhere."
        };
    } else {
        return {
            level: "Low Stress/Anxiety",
            Analysis: "You seem to be managing your stress well and maintaining a balanced mental state.",
            interpretation: "Your coping strategies are working. You may experience stress sometimes, but it doesn’t overpower you.",
            recommendations: [
                "Continue doing what works — routines, sleep, breaks, or mindfulness.",
                "Stay aware of your emotions and thoughts so that you can catch any rising stress early."
            ],
            actionPlan: [
                "Keep a gratitude journal or engage in creative hobbies.",
                "Schedule “me time” weekly.",
                "Use the app to explore stress-prevention tips and emotional wellness activities."
            ],
            supportMessage: "Help is always available in your app — for support, ideas, or just a breather."
        };
    }
};

const GeneralStressQuestions = () => {
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
        const percentage = (totalScore / 80) * 100;

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
                            justifyContent:"center",
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
                                General Stress & Anxiety Assessment Results
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
                                                    colorArray: [ '#5BE12C', '#EA4228'],
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
                                            {result.recommendations.map((rec, index) => (
                                                <Box key={index} sx={{display: 'flex'}}>
                                                    {/*<Typography*/}
                                                    {/*    variant="h6"*/}
                                                    {/*    sx={{*/}
                                                    {/*        color: '#F5811E',*/}
                                                    {/*        fontSize: "18px",*/}
                                                    {/*        fontWeight: 600,*/}
                                                    {/*        mb: 0.5,*/}
                                                    {/*        display: 'flex',*/}
                                                    {/*        alignItems: 'center',*/}
                                                    {/*        gap: 1*/}
                                                    {/*    }}*/}
                                                    {/*>*/}
                                                    {/*    <AssignmentTurnedInIcon sx={{fontSize: 20}}/>*/}
                                                    {/*    {rec.title}*/}
                                                    {/*</Typography>*/}
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
                                            {result.actionPlan.map((rec, index) => (
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
                                    title: "General Stress Assessment Result",
                                    maxScore: 80,
                                    totalScore1: percentage,
                                    totalScore: totalScore,
                                    level: result.level,
                                    interpretation: result.interpretation,
                                    recommendations: result.recommendations,
                                    actionPlan: result.actionPlan,
                                    supportMessage: result.supportMessage,
                                    Analysis: result.Analysis,
                                }}/>}
                                fileName="General_stress_Report.pdf"
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
                                    "&:hover": { bgcolor: "#E26C0A" },
                                }}
                            >
                                Return to Assessments
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </>
        )
            ;
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

export default GeneralStressQuestions;