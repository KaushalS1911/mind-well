import { styled } from "@mui/material/styles";
import { 
    Box, 
    Card, 
    CardContent, 
    Typography, 
    TextField, 
    Button, 
    IconButton, 
    Select
} from "@mui/material";

// Base styles object for components that don't need full styled component treatment
export const styles = {
    formLabel: {
        margin: "0 0 4px",
        fontSize: "14px"
    },
    inputField: {
        borderRadius: "8px",
        height: "48px",
        fontSize: "16px"
    },
    sectionTitle: {
        color: "#002D62",
        fontWeight: "700",
        fontSize: "18px",
        marginBottom: 2,
        lineHeight: "28px"
    },
};

// Styled components
export const ContactCard = styled(Card)({
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    borderRadius: "10px",
    height: "100%"
});

export const ContactCardContent = styled(CardContent)({
    padding: 32
});

export const FormTitle = styled(Typography)({
    marginBottom: 24,
    fontWeight: "700"
});

export const SubmitButton = styled(Button)({
    backgroundColor: "#ff6600",
    color: "white",
    borderRadius: "8px",
    padding: "10px",
    '&:hover': {
        backgroundColor: "#e65c00"
    }
});

export const ContactInfoBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#002D62",
    color: "white",
    padding: theme.spacing(4),
    marginBottom: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 2,
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2.8)
    }
}));

export const InfoDetailBox = styled(Box)({
    marginLeft: 32,
    color: "#CCD4E0"
});

export const InfoCardBox = styled(Box)({
    padding: 24,
    backgroundColor: "white",
    borderRadius: 16,
    boxShadow: 1,
    height: "100%"
});

export const SocialIconButton = styled(IconButton)({
    padding: "10px",
    backgroundColor: "#002D62",
    borderRadius: "50%",
    color: "white",
    '&:hover': {
        backgroundColor: "#001f44",
    }
});

export const CustomSelect = styled(Select)({
    borderRadius: "8px",
    height: "48px",
    fontSize: "16px",
    '& .MuiSelect-icon': {
        display: 'none'
    }
});

export const FAQCard = styled(Card)({
    boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
    borderRadius: "10px",
    marginTop: 32
});

export const FAQCardContent = styled(CardContent)({
    padding: 24
});

export const FAQQuestionBox = styled(Box)({
    borderBottom: "1px solid #E5E7EB",
    padding: "16px 0"
});

export const FAQQuestion = styled(Box)({
    color: "#002D62",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "500",
    marginBottom: 8
});

export const FAQAnswer = styled(Typography)({
    color: "#6B7280"
});
