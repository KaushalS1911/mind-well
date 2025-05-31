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
//     Card,
//     Divider, Dialog, DialogActions
// } from '@mui/material';
// import {styled} from '@mui/material/styles';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import {useNavigate} from 'react-router-dom';
// import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
// import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
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
//             level: "High Academic Stress",
//             interpretation: " The student experiences high levels of academic stress but has developed effective coping strategies to manage it. This indicates a strong ability to handle pressure while maintaining mental and emotional balance.",
//             recommendations: [
//                 {
//                     title: "Maintain Current Strategies",
//                     description: "Encourage the student to continue using and refining their current coping strategies to ensure they remain effective."
//                 },
//                 {
//                     title: "Share Techniques",
//                     description: "Suggest that the student share their successful coping techniques with peers, which can help reinforce their own strategies and provide support to others."
//                 },
//                 {
//                     title: "Balance Life",
//                     description: "Advise maintaining a balanced lifestyle, incorporating academic responsibilities and personal well-being activities to sustain mental and emotional health."
//                 }
//             ]
//         };
//     } else if (score >= 41 && score <= 60) {
//         return {
//             level: "Moderate-High Academic Stress",
//             interpretation: "The student experiences moderate to high levels of academic stress and uses some effective coping strategies but may need improvement in certain areas. While they have some good techniques in place, there is room to enhance their ability to manage stress.",
//             recommendations: [
//                 {
//                     title: "Develop Targeted Strategies",
//                     description: "Identify specific areas of stress and develop targeted coping strategies to address them effectively."
//                 },
//                 {
//                     title: "Engage in Workshops",
//                     description: "Encourage participation in stress management workshops or seeking guidance from academic advisors or counsellors to improve coping skills"
//                 },
//                 {
//                     title: "Time Management & Self-Care",
//                     description: "Focus on enhancing time management and self-care routines to better handle academic pressures."
//                 }
//             ]
//         };
//     } else if (score >= 21 && score <= 40) {
//         return {
//             level: "Moderate Academic Stress",
//             interpretation: " The student experiences moderate levels of academic stress and has inconsistent coping strategies. They may sometimes manage stress well but struggle at other times.",
//             recommendations: [
//                 {
//                     title: "Increase Effective Strategies",
//                     description: "Promote the use of effective coping strategies such as time management, relaxation techniques, and seeking support from friends, family, or professionals."
//                 },
//                 {
//                     title: "Stress Reduction Programs",
//                     description: "Encourage participation in stress reduction programs to learn and implement new coping methods."
//                 },
//                 {
//                     title: "Structured Plan",
//                     description: "Help the student create a structured study and relaxation plan to manage their academic workload more effectively."
//                 }
//             ]
//         };
//     } else if (score >= 11 && score <= 20) {
//         return {
//             level: "Low-Moderate Academic Stress",
//             interpretation: "The student experiences low to moderate levels of academic stress but has limited or ineffective coping strategies. This suggests that while stress levels are not very high, the strategies in place to manage stress are not sufficiently effective.",
//             recommendations: [
//                 {
//                     title: "Develop New Strategies",
//                     description: "Work on developing and practicing new coping strategies that can help manage stress better."
//                 },
//                 {
//                     title: "Seek Support",
//                     description: " Advise seeking regular support from peers, professors, or counsellors to gain different perspectives and coping methods."
//                 },
//                 {
//                     title: "Build a Routine",
//                     description: "Focus on building a routine that includes regular breaks, physical activity, and adequate sleep to maintain overall well-being."
//                 }
//             ]
//         };
//     } else {
//         return {
//             level: "Low Academic Stress",
//             interpretation: "The student experiences low levels of academic stress but may still benefit from improved coping strategies. Even though the stress is currently low, having robust coping mechanisms in place can help prevent future stress buildup.",
//             recommendations: [
//                 {
//                     title: "Proactive Coping",
//                     description: "Encourage the adoption of proactive coping strategies to maintain low stress levels and prevent future stress buildup."
//                 },
//                 {
//                     title: "Well-Being Activities",
//                     description: "Promote participation in activities that support overall well-being and help in preventing stress."
//                 },
//                 {
//                     title: "Monitor Stress Levels",
//                     description: "Stay vigilant about any potential increase in stress levels and address them promptly to ensure they do not escalate."
//                 }
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
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 }
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
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 }
//             ]
//         };
//     } else if (score >= 21 && score <= 40) {
//         return {
//             level: "मध्यम स्कोर",
//             interpretation: "आपमें संभावना है, लेकिन कई क्षेत्रों में विशेष अभिवृद्धि की आवश्यकता है। अपनी रूटीन में नियमित तनाव-मुक्ति तकनीकों, भावनात्मक बुद्धिमत्ता प्रशिक्षण, और संरचित निर्णय लेने की प्रथाओं को शामिल करने का विचार करें। तनाव-मुक्ति तकनीकों का अभ्यास आपको दबाव के तहत शांत रहने और सकारात्मक दृष्टिकोण बनाए रखने में मदद करेगा, भावनात्मक बुद्धिमत्ता प्रशिक्षण आपको अपनी भावनाओं को समझने और प्रभावी रूप से प्रबंधित करने में मदद करेगा, और संरचित निर्णय लेने की प्रथाएँ आपको जटिल स्थितियों को समझने और उन्हें हल करने में मदद करेंगी। इन सभी उपायों को अपनाकर, आप अपनी क्षमताओं को सुधार सकते हैं और अपने लक्ष्यों की दिशा में प्रगति कर सकते हैं",
//             recommendations: [
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 }
//             ]
//         };
//     } else if (score >= 11 && score <= 20) {
//         return {
//             level: "कम स्कोर",
//             interpretation: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।",
//             recommendations: [
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 }
//             ]
//         };
//     }
//     else {
//         return {
//             level: "बहुत कम स्कोर",
//             interpretation: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें। इन कौशलों को सही दिशा में विकसित करना मुश्किलाहटों को सफलतापूर्वक निभाने और अपने लक्ष्यों को प्राप्त करने के लिए महत्वपूर्ण है। पेशेवर मार्गदर्शन या प्रशिक्षण लेना इन क्षेत्रों में आपके विकास को गति देने के लिए महत्वपूर्ण हो सकता है। इन बुनियादी कौशलों को सुधारने के लिए प्रतिबद्ध रहकर, आप अपनी तैयारी को मजबूत करेंगे और अपने प्रयासों में सफलता प्राप्त करने की क्षमता को बढ़ाएंगे।",
//             recommendations: [
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 },
//                 {
//                     title: "कम स्कोर",
//                     description: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें।"
//                 }
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
// const AcademicStressQuestions = () => {
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
//             text: "How often do you feel overwhelmed by your academic workload?",
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
//             text: "How frequently do you worry about your academic performance?",
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
//             text: " How much pressure do you feel to achieve high grades?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "A lot", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//         {
//             id: 4,
//             text: "How often do you experience physical symptoms (e.g., headaches, stomach aches) due to academic stress?",
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
//             text: "How much does academic stress affect your sleep?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "A lot", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//         {
//             id: 6,
//             text: "How often do you feel anxious about exams or assignments?",
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
//             text: "How frequently do you skip meals due to academic commitments?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 8,
//             text: "How often do you feel that you have too many assignments due at the same time?",
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
//             text: "How much does academic stress interfere with your personal relationships?",
//             options: [
//                 {label: "Not at all", value: "0"},
//                 {label: "Slightly", value: "1"},
//                 {label: "Moderately", value: "2"},
//                 {label: "A lot", value: "3"},
//                 {label: "Extremely", value: "4"}
//             ]
//         },
//         {
//             id: 10,
//             text: "How often do you feel that your academic workload is unmanageable?",
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
//             text: "How often do you use time management techniques (e.g., scheduling, to-do lists) to manage your academic work?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 12,
//             text: "How frequently do you seek help from professors or tutors when stressed about academics?",
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
//             text: "How often do you take breaks to relax or engage in leisure activities while studying?",
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
//             text: "How frequently do you use exercise as a way to cope with academic stress? ",
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
//             text: "How often do you talk to friends or family about your academic stress?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 16,
//             text: "How often do you use relaxation techniques (e.g., meditation, deep breathing) to manage stress? ",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 17,
//             text: "How frequently do you get adequate sleep during the academic term?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 18,
//             text: "How often do you plan and organize your study sessions in advance?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 19,
//             text: "How often do you participate in activities or hobbies to take your mind off academic stress?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
//             ]
//         },
//         {
//             id: 20,
//             text: "How frequently do you feel that your coping strategies are effective in managing your academic stress?",
//             options: [
//                 {label: "Never", value: "0"},
//                 {label: "Rarely", value: "1"},
//                 {label: "Sometimes", value: "2"},
//                 {label: "Often", value: "3"},
//                 {label: "Always", value: "4"}
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
//                                                 <Typography variant="h6" sx={{color: '#4A5568'}}>
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
//                                                     <AssignmentTurnedInIcon sx={{fontSize: 20}}/>
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
//
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
//                                 }} />}
//                                 fileName="Academic_Stress_Report.pdf"
//                                 style={{ textDecoration: "none" }}
//                             >
//                                 {({ loading }) => (
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
//                                     "&:hover": { bgcolor: "#E26C0A" },
//                                 }}
//                             >
//                                 Return to Assessments
//                             </Button>
//                         </Box>
//                     </Box>
//                 </Container>
//
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
// export default AcademicStressQuestions;









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
    Card,
    Divider, Dialog, DialogActions
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import PdfView from "../../global/pdf-view.jsx";

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
        text: "How often do you feel overwhelmed by your academic workload?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 2,
        text: "How frequently do you worry about your academic performance?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 3,
        text: " How much pressure do you feel to achieve high grades?",
        options: [
            {label: "Not at all", value: "0"},
            {label: "Slightly", value: "1"},
            {label: "Moderately", value: "2"},
            {label: "A lot", value: "3"},
            {label: "Extremely", value: "4"}
        ]
    },
    {
        id: 4,
        text: "How often do you experience physical symptoms (e.g., headaches, stomach aches) due to academic stress?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 5,
        text: "How much does academic stress affect your sleep?",
        options: [
            {label: "Not at all", value: "0"},
            {label: "Slightly", value: "1"},
            {label: "Moderately", value: "2"},
            {label: "A lot", value: "3"},
            {label: "Extremely", value: "4"}
        ]
    },
    {
        id: 6,
        text: "How often do you feel anxious about exams or assignments?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 7,
        text: "How frequently do you skip meals due to academic commitments?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 8,
        text: "How often do you feel that you have too many assignments due at the same time?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 9,
        text: "How much does academic stress interfere with your personal relationships?",
        options: [
            {label: "Not at all", value: "0"},
            {label: "Slightly", value: "1"},
            {label: "Moderately", value: "2"},
            {label: "A lot", value: "3"},
            {label: "Extremely", value: "4"}
        ]
    },
    {
        id: 10,
        text: "How often do you feel that your academic workload is unmanageable?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 11,
        text: "How often do you use time management techniques (e.g., scheduling, to-do lists) to manage your academic work?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 12,
        text: "How frequently do you seek help from professors or tutors when stressed about academics?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 13,
        text: "How often do you take breaks to relax or engage in leisure activities while studying?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 14,
        text: "How frequently do you use exercise as a way to cope with academic stress? ",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 15,
        text: "How often do you talk to friends or family about your academic stress?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 16,
        text: "How often do you use relaxation techniques (e.g., meditation, deep breathing) to manage stress? ",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 17,
        text: "How frequently do you get adequate sleep during the academic term?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 18,
        text: "How often do you plan and organize your study sessions in advance?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 19,
        text: "How often do you participate in activities or hobbies to take your mind off academic stress?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
    {
        id: 20,
        text: "How frequently do you feel that your coping strategies are effective in managing your academic stress?",
        options: [
            {label: "Never", value: "0"},
            {label: "Rarely", value: "1"},
            {label: "Sometimes", value: "2"},
            {label: "Often", value: "3"},
            {label: "Always", value: "4"}
        ]
    },
];

