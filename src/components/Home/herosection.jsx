import React from "react";
import {useForm, Controller} from "react-hook-form";
import {
    Box,
    Grid,
    Typography,
    Button,
    Paper,
    TextField,
    MenuItem,
    Container,
    AvatarGroup,
    Avatar,
} from "@mui/material";

function HeroSection() {
    const {
        handleSubmit,
        control,
        formState: {errors},
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
    };

    return (
        <Box sx={{position: "relative",mt: {md:13,xs:0}, backgroundColor: "#002F6C", color: "white", padding: "80px 0"}}>
            <Container maxWidth={"xl"}>
                <Grid container spacing={1} alignItems="center" justifyContent="space-around">
                    <Box
                        sx={{
                            position: "absolute",
                            display: {lg: "flex", xs: "none"},
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#FE6A00",
                            borderRadius: "50%",
                            top: {xs: "10%", sm: "12%", md: "15%"},
                            left: {xs: "45%", sm: "50%", md: "55%"},
                            transform: "translate(-50%, -50%)",
                        }}
                    />

                    <Grid item xs={12} md={6} sx={{textAlign: "left"}}>
                        <Box
                            className={"Montserrat"}
                            sx={{
                                fontSize: "48px",
                                lineHeight: 1,
                                fontWeight: "700",
                            }}
                        >
                            Your Mental Wellbeing Matters
                        </Box>
                        <Box  sx={{marginTop: "20px", fontSize: "20px", lineHeight: "28px", width: "80%"}}>
                            Connect with licensed therapists online and start your journey to better mental health
                            today. Professional support whenever and wherever you need it.
                        </Box>
                        <Box sx={{marginTop: "30px"}}>
                            <Button variant="contained"
                                    sx={{backgroundColor: "#FE6A00", marginRight: "10px", py: 1.5, fontWeight: "600"}}>
                                Get Started
                            </Button>
                            <Button variant="outlined"
                                    sx={{borderColor: "white", color: "white", py: 1.5, fontWeight: "600"}}>
                                Learn More
                            </Button>
                        </Box>
                        <Box sx={{marginTop: "40px", display: "flex", alignItems: "center",}}>

                            <AvatarGroup spacing="medium" sx={{marginBottom: {xs: "30px", md: "0px"}}}>
                                <Avatar sx={{bgcolor: "#D9D9D9", color: "black"}}>J</Avatar>
                                <Avatar sx={{bgcolor: "#D9D9D9", color: "black"}}>S</Avatar>
                                <Avatar sx={{bgcolor: "#D9D9D9", color: "black"}}>M</Avatar>
                            </AvatarGroup>


                            <Box sx={{
                                fontSize:"14px",
                                marginLeft: "10px",
                                color: "white",
                                marginBottom: {xs: "30px", md: "0px"}
                            }}>
                                Trusted by <b>10,000+</b> students and professionals
                            </Box>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={4}>
                        <Box sx={{textAlign: "left"}}>
                            <Paper sx={{padding: "30px", borderRadius: "12px"}}>
                                <Box variant="h6" fontWeight="bold" sx={{color: "#002F6C"}}>
                                    Take the first step
                                </Box>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <Controller
                                        name="name"
                                        control={control}
                                        defaultValue=""
                                        rules={{required: "Name is required"}}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="Your name"
                                                variant="outlined"
                                                sx={{marginTop: "15px"}}
                                                error={!!errors.name}
                                                helperText={errors.name?.message}
                                            />
                                        )}
                                    />


                                    <Controller
                                        name="email"
                                        control={control}
                                        defaultValue=""
                                        rules={{
                                            required: "Email is required",
                                            pattern: {value: /^\S+@\S+\.\S+$/, message: "Invalid email format"},
                                        }}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                fullWidth
                                                label="Your email"
                                                variant="outlined"
                                                sx={{marginTop: "15px"}}
                                                error={!!errors.email}
                                                helperText={errors.email?.message}
                                            />
                                        )}
                                    />


                                    <Controller
                                        name="concern"
                                        control={control}
                                        defaultValue=""
                                        rules={{required: "Please select your concern"}}
                                        render={({field}) => (
                                            <TextField
                                                {...field}
                                                select
                                                fullWidth
                                                label="What are you struggling with?"
                                                variant="outlined"
                                                sx={{marginTop: "15px"}}
                                                error={!!errors.concern}
                                                helperText={errors.concern?.message}
                                            >
                                                <MenuItem value="Anxiety">Anxiety</MenuItem>
                                                <MenuItem value="Depression">Depression</MenuItem>
                                                <MenuItem value="Stress">Stress</MenuItem>
                                                <MenuItem value="Relationship Issues">Relationship Issues</MenuItem>
                                                <MenuItem value="Self-esteem">Self-esteem</MenuItem>
                                                <MenuItem value="Grief">Grief</MenuItem>
                                                <MenuItem value="Other">Other</MenuItem>
                                            </TextField>
                                        )}
                                    />


                                    <Button type="submit" fullWidth variant="contained"
                                            sx={{backgroundColor: "#FE6A00", marginTop: "20px"}}>
                                        Match Me With A Therapist
                                    </Button>
                                </form>

                                <Box
                                            sx={{display: "block", marginTop: "10px", textAlign: "center",fontSize:"12px"}}>
                                    By continuing, you agree to our{" "}
                                    <a href="#" style={{color: "#002F6C", fontWeight: "bold"}}>
                                        Terms of Service
                                    </a>{" "}
                                    and{" "}
                                    <a href="#" style={{color: "#002F6C", fontWeight: "bold"}}>
                                        Privacy Policy
                                    </a>
                                </Box>
                            </Paper>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default HeroSection;
