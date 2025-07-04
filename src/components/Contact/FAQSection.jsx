import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { FAQCard, FAQCardContent, FAQQuestionBox, FAQQuestion, FAQAnswer, styles } from "./styles";
import { FAQS } from "./constants";

const FAQSection = () => (
    <FAQCard>
        <FAQCardContent>
            <Typography sx={styles.sectionTitle}>
                Frequently Asked Questions
            </Typography>
            {FAQS.map((faq, index) => (
                <FAQQuestionBox key={index}>
                    <FAQQuestion>
                        <Typography>{faq.question}</Typography>
                        <ExpandMore sx={{ color: "#FF7A00" }} />
                    </FAQQuestion>
                    <FAQAnswer>{faq.answer}</FAQAnswer>
                </FAQQuestionBox>
            ))}
            <Link
                sx={{
                    mt: 2,
                    color: "#FF6600",
                    cursor: "pointer",
                    textDecoration: "none",
                    display: "inline-block",
                    transition: "color 0.3s ease-in-out",
                    "&:hover": { color: "#012765" }
                }}
                href="/faqs"
            >
                View all FAQs →
            </Link>
        </FAQCardContent>
    </FAQCard>
);

export default FAQSection;
