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
    Container,
} from '@mui/material';
import {format as formatDate, addDays, parse} from 'date-fns';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';
import { useFormik } from 'formik';
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
            mt: {xs: 8, md: 18},
        }}>
            <Container maxWidth="xl">
                <Paper elevation={3} sx={{
                    p: {xs: 2, sm: 5},
                    borderRadius: 5,
                    background: 'rgba(255,255,255,0.95)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)'
                }}>
                    {/* Counselor Slider */}
                    <Typography variant="subtitle1" sx={{
                        color: PRIMARY_BLUE,
                        fontWeight: 700,
                        mb: 2,
                        fontSize: '1.2rem',
                        letterSpacing: 0.5
                    }}>
                        Choose Your Counselor
                    </Typography>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            600: {slidesPerView: 2},
                            900: {slidesPerView: 3},
                        }}
                        style={{paddingBottom: 32}}
                    >
                        {counselors.map((c) => (
                            <SwiperSlide key={c.user_id}>
                                <Card
                                    onClick={() => {
                                        setSelectedCounselorIdx(counselors.findIndex(cou => cou.user_id === c.user_id));
                                        setSelectedSlot('');
                                    }}
                                    sx={{
                                        minWidth: 240,
                                        borderRadius: 4,
                                        border: counselors.find(cou => cou.user_id === c.user_id) === counselor ? `2.5px solid ${ACCENT_ORANGE}` : `2px solid #e0e0e0`,
                                        boxShadow: counselors.find(cou => cou.user_id === c.user_id) === counselor ? '0 6px 24px 0 rgba(255,102,0,0.15)' : '0 2px 8px 0 rgba(1,39,101,0.07)',
                                        cursor: 'pointer',
                                        transition: 'all 0.25s',
                                        bgcolor: counselors.find(cou => cou.user_id === c.user_id) === counselor ? '#fff7f0' : WHITE,
                                        position: 'relative',
                                        '&:hover': {
                                            boxShadow: '0 8px 32px 0 rgba(255,102,0,0.18)',
                                            // transform: 'translateY(-2px) scale(1.03)',
                                        },
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            p: {xs: 2, sm: 3},
                                        }}
                                    >
                                        <Avatar src={c.profile_image || 'https://via.placeholder.com/72?text=No+Image'}
                                                alt={c.full_name} sx={{
                                            width: 72,
                                            height: 72,
                                            mb: 1,
                                            border: `2.5px solid ${PRIMARY_BLUE}`
                                        }}/>
                                        <Typography variant="subtitle1" sx={{
                                            color: PRIMARY_BLUE,
                                            fontWeight: 700,
                                            fontSize: '1.1rem'
                                        }}>{c.full_name}</Typography>
                                        <Typography variant="body2"
                                                    sx={{color: ACCENT_ORANGE, fontWeight: 500}}>{c.role}</Typography>
                                        <Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
                                            <EmailIcon sx={{color: ACCENT_ORANGE, fontSize: 18, mr: 0.5}}/>
                                            <Typography variant="body2" sx={{
                                                color: ACCENT_ORANGE,
                                                fontWeight: 600
                                            }}>{c.email}</Typography>
                                        </Box>
                                        {c.phone && (
                                            <Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
                                                <PersonIcon sx={{color: ACCENT_ORANGE, fontSize: 18, mr: 0.5}}/>
                                                <Typography variant="body2" sx={{
                                                    color: ACCENT_ORANGE,
                                                    fontWeight: 600
                                                }}>{c.phone}</Typography>
                                            </Box>
                                        )}
                                        <Box sx={{display: 'flex', alignItems: 'center', mt: 1}}>
                                            <StarIcon sx={{color: ACCENT_ORANGE, fontSize: 18, mr: 0.5}}/>
                                            <Typography variant="body2" sx={{
                                                color: ACCENT_ORANGE,
                                                fontWeight: 600
                                            }}>{c.rating}</Typography>
                                            {c.rating > 4.8 && (
                                                <Chip label="Top Rated" size="small" sx={{
                                                    ml: 1,
                                                    bgcolor: PRIMARY_BLUE,
                                                    color: WHITE,
                                                    fontWeight: 700,
                                                    fontSize: '0.8rem'
                                                }}/>
                                            )}
                                        </Box>
                                        <Typography variant="caption" sx={{
                                            color: PRIMARY_BLUE,
                                            mt: 1,
                                            textAlign: 'center',
                                            minHeight: 36
                                        }}>{c.bio}</Typography>
                                    </CardContent>
                                </Card>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Date Picker */}
                    <Typography variant="subtitle1" sx={{
                        color: PRIMARY_BLUE,
                        fontWeight: 700,
                        mt: 3,
                        mb: 1,
                        fontSize: '1.2rem',
                        letterSpacing: 0.5
                    }}>
                        Choose Date
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        gap: 1.5,
                        overflowX: 'auto',
                        pb: 2,
                        px: {xs: 1, sm: 0},
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': {display: 'none'},
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
                                        px: 3,
                                        py: 1.2,
                                        borderRadius: "15px",
                                        bgcolor: isSelected ? ACCENT_ORANGE : WHITE,
                                        color: isSelected ? WHITE : PRIMARY_BLUE,
                                        borderColor: ACCENT_ORANGE,
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        boxShadow: isSelected ? 2 : 0,
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        '&:hover': {
                                            bgcolor: ACCENT_ORANGE,
                                            color: WHITE,
                                        },
                                    }}
                                    startIcon={isSelected ? <CalendarTodayIcon sx={{fontSize: 18}}/> : null}
                                >
                                    <Box>
                                        <Typography variant="body2"
                                                    fontWeight={700}>{formatDate(date, 'EEE')}</Typography>
                                        <Typography variant="caption">{formatDate(date, 'd MMM')}</Typography>
                                    </Box>
                                </Button>
                            );
                        })}
                    </Box>

                    {/* Time Slots */}
                    <Typography variant="subtitle1" sx={{
                        color: PRIMARY_BLUE,
                        fontWeight: 700,
                        mt: 3,
                        mb: 1,
                        fontSize: '1.2rem',
                        letterSpacing: 0.5
                    }}>
                        Choose Time Slot
                    </Typography>
                    <Grid container spacing={1.5} sx={{mb: 2}}>
                        {slots.length === 0 ? (
                            <Grid item xs={12}>
                                <Typography variant="body2" sx={{color: ACCENT_ORANGE, fontWeight: 600}}>No slots
                                    available for this day.</Typography>
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
                                                fontSize: '1rem',
                                                minWidth: 80,
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
                    <Box sx={{textAlign: 'center', mt: 4}}>
                        <Button
                            variant="contained"
                            disabled={!selectedSlot}
                            onClick={handleBook}
                            size="large"
                            sx={{
                                borderRadius: "15px",
                                px: 6,
                                py: 1.5,
                                fontWeight: 800,
                                bgcolor: ACCENT_ORANGE,
                                color: WHITE,
                                fontSize: '1.15rem',
                                boxShadow: 4,
                                letterSpacing: 0.5,
                                textTransform: 'none',
                                transition: 'all 0.18s',
                                '&:hover': {
                                    bgcolor: '#FE6A00',
                                    transform: 'scale(1.04)',
                                },
                            }}
                        >
                            Book Appointment
                        </Button>
                    </Box>
                </Paper>

                {/* Dialog Form */}
                <Dialog open={formOpen} onClose={() => setFormOpen(false)} fullWidth maxWidth="sm" PaperProps={{
                    sx: {
                        borderRadius: 4,
                        background: 'linear-gradient(135deg, #fff7f0 0%, #f8fafc 100%)'
                    }
                }}>
                    <DialogTitle sx={{
                        fontFamily: FONT_FAMILY,
                        color: PRIMARY_BLUE,
                        fontWeight: 800,
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        letterSpacing: 0.5,
                        pb: 0
                    }}>
                        Book Appointment
                    </DialogTitle>
                    <DialogContent>
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
                            <DialogActions sx={{px: 0, pt: 2}}>
                                <Button onClick={() => setFormOpen(false)} sx={{color: PRIMARY_BLUE, fontWeight: 700}}>
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    disabled={formik.isSubmitting }
                                    sx={{
                                        bgcolor: ACCENT_ORANGE,
                                        color: WHITE,
                                        fontWeight: 800,
                                        borderRadius: "10px",
                                        px: 4,
                                        py: 1.2,
                                        fontSize: '1.1rem',
                                        '&:hover': {bgcolor: '#FE6A00'},
                                    }}
                                >
                                    Book Appointment
                                </Button>
                            </DialogActions>
                        </Box>
                    </DialogContent>
                </Dialog>

                {/* Success Snackbar */}
                {/* Replacing Snackbar with Dialog */}
                <Dialog open={successOpen} onClose={handleCloseSuccess} maxWidth="xs" fullWidth PaperProps={{
                    sx: {
                        borderRadius: 4,
                        background: 'linear-gradient(135deg, #fff7f0 0%, #f8fafc 100%)'
                    }
                }}>
                    <DialogTitle sx={{
                        fontFamily: FONT_FAMILY,
                        color: PRIMARY_BLUE,
                        fontWeight: 800,
                        fontSize: '1.3rem',
                        textAlign: 'center',
                        letterSpacing: 0.5,
                        pb: 0
                    }}>
                        Appointment Booked Successfully!
                    </DialogTitle>
                    <DialogContent>
                        <Typography sx={{color: PRIMARY_BLUE, fontWeight: 600, textAlign: 'center', mt: 1, mb: 2}}>
                            Thank you for booking your appointment. We look forward to seeing you!
                        </Typography>
                    </DialogContent>
                    <DialogActions sx={{justifyContent: 'center', pb: 2}}>
                        <Button onClick={handleCloseSuccess} variant="contained" sx={{
                            bgcolor: ACCENT_ORANGE,
                            color: WHITE,
                            fontWeight: 700,
                            borderRadius: 2,
                            px: 4,
                            '&:hover': {bgcolor: '#FE6A00'}
                        }}>
                            ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </Container>
        </Box>
    );
};

export default BookAppointment;
