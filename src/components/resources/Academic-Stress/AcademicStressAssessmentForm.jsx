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

const age = Array.from({ length: 10 }, (_, i) => i + 16);

const InputStyle = {
    "& label.Mui-focused": { color: "#FF7F1E" },
    "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "#FF7F1E" },
        "&:hover fieldset": { borderColor: "#FF7F1E" },
        "&.Mui-focused fieldset": { borderColor: "#FF7F1E" },
    },
};

function AcademicStressAssessmentForm() {
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
            navigate("/assessments/academic-stress/questions");
        },
    });

    return (
        <Box sx={{
            // backgroundColor: '#F3F4F6',
            padding: { sm: "120px 0", xs: "80px 0" },
            mt: { md: 5, xs: 0 },
            mx: { xs: '20px', sm: '70px', md: '90px', xl: '100px' }
        }}>
            <Box className={"Montserrat"} sx={{
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
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5, }}>
                <Box sx={{
                    width: "700px",
                    backgroundColor: "#FFFFFF",
                    padding: "50px 30px 30px",
                    boxShadow: 2,
                    borderRadius: "10px"
                }}>
                    <form onSubmit={formik.handleSubmit}>

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Full Name"
                            name="fullName"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            sx={InputStyle}
                        />

                        <FormControl
                            fullWidth
                            margin="normal"
                            error={formik.touched.age && Boolean(formik.errors.age)}
                            sx={InputStyle}
                        >
                            <InputLabel>Age</InputLabel>
                            <Select
                                input={<OutlinedInput label="Age" />}
                                name="age"
                                value={formik.values.age}
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
                                {age.map((option) => (
                                    <MenuItem key={option} value={option}>{option}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.age && formik.errors.age && (
                                <FormHelperText>{formik.errors.age}</FormHelperText>
                            )}
                        </FormControl>

                        <TextField
                            fullWidth
                            margin="normal"
                            label="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            sx={InputStyle}
                        />

                        <Box sx={{ mt: "20px", display: "flex", justifyContent: "end" }}>
                            <Button
                                type="submit"
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
                                }}
                            >
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default AcademicStressAssessmentForm;
