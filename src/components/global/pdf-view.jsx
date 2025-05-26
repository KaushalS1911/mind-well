import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Page, Font, View, Text, Document, StyleSheet, Svg, Circle, Image} from '@react-pdf/renderer';
import img from '../../assets/Emotionally Yours Logo.png'

Font.register({
    family: 'HindiPoppins',
    src: '/font/Poppins-Medium.ttf',
});
Font.register({
    family: 'PoppinsRegular',
    src: '/font/Poppins-Regular.ttf',
});

Font.register({
    family: 'PoppinsBold',
    src: '/font/Poppins-Bold.ttf',
});

Font.register({
    family: 'PoppinsSemiBold',
    src: '/font/Poppins-SemiBold.ttf',
});

const getColor = (score) => {
    if (score >= 61) return '#ff4d4d';
    if (score >= 41) return '#ffa500';
    if (score >= 21) return '#ffdd00';
    if (score >= 11) return '#90EE90';
    return '#47e447';
};

const useStyles = (score) =>
    useMemo(
        () =>
            StyleSheet.create({
                page: {
                    backgroundColor: '#F8F9FA',
                    padding: 30,
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'PoppinsRegular',
                },
                card: {
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    padding: "0 20px 20px 20px",
                    borderRadius: 10,
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                },
                // personaldata: {
                //     display: 'flex',
                //     flexDirection: 'row',
                //     alignItems: 'center',
                //     justifyContent: 'space-between',
                //     marginBottom: 3
                // },
                personal: {
                    marginBottom: 8,
                    borderBottom: "1px solid #FF7F1E",
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',

                },
                name: {
                    fontSize: 11,
                    fontWeight: '600',
                    color: '#0D2152',
                    fontFamily: 'PoppinsSemiBold',
                    marginBottom: 10,
                },
                email: {
                    fontSize: 11,
                    fontWeight: '600',
                    fontFamily: 'PoppinsSemiBold',
                    color: '#0D2152',
                    marginBottom: 10,
                },
                date: {
                    fontSize: 11,
                    fontFamily: 'PoppinsSemiBold',
                    fontWeight: '600',
                    color: '#0D2152',
                    alignItems: 'center',
                    display: 'flex',
                    marginTop:8
                },
                header: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#0D2152',
                    marginBottom: 10,
                    fontFamily: 'PoppinsBold',
                    textAlign: "center"
                },
                scoreContainer: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: 10,
                },
                score: {
                    fontSize: 32,
                    fontWeight: 'bold',
                    fontFamily: 'PoppinsBold',
                    color: '#0D2152',
                    position: 'absolute',
                },
                outOf: {
                    fontSize: 10,
                    color: '#4A5568',
                },
                svgContainer: {
                    position: 'relative',
                    width: 100,
                    height: 100,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                },
                level: {
                    fontSize: 12,
                    fontWeight: 'bold',
                    fontFamily: 'HindiPoppins',
                    color: '#F5811E',
                    marginTop: 5,
                },
                interpretationContainer: {
                    backgroundColor: '#E3EAF6',
                    padding: 10,
                    borderRadius: 8,
                },
                interpretation: {
                    fontSize: 9,
                    textAlign: "justify",
                    color: '#333',
                    // fontFamily: 'HindiPoppins',
                },
                recommendationCard: {
                    backgroundColor: '#FBF6F2',
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 5,
                },
                recommendationsContainer: {
                    marginTop: 5,
                    width: '100%',
                },
                recommendationHeader: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                recommendationTitle: {
                    fontSize: 12,
                    fontWeight: '600',
                    fontFamily: 'PoppinsBold',
                    color: '#0D2152',
                    marginBottom: 3,
                    textAlign: 'start',
                },
                recommendationBoxTitle: {
                    fontSize: 11,
                    fontWeight: '600',
                    fontFamily: 'PoppinsSemiBold',
                    color: '#F5811E',
                    marginBottom: 5,
                    textAlign: 'start',
                },
                recommendationDescription: {
                    fontSize: 9,
                    fontFamily: 'HindiPoppins',
                    color: '#4A5568',
                    textAlign: 'justify',
                },
                disclaimerTitle: {
                    fontSize: 13,
                    fontWeight: '600',
                    fontFamily: 'PoppinsSemiBold',
                    color: '#F5811E',
                    marginBottom: 5,
                    textAlign: 'start',
                },
                disclaimerDescription: {
                    fontSize: 9,
                    fontFamily: 'HindiPoppins',
                    color: 'red',
                    textAlign: 'justify',
                },
            }),
        [score]
    );

