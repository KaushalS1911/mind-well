import React, {useState} from 'react';
import {
    Box, Button,
    FormControl, FormControlLabel,
    FormHelperText,
    FormLabel,
    InputLabel,
    MenuItem,
    OutlinedInput, Radio, RadioGroup,
    Select,
    TextField
} from "@mui/material";
import * as Yup from "yup";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

function ShapeK12FamilyForm() {

    const navigate = useNavigate();

    const validationSchema = Yup.object({
        familyType: Yup.string().required('Family Type is required'),
        motherAge: Yup.number().required('Mother Age is required').min(18, 'Age must be at least 18'),
        fatherAge: Yup.number().required('Father Age is required').min(18, 'Age must be at least 18'),
        singleChild: Yup.string().required('Single Child Required'),
        transferableJob: Yup.string().required('This Field is Required'),
        workingParent: Yup.string().required('Working Parent is required'),
        whatsappNumber: Yup.string()
            .required('Whatsapp number is required')
            .min(10, 'Whatsapp number must be exactly 10 digits')
            .max(10, 'Whatsapp number must be exactly 10 digits')
            .matches(/^\d+$/, 'Whatsapp number must be numeric'),
        whatsappNumber1: Yup.string().required('Please select either \'Father\' or \'Mother\' before proceeding.'),
        emailId: Yup.string().email("Email format is required").required('Email is required'),
        emailId1: Yup.string().required('Please select either \'Father\' or \'Mother\' before proceeding.'),
    });

    const formik = useFormik({
        initialValues: {
            familyType: '',
            singleParentReason: '',
            motherAge: '',
            fatherAge: '',
            singleChild: '',
            sibling: '',
            transferableJob: '',
            workingParent: '',
            frequent: "",
            whatsappNumber: '',
            whatsappNumber1: '',
            emailId1: '',
            emailId: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            navigate("/assessments/shape-k12/questions");
        },
    });

    const [single, setSingle] = useState("")
    const [singleRadio, setSingleRadio] = useState('')
    const [whether, setWhether] = useState('')
    const [workingParent, setWorkingParent] = useState('')


    return (
        <Box sx={{
            py: 20
        }}>
            <Box className={"Montserrat"} sx={{
                fontWeight: 700,
                color: '#012765',
                textAlign: 'center',
                fontSize: '32px',
                mt: {xs: 5, lg: 0},
            }}>
                Family Information
            </Box>
            <Box sx={{display: "flex", justifyContent: "center", mt: 5}}>
                <Box sx={{
                    width: "100%",
                    maxWidth: "700px",
                    backgroundColor: "#FFFFFF",
                    padding: {md: "50px 30px 30px", xs: "50px 20px 30px"},
                    boxShadow: 2,
                    borderRadius: "10px"
                }} className={"overpass"}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl
                            fullWidth
                            margin="normal"
                            error={formik.touched.familyType && Boolean(formik.errors.familyType)}
                            sx={{
                                "& label.Mui-focused": {color: "#FF7F1E"},
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {borderColor: "#FF7F1E"},
                                    "&:hover fieldset": {borderColor: "#FF7F1E"},
                                    "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                },
                            }}
                        >
                            <InputLabel>Family Type</InputLabel>
                            <Select
                                input={<OutlinedInput label="Family Type"/>}
                                id="familyType"
                                name="familyType"
                                value={formik.values.familyType}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setSingle(e.target.value)
                                }}
                            >
                                {["Joint", "Nuclear", "Single Parent"].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{formik.touched.familyType && formik.errors.familyType}</FormHelperText>
                        </FormControl>

                        {single === "Single Parent" && <FormControl
                            fullWidth
                            margin="normal"
                            error={formik.touched.singleParentReason && Boolean(formik.errors.singleParentReason)}
                            sx={{
                                "& label.Mui-focused": {color: "#FF7F1E"},
                                "& .MuiOutlinedInput-root": {
                                    "& fieldset": {borderColor: "#FF7F1E"},
                                    "&:hover fieldset": {borderColor: "#FF7F1E"},
                                    "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                },
                            }}
                        >
                            <InputLabel>Reason for Being Single Parent</InputLabel>
                            <Select
                                input={<OutlinedInput label="Reason for Being Single Parent"/>}
                                id="singleParentReason"
                                name="singleParentReason"
                                value={formik.values.singleParentReason}
                                onChange={formik.handleChange}
                            >
                                {["Widow", "Widower", "Divorced"].map((option) => (
                                    <MenuItem key={option} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                            <FormHelperText>{formik.touched.singleParentReason && formik.errors.singleParentReason}</FormHelperText>
                        </FormControl>}
                        <Box sx={{display: "flex", gap: 2}}>
                            <TextField
                                fullWidth
                                margin="normal"
                                id="motherAge"
                                name="motherAge"
                                label="Mother Age"
                                value={formik.values.motherAge}
                                onChange={formik.handleChange}
                                error={formik.touched.motherAge && Boolean(formik.errors.motherAge)}
                                helperText={formik.touched.motherAge && formik.errors.motherAge}
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
                                id="fatherAge"
                                name="fatherAge"
                                label="Father Age"
                                value={formik.values.fatherAge}
                                onChange={formik.handleChange}
                                error={formik.touched.fatherAge && Boolean(formik.errors.fatherAge)}
                                helperText={formik.touched.fatherAge && formik.errors.fatherAge}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            />
                        </Box>
                        <Box display={{sm: "flex"}} mt={{xs: 2, sm: "unset"}} alignItems="center"
                             margin="normal">
                            <FormLabel component="legend"
                                       sx={{marginRight: '1rem', color: "#012765"}}>Whether Single
                                Child
                                :</FormLabel>
                            <RadioGroup
                                name="singleChild"
                                value={formik.values.singleChild}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setSingleRadio(e.target.value)
                                }}
                                row
                                error={formik.touched.singleChild && Boolean(formik.errors.singleChild)}
                            >
                                <FormControlLabel sx={{color: "#012765"}} value="Yes"
                                                  control={<Radio/>}
                                                  label="Yes"/>
                                <FormControlLabel sx={{color: "#012765"}} value="No"
                                                  control={<Radio/>}
                                                  label="No"/>
                            </RadioGroup>
                        </Box>
                        <FormHelperText sx={{color: "#d32f2f"}}>
                            {formik.touched.singleChild && formik.errors.singleChild}
                        </FormHelperText>
                        {
                            singleRadio === "No" &&
                            <TextField
                                fullWidth
                                margin="normal"
                                id="fatherAge"
                                name="sibling"
                                label="Number of Siblings"
                                value={formik.values.sibling}
                                onChange={formik.handleChange}
                                error={formik.touched.sibling && Boolean(formik.errors.sibling)}
                                helperText={formik.touched.sibling && formik.errors.sibling}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            />
                        }
                        <Box display={{sm: "flex"}} mt={{xs: 2, sm: "unset"}} alignItems="center"
                             margin="normal">
                            <FormLabel component="legend"
                                       sx={{marginRight: '1rem', color: "#012765"}}>Who is the
                                Working Parent:</FormLabel>
                            <RadioGroup
                                name="workingParent"
                                value={formik.values.workingParent}
                                onChange={(e) => {
                                    formik.handleChange(e);
                                    setWorkingParent(e.target.value)
                                }}
                                row
                                error={formik.touched.workingParent && Boolean(formik.errors.workingParent)}
                            >
                                <FormControlLabel sx={{color: "#012765"}} value="Mother"
                                                  control={<Radio/>}
                                                  label="Mother"/>
                                <FormControlLabel sx={{color: "#012765"}} value="Father"
                                                  control={<Radio/>}
                                                  label="Father"/>
                                <FormControlLabel sx={{color: "#012765"}} value="Both"
                                                  control={<Radio/>}
                                                  label="Both"/>
                                <FormControlLabel sx={{color: "#012765"}} value="None"
                                                  control={<Radio/>}
                                                  label="None"/>
                            </RadioGroup>
                        </Box>
                        <FormHelperText sx={{color: "#d32f2f"}}>
                            {formik.touched.workingParent && formik.errors.workingParent}
                        </FormHelperText>
                        {workingParent !== "None" &&
                            <>
                                <Box display={{sm: "flex"}} mt={{xs: 2, sm: "unset"}}
                                     alignItems="center"
                                     margin="normal">
                                    <FormLabel component="legend"
                                               sx={{marginRight: '1rem', color: "#012765"}}>Whether
                                        Parents into
                                        Transferable Job :</FormLabel>
                                    <RadioGroup
                                        name="transferableJob"
                                        value={formik.values.transferableJob}
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                            setWhether(e.target.value)
                                        }}
                                        row
                                        error={formik.touched.transferableJob && Boolean(formik.errors.transferableJob)}
                                    >
                                        <FormControlLabel sx={{color: "#012765"}} value="Yes"
                                                          control={<Radio/>}
                                                          label="Yes"/>
                                        <FormControlLabel sx={{color: "#012765"}} value="No"
                                                          control={<Radio/>}
                                                          label="No"/>
                                    </RadioGroup>
                                </Box>
                                <FormHelperText sx={{color: "#d32f2f"}}>
                                    {formik.touched.transferableJob && formik.errors.transferableJob}
                                </FormHelperText>
                            </>
                        }
                        {whether === "Yes" &&
                            <FormControl
                                fullWidth
                                margin="normal"
                                error={formik.touched.frequent && Boolean(formik.errors.frequent)}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                }}
                            >
                                <InputLabel>How Frequent is the new transfer</InputLabel>
                                <Select
                                    input={<OutlinedInput
                                        label="How Frequent is the new transfer"/>}
                                    id="frequent"
                                    name="frequent"
                                    value={formik.values.frequent}
                                    onChange={formik.handleChange}
                                >
                                    {["Less than a Year", "2-5 Years", "Not Systematic(Can happen anytime)"].map((option) => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText>{formik.touched.frequent && formik.errors.frequent}</FormHelperText>
                            </FormControl>
                        }

                        <Box sx={{display: {md: "flex"}}}>
                            <Box display={{sm: "flex"}} mt={{xs: 2, sm: "unset"}}
                                 alignItems="center"
                                 margin="normal">
                                <FormLabel component="legend"
                                           sx={{
                                               marginRight: '1rem',
                                               textWrap: "nowrap",
                                               color: "#012765"
                                           }}>Whatsapp
                                    Number of :</FormLabel>
                                <Box>
                                    <RadioGroup
                                        name="whatsappNumber1"
                                        value={formik.values.whatsappNumber1}
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                            setWhether(e.target.value)
                                        }}
                                        row
                                        error={formik.touched.whatsappNumber1 && Boolean(formik.errors.whatsappNumber1)}
                                    >
                                        <FormControlLabel sx={{color: "#012765"}} value="Mother"
                                                          control={<Radio/>} label="Mother"/>
                                        <FormControlLabel sx={{color: "#012765"}} value="Father"
                                                          control={<Radio/>} label="Father"/>
                                    </RadioGroup>
                                    <FormHelperText sx={{color: "#d32f2f"}}>
                                        {formik.touched.whatsappNumber1 && formik.errors.whatsappNumber1}
                                    </FormHelperText>
                                </Box>
                            </Box>
                            <TextField
                                margin="normal"
                                id="fatherAge"
                                name="whatsappNumber"
                                label="WhatsApp Number"
                                value={formik.values.whatsappNumber}
                                onChange={formik.handleChange}
                                error={formik.touched.whatsappNumber && Boolean(formik.errors.whatsappNumber)}
                                helperText={formik.touched.whatsappNumber && formik.errors.whatsappNumber}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                    width: {md: "250px", xs: "100%"}
                                }}
                            />

                        </Box>
                        <Box sx={{display: {md: "flex"}}}>
                            <Box display={{sm: "flex"}} mt={{xs: 2, sm: "unset"}}
                                 alignItems="center"
                                 margin="normal">
                                <FormLabel component="legend"
                                           sx={{
                                               marginRight: '1rem',
                                               textWrap: "nowrap",
                                               color: "#012765"
                                           }}>Email
                                    Id of :</FormLabel>
                                <Box>
                                    <RadioGroup
                                        name="emailId1"
                                        value={formik.values.emailId1}
                                        onChange={(e) => {
                                            formik.handleChange(e);
                                            setWhether(e.target.value)
                                        }}
                                        row
                                        error={formik.touched.emailId1 && Boolean(formik.errors.emailId1)}
                                    >
                                        <FormControlLabel sx={{color: "#012765"}} value="Father"
                                                          control={<Radio/>} label="Father"/>
                                        <FormControlLabel sx={{color: "#012765"}} value="Mother"
                                                          control={<Radio/>} label="Mother"/>
                                    </RadioGroup>
                                    <FormHelperText sx={{color: "#d32f2f"}}>
                                        {formik.touched.emailId1 && formik.errors.emailId1}
                                    </FormHelperText>
                                </Box>
                            </Box>
                            <TextField
                                margin="normal"
                                id="fatherAge"
                                name="emailId"
                                label="Email"
                                value={formik.values.emailId}
                                onChange={formik.handleChange}
                                error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                                helperText={formik.touched.emailId && formik.errors.emailId}
                                sx={{
                                    "& label.Mui-focused": {color: "#FF7F1E"},
                                    "& .MuiOutlinedInput-root": {
                                        "& fieldset": {borderColor: "#FF7F1E"},
                                        "&:hover fieldset": {borderColor: "#FF7F1E"},
                                        "&.Mui-focused fieldset": {borderColor: "#FF7F1E"},
                                    },
                                    width: {md: "300px", xs: "100%"}
                                }}
                            />
                        </Box>
                        <Box sx={{mt: "20px", display: "flex", justifyContent: "space-between"}}>
                            <Button
                                onClick={() => navigate('/assessments/shape-k12/shape-child-form')}
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
                                Back
                            </Button>
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
    );
}

export default ShapeK12FamilyForm;