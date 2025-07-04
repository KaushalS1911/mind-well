import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
    TextField,
    Button,
    Grid,
    Typography,
    Checkbox,
    FormControlLabel,
    Link,
    FormControl,
    MenuItem,
    FormHelperText
} from "@mui/material";
import { 
    ContactCard, 
    ContactCardContent, 
    FormTitle, 
    SubmitButton, 
    CustomSelect, 
    styles 
} from "./styles";
import { INQUIRY_TYPES } from "./constants";

const ContactForm = ({ onSubmit }) => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    return (
        <ContactCard>
            <ContactCardContent>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <FormTitle variant="h5">
                                Send Us a Message
                            </FormTitle>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography sx={styles.formLabel}>First Name*</Typography>
                            <TextField
                                fullWidth
                                placeholder="Your first name"
                                variant="outlined"
                                InputProps={{ sx: styles.inputField }}
                                {...register("firstName", { required: "First name is required" })}
                                error={!!errors.firstName}
                                helperText={errors.firstName?.message}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography sx={styles.formLabel}>Last Name*</Typography>
                            <TextField
                                fullWidth
                                placeholder="Your last name"
                                variant="outlined"
                                InputProps={{ sx: styles.inputField }}
                                {...register("lastName", { required: "Last name is required" })}
                                error={!!errors.lastName}
                                helperText={errors.lastName?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Email Address*</Typography>
                            <TextField
                                fullWidth
                                placeholder="your.email@example.com"
                                variant="outlined"
                                InputProps={{ sx: styles.inputField }}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Enter a valid email address",
                                    },
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Phone Number</Typography>
                            <TextField
                                fullWidth
                                placeholder="(123) 456-7890"
                                variant="outlined"
                                InputProps={{ sx: styles.inputField }}
                                {...register("phone", {
                                    pattern: {
                                        value: /^[0-9+\-\s()]{10,15}$/,
                                        message: "Enter a valid phone number",
                                    },
                                })}
                                error={!!errors.phone}
                                helperText={errors.phone?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Inquiry Type*</Typography>
                            <FormControl fullWidth error={!!errors.inquiryType}>
                                <CustomSelect
                                    displayEmpty
                                    variant="outlined"
                                    defaultValue=""
                                    {...register("inquiryType", { required: "Inquiry type is required" })}
                                >
                                    <MenuItem value="" sx={{ color: "#a0a0a0" }} disabled>
                                        Select an inquiry type
                                    </MenuItem>
                                    {INQUIRY_TYPES.map((option) => (
                                        <MenuItem
                                            key={option}
                                            value={option}
                                            sx={{
                                                '&.Mui-selected': {
                                                    backgroundColor: "white",
                                                    color: "black",
                                                },
                                                '&:hover': {
                                                    backgroundColor: "#1976D2",
                                                    color: "white"
                                                }
                                            }}
                                        >
                                            {option}
                                        </MenuItem>
                                    ))}
                                </CustomSelect>
                                {errors.inquiryType && (
                                    <FormHelperText>{errors.inquiryType.message}</FormHelperText>
                                )}
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography sx={styles.formLabel}>Message*</Typography>
                            <TextField
                                fullWidth
                                placeholder="How can we help you?"
                                multiline
                                rows={4}
                                variant="outlined"
                                InputProps={{ sx: { borderRadius: "8px", fontSize: "16px" } }}
                                {...register("message", { required: "Message is required" })}
                                error={!!errors.message}
                                helperText={errors.message?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Controller
                                        name="privacyPolicy"
                                        control={control}
                                        rules={{ required: "You must agree to the privacy policy" }}
                                        render={({ field }) => (
                                            <Checkbox
                                                id="privacy-policy-checkbox"
                                                {...field}
                                                checked={!!field.value}
                                            />
                                        )}
                                    />
                                }
                                label={
                                    <Typography sx={{ color: "#4F5866" }}>
                                        I agree to the{" "}
                                        <Link href="#" sx={{
                                            color: "#012765",
                                            textDecoration: "none",
                                            fontWeight: "bold"
                                        }}>
                                            Privacy Policy
                                        </Link>{" "}
                                        and consent to having my data processed.
                                    </Typography>
                                }
                            />
                            {errors.privacyPolicy && (
                                <Typography variant="body2" color="error">
                                    {errors.privacyPolicy.message}
                                </Typography>
                            )}
                        </Grid>

                        <Grid item xs={12}>
                            <SubmitButton
                                fullWidth
                                type="submit"
                                variant="contained"
                            >
                                Send Message
                            </SubmitButton>
                        </Grid>
                    </Grid>
                </form>
            </ContactCardContent>
        </ContactCard>
    );
};

export default ContactForm;
