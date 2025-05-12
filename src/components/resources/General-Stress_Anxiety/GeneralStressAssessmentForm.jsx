import React from 'react';
import {
    Box,
    Container,
    Select,
    FormControl,
    InputLabel,
    OutlinedInput,
    MenuItem,
    TextField,
    Button,
    FormHelperText
} from "@mui/material";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router-dom";

const organization = [
    { id: 1, name: "Organization A" },
    { id: 2, name: "Organization B" },
    { id: 3, name: "Organization C" },
    { id: 4, name: "Organization D" }
];

const age = Array.from({ length: 100 }, (_, i) => i + 1);

const inputStyles = {
    "& label.Mui-focused": { color: "#FF7F1E" },
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#FF7F1E" },
        "&:hover fieldset": { borderColor: "#FF7F1E" },
        "&.Mui-focused fieldset": { borderColor: "#FF7F1E" },
    },
};

const GeneralStressAssessmentForm = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            age: '',
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required("Full Name is required"),
            email: Yup.string().email("Invalid email").required("Email is required"),
            age: Yup.number().required("Age is required"),
        }),
        onSubmit: () => {
            navigate("/assessments/general-stress/questions");
        },
    });

    const renderTextField = (name, label, type = "text") => (
        <TextField
            fullWidth
            margin="normal"
            label={label}
            name={name}
            type={type}
            value={formik.values[name]}
            onChange={formik.handleChange}
            error={formik.touched[name] && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && formik.errors[name]}
            sx={inputStyles}
        />
    );

    const renderSelectField = (name, label, options) => (
        <FormControl fullWidth margin="normal" error={formik.touched[name] && Boolean(formik.errors[name])}>
            <InputLabel>{label}</InputLabel>
            <Select
                input={<OutlinedInput label={label} />}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                MenuProps={{
                    PaperProps: {
                        style: {
                            maxHeight: 48 * 5,
                            overflow: "auto",
                        },
                    },
                    disablePortal: true,
                }}
            >
                {options.map(option => (
                    <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
            </Select>
            {formik.touched[name] && formik.errors[name] && (
                <FormHelperText>{formik.errors[name]}</FormHelperText>
            )}
        </FormControl>
    );

    return (
        <Box sx={{
            // backgroundColor: '#F3F4F6',
            padding: { sm: "120px 0", xs: "80px 0" },
            mt: { md: 5, xs: 0 },
        }}>
            <Box className="Montserrat" sx={{
                fontWeight: 700,
                color: '#012765',
                textAlign: 'center',
                fontSize: {
                    xs: '1.7rem',
                    sm: '1.85rem',
                    md: '2rem',
                    lg: '2.125rem'
                },
            }}>
                Assessment Form
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
                <Box sx={{
                    width: "700px",
                    backgroundColor: "#FFFFFF",
                    padding: "50px 30px 30px",
                    boxShadow: 2,
                    borderRadius: "10px"
                }}>
                    <form onSubmit={formik.handleSubmit}>
                        {renderTextField('fullName', 'Full Name')}
                        {renderSelectField('age', 'Age', age)}
                        {renderTextField('email', 'Email', 'email')}
                        <Box sx={{ mt: "20px", display: "flex", justifyContent: "end" }}>
                            <Button type="submit"
                                    sx={{
                                        backgroundColor: "#FF7F1E",
                                        py: "5px",
                                        px: "28px",
                                        textTransform: "unset",
                                        fontSize: "18px",
                                        color: "#fff",
                                        borderRadius: "0.375rem",
                                        "&:hover": { backgroundColor: "#DA5E05" },
                                        marginRight: 1,
                                    }}>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default GeneralStressAssessmentForm;