const getScoreCategory = (score) => {
    if (score >= 61 && score <= 80) {
        return {
            level: "High Academic Stress",
            interpretation: "The student experiences high levels of academic stress but has developed effective coping strategies to manage it. This indicates a strong ability to handle pressure while maintaining mental and emotional balance.",
            recommendations: [
                {
                    title: "Maintain Current Strategies",
                    description: "Encourage the student to continue using and refining their current coping strategies to ensure they remain effective."
                },
                {
                    title: "Share Techniques",
                    description: "Suggest that the student share their successful coping techniques with peers, which can help reinforce their own strategies and provide support to others."
                },
                {
                    title: "Balance Life",
                    description: "Advise maintaining a balanced lifestyle, incorporating academic responsibilities and personal well-being activities to sustain mental and emotional health."
                }
            ]
        };
    } else if (score >= 41 && score <= 60) {
        return {
            level: "Moderate-High Academic Stress",
            interpretation: "The student experiences moderate to high levels of academic stress and uses some effective coping strategies but may need improvement in certain areas. While they have some good techniques in place, there is room to enhance their ability to manage stress.",
            recommendations: [
                {
                    title: "Develop Targeted Strategies",
                    description: "Identify specific areas of stress and develop targeted coping strategies to address them effectively."
                },
                {
                    title: "Engage in Workshops",
                    description: "Encourage participation in stress management workshops or seeking guidance from academic advisors or counsellors to improve coping skills"
                },
                {
                    title: "Time Management & Self-Care",
                    description: "Focus on enhancing time management and self-care routines to better handle academic pressures."
                }
            ]
        };
    } else if (score >= 21 && score <= 40) {
        return {
            level: "Moderate Academic Stress",
            interpretation: " The student experiences moderate levels of academic stress and has inconsistent coping strategies. They may sometimes manage stress well but struggle at other times.",
            recommendations: [
                {
                    title: "Increase Effective Strategies",
                    description: "Promote the use of effective coping strategies such as time management, relaxation techniques, and seeking support from friends, family, or professionals."
                },
                {
                    title: "Stress Reduction Programs",
                    description: "Encourage participation in stress reduction programs to learn and implement new coping methods."
                },
                {
                    title: "Structured Plan",
                    description: "Help the student create a structured study and relaxation plan to manage their academic workload more effectively."
                }
            ]
        };
    } else if (score >= 11 && score <= 20) {
        return {
            level: "Low-Moderate Academic Stress",
            interpretation: "The student experiences low to moderate levels of academic stress but has limited or ineffective coping strategies. This suggests that while stress levels are not very high, the strategies in place to manage stress are not sufficiently effective.",
            recommendations: [
                {
                    title: "Develop New Strategies",
                    description: "Work on developing and practicing new coping strategies that can help manage stress better."
                },
                {
                    title: "Seek Support",
                    description: " Advise seeking regular support from peers, professors, or counsellors to gain different perspectives and coping methods."
                },
                {
                    title: "Build a Routine",
                    description: "Focus on building a routine that includes regular breaks, physical activity, and adequate sleep to maintain overall well-being."
                }
            ]
        };
    } else {
        return {
            level: "Low Academic Stress",
            interpretation: "The student experiences low levels of academic stress but may still benefit from improved coping strategies. Even though the stress is currently low, having robust coping mechanisms in place can help prevent future stress buildup.The student experiences low levels of academic stress but may still benefit from improved coping strategies. Even though the stress is currently low, having robust coping mechanisms in place can help prevent future stress buildup.",
            recommendations: [
                {
                    title: "Proactive Coping",
                    description: "Encourage the adoption of proactive coping strategies to maintain low stress levels and prevent future stress buildup."
                },
                {
                    title: "Well-Being Activities",
                    description: "Promote participation in activities that support overall well-being and help in preventing stress."
                },
                {
                    title: "Monitor Stress Levels",
                    description: "Stay vigilant about any potential increase in stress levels and address them promptly to ensure they do not escalate."
                }
            ]
        };
    }
};

