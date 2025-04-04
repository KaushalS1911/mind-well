import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    FormControl, FormControlLabel,
    FormHelperText, FormLabel, Grid,
    InputLabel,
    MenuItem, OutlinedInput, Radio, RadioGroup,
    Select,
    TextField
} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useFormik} from 'formik';
import * as Yup from 'yup';

function ShapeK12ChildForm() {
    const navigate = useNavigate();
    const [age, setAge] = useState([]);

    useEffect(() => {
        const ages = [];
        for (let i = 16; i <= 100; i++) {
            ages.push(i);
        }
        setAge(ages);
    }, []);

    const validationSchema = Yup.object({
        admissionId: Yup.string().required("Child's Name is required"),
        age: Yup.number().required('Age is required').min(16, 'Age must be 16 or older'),
        fullName: Yup.string().required('Standard is required'),
        phone: Yup.string().required('Contact Information is required'),
        height: Yup.number().required('Height is required').min(1, 'Height must be greater than 0'),
        weight: Yup.number().required('Weight is required').min(1, 'Weight must be greater than 0'),
    });

    const formik = useFormik({
        initialValues: {
            admissionId: '',
            age: '',
            fullName: '',
            phone: '',
            height: '',
            weight: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            navigate("/assessments/shape-k12/shape-family-form");
        },
    });

    return (
        <Box>
            <Box sx={{
                backgroundColor: '#F3F4F6',
                padding: {sm: "120px 0", xs: "80px 0"},
                mt: {md: 5, xs: 0},
            }}>
                <Box className={"Montserrat"} sx={{
                    fontWeight: 700,
                    color: '#012765',
                    textAlign: 'center',
                    fontSize: '32px',
                }}>
                    Child's Information
                </Box>

                <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                    <Box sx={{
                        width: "600px",
                        backgroundColor: "#FFFFFF",
                        padding: "50px 30px 30px",
                        boxShadow: 2,
                        borderRadius: "10px",
                    }}>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="Child's Name"
                                name="admissionId"
                                value={formik.values.admissionId}
                                onChange={formik.handleChange}
                                error={formik.touched.admissionId && Boolean(formik.errors.admissionId)}
                                helperText={formik.touched.admissionId && formik.errors.admissionId}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            />

                            <FormControl
                                fullWidth
                                margin="normal"
                                error={formik.touched.age && Boolean(formik.errors.age)}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            >
                                <InputLabel>Age</InputLabel>
                                <Select
                                    input={<OutlinedInput label="Age"/>}
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
                                label="Standard"
                                name="fullName"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                                helperText={formik.touched.fullName && formik.errors.fullName}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Contact Information"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Height in CMs"
                                name="height"
                                value={formik.values.height}
                                onChange={formik.handleChange}
                                error={formik.touched.height && Boolean(formik.errors.height)}
                                helperText={formik.touched.height && formik.errors.height}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            />

                            <TextField
                                fullWidth
                                margin="normal"
                                label="Weight in KGs"
                                name="weight"
                                value={formik.values.weight}
                                onChange={formik.handleChange}
                                error={formik.touched.weight && Boolean(formik.errors.weight)}
                                helperText={formik.touched.weight && formik.errors.weight}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            />
                            <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
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
                                        "&:hover": {backgroundColor: "#DA5E05"},
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
        </Box>
    )
        ;
}

export default ShapeK12ChildForm;