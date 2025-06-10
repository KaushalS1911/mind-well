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
//     Card, DialogActions, Dialog,
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
//
// const englishScore = (score) => {
//     if (score >= 61 && score <= 80) {
//         return {
//             level: "High Score",
//             interpretation: "The child has a strong understanding of emotions and demonstrates effective emotional regulation skills.",
//             recommendations: [
//                 {
//                     description: "Encourage continued emotional development through positive reinforcement and activities that promote emotional intelligence. Engage the child in more complex emotional awareness activities to further enhance their skills."
//                 },
//             ]
//         };
//     } else if (score >= 41 && score <= 60) {
//         return {
//             level: "Moderate-High Score",
//             interpretation: " The child has a good understanding of emotions and generally manages and expresses emotions appropriately, but there may be some areas needing slight improvement.",
//             recommendations: [
//                 {
//                     description: "Provide additional support through structured activities and discussions that focus on understanding and managing emotions. Reinforce positive behaviors and work on specific areas where the child showed some difficulty."
//                 },
//             ]
//         };
//     } else if (score >= 21 && score <= 40) {
//         return {
//             level: "Moderate Score",
//             interpretation: "The child has a basic understanding of emotions but shows inconsistencies in emotional regulation and expression.",
//             recommendations: [
//                 {
//                     description: "Engage the child in more frequent and varied emotional learning activities. Use role-playing, storytelling, and interactive games to help the child better recognize and manage emotions. Consider involving a school counselor or psychologist if needed for targeted interventions."
//                 },
//             ]
//         };
//     } else if (score >= 11 && score <= 20) {
//         return {
//             level: "Low-Moderate Score",
//             interpretation: "The child has significant difficulty in identifying and managing emotions, indicating a need for targeted emotional learning and support.",
//             recommendations: [
//                 {
//                     description: "Implement a structured emotional learning program with daily activities focused on identifying and managing emotions. Collaborate with teachers and parents to ensure consistent support across environments. Consider professional guidance from a child psychologist or counselor to develop personalized strategies for improvement."
//                 },
//             ]
//         };
//     } else {
//         return {
//             level: "Low Score",
//             interpretation: "The child has major challenges in understanding and regulating emotions, which could impact their social interactions and overall well-being.",
//             recommendations: [
//                 {
//                     description: "Immediate intervention is recommended. Develop a comprehensive support plan involving teachers, parents, and mental health professionals. Intensive emotional learning activities and one-on-one counseling sessions may be necessary to address the child's needs. Close monitoring and continuous support will be crucial for progress."
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
//                     description: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।"
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
//                     description: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।"
//                 },
//             ]
//         };
//     } else if (score >= 21 && score <= 40) {
//         return {
//             level: "मध्यम स्कोर",
//             interpretation: "आपमें संभावना है, लेकिन कई क्षेत्रों में विशेष अभिवृद्धि की आवश्यकता है। अपनी रूटीन में नियमित तनाव-मुक्ति तकनीकों, भावनात्मक बुद्धिमत्ता प्रशिक्षण, और संरचित निर्णय लेने की प्रथाओं को शामिल करने का विचार करें। तनाव-मुक्ति तकनीकों का अभ्यास आपको दबाव के तहत शांत रहने और सकारात्मक दृष्टिकोण बनाए रखने में मदद करेगा, भावनात्मक बुद्धिमत्ता प्रशिक्षण आपको अपनी भावनाओं को समझने और प्रभावी रूप से प्रबंधित करने में मदद करेगा, और संरचित निर्णय लेने की प्रथाएँ आपको जटिल स्थितियों को समझने और उन्हें हल करने में मदद करेंगी। इन सभी उपायों को अपनाकर, आप अपनी क्षमताओं को सुधार सकते हैं और अपने लक्ष्यों की दिशा में प्रगति कर सकते हैं",
//             recommendations: [
//                 {
//                     description: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।"
//                 },
//             ]
//         };
//     } else if (score >= 11 && score <= 20) {
//         return {
//             level: "कम स्कोर",
//             interpretation: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।",
//             recommendations: [
//                 {
//                     description: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।"
//                 },
//             ]
//         };
//     }
//     else {
//         return {
//             level: "बहुत कम स्कोर",
//             interpretation: "आपके उत्तर बताते हैं कि लगभग सभी पहलुओं में महत्वपूर्ण विकास की आवश्यकता है। तनाव प्रबंधन, भावनात्मक बुद्धिमत्ता, और अनुशासित अध्ययन रूटीन में मजबूत नींव बनाने पर ध्यान केंद्रित करें। इन कौशलों को सही दिशा में विकसित करना मुश्किलाहटों को सफलतापूर्वक निभाने और अपने लक्ष्यों को प्राप्त करने के लिए महत्वपूर्ण है। पेशेवर मार्गदर्शन या प्रशिक्षण लेना इन क्षेत्रों में आपके विकास को गति देने के लिए महत्वपूर्ण हो सकता है। इन बुनियादी कौशलों को सुधारने के लिए प्रतिबद्ध रहकर, आप अपनी तैयारी को मजबूत करेंगे और अपने प्रयासों में सफलता प्राप्त करने की क्षमता को बढ़ाएंगे।",
//             recommendations: [
//                 {
//                     description: "कई चिंता के क्षेत्र हैं जिन्हें संबोधित करने की आवश्यकता है। अच्छे तनाव प्रबंधन तकनीकों, भावनात्मक संघर्षशीलता, और नियमित अध्ययन आदतों के विकास पर ध्यान केंद्रित करें। इन तकनीकों को सुधारकर आप दबाव को सही ढंग से संभाल सकेंगे, भावनात्मक संघर्षशीलता को बढ़ाकर आप संकटों से विश्वासपूर्वक उभर सकेंगे, और नियमित अध्ययन आदतें आपको आपके लक्ष्यों पर संगठित और ध्यानित रहने में मदद करेंगी। इन क्षेत्रों में सुधार के लिए मार्गदर्शन और संसाधनों की खोज करें। इन पहलुओं पर सक्रिय रूप से काम करके, आप अपने प्रयासों में सफलता प्राप्त करने के लिए मजबूत आधार बना सकेंगे।"
//                 },
//             ]
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
// const EmotionalAwarenessQuestions = () => {
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
//             text: "Look at this picture. How do you think this person is feeling? (Show a picture of a happy face)",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 2,
//             text: "How do you feel when you get to play with your favourite toy?",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 3,
//             text: "When someone takes your toy without asking, how do you feel?",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 4,
//             text: "How do you feel when you lose a game?",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 5,
//             text: "When you get a hug from a family member, how do you feel?specify",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 6,
//             text: "What do you do when you feel happy?",
//             options: [
//                 {label: "Smile And Laugh", value: "0"},
//                 {label: "Cry", value: "1"},
//                 {label: "Yell", value: "2"},
//                 {label: "Stay Quiet", value: "3"},
//             ]
//         },
//         {
//             id: 7,
//             text: "What do you do when you feel sad?",
//             options: [
//                 {label: "Talk To Someone", value: "0"},
//                 {label: "Cry", value: "1"},
//                 {label: "Hit Something", value: "2"},
//                 {label: "Stay Quiet", value: "3"},
//             ]
//         },
//         {
//             id: 8,
//             text: "If you feel angry, what can you do to feel better?",
//             options: [
//                 {label: "Talk To Someone", value: "0"},
//                 {label: "Take Deep Breaths", value: "1"},
//                 {label: "Hit Something", value: "2"},
//                 {label: "Stay Quiet", value: "3"},
//             ]
//         },
//         {
//             id: 9,
//             text: "When you are scared, what do you do?",
//             options: [
//                 {label: "Talk To Someone", value: "0"},
//                 {label: "Cry", value: "1"},
//                 {label: "Yell", value: "2"},
//                 {label: "Stay Quiet", value: "3"},
//             ]
//         },
//         {
//             id: 10,
//             text: "What do you do when you feel frustrated?",
//             options: [
//                 {label: "Talk To Someone", value: "0"},
//                 {label: "Take Deep Breaths", value: "1"},
//                 {label: "Hit Something", value: "2"},
//                 {label: "Stay Quiet", value: "3"},
//             ]
//         },
//         {
//             id: 11,
//             text: "If your friend is crying, how do you think they feel?",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 12,
//             text: "If your friend is yelling, how do you think they feel?",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 13,
//             text: "If your friend is laughing, how do you think they feel?",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 14,
//             text: "If your friend is very quiet, how do you think they feel? ",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
//             ]
//         },
//         {
//             id: 15,
//             text: "If your friend is playing alone, how do you think they feel?",
//             options: [
//                 {label: "Happy", value: "0"},
//                 {label: "Sad", value: "1"},
//                 {label: "Angry", value: "2"},
//                 {label: "Scared", value: "3"},
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
//                                         {result?.recommendations?.map((rec, index) => (
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
//                                     level: result?.level,
//                                     interpretation: result?.interpretation,
//                                     recommendations: result?.recommendations
//                                 }} />}
//                                 fileName="Emotional_Awareness_Report.pdf"
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
// export default EmotionalAwarenessQuestions;









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
    Card, DialogActions, Dialog,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {useNavigate} from 'react-router-dom';