const GaugeChartComponent = ({score, maxScore}) => {
    const percentage = (score / maxScore) * 100;
    const data = [
        {name: 'Score', value: percentage},
        {name: 'Remaining', value: 100 - percentage}
    ];

    const getColor = (percentage) => {
        if (percentage <= 25) return '#4CAF50';
        if (percentage <= 50) return '#FFC107';
        if (percentage <= 75) return '#FF9800';
        return '#F44336';
    };

    const getStressLevel = (percentage) => {
        if (percentage <= 25) return 'Low';
        if (percentage <= 50) return 'Moderate';
        if (percentage <= 75) return 'High';
        return 'Severe';
    };

    return (
        <Box sx={{
            width: '100%',
            height: 300,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mb: 4,
            position: 'relative'
        }}>
            <Box sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={100}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            <Cell fill={getColor(percentage)}/>
                            <Cell fill="#E6EAF3"/>
                        </Pie>
                        <Tooltip
                            formatter={(value) => [`${value.toFixed(1)}%`, '']}
                            contentStyle={{
                                backgroundColor: '#FFFFFF',
                                border: '1px solid #E6EAF3',
                                borderRadius: '8px',
                                fontFamily: 'Poppins'
                            }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <Box sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography variant="h2" sx={{
                        color: getColor(percentage),
                        fontWeight: 700,
                        fontFamily: 'Montserrat',
                        lineHeight: 1,
                        fontSize: {xs: '3rem', sm: '4rem'}
                    }}>
                        {score}
                    </Typography>
                    <Typography sx={{
                        color: '#4B5563',
                        fontSize: '1rem',
                        fontFamily: 'Poppins',
                        fontWeight: 500
                    }}>
                        Points
                    </Typography>
                </Box>
            </Box>
            <Box sx={{
                mt: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                backgroundColor: `${getColor(percentage)}20`,
                padding: '8px 16px',
                borderRadius: '20px',
                border: `1px solid ${getColor(percentage)}40`
            }}>
                <Typography sx={{
                    color: getColor(percentage),
                    fontSize: '1rem',
                    fontFamily: 'Poppins',
                    fontWeight: 600
                }}>
                    {getStressLevel(percentage)} Stress Level
                </Typography>
            </Box>
        </Box>
    );
};

const AcademicStressQuestions = () => {
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
                                Your Assessment Results
                            </Typography>

                        </Box>

                        <Grid container spacing={4}>
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
                                            <CircularProgress
                                                variant="determinate"
                                                value={percentage}
                                                size={200}
                                                thickness={4}
                                                sx={{
                                                    color: totalScore >= 61 ? '#ff4d4d' :
                                                        totalScore >= 41 ? '#ffa500' :
                                                            totalScore >= 21 ? '#ffdd00' : totalScore >= 11 ? '#90EE90' : '#47e447',
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
                                            {/*                totalScore >= 21 ? '#ffff00' :*/}
                                            {/*                    totalScore >= 11 ? '#90EE90' : '#00ff00',*/}
                                            {/*        position: 'absolute',*/}
                                            {/*        left: 34,*/}
                                            {/*    }}*/}
                                            {/*/>*/}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Typography variant="h3" sx={{fontWeight: 700, color: '#0D2152'}}>
                                                    {totalScore}
                                                </Typography>
                                                <Typography variant="h6" sx={{color: '#4A5568'}}>
                                                    out of 80
                                                </Typography>
                                            </Box>
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
                                        {result.interpretation}
                                    </Typography>
                                </Card>
                            </Grid>

                            {/* Recommendations Section */
                            }
                            <Grid item xs={12} md={6}>
                                <Card sx={{
                                    p: 4,
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                    borderRadius: 4
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        mb: 2
                                    }}>
                                        <TipsAndUpdatesIcon sx={{color: '#F5811E', mr: 2, fontSize: 30}}/>
                                        <Typography variant="h6" sx={{color: '#0D2152', fontWeight: 600}}>
                                            Recommendations
                                        </Typography>
                                    </Box>

                                    <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
                                        {result.recommendations.map((rec, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    p: 2.5,
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
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        color: '#F5811E',
                                                        fontSize: "19px",
                                                        fontWeight: 600,
                                                        mb: 1,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1
                                                    }}
                                                >
                                                    <AssignmentTurnedInIcon sx={{fontSize: 20}}/>
                                                    {rec.title}
                                                </Typography>
                                                <Typography variant="body1"
                                                            sx={{color: '#4A5568', textAlign: "justify",}}>
                                                    {rec.description}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>


                        <Box
                            sx={{
                                display: "flex",
                                gap: 2,
                                justifyContent: "center",
                                mt: 4,
                            }}
                        >
                            <PDFDownloadLink
                                document={<PdfView data={{
                                    totalScore: totalScore,
                                    level: result.level,
                                    interpretation: result.interpretation,
                                    recommendations: result.recommendations
                                }} />}
                                fileName="Academic_Stress_Report.pdf"
                                style={{ textDecoration: "none" }}
                            >
                                {({ loading }) => (
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

export default AcademicStressQuestions;