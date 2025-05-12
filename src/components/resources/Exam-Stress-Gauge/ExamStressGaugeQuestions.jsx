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
//         if (score >= 61 && score <= 80) {
//             return {
//                 level: "High Academic Stress",
//                 interpretation: "You have demonstrated excellent stress management, emotional resilience, and decision-making skills, which are crucial for your exam preparation. Your ability to stay calm under pressure and maintain a positive mindset is commendable, and these traits will serve you well not only in your exams but also in your future career. Keep up the good work, continue refining your skills, and remember that consistent effort and self-belief are key to achieving your goals. With your determination and resilience, you are well-equipped to overcome any challenges that come your way.",
//             };
//         } else if (score >= 41 && score <= 60) {
//             return {
//                 level: "Moderate-High Academic Stress",
//                 interpretation: "You have demonstrated good skills and behaviors, but there are some areas that could benefit from improvement. Focus on enhancing your stress management techniques and decision-making strategies to be fully prepared for the challenges ahead. Developing a robust set of stress management skills will help you stay calm and focused under pressure, while refining your decision-making strategies will ensure you can navigate complex situations with confidence. By addressing these areas, you'll be better equipped to tackle any obstacles and achieve your goals more effectively.",
//             };
//         } else if (score >= 21 && score <= 40) {
//             return {
//                 level: "Moderate Academic Stress",
//                 interpretation: "You show potential, but there are several areas that need significant improvement. Consider incorporating regular stress-relief techniques, emotional intelligence training, and structured decision-making practices into your routine. Practicing stress-relief techniques will help you stay calm under pressure and maintain a positive outlook. Emotional intelligence training will aid you in understanding your emotions and managing them effectively. Structured decision-making practices will assist you in comprehending and resolving complex situations. By adopting these measures, you can enhance your abilities and make progress towards your goals.",
//             };
//         } else if (score >= 11 && score <= 20) {
//             return {
//                 level: "Low-Moderate Academic Stress",
//                 interpretation: "There are several areas of concern that need to be addressed. It's crucial to prioritize the development of better stress management techniques, emotional resilience, and consistent study habits. Improving your stress management skills will empower you to handle pressure effectively; while enhancing emotional resilience will help you bounce back from setbacks with confidence. Developing consistent study habits will ensure you stay organized and focused on your goals. Don't hesitate to seek guidance from mentors and utilize resources that can support you in these areas of growth. By actively working on these aspects, you'll build a strong foundation for achieving success in your endeavours.",
//             };
//         } else {
//             return {
//                 level: "Low Academic Stress",
//                 interpretation: "Your responses indicate major development is needed in almost all aspects. It's essential to prioritize building a strong foundation in stress management, emotional intelligence, and disciplined study routines. These skills are crucial for navigating challenges effectively and achieving your goals. Seeking professional guidance or training can provide valuable insights and strategies to accelerate your growth in these areas. By committing to improving these foundational skills, you'll enhance your readiness and capability to succeed in your endeavours.",
//             };
//         }
// }
// const hindiScore = (score) => {
//         if (score >= 61 && score <= 80) {
//             return {
//                 level: " उच्च स्कोर ",
//                 interpretation: "आपने उत्कृष्ट तनाव प्रबंधन, भावनात्मक दृढ़ता, और निर्णय लेने के कौशल का प्रदर्शन किया है, जो आपकी परीक्षा की तैयारी के लिए बहुत महत्वपूर्ण हैं। दबाव में शांत रहने और सकारात्मक सोच बनाए रखने की आपकी क्षमता सराहनीय है, और ये गुण न केवल आपकी परीक्षाओं में बल्कि आपके भविष्य के करियर में भी आपको अच्छी तरह से सेवा देंगे। अच्छा काम जारी रखें, अपने कौशल को परिष्कृत करते रहें, और याद रखें कि निरंतर प्रयास और आत्मविश्वास आपके लक्ष्यों को प्राप्त करने की कुंजी हैं। आपके दृढ़ संकल्प और दृढ़ता के साथ, आप किसी भी चुनौती को पार करने के लिए अच्छी तरह से सुसज्जित हैं।",
//             };
//         }
//         else if (score >= 41 && score <= 60) {
//             return {
//                 level: "मध्यम स्कोर ",
//                 interpretation: "आपने अच्छे कौशल और व्यवहार का प्रदर्शन किया है, लेकिन कुछ क्षेत्रों में सुधार की आवश्यकता है। आने वाली चुनौतियों के लिए पूरी तरह से तैयार होने के लिए अपने तनाव प्रबंधन तकनीकों और निर्णय लेने की रणनीतियों को बढ़ाने पर ध्यान दें। तनाव प्रबंधन कौशल को विकसित करना आपको दबाव में शांत और केंद्रित रहने में मदद करेगा, जबकि निर्णय लेने की रणनीतियों को परिष्कृत करना सुनिश्चित करेगा कि आप जटिल परिस्थितियों को आत्मविश्वास के साथ संभाल सकें। इन क्षेत्रों पर काम करके, आप किसी भी बाधा का मुकाबला करने और अपने लक्ष्यों को अधिक प्रभावी ढंग से प्राप्त करने के लिए बेहतर सुसज्जित होंगे।\"",
//             };
//         } else if (score >= 21 && score <= 40) {
//             return {
//                 level: "मध्यम स्कोर",
//                 interpretation: "आपमें संभावना है, लेकिन कई क्षेत्रों में विशेष अभिवृद्धि की आवश्यकता है। अपनी रूटीन में नियमित तनाव-मुक्ति तकनीकों, भावनात्मक बुद्धिमत्ता प्रशिक्षण, और संरचित निर्णय लेने की प्रथाओं को शामिल करने का विचार करें। तनाव-मुक्ति तकनीकों का अभ्यास आपको दबाव के तहत शांत रहने और सकारात्मक दृष्टिकोण बनाए रखने में मदद करेगा, भावनात्मक बुद्धिमत्ता प्रशिक्षण आपको अपनी भावनाओं को समझने और प्रभावी रूप से प्रबंधित करने में मदद करेगा, और संरचित निर्णय लेने की प्रथाएँ आपको जटिल स्थितियों को समझने और उन्हें हल करने में मदद करेंगी। इन सभी उपायों को अपनाकर, आप अपनी क्षमताओं को सुधार सकते हैं और अपने लक्ष्यों की दिशा में प्रगति कर सकते हैं",
//             };
//         } else if (score >= 11 && score <= 20) {
//             return {
//                 level: "कम स्कोर",
//                 interpretation: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।",
//             };
//         }
//         else {
//             return {
//                 level: "बहुत कम स्कोर",
//                 interpretation: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें। इन कौशलों को सही दिशा में विकसित करना मुश्किलाहटों को सफलतापूर्वक निभाने और अपने लक्ष्यों को प्राप्त करने के लिए महत्वपूर्ण है। पेशेवर मार्गदर्शन या प्रशिक्षण लेना इन क्षेत्रों में आपके विकास को गति देने के लिए महत्वपूर्ण हो सकता है। इन बुनियादी कौशलों को सुधारने के लिए प्रतिबद्ध रहकर, आप अपनी तैयारी को मजबूत करेंगे और अपने प्रयासों में सफलता प्राप्त करने की क्षमता को बढ़ाएंगे।",
//             };
//         }
// }
//
//
// const getScoreCategory = (score,language) => {
//     if(language == "english") {
//         return englishScore(score);
//     }else{
//       return hindiScore(score);
//     }
// };
//
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
// const ExamStressGaugeQuestions = () => {
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
//             text: "How do you typically handle high-pressure situations?",
//             options: [
//                 {label: "Stay calm and focused", value: "0"},
//                 {label: "Get anxious but manage to push through", value: "1"},
//                 {label: "Struggle to maintain composure", value: "2"},
//                 {label: " Avoid the situation altogether", value: "3"},
//             ]
//         },
//         {
//             id: 2,
//             text: "When faced with multiple deadlines, how do you prioritize tasks?",
//             options: [
//                 {label: "By urgency and importance", value: "0"},
//                 {label: "By deadlines only", value: "1"},
//                 {label: "Randomly", value: "2"},
//                 {label: "Often get overwhelmed and delay decision-making", value: "3"},
//             ]
//         },
//         {
//             id: 3,
//             text: "How often do you take breaks to manage stress during study sessions?",
//             options: [
//                 {label: "Regularly, every 1-2 hours", value: "0"},
//                 {label: "Occasionally, when I feel tired", value: "1"},
//                 {label: "Rarely, only when exhausted", value: "2"},
//                 {label: "Never, I just push through", value: "3"},
//             ]
//         },
//         {
//             id: 4,
//             text: "What techniques do you use to cope with exam-related anxiety?",
//             options: [
//                 {label: "Deep breathing and meditation", value: "0"},
//                 {label: "Talking to friends and family", value: "1"},
//                 {label: "Ignoring it and hoping it goes away", value: "2"},
//                 {label: "Procrastinating or avoiding study", value: "3"},
//             ]
//         },
//         {
//             id: 5,
//             text: "How do you react to failure or setbacks?",
//             options: [
//                 {label: "Analyse what went wrong and try again", value: "0"},
//                 {label: "Feel disappointed but move on quickly", value: "1"},
//                 {label: "Get very upset and demotivated", value: "2"},
//                 {label: "Consider giving up", value: "3"},
//             ]
//         },
//         {
//             id: 6,
//             text: "When you receive criticism, how do you respond?",
//             options: [
//                 {label: "Constructively, using it to improve", value: "0"},
//                 {label: "Neutrally, with little impact on my emotions", value: "1"},
//                 {label: "Defensively, often taking it personally", value: "2"},
//                 {label: "Negatively, feeling discouraged", value: "3"},
//             ]
//         },
//         {
//             id: 7,
//             text: "How do you deal with feelings of frustration during your preparation?",
//             options: [
//                 {label: "Find a way to resolve the issue causing frustration", value: "0"},
//                 {label: "Take a break and come back to it later", value: "1"},
//                 {label: "Vent to friends or family", value: "2"},
//                 {label: "Let it affect my motivation and productivity", value: "3"}
//             ]
//         },
//         {
//             id: 8,
//             text: "How often do you reflect on your emotional responses to situations?",
//             options: [
//                 {label: "Frequently, to understand and improve", value: "0"},
//                 {label: "Sometimes, when things go wrong", value: "1"},
//                 {label: "Rarely, only in extreme cases", value: "2"},
//                 {label: "Never, I don't think about my emotions much", value: "3"}
//             ]
//         },
//         {
//             id: 9,
//             text: "How do you make decisions when you have insufficient information?",
//             options: [
//                 {label: "Gather as much information as possible and then decide", value: "0"},
//                 {label: "Go with my intuition", value: "1"},
//                 {label: "Seek advice from others", value: "2"},
//                 {label: "Postpone the decision until more information is available", value: "3"}
//             ]
//         },
//         {
//             id: 10,
//             text: "When making a tough decision, what is your primary consideration?",
//             options: [
//                 {label: "Long-term consequences", value: "0"},
//                 {label: "Immediate benefits", value: "1"},
//                 {label: "Opinions of others", value: "2"},
//                 {label: "Avoiding conflict", value: "3"}
//             ]
//         },
//         {
//             id: 11,
//             text: "How confident are you in your decision-making abilities?",
//             options: [
//                 {label: "Very confident", value: "0"},
//                 {label: "Fairly confident", value: "1"},
//                 {label: "Sometimes doubt my decisions", value: "2"},
//                 {label: "Often unsure and second-guess myself", value: "3"}
//             ]
//         },
//         {
//             id: 12,
//             text: "How do you handle situations where you have made a wrong decision?",
//             options: [
//                 {label: "Accept it, learn from it, and move on", value: "0"},
//                 {label: "Feel regret but try to fix it", value: "1"},
//                 {label: "Get upset and dwell on it", value: "2"},
//                 {label: "Blame external factors", value: "3"}
//             ]
//         },
//         {
//             id: 13,
//             text: "What motivates you to pursue your chosen career path?",
//             options: [
//                 {label: "Desire to make a positive impact on society", value: "0"},
//                 {label: "Prestige and respect associated with the job", value: "1"},
//                 {label: "Job security and benefits", value: "2"},
//                 {label: "Pressure from family or peers", value: "3"}
//             ]
//         },
//         {
//             id: 14,
//             text: "How do you keep yourself motivated during tough times?",
//             options: [
//                 {label: "Remind myself of my goals and aspirations", value: "0"},
//                 {label: "Seek inspiration from successful people", value: "1"},
//                 {label: "Take breaks and relax", value: "2"},
//                 {label: "Struggle to stay motivated", value: "3"}
//             ]
//         },
//         {
//             id: 15,
//             text: "How do you handle distractions while studying?",
//             options: [
//                 {label: "Create a strict study schedule and stick to it", value: "0"},
//                 {label: "Limit distractions by creating a study-friendly environment", value: "1"},
//                 {label: "Occasionally give in to distractions but get back on track", value: "2"},
//                 {label: "Often find myself distracted and unable to focus", value: "3"}
//             ]
//         },
//         {
//             id: 16,
//             text: "How committed are you to your preparation routine?",
//             options: [
//                 {label: "Fully committed, rarely miss a study session", value: "0"},
//                 {label: "Mostly committed, but sometimes flexible", value: "1"},
//                 {label: "Somewhat committed, often get sidetracked", value: "2"},
//                 {label: "Struggle to maintain a consistent routine", value: "3"}
//             ]
//         },
//         {
//             id: 17,
//             text: "How do you handle conflicts or disagreements with others?",
//             options: [
//                 {label: "Try to understand their perspective and resolve amicably", value: "0"},
//                 {label: "Stand firm on my viewpoint but remain respectful", value: "1"},
//                 {label: "Avoid confrontation as much as possible", value: "2"},
//                 {label: "Get frustrated and let emotions take over", value: "3"}
//             ]
//         },
//         {
//             id: 18,
//             text: "How often do you seek feedback from others about your performance?",
//             options: [
//                 {label: "Regularly, to improve and grow", value: "0"},
//                 {label: "Occasionally, when I feel it's needed", value: "1"},
//                 {label: "Rarely, only when asked", value: "2"},
//                 {label: "Never, I rely on self-assessment", value: "3"}
//             ]
//         },
//         {
//             id: 19,
//             text: "How do you contribute to group study sessions or discussions?",
//             options: [
//                 {label: "Actively participate and share my knowledge", value: "0"},
//                 {label: "Listen and contribute when I have something valuable to add", value: "1"},
//                 {label: "Mostly listen, rarely contribute", value: "2"},
//                 {label: "Prefer to study alone and avoid group sessions", value: "3"}
//             ]
//         },
//         {
//             id: 20,
//             text: "When working with others, what role do you typically take?",
//             options: [
//                 {label: "Leader, organizing and directing the group", value: "0"},
//                 {label: "Collaborator, working closely with others", value: "1"},
//                 {label: "Supporter, helping where needed", value: "2"},
//                 {label: "Observer, letting others take the lead", value: "3"}
//             ]
//         },
//     ] : [
//             {
//                 "id": 21,
//                 "text": "आप सामान्यतः उच्च दबाव वाली स्थितियों को कैसे संभालते हैं?",
//                 "options": [
//                     {"label": "शांत और केंद्रित रहते हैं", "value": "0"},
//                     {"label": "चिंतित हो जाते हैं लेकिन फिर भी संभालते हैं", "value": "1"},
//                     {"label": "संयम बनाए रखने में संघर्ष करते हैं", "value": "2"},
//                     {"label": "स्थिति से बचने की कोशिश करते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 22,
//                 "text": "जब आपके पास कई समय-सीमाएं होती हैं, तो आप कार्यों को कैसे प्राथमिकता देते हैं?",
//                 "options": [
//                     {"label": "तत्कालता और महत्व के आधार पर", "value": "0"},
//                     {"label": "केवल समय-सीमाओं के आधार पर", "value": "1"},
//                     {"label": "बेतरतीब ढंग से", "value": "2"},
//                     {"label": "अक्सर उलझन में पड़ जाते हैं और निर्णय लेने में देरी करते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 23,
//                 "text": "पढ़ाई के दौरान तनाव प्रबंधन के लिए आप कितनी बार ब्रेक लेते हैं?",
//                 "options": [
//                     {"label": "नियमित रूप से, हर 1-2 घंटे में", "value": "0"},
//                     {"label": "कभी-कभी, जब थकान महसूस होती है", "value": "1"},
//                     {"label": "शायद ही कभी, केवल जब अत्यधिक थकान होती है", "value": "2"},
//                     {"label": "कभी नहीं, मैं लगातार पढ़ाई करता हूँ", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 24,
//                 "text": "परीक्षा से संबंधित चिंता का सामना करने के लिए आप कौन सी तकनीकें उपयोग करते हैं?",
//                 "options": [
//                     {"label": "गहरी साँस लेना और ध्यान करना", "value": "0"},
//                     {"label": "दोस्तों और परिवार से बात करना", "value": "1"},
//                     {"label": "इसे अनदेखा करना और उम्मीद करना कि यह चला जाएगा", "value": "2"},
//                     {"label": "पढ़ाई टालना या उससे बचना", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 25,
//                 "text": "असफलता या प्रतिकूल परिस्थितियों का सामना कैसे करते हैं?",
//                 "options": [
//                     {"label": "विश्लेषण करते हैं कि क्या गलत हुआ और फिर से प्रयास करते हैं", "value": "0"},
//                     {"label": "निराश होते हैं लेकिन जल्दी ही आगे बढ़ जाते हैं", "value": "1"},
//                     {"label": "बहुत निराश और हतोत्साहित हो जाते हैं", "value": "2"},
//                     {"label": "हार मानने का विचार करते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 26,
//                 "text": "जब आपको आलोचना मिलती है, तो आप कैसे प्रतिक्रिया करते हैं?",
//                 "options": [
//                     {"label": "रचनात्मक रूप से, इसका उपयोग सुधारने के लिए करते हैं", "value": "0"},
//                     {"label": "तटस्थ रूप से, जिससे मेरी भावनाओं पर थोड़ा प्रभाव पड़ता है", "value": "1"},
//                     {"label": "रक्षात्मक रूप से, इसे व्यक्तिगत रूप में लेते हैं", "value": "2"},
//                     {"label": "नकारात्मक रूप से, हतोत्साहित हो जाते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 27,
//                 "text": "अपनी तैयारी के दौरान निराशा की भावनाओं का आप कैसे सामना करते हैं?",
//                 "options": [
//                     {"label": "उस समस्या का समाधान खोजते हैं जो निराशा का कारण बन रही है", "value": "0"},
//                     {"label": "ब्रेक लेते हैं और बाद में फिर से प्रयास करते हैं", "value": "1"},
//                     {"label": "दोस्तों या परिवार से अपनी भावनाएं व्यक्त करते हैं", "value": "2"},
//                     {"label": "इससे मेरी प्रेरणा और उत्पादकता पर प्रभाव पड़ता है", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 28,
//                 "text": "आप कितनी बार अपनी भावनात्मक प्रतिक्रियाओं पर विचार करते हैं?",
//                 "options": [
//                     {"label": "अक्सर, समझने और सुधारने के लिए", "value": "0"},
//                     {"label": "कभी-कभी, जब चीजें गलत हो जाती हैं", "value": "1"},
//                     {"label": "शायद ही कभी, केवल अत्यधिक मामलों में", "value": "2"},
//                     {"label": "कभी नहीं, मैं अपनी भावनाओं के बारे में नहीं सोचता", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 29,
//                 "text": "जब आपके पास पर्याप्त जानकारी नहीं होती है, तो आप कैसे निर्णय लेते हैं?",
//                 "options": [
//                     {"label": "जितना संभव हो उतनी जानकारी एकत्रित करते हैं और फिर निर्णय लेते हैं", "value": "0"},
//                     {"label": "अपनी अंतर्दृष्टि पर भरोसा करते हैं", "value": "1"},
//                     {"label": "दूसरों से सलाह लेते हैं", "value": "2"},
//                     {"label": "निर्णय को तब तक टालते हैं जब तक कि अधिक जानकारी उपलब्ध नहीं हो जाती", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 30,
//                 "text": "कठिन निर्णय लेते समय आपका मुख्य विचार क्या होता है?",
//                 "options": [
//                     {"label": "दीर्घकालिक परिणाम", "value": "0"},
//                     {"label": "तात्कालिक लाभ", "value": "1"},
//                     {"label": "दूसरों की राय", "value": "2"},
//                     {"label": "संघर्ष से बचना", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 31,
//                 "text": "आप अपनी निर्णय लेने की क्षमता पर कितना विश्वास रखते हैं?",
//                 "options": [
//                     {"label": "बहुत आत्मविश्वासी", "value": "0"},
//                     {"label": "काफी आत्मविश्वासी", "value": "1"},
//                     {"label": "कभी-कभी अपने निर्णयों पर संदेह करते हैं", "value": "2"},
//                     {"label": "अक्सर अनिश्चित और पुनर्विचार करते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 32,
//                 "text": "जब आप गलत निर्णय लेते हैं, तो आप कैसे संभालते हैं?",
//                 "options": [
//                     {"label": "इसे स्वीकार करते हैं, इससे सीखते हैं, और आगे बढ़ते हैं", "value": "0"},
//                     {"label": "पछतावा महसूस करते हैं लेकिन इसे सुधारने की कोशिश करते हैं", "value": "1"},
//                     {"label": "परेशान हो जाते हैं और इसे लेकर सोचते रहते हैं", "value": "2"},
//                     {"label": "बाहरी कारकों को दोष देते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 33,
//                 "text": "आपको अपने चुने हुए करियर मार्ग को अपनाने के लिए क्या प्रेरित करता है?",
//                 "options": [
//                     {"label": "समाज पर सकारात्मक प्रभाव डालने की इच्छा", "value": "0"},
//                     {"label": "नौकरी के साथ मिलने वाली प्रतिष्ठा और सम्मान", "value": "1"},
//                     {"label": "नौकरी की सुरक्षा और लाभ", "value": "2"},
//                     {"label": "परिवार या साथियों का दबाव", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 34,
//                 "text": "कठिन समय में खुद को प्रेरित रखने के लिए आप क्या करते हैं?",
//                 "options": [
//                     {"label": "अपने लक्ष्यों और आकांक्षाओं को याद करते हैं", "value": "0"},
//                     {"label": "सफल लोगों से प्रेरणा लेते हैं", "value": "1"},
//                     {"label": "ब्रेक लेते हैं और आराम करते हैं", "value": "2"},
//                     {"label": "प्रेरित रहने के लिए संघर्ष करते हैं", " döneminde": "3"}
//                 ]
//             },
//             {
//                 "id": 35,
//                 "text": "पढ़ाई के दौरान आप ध्यान भंग करने का कैसे सामना करते हैं?",
//                 "options": [
//                     {"label": "सख्त पढ़ाई कार्यक्रम बनाते हैं और उसका पालन करते हैं", "value": "0"},
//                     {"label": "ध्यान भंग को कम करने के लिए पढ़ाई के अनुकूल माहौल बनाते हैं", "value": "1"},
//                     {"label": "कभी-कभी ध्यान भंग में फंस जाते हैं लेकिन फिर से ध्यान केंद्रित करते हैं", "value": "2"},
//                     {"label": "अक्सर ध्यान भंग में फंस जाते हैं और ध्यान केंद्रित करने में असमर्थ रहते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 36,
//                 "text": "आप अपनी तैयारी की दिनचर्या के प्रति कितने प्रतिबद्ध हैं?",
//                 "options": [
//                     {"label": "पूरी तरह प्रतिबद्ध, शायद ही कभी पढ़ाई सत्र मिस करते हैं", "value": "0"},
//                     {"label": "काफी प्रतिबद्ध, लेकिन कभी-कभी लचीले रहते हैं", "value": "1"},
//                     {"label": "कुछ हद तक प्रतिबद्ध, अक्सर अन्य चीजों में फंस जाते हैं", "value": "2"},
//                     {"label": "निरंतर दिनचर्या बनाए रखने में संघर्ष करते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 37,
//                 "text": "आप दूसरों के साथ मतभेद या विवाद को कैसे संभालते हैं?",
//                 "options": [
//                     {"label": "उनकी दृष्टिकोण को समझने की कोशिश करते हैं और सौहार्दपूर्ण ढंग से हल करते हैं", "value": "0"},
//                     {"label": "अपने दृष्टिकोण पर अडिग रहते हैं लेकिन सम्मानपूर्वक", "value": "1"},
//                     {"label": "जितना हो सके टकराव से बचते हैं", "value": "2"},
//                     {"label": "निराश हो जाते हैं और भावनाओं को हावी होने देते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 38,
//                 "text": "आप कितनी बार दूसरों से अपनी प्रदर्शन के बारे में प्रतिक्रिया मांगते हैं?",
//                 "options": [
//                     {"label": "नियमित रूप से, सुधारने और बढ़ने के लिए", "value": "0"},
//                     {"label": "कभी-कभी, जब मुझे लगता है कि इसकी आवश्यकता है", "value": "1"},
//                     {"label": "शायद ही कभी, केवल जब पूछा जाता है", "value": "2"},
//                     {"label": "कभी नहीं, मैं आत्म-मूल्यांकन पर निर्भर करता हूँ", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 39,
//                 "text": "समूह अध्ययन सत्रों या चर्चाओं में आप कैसे योगदान करते हैं?",
//                 "options": [
//                     {"label": "सक्रिय रूप से भाग लेते हैं और अपना ज्ञान साझा करते हैं", "value": "0"},
//                     {"label": "सुनते हैं और जब कुछ मूल्यवान जोड़ना होता है, तो योगदान करते हैं", "value": "1"},
//                     {"label": "ज्यादातर सुनते हैं, शायद ही कभी योगदान करते हैं", "value": "2"},
//                     {"label": "अकेले पढ़ाई करना पसंद करते हैं और समूह सत्रों से बचते हैं", "value": "3"}
//                 ]
//             },
//             {
//                 "id": 40,
//                 "text": "दूसरों के साथ काम करते समय आप सामान्यतः कौन-सी भूमिका निभाते हैं?",
//                 "options": [
//                     {"label": "नेता, समूह को संगठित और निर्देशित करते हैं", "value": "0"},
//                     {"label": "सहयोगी, दूसरों के साथ मिलकर काम करते हैं", "value": "1"},
//                     {"label": "समर्थक, जहां आवश्यकता होती है मदद करते हैं", "value": "2"},
//                     {"label": "पर्यवेक्षक, दूसरों को नेतृत्व करने देते हैं", "value": "3"}
//                 ]
//             }
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
//
//         return (
//             <>
//                 <Container maxWidth="md">
//                     <Box
//                         mt={12}
//                         sx={{
//                             py: 10,
//                             px: {xs: 2, md: 10},
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
//                         <Box sx={{
//                             display: 'flex',
//                             justifyContent: 'center',
//                         }}>
//                             <Card sx={{
//                                 p: 4,
//                                 height: '100%',
//                                 background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
//                                 boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
//                                 borderRadius: 4,
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 alignItems: 'center',
//                                 justifyContent: "space-between",
//                             }}>
//                                 <Box>
//                                     <Box sx={{
//                                         position: 'relative',
//                                         display: 'flex',
//                                         justifyContent: 'center',
//                                         alignItems: 'center',
//                                         mb: 3
//                                     }}>
//                                         <CircularProgress
//                                             variant="determinate"
//                                             value={percentage}
//                                             size={200}
//                                             thickness={4}
//                                             sx={{
//                                                 color: totalScore >= 61 ? '#ff4d4d' :
//                                                     totalScore >= 41 ? '#ffa500' :
//                                                         totalScore >= 21 ? '#ffdd00' : totalScore >= 11 ? '#90EE90' : '#47e447',
//                                             }}
//                                         />
//                                         <Box
//                                             sx={{
//                                                 position: 'absolute',
//                                                 display: 'flex',
//                                                 flexDirection: 'column',
//                                                 alignItems: 'center',
//                                             }}
//                                         >
//                                             <Typography variant="h3" sx={{fontWeight: 700, color: '#0D2152'}}>
//                                                 {totalScore}
//                                             </Typography>
//                                             <Typography variant="h5" sx={{color: '#4A5568'}}>
//                                                 out of 80
//                                             </Typography>
//                                         </Box>
//                                     </Box>
//
//                                     <Typography
//                                         variant="h5"
//                                         sx={{
//                                             color: '#F5811E',
//                                             fontWeight: 600,
//                                             mb: 2,
//                                             textAlign: 'center',
//                                         }}
//                                     >
//                                         {result?.level}
//                                     </Typography>
//                                 </Box>
//                                 <Typography
//                                     variant="body1"
//                                     sx={{
//                                         p: 2.5,
//                                         borderRadius: 2,
//                                         bgcolor: 'rgb(227,234,246)',
//                                         border: '1px solid rgba(245, 129, 30, 0.1)',
//                                         transition: 'transform 0.2s',
//                                         textAlign: "justify",
//                                         '&:hover': {
//                                             transform: 'translateY(-2px)',
//                                             boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
//                                         }
//                                     }}
//                                 >
//                                     {result?.interpretation}
//                                 </Typography>
//                             </Card>
//                         </Box>
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
//                             <PDFDownloadLink
//                                 document={<PdfView data={{
//                                     totalScore: totalScore,
//                                     level: result?.level,
//                                     interpretation: result?.interpretation,
//                                     recommendations: result?.recommendations,
//                                     language
//                                 }} />}
//                                 fileName="Exam_Stress_Gauge_report.pdf"
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
//             </>
//         );
//     }
//
//     return (
//         <>
//             <Box sx={{
//                 minHeight: 'calc(100vh - 72px)',
//                 display: 'flex',
//                 alignItems: 'center',
//                 backgroundColor: '#F3F4F6',
//                 mt: {xs: '64px', sm: '72px'},
//                 py: {xs: 4, md: 6},
//             }}>
//                 <Container maxWidth="md">
//                     <StyledPaper>
//                         <Box sx={{mb: 4}}>
//                             <Typography variant="h6" sx={{
//                                 mb: 1,
//                                 color: '#012765',
//                                 fontFamily: 'Montserrat'
//                             }}>
//                                 Question {currentQuestion + 1} of {questions.length}
//                             </Typography>
//                             <LinearProgress
//                                 variant="determinate"
//                                 value={progress}
//                                 sx={{
//                                     height: 8,
//                                     borderRadius: 4,
//                                     backgroundColor: '#E6EAF3',
//                                     '& .MuiLinearProgress-bar': {
//                                         backgroundColor: '#FF7F1E',
//                                     }
//                                 }}
//                             />
//                         </Box>
//
//                         <Typography sx={{
//                             mb: 4,
//                             color: '#012765',
//                             fontSize: '20px',
//                             fontWeight: 600, lineHeight: 1.5,
//                             fontFamily: 'Poppins'
//                         }}>
//                             {questions[currentQuestion].text}
//                         </Typography>
//
//                         <FormControl component="fieldset" sx={{width: '100%', mb: 4}}>
//                             <RadioGroup
//                                 value={answers[currentQuestion]}
//                                 onChange={handleAnswerChange}
//                             >
//                                 {questions[currentQuestion].options.map((option) => (
//                                     <FormControlLabel
//                                         key={option.label}
//                                         value={option.value}
//                                         control={
//                                             <Radio
//                                                 sx={{
//                                                     color: '#012765',
//                                                     '&.Mui-checked': {
//                                                         color: '#FF7F1E',
//                                                     },
//                                                 }}
//                                             />
//                                         }
//                                         label={
//                                             <Typography sx={{
//                                                 fontFamily: 'Poppins',
//                                                 fontSize: '16px',
//                                                 color: '#4B5563'
//                                             }}>
//                                                 {option.label}
//                                             </Typography>
//                                         }
//                                         sx={{
//                                             mb: 1,
//                                             p: 1.5,
//                                             borderRadius: 2,
//                                             width: '100%',
//                                             backgroundColor: answers[currentQuestion] === option.value ? '#FFF5EB' : 'transparent',
//                                             '&:hover': {
//                                                 backgroundColor: '#F8FAFC',
//                                             },
//                                         }}
//                                     />
//                                 ))}
//                             </RadioGroup>
//                         </FormControl>
//
//                         <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
//                             {currentQuestion !== 0 ?
//                                 <NavigationButton
//                                     variant="outlined"
//                                     startIcon={<ArrowBackIcon/>}
//                                     onClick={handlePrevious}
//                                     sx={{color: '#012765', borderColor: '#012765'}}
//                                 >
//                                     Back
//                                 </NavigationButton> : <Box/>}
//                             <NavigationButton
//                                 variant="contained"
//                                 endIcon={<ArrowForwardIcon/>}
//                                 onClick={handleNext}
//                                 disabled={!answers[currentQuestion]}
//                                 sx={{
//                                     backgroundColor: '#FF7F1E',
//                                     '&:hover': {backgroundColor: '#E66C00'},
//                                     '&.Mui-disabled': {
//                                         backgroundColor: '#E6EAF3',
//                                         color: '#9CA3AF',
//                                     }
//                                 }}
//                             >
//                                 {currentQuestion === questions.length - 1 ? 'Submit' : 'Next'}
//                             </NavigationButton>
//                         </Box>
//                     </StyledPaper>
//                 </Container>
//             </Box>
//
//         </>
//     )
//         ;
// };
//
// export default ExamStressGaugeQuestions;

















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
        text: "How do you typically handle high-pressure situations?",
        options: [
            {label: "Stay calm and focused", value: "0"},
            {label: "Get anxious but manage to push through", value: "1"},
            {label: "Struggle to maintain composure", value: "2"},
            {label: " Avoid the situation altogether", value: "3"},
        ]
    },
    {
        id: 2,
        text: "When faced with multiple deadlines, how do you prioritize tasks?",
        options: [
            {label: "By urgency and importance", value: "0"},
            {label: "By deadlines only", value: "1"},
            {label: "Randomly", value: "2"},
            {label: "Often get overwhelmed and delay decision-making", value: "3"},
        ]
    },
    {
        id: 3,
        text: "How often do you take breaks to manage stress during study sessions?",
        options: [
            {label: "Regularly, every 1-2 hours", value: "0"},
            {label: "Occasionally, when I feel tired", value: "1"},
            {label: "Rarely, only when exhausted", value: "2"},
            {label: "Never, I just push through", value: "3"},
        ]
    },
    {
        id: 4,
        text: "What techniques do you use to cope with exam-related anxiety?",
        options: [
            {label: "Deep breathing and meditation", value: "0"},
            {label: "Talking to friends and family", value: "1"},
            {label: "Ignoring it and hoping it goes away", value: "2"},
            {label: "Procrastinating or avoiding study", value: "3"},
        ]
    },
    {
        id: 5,
        text: "How do you react to failure or setbacks?",
        options: [
            {label: "Analyse what went wrong and try again", value: "0"},
            {label: "Feel disappointed but move on quickly", value: "1"},
            {label: "Get very upset and demotivated", value: "2"},
            {label: "Consider giving up", value: "3"},
        ]
    },
    {
        id: 6,
        text: "When you receive criticism, how do you respond?",
        options: [
            {label: "Constructively, using it to improve", value: "0"},
            {label: "Neutrally, with little impact on my emotions", value: "1"},
            {label: "Defensively, often taking it personally", value: "2"},
            {label: "Negatively, feeling discouraged", value: "3"},
        ]
    },
    {
        id: 7,
        text: "How do you deal with feelings of frustration during your preparation?",
        options: [
            {label: "Find a way to resolve the issue causing frustration", value: "0"},
            {label: "Take a break and come back to it later", value: "1"},
            {label: "Vent to friends or family", value: "2"},
            {label: "Let it affect my motivation and productivity", value: "3"}
        ]
    },
    {
        id: 8,
        text: "How often do you reflect on your emotional responses to situations?",
        options: [
            {label: "Frequently, to understand and improve", value: "0"},
            {label: "Sometimes, when things go wrong", value: "1"},
            {label: "Rarely, only in extreme cases", value: "2"},
            {label: "Never, I don't think about my emotions much", value: "3"}
        ]
    },
    {
        id: 9,
        text: "How do you make decisions when you have insufficient information?",
        options: [
            {label: "Gather as much information as possible and then decide", value: "0"},
            {label: "Go with my intuition", value: "1"},
            {label: "Seek advice from others", value: "2"},
            {label: "Postpone the decision until more information is available", value: "3"}
        ]
    },
    {
        id: 10,
        text: "When making a tough decision, what is your primary consideration?",
        options: [
            {label: "Long-term consequences", value: "0"},
            {label: "Immediate benefits", value: "1"},
            {label: "Opinions of others", value: "2"},
            {label: "Avoiding conflict", value: "3"}
        ]
    },
    {
        id: 11,
        text: "How confident are you in your decision-making abilities?",
        options: [
            {label: "Very confident", value: "0"},
            {label: "Fairly confident", value: "1"},
            {label: "Sometimes doubt my decisions", value: "2"},
            {label: "Often unsure and second-guess myself", value: "3"}
        ]
    },
    {
        id: 12,
        text: "How do you handle situations where you have made a wrong decision?",
        options: [
            {label: "Accept it, learn from it, and move on", value: "0"},
            {label: "Feel regret but try to fix it", value: "1"},
            {label: "Get upset and dwell on it", value: "2"},
            {label: "Blame external factors", value: "3"}
        ]
    },
    {
        id: 13,
        text: "What motivates you to pursue your chosen career path?",
        options: [
            {label: "Desire to make a positive impact on society", value: "0"},
            {label: "Prestige and respect associated with the job", value: "1"},
            {label: "Job security and benefits", value: "2"},
            {label: "Pressure from family or peers", value: "3"}
        ]
    },
    {
        id: 14,
        text: "How do you keep yourself motivated during tough times?",
        options: [
            {label: "Remind myself of my goals and aspirations", value: "0"},
            {label: "Seek inspiration from successful people", value: "1"},
            {label: "Take breaks and relax", value: "2"},
            {label: "Struggle to stay motivated", value: "3"}
        ]
    },
    {
        id: 15,
        text: "How do you handle distractions while studying?",
        options: [
            {label: "Create a strict study schedule and stick to it", value: "0"},
            {label: "Limit distractions by creating a study-friendly environment", value: "1"},
            {label: "Occasionally give in to distractions but get back on track", value: "2"},
            {label: "Often find myself distracted and unable to focus", value: "3"}
        ]
    },
    {
        id: 16,
        text: "How committed are you to your preparation routine?",
        options: [
            {label: "Fully committed, rarely miss a study session", value: "0"},
            {label: "Mostly committed, but sometimes flexible", value: "1"},
            {label: "Somewhat committed, often get sidetracked", value: "2"},
            {label: "Struggle to maintain a consistent routine", value: "3"}
        ]
    },
    {
        id: 17,
        text: "How do you handle conflicts or disagreements with others?",
        options: [
            {label: "Try to understand their perspective and resolve amicably", value: "0"},
            {label: "Stand firm on my viewpoint but remain respectful", value: "1"},
            {label: "Avoid confrontation as much as possible", value: "2"},
            {label: "Get frustrated and let emotions take over", value: "3"}
        ]
    },
    {
        id: 18,
        text: "How often do you seek feedback from others about your performance?",
        options: [
            {label: "Regularly, to improve and grow", value: "0"},
            {label: "Occasionally, when I feel it's needed", value: "1"},
            {label: "Rarely, only when asked", value: "2"},
            {label: "Never, I rely on self-assessment", value: "3"}
        ]
    },
    {
        id: 19,
        text: "How do you contribute to group study sessions or discussions?",
        options: [
            {label: "Actively participate and share my knowledge", value: "0"},
            {label: "Listen and contribute when I have something valuable to add", value: "1"},
            {label: "Mostly listen, rarely contribute", value: "2"},
            {label: "Prefer to study alone and avoid group sessions", value: "3"}
        ]
    },
    {
        id: 20,
        text: "When working with others, what role do you typically take?",
        options: [
            {label: "Leader, organizing and directing the group", value: "0"},
            {label: "Collaborator, working closely with others", value: "1"},
            {label: "Supporter, helping where needed", value: "2"},
            {label: "Observer, letting others take the lead", value: "3"}
        ]
    },
];

