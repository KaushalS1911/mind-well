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
                    padding: 30,
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
                    marginBottom: 10,
                    marginLeft: 8,
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
                    marginTop: 8,
                },
                header: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: '#0D2152',
                    marginBottom: 10,
                    fontFamily: 'PoppinsBold',
                    textAlign: 'center',
                },
                scoreContainer: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    marginBottom: 10,
                },
                svgContainer: {
                    position: 'relative',
                    width: 220,
                    height: 140,
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
                interpretationContainer: {
                    backgroundColor: '#E3EAF6',
                    padding: 10,
                    borderRadius: 8,
                },
                interpretation: {
                    fontSize: 9,
                    textAlign: 'justify',
                    color: '#333',
                },
                recommendationCard: {
                    backgroundColor: '#FBF6F2',
                    padding: 10,
                    borderRadius: 8,
                    marginTop: 5,
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

    const segments = [
        {color: '#47e447', startAngle: -90, endAngle: -60, threshold: 0},
        {color: '#90EE90', startAngle: -60, endAngle: -30, threshold: 13.33},
        {color: '#ffdd00', startAngle: -30, endAngle: 0, threshold: 26.66},
        {color: '#ffa500', startAngle: 0, endAngle: 30, threshold: 40},
        {color: '#ff6600', startAngle: 30, endAngle: 60, threshold: 53.33},
        {color: '#ff4d4d', startAngle: 60, endAngle: 90, threshold: 66.66}
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
                {Math.abs(data.totalScore1).toFixed(0)}
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
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexDirection: 'row',
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
                            <Text style={styles.name}>Name : {name}</Text>
                            <Text style={styles.email}>Email : {email}</Text>
                        </View>
                        <Text style={styles.header}>{data.title}</Text>
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
                                    {gaugeChart}
                                    <View style={[styles.riskLabel]}>
                                        <Text style={styles.riskLabelText}>{riskLabel}</Text>
                                    </View>
                                    <Text style={styles.level}>{data.level}</Text>
                                </View>
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
                                            rec.title ? {marginBottom: 10} : {},
                                        ]}
                                    >
                                        {rec.title && (
                                            <Text style={styles.recommendationBoxTitle}>
                                                {rec.title}{rec.title ? ':' : ''}
                                            </Text>
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
                            marginTop: 20,
                        }}>
                            <Text style={[styles.disclaimerDescription, {flex: 1}]}>
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