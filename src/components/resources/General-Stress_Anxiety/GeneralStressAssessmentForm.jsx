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
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Button, FormHelperText
} from "@mui/material";
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from "react-router-dom";

const organization = [
    {id: 1, name: "Organization A"},
    {id: 2, name: "Organization B"},
    {id: 3, name: "Organization C"},
    {id: 4, name: "Organization D"}
];


const age = Array.from({length: 50}, (_, i) => i + 10);

function GeneralStressAssessmentForm() {

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

    return (
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
                Assessment Form
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", mt: 5,}}>
                <Box sx={{
                    width: "700px",
                    backgroundColor: "#FFFFFF",
                    padding: "50px 30px 30px",
                    boxShadow: 2,
                    borderRadius: "10px"
                }}>
                    <form onSubmit={formik.handleSubmit}>

                        <TextField color="#FF7F1E" fullWidth margin="normal" label="Full Name" name="fullName"
                                   value={formik.values.fullName} onChange={formik.handleChange}
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

                        <TextField color="#FF7F1E" fullWidth margin="normal" label="Email" name="email"
                                   value={formik.values.email} onChange={formik.handleChange}
                                   error={formik.touched.email && Boolean(formik.errors.email)}
                                   helperText={formik.touched.email && formik.errors.email}
                                   sx={{
                                       "& label.Mui-focused": {color: "#FF7F1E"},
                                       "& .MuiOutlinedInput-root": {
                                           "& fieldset": {borderColor: "#FF7F1E"},
                                           "&:hover fieldset": {borderColor: "#FF7F1E"},
                                           "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                       },
                                   }}
                        />

                        {formik.touched.gender && formik.errors.gender && (
                            <div style={{color: "red"}}>{formik.errors.gender}</div>
                        )}

                        <Box sx={{mt: "20px", display: "flex", justifyContent: "end"}}>
                            <Button type="submit"
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
                                    }}>
                                Submit
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box>
        </Box>
    );
}

export default GeneralStressAssessmentForm;