const getScoreCategory = (score) => {
    if (score >= 61 && score <= 80) {
        return {
            level: "High Academic Stress",
            interpretation: "You have demonstrated excellent stress management, emotional resilience, and decision-making skills, which are crucial for your exam preparation. Your ability to stay calm under pressure and maintain a positive mindset is commendable, and these traits will serve you well not only in your exams but also in your future career. Keep up the good work, continue refining your skills, and remember that consistent effort and self-belief are key to achieving your goals. With your determination and resilience, you are well-equipped to overcome any challenges that come your way.",
        };
    } else if (score >= 41 && score <= 60) {
        return {
            level: "Moderate-High Academic Stress",
            interpretation: "You have demonstrated good skills and behaviors, but there are some areas that could benefit from improvement. Focus on enhancing your stress management techniques and decision-making strategies to be fully prepared for the challenges ahead. Developing a robust set of stress management skills will help you stay calm and focused under pressure, while refining your decision-making strategies will ensure you can navigate complex situations with confidence. By addressing these areas, you'll be better equipped to tackle any obstacles and achieve your goals more effectively.",
        };
    } else if (score >= 21 && score <= 40) {
        return {
            level: "Moderate Academic Stress",
            interpretation: "You show potential, but there are several areas that need significant improvement. Consider incorporating regular stress-relief techniques, emotional intelligence training, and structured decision-making practices into your routine. Practicing stress-relief techniques will help you stay calm under pressure and maintain a positive outlook. Emotional intelligence training will aid you in understanding your emotions and managing them effectively. Structured decision-making practices will assist you in comprehending and resolving complex situations. By adopting these measures, you can enhance your abilities and make progress towards your goals.",
        };
    } else if (score >= 11 && score <= 20) {
        return {
            level: "Low-Moderate Academic Stress",
            interpretation: "There are several areas of concern that need to be addressed. It's crucial to prioritize the development of better stress management techniques, emotional resilience, and consistent study habits. Improving your stress management skills will empower you to handle pressure effectively; while enhancing emotional resilience will help you bounce back from setbacks with confidence. Developing consistent study habits will ensure you stay organized and focused on your goals. Don't hesitate to seek guidance from mentors and utilize resources that can support you in these areas of growth. By actively working on these aspects, you'll build a strong foundation for achieving success in your endeavours.",
        };
    } else {
        return {
            level: "Low Academic Stress",
            interpretation: "Your responses indicate major development is needed in almost all aspects. It's essential to prioritize building a strong foundation in stress management, emotional intelligence, and disciplined study routines. These skills are crucial for navigating challenges effectively and achieving your goals. Seeking professional guidance or training can provide valuable insights and strategies to accelerate your growth in these areas. By committing to improving these foundational skills, you'll enhance your readiness and capability to succeed in your endeavours.",
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

const ExamStressGaugeQuestions = () => {
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
                <Container maxWidth="md">
                    <Box
                        mt={12}
                        sx={{
                            py: 10,
                            px: {xs: 2, md: 10},
                            display: 'flex',
                            flexDirection: 'column',
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

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Card sx={{
                                p: 4,
                                height: '100%',
                                background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)',
                                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                                borderRadius: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: "space-between",
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
                                            <Typography variant="h5" sx={{color: '#4A5568'}}>
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
                        </Box>

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
                            {/*<PDFDownloadLink*/}
                            {/*    document={<PdfView data={{*/}
                            {/*        totalScore: totalScore,*/}
                            {/*        level: result.level,*/}
                            {/*        interpretation: result.interpretation,*/}
                            {/*        recommendations: result.recommendations*/}
                            {/*    }} />}*/}
                            {/*    fileName="Exam_Stress_Gauge_report.pdf"*/}
                            {/*    style={{ textDecoration: "none" }}*/}
                            {/*>*/}
                            {/*    {({ loading }) => (*/}
                            {/*        <Button*/}
                            {/*            variant="outlined"*/}
                            {/*            sx={{*/}
                            {/*                color: "#F5811E",*/}
                            {/*                borderColor: "#F5811E",*/}
                            {/*                py: 1.5,*/}
                            {/*                px: 4,*/}
                            {/*                "&:hover": {*/}
                            {/*                    borderColor: "#E26C0A",*/}
                            {/*                    bgcolor: "rgba(245, 129, 30, 0.1)",*/}
                            {/*                },*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*            {loading ? "Preparing..." : "Download Results"}*/}
                            {/*        </Button>*/}
                            {/*    )}*/}
                            {/*</PDFDownloadLink>*/}

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
        );
    }

    return (
        <>
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
                            fontWeight: 600, lineHeight: 1.5,
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

        </>
    )
        ;
};

export default ExamStressGaugeQuestions;