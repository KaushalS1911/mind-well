import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {
    Page,
    Font,
    View,
    Text,
    Document,
    StyleSheet,
    Svg,
    Circle,
    Image,
    Line,
    Polygon,
    Path
} from '@react-pdf/renderer';
import img from '../../assets/Emotionally Yours Logo.png';

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

const getColorAndRisk = (score) => {
    if (score >= 61) return {color: '#ff4d4d', risk: 'Very High Risk'};
    if (score >= 41) return {color: '#ffa500', risk: 'High Risk'};
    if (score >= 21) return {color: '#ffdd00', risk: 'Medium Risk'};
    if (score >= 11) return {color: '#90EE90', risk: 'Low Risk'};
    return {color: '#47e447', risk: 'Very Low Risk'};
};

const useStyles = (score) =>
    useMemo(
        () =>
            StyleSheet.create({
                page: {
                    backgroundColor: '#F8F9FA',
                    padding: 20,
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'PoppinsRegular',
                },
                card: {
                    width: '100%',
                    backgroundColor: '#FFFFFF',
                    padding: '0 20px 20px 20px',
                    borderRadius: 10,
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                },
                personal: {
                    marginBottom: 8,
                    borderBottom: '1px solid #FF7F1E',
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
                },
                email: {
                    fontSize: 11,
                    fontWeight: '600',
                    fontFamily: 'PoppinsSemiBold',
                    color: '#0D2152',
                    marginBottom:10
                },
                date: {
                    fontSize: 11,
                    fontFamily: 'PoppinsSemiBold',
                    fontWeight: '600',
                    color: '#0D2152',
                    alignItems: 'center',
                    display: 'flex',
                },
                header: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#0D2152',
                    fontFamily: 'PoppinsBold',
                    textAlign: 'center',
                },
                scoreContainer: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: 5,
                },
                svgContainer: {
                    position: 'relative',
                    width: 200,
                    height: 120,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: 10,
                },
                riskLabel: {
                    backgroundColor: '#FFC107',
                    borderRadius: 5,
                    height: 30,
                    paddingHorizontal: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 10
                },

                riskLabelText: {
                    fontSize: 10,
                    color: '#000000',
                    fontFamily: 'PoppinsBold',
                    textAlign: 'center',
                },
                level: {
                    fontSize: 11,
                    fontWeight: 'bold',
                    fontFamily: 'HindiPoppins',
                    color: '#F5811E',
                    marginTop: 5,
                },
                supportMessageContainer: {
                    backgroundColor: '#E3EAF6',
                    padding: 10,
                    borderRadius: 8,
                },
                supportMessage: {
                    fontSize: 9,
                    textAlign: 'justify',
                    color: '#333',
                },
                recommendationCard: {
                    backgroundColor: '#FBF6F2',
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 5,
                    marginBottom: 7,
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
                    marginBottom: 5,
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
                analysisHeader: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                analysisTitle: {
                    fontSize: 12,
                    fontWeight: '600',
                    fontFamily: 'PoppinsBold',
                    color: '#0D2152',
                    marginBottom: 3,
                    textAlign: 'start',
                },
                interpretationHeader: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                },
                interpretationTitle: {
                    fontSize: 12,
                    fontWeight: '600',
                    fontFamily: 'PoppinsBold',
                    color: '#0D2152',
                    marginBottom: 3,
                    textAlign: 'start',
                },
                analysis: {
                    fontSize: 9,
                    fontFamily: 'HindiPoppins',
                    color: '#4A5568',
                    textAlign: 'justify',
                    marginBottom: 5,
                },
                analysisContainer: {
                    backgroundColor: '#FBF6F2',
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 5,
                    marginBottom: 7,
                },
                interpretation: {
                    fontSize: 9,
                    fontFamily: 'HindiPoppins',
                    color: '#4A5568',
                    textAlign: 'justify',
                    marginBottom: 5,
                },
                interpretationContainer: {
                    backgroundColor: '#FBF6F2',
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 5,
                    marginBottom: 7,
                },
            }),
        [score]
    );