export default function PdfView({data}) {
    const styles = useStyles(data.totalScore);
    const strokeColor = getColor(data.totalScore);
    const percentage = (data.totalScore / 80) * 100;
    const circumference = 2 * Math.PI * 45;
    const offset = circumference - (percentage / 100) * circumference;

    const formatDate = (date) => {
        const d = new Date(date);
        let day = d.getDate().toString().padStart(2, '0');
        let month = (d.getMonth() + 1).toString().padStart(2, '0');
        let year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const currentDate = formatDate(new Date());
    const recommendations = data.recommendations;

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.pageItem}>
                    <View style={styles.card}>
                        <View style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection:"row"
                        }}>
                            <View>
                                <Image source={img} style={{
                                    height: '65px',
                                    width: '170px',
                                    objectFit: 'contain',
                                }}/>
                            </View>
                            <View>
                                <Text style={styles.date}>Date : {currentDate}</Text>
                            </View>
                        </View>
                        <View style={styles.personal}>
                            {/*<View style={styles.personaldata}>*/}
                                <Text style={styles.name}>Name : John-Deo</Text>
                                <Text style={styles.email}>Email : john12@gmail.com</Text>
                            {/*</View>*/}
                        </View>
                        <Text style={styles.header}>Emotional Awareness Assessment Results</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            paddingHorizontal: 16,
                            paddingVertical: 10,
                        }}>
                            <View style={[styles.scoreContainer, {width: '40%', alignItems: 'center'}]}>
                                <View style={styles.svgContainer}>
                                    <Svg width="100" height="100" viewBox="0 0 100 100">
                                        <Circle cx="50" cy="50" r="45" stroke="#E3EAF6" strokeWidth="10" fill="none"/>
                                        <Circle
                                            cx="50"
                                            cy="50"
                                            r="45"
                                            stroke={strokeColor}
                                            strokeWidth="10"
                                            fill="none"
                                            strokeDasharray={`${circumference}`}
                                            strokeDashoffset={`${offset}`}
                                            strokeLinecap="round"
                                        />
                                    </Svg>
                                    <Text style={styles.score}>{data.totalScore}</Text>
                                </View>
                                <Text style={styles.outOf}>out of 80</Text>
                                <Text style={styles.level}>{data.level}</Text>
                            </View>

                            <View style={[styles.interpretationContainer, {width: '60%'}]}>
                                <Text style={styles.interpretation}>{data.interpretation}</Text>
                            </View>
                        </View>


                        {recommendations && recommendations.length > 0 && (
                            <View style={styles.recommendationsContainer}>
                                <View style={styles.recommendationHeader}>
                                    <Text style={styles.recommendationTitle}>Recommendations :</Text>
                                </View>
                                {recommendations.map((rec, index) => (
                                    <View
                                        key={index}
                                        style={[
                                            styles.recommendationCard,
                                            rec.title ? {marginBottom: 10} : {}
                                        ]}
                                    >
                                        {rec.title && (
                                            <Text
                                                style={styles.recommendationBoxTitle}>{rec.title}{rec.title ? ":" : ""}</Text>
                                        )}
                                        <Text style={styles.recommendationDescription}>{rec.description}</Text>
                                    </View>
                                ))}
                            </View>
                        )}

                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            marginTop:20,
                        }}>
                            {/*<Text style={[styles.disclaimerTitle, { minWidth: 90 }]}></Text>*/}
                            <Text style={[styles.disclaimerDescription, { flex: 1 }]}>
                                Disclaimer : This assessment is for informational and self-awareness purposes only.
                                It is not a substitute for professional psychological advice, diagnosis, or treatment.
                            </Text>
                        </View>

                    </View>
                </View>
            </Page>
        </Document>
    );
}

PdfView.propTypes = {
    data: PropTypes.shape({
        totalScore: PropTypes.number.isRequired,
        result: PropTypes.shape({
            level: PropTypes.string.isRequired,
            interpretation: PropTypes.string.isRequired,
            recommendations: PropTypes.arrayOf(
                PropTypes.shape({
                    title: PropTypes.string.isRequired,
                    description: PropTypes.string.isRequired,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
};
