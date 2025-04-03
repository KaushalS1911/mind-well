import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import {Page, View, Text, Document, StyleSheet, Svg, Circle} from '@react-pdf/renderer';

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
                },
                card: {
                    width: '80%',
                    backgroundColor: '#FFFFFF',
                    padding: 20,
                    borderRadius: 10,
                    textAlign: 'center',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                },
                header: {
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: '#0D2152',
                    marginBottom: 15,
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
                    color: '#0D2152',
                    position: 'absolute',
                },
                outOf: {
                    fontSize: 18,
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
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: '#F5811E',
                    marginVertical: 10,
                },
                interpretationContainer: {
                    backgroundColor: '#E3EAF6',
                    padding: 15,
                    borderRadius: 8,
                    marginTop: 10,
                },
                recommendationCard: {
                    backgroundColor: '#FBF6F2',
                    padding: 15,
                    borderRadius: 8,
                    marginTop: 10,
                },
                interpretation: {
                    fontSize: 14,
                    color: '#333',
                    textAlign: 'justify',
                },
                recommendationsContainer: {
                    marginTop: 20,
                    width: '100%',
                    // padding: 10,
                },
                recommendationHeader: {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    // marginBottom: 10,
                },
                recommendationTitle: {
                    fontSize: 16,
                    fontWeight: '600',
                    color: '#0D2152',
                    marginBottom: 8,
                    textAlign: 'start',
                },
                recommendationBoxTitle: {
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#F5811E',
                    marginBottom: 8,
                    textAlign: 'start',
                },
                recommendationDescription: {
                    fontSize: 14,
                    color: '#4A5568',
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

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.card}>
                    <Text style={styles.header}>Your Assessment Results</Text>

                    <View style={styles.scoreContainer}>
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
                    </View>
                    <Text style={styles.level}>{data.level}</Text>
                    <View style={styles.interpretationContainer}>
                        <Text style={styles.interpretation}>{data.interpretation}</Text>
                    </View>

                    {data.recommendations && data.recommendations.length > 0 && (
                        <View style={styles.recommendationsContainer}>
                            <View style={styles.recommendationHeader}>
                                <Text style={styles.recommendationTitle}>Recommendations :</Text>
                            </View>
                            {data.recommendations.map((rec, index) => (
                                <View
                                    key={index}
                                    style={[
                                        styles.recommendationCard,
                                        rec.title ? { marginBottom: 10 } : {}
                                    ]}
                                >
                                    {rec.title && (
                                        <Text style={styles.recommendationBoxTitle}>{rec.title}{rec.title ? ":" : ""}</Text>
                                    )}
                                    <Text style={styles.recommendationDescription}>{rec.description}</Text>
                                </View>
                            ))}
                        </View>
                    )}

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