export default function PdfView({data}) {
    const styles = useStyles(data.totalScore);
    const {color: needleColor, risk: riskLabel} = getColorAndRisk(data.totalScore);
    const totalMarks = data.maxScore;
    const radius = 90;
    const centerX = 110;
    const centerY = 110;
    const strokeWidth = 12;

    const formatDate = (date) => {
        const d = new Date(date);
        let day = d.getDate().toString().padStart(2, '0');
        let month = (d.getMonth() + 1).toString().padStart(2, '0');
        let year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const name = sessionStorage.getItem('fullName');
    const email = sessionStorage.getItem('email');

    const currentDate = formatDate(new Date());
    const recommendations = data.recommendations;
    const actionPlan = data.actionPlan;

    const segments = [
        {color: data.color ? '#ff4d4d' : '#47e447', startAngle: -90, endAngle: -60, threshold: 0},
        {color: data.color ? '#ff6600' : '#90EE90', startAngle: -60, endAngle: -30, threshold: 13.33},
        {color: data.color ? '#ffa500' : '#ffdd00', startAngle: -30, endAngle: 0, threshold: 26.66},
        {color: data.color ? '#ffdd00' : '#ffa500', startAngle: 0, endAngle: 30, threshold: 40},
        {color: data.color ? '#90EE90' : '#ff6600', startAngle: 30, endAngle: 60, threshold: 53.33},
        {color: data.color ? '#47e447' : '#ff4d4d', startAngle: 60, endAngle: 90, threshold: 66.66}
    ];

    const angle = ((data.totalScore / totalMarks) * 180 - 180) * (Math.PI / 180);
    const needleLength = radius - 25;
    const needleTipX = centerX + needleLength * Math.cos(angle);
    const needleTipY = centerY + needleLength * Math.sin(angle);

    const arrowSize = 8;
    const arrowAngle = angle + Math.PI;
    const needleBaseLeftX = centerX + 7 * Math.cos(angle + Math.PI / 2);
    const needleBaseLeftY = centerY + 7 * Math.sin(angle + Math.PI / 2);

    const needleBaseRightX = centerX + 7 * Math.cos(angle - Math.PI / 2);
    const needleBaseRightY = centerY + 7 * Math.sin(angle - Math.PI / 2);

    const createSegmentPath = (startAngle, endAngle, radius, centerX, centerY) => {
        const startAngleRad = (startAngle - 90) * (Math.PI / 180);
        const endAngleRad = (endAngle - 90) * (Math.PI / 180);
        const outerRadius = radius + 15;
        const innerRadius = radius - 15;

        const x1 = centerX + innerRadius * Math.cos(startAngleRad);
        const y1 = centerY + innerRadius * Math.sin(startAngleRad);
        const x2 = centerX + outerRadius * Math.cos(startAngleRad);
        const y2 = centerY + outerRadius * Math.sin(startAngleRad);

        const x3 = centerX + outerRadius * Math.cos(endAngleRad);
        const y3 = centerY + outerRadius * Math.sin(endAngleRad);
        const x4 = centerX + innerRadius * Math.cos(endAngleRad);
        const y4 = centerY + innerRadius * Math.sin(endAngleRad);

        const largeArc = endAngle - startAngle > 180 ? 1 : 0;
        return `M ${x1} ${y1} L ${x2} ${y2} A ${outerRadius} ${outerRadius} 0 ${largeArc} 1 ${x3} ${y3} L ${x4} ${y4} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x1} ${y1}`;
    };

    const gaugeChart = (
        <Svg width="220" height="140" viewBox="0 0 220 140">
            {segments.map((segment, index) => {
                const scorePercentage = (data.totalScore / totalMarks) * 100;
                const isActive = scorePercentage >= segment.threshold;

                return (
                    <Path
                        key={index}
                        d={createSegmentPath(segment.startAngle, segment.endAngle, radius, centerX, centerY)}
                        fill={segment.color}
                        stroke="#FFFFFF"
                        strokeWidth="2"
                    />
                );
            })}

            {/*<Line*/}
            {/*    x1={centerX}*/}
            {/*    y1={centerY}*/}
            {/*    x2={needleEndX}*/}
            {/*    y2={needleEndY}*/}
            {/*    stroke="#2D3748"*/}
            {/*    strokeWidth="3"*/}
            {/*/>*/}

            <Polygon
                points={`
                    ${needleBaseLeftX},${needleBaseLeftY}
                    ${needleTipX},${needleTipY}
                    ${needleBaseRightX},${needleBaseRightY}
                `}
                fill="#F97316"
                stroke="#2D3748"
                strokeWidth="1"
            />

            <Circle
                cx={centerX}
                cy={centerY}
                r={7}
                fill="#2D3748"
            />

            <Text
                style={{
                    x: centerX,
                    y: centerY + 30,
                    fontSize: 22,
                    fontFamily: 'PoppinsBold',
                    textAnchor: 'middle',
                    fill: '#2D3748',
                }}
            >
                {Math.abs(data.totalScore).toFixed(0)}
            </Text>
        </Svg>
    );

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.pageItem}>
                    <View style={styles.card}>
                        <View style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
                            borderBottom: '1px solid #FF7F1E',
                            marginBottom: 15,
                        }}>
                            {/* Left Side: Logo */}
                            <View>
                                <Image source={img} style={{
                                    height: '75px',
                                    width: '180px',
                                    objectFit: 'contain',
                                }} />
                            </View>

                            {/* Right Side: Details aligned bottom-end */}
                            <View style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end', // aligns text to right side
                                height: '75px', // same as logo height for vertical alignment
                            }}>
                                <Text style={styles.date}>Date : {currentDate}</Text>
                                <Text style={styles.name}>Name : {name}</Text>
                                <Text style={styles.email}>Email : {email}</Text>
                            </View>
                        </View>

                        <Text style={styles.header}>{data.title}</Text>
                        <View style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            paddingHorizontal: 10,
                            paddingVertical: 10,
                        }}>
                            <View style={[styles.scoreContainer, {width: '40%', alignItems: 'center'}]}>
                                <View style={styles.svgContainer}>
                                    {gaugeChart}
                                    {/*<View style={[styles.riskLabel]}>*/}
                                    {/*    <Text style={styles.riskLabelText}>{riskLabel}</Text>*/}
                                    {/*</View>*/}
                                    <Text style={styles.level}>{data.level}</Text>
                                </View>
                            </View>
                            <View style={[styles.supportMessageContainer, {width: '60%'}]}>
                                <Text style={styles.supportMessage}>{data.supportMessage}</Text>
                            </View>
                        </View>
                        <View style={styles.analysisHeader}>
                            <Text style={styles.analysisTitle}>Analysis :</Text>
                        </View>
                        <View style={[styles.analysisContainer]}>
                            <Text style={styles.analysis}>{data.Analysis}</Text>
                        </View>
                        <View style={styles.interpretationHeader}>
                            <Text style={styles.interpretationTitle}>Interpretation :</Text>
                        </View>
                        <View style={[styles.interpretationContainer]}>
                            <Text style={styles.interpretation}>{data.interpretation}</Text>
                        </View>
                        {recommendations && recommendations.length > 0 && (
                            <View style={styles.recommendationsContainer}>
                                <View style={styles.recommendationHeader}>
                                    <Text style={styles.recommendationTitle}>Recommendations :</Text>
                                </View>
                                <View
                                    style={[
                                        styles.recommendationCard,
                                    ]}
                                >
                                    {recommendations.map((rec, index) => (
                                        <View key={index}>
                                            <Text style={styles.recommendationDescription}>• {rec}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        {actionPlan && actionPlan.length > 0 && (
                            <View style={styles.recommendationsContainer}>
                                <View style={styles.recommendationHeader}>
                                    <Text style={styles.recommendationTitle}>Action Plan :</Text>
                                </View>
                                <View
                                    style={[
                                        styles.recommendationCard,
                                    ]}
                                >
                                    {actionPlan.map((rec, index) => (
                                        <View key={index}>
                                            <Text style={styles.recommendationDescription}>• {rec}</Text>
                                        </View>
                                    ))}
                                </View>
                            </View>
                        )}
                        <View style={{
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            marginTop: 13,
                        }}>
                            <Text style={[styles.disclaimerDescription, {flex: 1}]}>
                                Disclaimer : This assessment is for informational and self-awareness purposes only.
                                It is not a substitute for professional psychological advice, diagnosis, or treatment.
                                We are not a medical service or suicide prevention helpline. If you are feeling
                                suicidal,
                                we suggest you immediately call a suicide prevention helpline like KIRAN: 18005990019
                                (24 hours, 7 days a week)
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
        level: PropTypes.string.isRequired,
        interpretation: PropTypes.string.isRequired,
        recommendations: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
            })
        ).isRequired,
    }).isRequired,
};