import React, {useState, useEffect} from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Snackbar,
    Grid,
    Avatar,
    Chip,
    Paper,
    TextField,
    Container, IconButton,
} from '@mui/material';
import {format as formatDate, addDays, parse} from 'date-fns';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// Custom styles for counselor swiper
const swiperStyles = `
  .counselor-swiper .swiper-wrapper {
    align-items: stretch;
  }
  
  .counselor-swiper .swiper-slide {
    height: auto;
  }
`;
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {useFormik} from 'formik';
import * as yup from 'yup';

const PRIMARY_BLUE = '#012765';
const ACCENT_ORANGE = '#FF6600';
const WHITE = '#fff';
const FONT_FAMILY = 'Poppins, sans-serif';

const staticSlots = {
    1: {
        '2023-11-09': ['09:30', '10:30', '11:30', '17:30'],
        '2023-11-10': ['10:00', '12:00', '15:00'],
        '2023-11-11': ['09:30', '11:00', '13:00'],
    },
    2: {
        '2023-11-09': ['10:00', '11:00', '13:00', '16:00'],
        '2023-11-10': ['09:30', '11:30', '14:30'],
        '2023-11-11': ['10:00', '12:00', '15:00'],
    },
    3: {
        '2023-11-09': ['09:00', '10:00', '12:00', '15:00'],
        '2023-11-10': ['09:30', '11:00', '13:30'],
        '2023-11-11': ['10:30', '12:30', '16:00'],
    },
};

const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
        const date = addDays(new Date('2023-11-09'), i);
        days.push(date);
    }
    return days;
};