import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from 'recharts';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import {PDFDownloadLink, PDFViewer} from "@react-pdf/renderer";
import PdfView from "../../global/pdf-view.jsx";
import img1 from '../../../assets/images/Resources/Assessments/smiley person images.png'
import {GaugeComponent} from "react-gauge-component";

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
        text: "Look at this picture. How do you think this person is feeling? (Show a picture of a happy face)",
        image: img1,
        options: [
            {label: "Happy", value: "1a"},
            {label: "Sad", value: "0b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 2,
        text: "How do you feel when you get to play with your favourite toy?",
        options: [
            {label: "Happy", value: "1a"},
            {label: "Sad", value: "0b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 3,
        text: "When someone takes your toy without asking, how do you feel?",
        options: [
            {label: "Happy", value: "0a"},
            {label: "Sad", value: "0b"},
            {label: "Angry", value: "1c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 4,
        text: "How do you feel when you lose a game?",
        options: [
            {label: "Happy", value: "0a"},
            {label: "Sad", value: "1b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 5,
        text: "When you get a hug from a family member, how do you feel?",
        options: [
            {label: "Happy", value: "1a"},
            {label: "Sad", value: "0b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 6,
        text: "What do you do when you feel happy?",
        options: [
            {label: "Smile And Laugh", value: "1a"},
            {label: "Cry", value: "0b"},
            {label: "Yell", value: "0c"},
            {label: "Stay Quiet", value: "0d"},
        ]
    },
    {
        id: 7,
        text: "What do you do when you feel sad?",
        options: [
            {label: "Talk To Someone", value: "1a"},
            {label: "Cry", value: "0b"},
            {label: "Hit Something", value: "0c"},
            {label: "Stay Quiet", value: "0d"},
        ]
    },
    {
        id: 8,
        text: "If you feel angry, what can you do to feel better?",
        options: [
            {label: "Talk To Someone", value: "1a"},
            {label: "Take Deep Breaths", value: "1b"},
            {label: "Hit Something", value: "0c"},
            {label: "Stay Quiet", value: "0d"},
        ]
    },
    {
        id: 9,
        text: "When you are scared, what do you do?",
        options: [
            {label: "Talk To Someone", value: "1a"},
            {label: "Cry", value: "0b"},
            {label: "Yell", value: "0c"},
            {label: "Stay Quiet", value: "0d"},
        ]
    },
    {
        id: 10,
        text: "What do you do when you feel frustrated?",
        options: [
            {label: "Talk To Someone", value: "1a"},
            {label: "Take Deep Breaths", value: "1b"},
            {label: "Hit Something", value: "0c"},
            {label: "Stay Quiet", value: "0d"},
        ]
    },
    {
        id: 11,
        text: "If your friend is crying, how do you think they feel?",
        options: [
            {label: "Happy", value: "0a"},
            {label: "Sad", value: "1b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 12,
        text: "If your friend is yelling, how do you think they feel?",
        options: [
            {label: "Happy", value: "0a"},
            {label: "Sad", value: "0b"},
            {label: "Angry", value: "1c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 13,
        text: "If your friend is laughing, how do you think they feel?",
        options: [
            {label: "Happy", value: "1a"},
            {label: "Sad", value: "0b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 14,
        text: "If your friend is very quiet, how do you think they feel? ",
        options: [
            {label: "Happy", value: "0a"},
            {label: "Sad", value: "1b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "0d"},
        ]
    },
    {
        id: 15,
        text: "If your friend is playing alone, how do you think they feel?",
        options: [
            {label: "Happy", value: "0a"},
            {label: "Sad", value: "0b"},
            {label: "Angry", value: "0c"},
            {label: "Scared", value: "1d"},
        ]
    },
];

const getScoreCategory = (score) => {
    if (score >= 13 && score <= 15) {
        return {
            level: "High Score",
            interpretation: "The child has a strong understanding of emotions and demonstrates effective emotional regulation skills.",
            recommendations: [
                {
                    description: "Encourage continued emotional development through positive reinforcement and activities that promote emotional intelligence. Engage the child in more complex emotional awareness activities to further enhance their skills."
                },
            ]
        };
    } else if (score >= 10 && score <= 12) {
        return {
            level: "Moderate-High Score",
            interpretation: " The child has a good understanding of emotions and generally manages and expresses emotions appropriately, but there may be some areas needing slight improvement.",
            recommendations: [
                {
                    description: "Provide additional support through structured activities and discussions that focus on understanding and managing emotions. Reinforce positive behaviors and work on specific areas where the child showed some difficulty."
                },
            ]
        };
    } else if (score >= 7 && score <= 9) {
        return {
            level: "Moderate Score",
            interpretation: "The child has a basic understanding of emotions but shows inconsistencies in emotional regulation and expression.",
            recommendations: [
                {
                    description: "Engage the child in more frequent and varied emotional learning activities. Use role-playing, storytelling, and interactive games to help the child better recognize and manage emotions. Consider involving a school counselor or psychologist if needed for targeted interventions."
                },
            ]
        };
    } else if (score >= 4 && score <= 6) {
        return {
            level: "Low-Moderate Score",
            interpretation: "The child has significant difficulty in identifying and managing emotions, indicating a need for targeted emotional learning and support.",
            recommendations: [
                {
                    description: "Implement a structured emotional learning program with daily activities focused on identifying and managing emotions. Collaborate with teachers and parents to ensure consistent support across environments. Consider professional guidance from a child psychologist or counselor to develop personalized strategies for improvement."
                },
            ]
        };
    } else {
        return {
            level: "Low Score",
            interpretation: "The child has major challenges in understanding and regulating emotions, which could impact their social interactions and overall well-being.",
            recommendations: [
                {
                    description: "Immediate intervention is recommended. Develop a comprehensive support plan involving teachers, parents, and mental health professionals. Intensive emotional learning activities and one-on-one counseling sessions may be necessary to address the child's needs. Close monitoring and continuous support will be crucial for progress."
                },
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

const EmotionalAwarenessQuestions = () => {
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
        const percentage = (totalScore / 15) * 100;

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
                                            <GaugeComponent
                                                value={percentage}
                                                type="radial"
                                                style={{width: 300}}
                                                labels={{
                                                    valueLabel: {
                                                        formatTextValue: (value) => value,
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
                                                    {/*<AssignmentTurnedInIcon sx={{fontSize: 20}}/>*/}
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
                                    title: "Emotional Awareness Regulation Assessment Result",
                                    maxScore: 15,
                                    totalScore1: percentage,
                                    totalScore: totalScore,
                                    level: result.level,
                                    interpretation: result.interpretation,
                                    recommendations: result.recommendations
                                }}/>}
                                fileName="Emotional_Awareness_Regulation.pdf"
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
                        mb:2,
                        color: '#012765',
                        fontSize: '20px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        fontFamily: 'Poppins'
                    }}>
                        {questions[currentQuestion].text}
                    </Typography>
                    {questions[currentQuestion].image ? (
                        <Box
                            sx={{
                                height: "180px",
                                width: "180px",
                            }}
                        >
                            <img
                                src={questions[currentQuestion].image}
                                alt="smiley image"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                }}
                            />
                        </Box>
                    ) : null}


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

export default EmotionalAwarenessQuestions;