const BookAppointment = () => {
    const days = getNext7Days();
    const [selectedCounselorIdx, setSelectedCounselorIdx] = useState(0);

    // Inject custom styles
    useEffect(() => {
        const style = document.createElement('style');
        style.textContent = swiperStyles;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);
    const [selectedDate, setSelectedDate] = useState(formatDate(days[0], 'yyyy-MM-dd'));
    const [selectedSlot, setSelectedSlot] = useState('');
    const [formOpen, setFormOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [confirmOpen, setConfirmOpen] = useState(false);
    const [counselors, setCounselors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const validationSchema = yup.object({
        user_id: yup.number().required('Counselor is required'),
        appointment_date: yup.string().required('Appointment date is required'),
        slot_time: yup.string().required('Slot time is required'),
        client_name: yup.string()
            .required('Full Name is required')
            .min(2, 'Full Name must be at least 2 characters'),
        client_email: yup.string()
            .email('Enter a valid email')
            .required('Email is required'),
        client_phone: yup.string()
            .required('Phone number is required')
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits'),
        // consultation_reason: yup.string().required('Consultation reason is required'),
        notes: yup.string(),
    });


    const formik = useFormik({
        initialValues: {
            user_id: '',
            appointment_date: '',
            slot_time: '',
            client_name: '',
            client_email: '',
            client_phone: '',
            consultation_reason: '',
            notes: '',
        },
        validationSchema,
        onSubmit: (values) => {
            setConfirmOpen(true);
        },
        enableReinitialize: true,
    });

    useEffect(() => {
        fetch('https://interactapiverse.com/mahadevasth/counsellors')
            .then(res => res.json())
            .then(result => {
                setCounselors(result.data || []);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to load counselors');
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (confirmOpen) {
            (async () => {
                setFormOpen(false);
                setConfirmOpen(false);
                try {
                    const payload = {...formik.values};
                    if (!isEdit) delete payload.notes;
                    const response = await fetch('https://interactapiverse.com/mahadevasth/appointments', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify(payload),
                    });
                    if (!response.ok) throw new Error('Failed to book appointment');
                    setSuccessOpen(true);
                    setSelectedSlot('');
                    formik.resetForm();
                } catch (err) {
                    setError(err.message || 'Failed to book appointment');
                }
            })();
        }
    }, [confirmOpen]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    const counselor = counselors[selectedCounselorIdx] || {};
    // Note: staticSlots logic will not work with API data. You may want to remove or adapt this logic.
    const slots = staticSlots[counselor.user_id]?.[selectedDate] || [];

    const handleBook = () => {
        formik.setValues({
            user_id: counselor.user_id || '',
            appointment_date: selectedDate,
            slot_time: selectedSlot,
            client_name: '',
            client_email: '',
            client_phone: '',
            consultation_reason: '',
            notes: '',
        });
        setIsEdit(false);
        setFormOpen(true);
    };
    const handleFormSubmit = formik.handleSubmit;
    const handleCloseSuccess = () => setSuccessOpen(false);

    return (
        <Box sx={{
            fontFamily: FONT_FAMILY,
            mt: {xs: 6, sm: 8, md: 12, lg: 18},
            px: {xs: 1, sm: 2, md: 3},
        }}>
            <Container maxWidth="xl" sx={{px: {xs: 0, sm: 2}}}>
                <Paper elevation={3} sx={{
                    p: {xs: 2, sm: 3, md: 4, lg: 5},
                    borderRadius: {xs: 3, sm: 4, md: 5},
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'
                }}>
                    {/* Counselor Slider */}
                    <Box sx={{mb: {xs: 3, sm: 4}, position: 'relative'}}>
                        {/* Heading */}
                        <Typography
                            variant="h4"
                            sx={{
                                color: PRIMARY_BLUE,
                                fontWeight: 800,
                                mb: {xs: 4, sm: 5},
                                fontSize: {xs: '1.3rem', sm: '1.5rem', md: '1.8rem', lg: '2rem'},
                                letterSpacing: 0.5,
                                textAlign: 'center',
                                position: 'relative',
                                px: {xs: 1, sm: 0},
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    bottom: -8,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: {xs: 40, sm: 50, md: 60},
                                    height: 3,
                                    backgroundColor: ACCENT_ORANGE,
                                    borderRadius: 2,
                                },
                            }}
                        >
                            Choose Your Counselor
                        </Typography>

                        {/* Navigation Arrows (same as Gallery Section) */}
                        <IconButton
                            className="swiper-button-pre"
                            sx={{
                                position: "absolute",
                                top: "53%",
                                left: {xs: -15, sm: -20, md: -25, lg: -25},
                                transform: "translateY(-0%)",
                                zIndex: 10,
                                color: "#062957",
                                backgroundColor: "#e8e5e5",
                                height: {xs: 40, sm: 45, md: 50},
                                width: {xs: 40, sm: 45, md: 50},
                                opacity: 0.9,
                                ":hover": {
                                    backgroundColor: "#bababa",
                                    opacity: 1,
                                },
                                display: {xs: "none", md: "flex"},
                            }}
                        >
                            <ArrowBackIosNewIcon fontSize="small"/>
                        </IconButton>
                        <IconButton
                            className="swiper-button-nex"
                            sx={{
                                position: "absolute",
                                top: "53%",
                                right: {xs: -15, sm: -20, md: -25, lg: -25},
                                transform: "translateY(-0%)",
                                zIndex: 10,
                                color: "#062957",
                                height: {xs: 40, sm: 45, md: 50},
                                width: {xs: 40, sm: 45, md: 50},
                                backgroundColor: "#e8e5e5",
                                opacity: 0.9,
                                ":hover": {
                                    backgroundColor: "#bababa",
                                    opacity: 1,
                                },
                                display: {xs: "none", md: "flex"},
                            }}
                        >
                            <ArrowForwardIosIcon fontSize="small"/>
                        </IconButton>

                        {/* Mobile Dots Navigation */}


                        {/* Swiper Slider */}
                        <Swiper
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.swiper-button-nex',
                                prevEl: '.swiper-button-pre',
                            }}
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                480: {slidesPerView: 1, spaceBetween: 16},
                                750: {slidesPerView: 2, spaceBetween: 20},
                                900: {slidesPerView: 2, spaceBetween: 24},
                                1200: {slidesPerView: 3, spaceBetween: 32},
                            }}
                            style={{
                                paddingBottom: {xs: 10, sm: 15, md: 20},
                                paddingTop: {xs: 10, sm: 15, md: 20},
                                paddingLeft: {xs: 2, sm: 4},
                                paddingRight: {xs: 2, sm: 4},
                            }}
                            className="counselor-swiper"
                            onSwiper={(swiper) => (window.counselorSwiper = swiper)}
                            onSlideChange={(swiper) => setSelectedCounselorIdx(swiper.activeIndex)}
                        >
                            {counselors.map((c) => {
                                const isActive = c.user_id === counselor?.user_id;
                                return (
                                    <SwiperSlide key={c.user_id}>
                                        <Card
                                            onClick={() => {
                                                setSelectedCounselorIdx(counselors.findIndex((cou) => cou.user_id === c.user_id));
                                                setSelectedSlot('');
                                            }}
                                            sx={{
                                                minWidth: {xs: 280, sm: 300, md: 320},
                                                height: '100%',
                                                borderRadius: {xs: 3, sm: 4},
                                                border: isActive ? `2px solid ${ACCENT_ORANGE}` : '1px solid #e0e0e0',
                                                boxShadow: isActive
                                                    ? '0 12px 40px rgba(255,102,0,0.15)'
                                                    : '0 4px 20px rgba(0,0,0,0.08)',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                bgcolor: WHITE,
                                                position: 'relative',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                overflow: 'hidden',
                                                '&:hover': {
                                                    boxShadow: isActive
                                                        ? '0 16px 48px rgba(255,102,0,0.2)'
                                                        : '0 8px 32px rgba(0,0,0,0.12)',
                                                    // transform: 'translateY(-6px)',
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    right: 0,
                                                    height: '3px',
                                                    background: isActive
                                                        ? `linear-gradient(90deg, ${ACCENT_ORANGE} 0%, #ff8533 100%)`
                                                        : 'transparent',
                                                },
                                            }}
                                        >
                                            <CardContent
                                                sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    p: {xs: 2, sm: 2.5, md: 3, lg: 3.5},
                                                    height: '100%',
                                                    flex: 1,
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                        mb:1,
                                                        width: '100%',
                                                    }}
                                                >
                                                    <Box sx={{position: 'relative', mb: {xs: 1.5, sm: 2}}}>
                                                        <Avatar
                                                            src={c.profile_image || 'https://via.placeholder.com/100?text=No+Image'}
                                                            alt={c.full_name}
                                                            sx={{
                                                                width: {xs: 60, sm: 70, md: 80},
                                                                height: {xs: 60, sm: 70, md: 80},
                                                                border: `4px solid ${PRIMARY_BLUE}`,
                                                                boxShadow: '0 8px 24px rgba(1,39,101,0.2)',
                                                                transition: 'all 0.3s ease',
                                                            }}
                                                        />
                                                    </Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: PRIMARY_BLUE,
                                                            fontWeight: 700,
                                                            fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'},
                                                            textAlign: 'center',
                                                            mb: {xs: 0.5, sm: 1},
                                                            lineHeight: 1.2,
                                                            px: {xs: 1, sm: 0},
                                                        }}
                                                    >
                                                        {c.full_name} ({c.experience || '5+ years'})
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: ACCENT_ORANGE,
                                                            fontWeight: 600,
                                                            textAlign: 'center',
                                                            fontSize: {xs: '0.75rem', sm: '0.8rem', md: '0.85rem'},
                                                            opacity: 0.9,
                                                            textTransform: 'capitalize',
                                                            px: {xs: 1, sm: 0},
                                                        }}
                                                    >
                                                        {c.role} ({c.education || 'Masters in Psychology'})
                                                    </Typography>
                                                </Box>
                                                <Box sx={{flex: 1, minWidth: 0}}>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            color: ACCENT_ORANGE,
                                                            fontWeight: 600,
                                                            lineHeight: 1.3,
                                                            fontSize: {xs: '0.7rem', sm: '0.75rem', md: '0.8rem'},
                                                            wordBreak: 'break-word',
                                                            textAlign: 'center',
                                                            px: {xs: 1, sm: 0},
                                                        }}
                                                    >
                                                        {c.expertise || 'General Counseling'}
                                                    </Typography>
                                                </Box>
                                            </CardContent>
                                        </Card>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                        <Box
                            sx={{
                                display: {xs: 'flex', md: 'none'},
                                justifyContent: 'center',
                                alignItems: 'center',
                                gap: {xs: 1, sm: 1.5},
                                mt: {xs: 2, sm: 3},
                                mb: {xs: 1, sm: 2},
                                px: {xs: 1, sm: 2},
                            }}
                        >
                            {counselors.map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: {xs: 8, sm: 10, md: 12},
                                        height: {xs: 8, sm: 10, md: 12},
                                        borderRadius: '50%',
                                        bgcolor: index === selectedCounselorIdx ? ACCENT_ORANGE : '#e0e0e0',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        boxShadow:
                                            index === selectedCounselorIdx
                                                ? '0 4px 12px rgba(255,102,0,0.3)'
                                                : '0 2px 8px rgba(0,0,0,0.1)',
                                        '&:hover': {
                                            bgcolor: index === selectedCounselorIdx ? ACCENT_ORANGE : '#ccc',
                                            transform: 'scale(1.2)',
                                            boxShadow:
                                                index === selectedCounselorIdx
                                                    ? '0 6px 16px rgba(255,102,0,0.4)'
                                                    : '0 4px 12px rgba(0,0,0,0.15)',
                                        },
                                    }}
                                    onClick={() => window.counselorSwiper?.slideTo(index)}
                                />
                            ))}
                        </Box>
                    </Box>


                    {/* Date Picker */}
                    <Typography variant="subtitle1" sx={{
                        color: PRIMARY_BLUE,
                        fontWeight: 700,
                        mt: {xs: 2, sm: 3},
                        mb: {xs: 1, sm: 1.5},
                        fontSize: {xs: '1rem', sm: '1.1rem', md: '1.2rem'},
                        letterSpacing: 0.5,
                        px: {xs: 1, sm: 0},
                    }}>
                        Choose Date
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: {xs: 1, sm: 1.5},
                        overflowX: 'auto',
                        pb: {xs: 1, sm: 2},
                        px: {xs: 1, sm: 0},
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {display: 'none'},
                        '&::-webkit-scrollbar-track': {display: 'none'},
                        '&::-webkit-scrollbar-thumb': {display: 'none'},
                    }}>
                        {days.map((date) => {
                            const dateStr = formatDate(date, 'yyyy-MM-dd');
                            const isSelected = selectedDate === dateStr;
                            return (
                                <Button
                                    key={dateStr}
                                    variant={isSelected ? 'contained' : 'outlined'}
                                    onClick={() => {
                                        setSelectedDate(dateStr);
                                        setSelectedSlot('');
                                    }}
                                    sx={{
                                        px: {xs: 2, sm: 2.5, md: 3},
                                        py: {xs: 1, sm: 1.2},
                                        borderRadius: "15px",
                                        bgcolor: isSelected ? ACCENT_ORANGE : WHITE,
                                        color: isSelected ? WHITE : PRIMARY_BLUE,
                                        borderColor: ACCENT_ORANGE,
                                        fontWeight: 700,
                                        fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'},
                                        boxShadow: isSelected ? 2 : 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: {xs: 0.5, sm: 1},
                                        minWidth: {xs: 80, sm: 90, md: 100},
                                        flexShrink: 0,
                                        '&:hover': {
                                            bgcolor: ACCENT_ORANGE,
                                            color: WHITE,
                                        },
                                    }}
                                    startIcon={isSelected ?
                                        <CalendarTodayIcon sx={{fontSize: {xs: 16, sm: 18}}}/> : null}
                                >
                                    <Box>
                                        <Typography variant="body2"
                                                    fontWeight={700}
                                                    fontSize={{xs: '0.7rem', sm: '0.8rem', md: '0.9rem'}}>
                                            {formatDate(date, 'EEE')}
                                        </Typography>
                                        <Typography variant="caption"
                                                    fontSize={{xs: '0.6rem', sm: '0.7rem', md: '0.8rem'}}>
                                            {formatDate(date, 'd MMM')}
                                        </Typography>
                                    </Box>
                                </Button>
                            );
                        })}
                    </Box>

                    {/* Time Slots */}
                    <Typography variant="subtitle1" sx={{
                        color: PRIMARY_BLUE,
                        fontWeight: 700,
                        mt: {xs: 2, sm: 3},
                        mb: {xs: 1, sm: 1.5},
                        fontSize: {xs: '1rem', sm: '1.1rem', md: '1.2rem'},
                        letterSpacing: 0.5,
                        px: {xs: 1, sm: 0},
                    }}>
                        Choose Time Slot
                    </Typography>
                    <Grid container spacing={{xs: 1, sm: 1.5}} sx={{mb: {xs: 1, sm: 2}, px: {xs: 1, sm: 0}}}>
                        {slots.length === 0 ? (
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{
                                    color: ACCENT_ORANGE,
                                    fontWeight: 600,
                                    fontSize: {xs: '0.8rem', sm: '0.9rem'},
                                    textAlign: 'center'
                                }}>
                                    No slots available for this day.
                                </Typography>
                            </Grid>
                        ) : (
                            slots.map((slot) => {
                                // Convert 'HH:mm' to AM/PM format
                                const parsed = parse(slot, 'HH:mm', new Date());
                                const ampm = formatDate(parsed, 'h:mm a');
                                return (
                                    <Grid item key={slot} xs="auto">
                                        <Chip
                                            label={ampm}
                                            clickable
                                            color={selectedSlot === slot ? 'primary' : 'default'}
                                            onClick={() => setSelectedSlot(slot)}
                                            sx={{
                                                borderRadius: 2,
                                                bgcolor: selectedSlot === slot ? ACCENT_ORANGE : WHITE,
                                                color: selectedSlot === slot ? WHITE : PRIMARY_BLUE,
                                                border: `2px solid ${ACCENT_ORANGE}`,
                                                fontWeight: 700,
                                                fontSize: {xs: '0.8rem', sm: '0.9rem', md: '1rem'},
                                                minWidth: {xs: 70, sm: 80, md: 90},
                                                height: {xs: 32, sm: 36, md: 40},
                                                boxShadow: selectedSlot === slot ? 2 : 0,
                                                transition: 'all 0.18s',
                                                '&:hover': {
                                                    bgcolor: ACCENT_ORANGE,
                                                    color: WHITE,
                                                },
                                            }}
                                        />
                                    </Grid>
                                );
                            })
                        )}
                    </Grid>

                    {/* Book Button */}
                    <Box sx={{
                        textAlign: 'center',
                        mt: {xs: 3, sm: 4},
                        px: {xs: 1, sm: 0}
                    }}>
                        <Button
                            variant="contained"
                            disabled={!selectedSlot}
                            onClick={handleBook}
                            size="large"
                            sx={{
                                borderRadius: "15px",
                                px: {xs: 4, sm: 5, md: 6},
                                py: {xs: 1.2, sm: 1.4, md: 1.5},
                                fontWeight: 800,
                                bgcolor: ACCENT_ORANGE,
                                color: WHITE,
                                fontSize: {xs: '1rem', sm: '1.1rem', md: '1.15rem'},
                                boxShadow: 4,
                                letterSpacing: 0.5,
                                textTransform: 'none',
                                transition: 'all 0.18s',
                                minWidth: {xs: 200, sm: 220, md: 240},
                                '&:hover': {
                                    bgcolor: '#FE6A00',
                                    transform: 'scale(1.04)',
                                },
                                '&:disabled': {
                                    bgcolor: '#ccc',
                                    color: '#666',
                                    transform: 'none',
                                },
                            }}
                        >
                            Book Appointment
                        </Button>
                    </Box>
                </Paper>

                {/* Dialog Form */}
                <Dialog
                    open={formOpen}
                    onClose={() => setFormOpen(false)}
                    fullWidth
                    maxWidth="sm"
                    PaperProps={{
                        sx: {
                            borderRadius: {xs: 2, sm: 4},
                            background: 'linear-gradient(135deg, #fff7f0 0%, #f8fafc 100%)',
                            m: {xs: 2, sm: 0},
                            width: {xs: 'calc(100% - 32px)', sm: 'auto'},
                        }
                    }}
                >
                    <DialogTitle sx={{
                        fontFamily: FONT_FAMILY,
                        color: PRIMARY_BLUE,
                        fontWeight: 800,
                        fontSize: {xs: '1.2rem', sm: '1.4rem', md: '1.5rem'},
                        textAlign: 'center',
                        letterSpacing: 0.5,
                        pb: 0,
                        px: {xs: 2, sm: 3},
                    }}>
                        Book Appointment
                    </DialogTitle>
                    <DialogContent sx={{px: {xs: 2, sm: 3}}}>
                        <Box
                            component="form"
                            onSubmit={handleFormSubmit}
                            sx={{
                                width: '100%',
                                maxWidth: 500,
                                mx: 'auto',
                                mt: 1,
                                fontFamily: FONT_FAMILY,
                            }}
                        >
                            {/* Hidden user_id, appointment_date, slot_time fields (auto-filled) */}

                            <TextField
                                label="Appointment Date"
                                name="appointment_date"
                                value={formik.values.appointment_date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                fullWidth
                                margin="normal"
                                type="date"
                                InputLabelProps={{shrink: true}}
                                InputProps={{readOnly: true}}
                                error={formik.touched.appointment_date && Boolean(formik.errors.appointment_date)}
                                helperText={formik.touched.appointment_date && formik.errors.appointment_date}
                            />
                            <TextField
                                label="Slot Time"
                                name="slot_time"
                                value={formik.values.slot_time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                fullWidth
                                margin="normal"
                                InputProps={{readOnly: true}}
                                error={formik.touched.slot_time && Boolean(formik.errors.slot_time)}
                                helperText={formik.touched.slot_time && formik.errors.slot_time}
                            />

                            <TextField
                                label="Full Name"
                                name="client_name"
                                value={formik.values.client_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                fullWidth
                                margin="normal"
                                error={formik.touched.client_name && Boolean(formik.errors.client_name)}
                                helperText={formik.touched.client_name && formik.errors.client_name}
                            />
                            <TextField
                                label="Email"
                                name="client_email"
                                value={formik.values.client_email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                fullWidth
                                margin="normal"
                                error={formik.touched.client_email && Boolean(formik.errors.client_email)}
                                helperText={formik.touched.client_email && formik.errors.client_email}
                            />
                            <TextField
                                label="Phone"
                                name="client_phone"
                                value={formik.values.client_phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                fullWidth
                                margin="normal"
                                error={formik.touched.client_phone && Boolean(formik.errors.client_phone)}
                                helperText={formik.touched.client_phone && formik.errors.client_phone}
                            />
                            <TextField
                                multiline
                                rows={4}
                                label="Consultation Reason"
                                name="consultation_reason"
                                value={formik.values.consultation_reason}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                                fullWidth
                                margin="normal"
                                error={formik.touched.consultation_reason && Boolean(formik.errors.consultation_reason)}
                                helperText={formik.touched.consultation_reason && formik.errors.consultation_reason}
                            />
                            {isEdit && (
                                <TextField
                                    label="Notes"
                                    name="notes"
                                    value={formik.values.notes}
                                    onChange={formik.handleChange}
                                    fullWidth
                                    margin="normal"
                                    multiline
                                    minRows={2}
                                    maxRows={6}
                                />
                            )}
                            <DialogActions sx={{
                                px: {xs: 1, sm: 0},
                                pt: {xs: 1, sm: 2},
                                gap: {xs: 1, sm: 2}
                            }}>
                                <Button
                                    onClick={() => setFormOpen(false)}
                                    sx={{
                                        color: PRIMARY_BLUE,
                                        fontWeight: 700,
                                        fontSize: {xs: '0.9rem', sm: '1rem'},
                                        px: {xs: 2, sm: 3},
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={formik.isSubmitting}
                                    sx={{
                                        bgcolor: ACCENT_ORANGE,
                                        color: WHITE,
                                        fontWeight: 800,
                                        borderRadius: "10px",
                                        px: {xs: 3, sm: 4},
                                        py: {xs: 1, sm: 1.2},
                                        fontSize: {xs: '0.9rem', sm: '1rem', md: '1.1rem'},
                                        '&:hover': {bgcolor: '#FE6A00'},
                                    }}
                                >
                                    Book Appointment
                                </Button>
                            </DialogActions>
                        </Box>
                    </DialogContent>
                </Dialog>

                {/* Success Dialog */}
                <Dialog
                    open={successOpen}
                    onClose={handleCloseSuccess}
                    maxWidth="xs"
                    fullWidth
                    PaperProps={{
                        sx: {
                            borderRadius: {xs: 2, sm: 4},
                            background: 'linear-gradient(135deg, #fff7f0 0%, #f8fafc 100%)',
                            m: {xs: 2, sm: 0},
                            width: {xs: 'calc(100% - 32px)', sm: 'auto'},
                        }
                    }}
                >
                    <DialogTitle sx={{
                        fontFamily: FONT_FAMILY,
                        color: PRIMARY_BLUE,
                        fontWeight: 800,
                        fontSize: {xs: '1.1rem', sm: '1.2rem', md: '1.3rem'},
                        textAlign: 'center',
                        letterSpacing: 0.5,
                        pb: 0,
                        px: {xs: 2, sm: 3},
                    }}>
                        Appointment Booked Successfully!
                    </DialogTitle>
                    <DialogContent sx={{px: {xs: 2, sm: 3}}}>
                        <Typography sx={{
                            color: PRIMARY_BLUE,
                            fontWeight: 600,
                            textAlign: 'center',
                            mt: 1,
                            mb: 2,
                            fontSize: {xs: '0.9rem', sm: '1rem'},
                            lineHeight: 1.5,
                        }}>
                            Thank you for booking your appointment. We look forward to seeing you!
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{
                        justifyContent: 'center',
                        pb: {xs: 1, sm: 2},
                        px: {xs: 2, sm: 3},
                    }}>
                        <Button
                            onClick={handleCloseSuccess}
                            variant="contained"
                            sx={{
                                bgcolor: ACCENT_ORANGE,
                                color: WHITE,
                                fontWeight: 700,
                                borderRadius: 2,
                                px: {xs: 3, sm: 4},
                                py: {xs: 0.8, sm: 1},
                                fontSize: {xs: '0.9rem', sm: '1rem'},
                                '&:hover': {bgcolor: '#FE6A00'}
                            }}
                        >
                            OK
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    );
};

export default BookAppointment;
