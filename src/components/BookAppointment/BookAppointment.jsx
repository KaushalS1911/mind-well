import React, { useState } from 'react';
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
import { format, addDays } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import StarIcon from '@mui/icons-material/Star';

const PRIMARY_BLUE = '#012765';
const ACCENT_ORANGE = '#FF6600';
const WHITE = '#fff';
const FONT_FAMILY = 'Poppins, sans-serif';

const counselors = [
  {
    id: 1,
    name: 'Dr. Anjali Sinha',
    specialty: 'Clinical Psychologist',
    rating: 4.9,
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    bio: 'Expert in adolescent and adult therapy. 10+ years experience.',
  },
  {
    id: 2,
    name: 'Mr. Rajat Kumar',
    specialty: 'Counselor',
    rating: 4.7,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Specializes in stress and relationship counseling.',
  },
  {
    id: 3,
    name: 'Ms. Aishwarya Saxena',
    specialty: 'Child Psychologist',
    rating: 4.8,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Focus on child and family therapy.',
  },
];

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
  const [selectedDate, setSelectedDate] = useState(format(days[0], 'yyyy-MM-dd'));
  const [selectedSlot, setSelectedSlot] = useState('');
  const [formOpen, setFormOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', description: '' });
  const [formTouched, setFormTouched] = useState({ name: false, email: false });
  const [confirmOpen, setConfirmOpen] = useState(false);

  const counselor = counselors[selectedCounselorIdx];
  const slots = staticSlots[counselor.id]?.[selectedDate] || [];

  const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const formValid = form.name.trim() && isEmail(form.email);

  const handleBook = () => setFormOpen(true);
  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFormBlur = (e) => setFormTouched({ ...formTouched, [e.target.name]: true });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;
    setConfirmOpen(true);
  };
  const handleConfirm = () => {
    setFormOpen(false);
    setConfirmOpen(false);
    setSuccessOpen(true);
    setSelectedSlot('');
    setForm({ name: '', email: '', description: '' });
    setFormTouched({ name: false, email: false });
  };
  const handleCloseSuccess = () => setSuccessOpen(false);

  return (
    <Box sx={{
      fontFamily: FONT_FAMILY,
      mt: { xs: 8, md: 18 },
    }}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 5 }, borderRadius: 5, background: 'rgba(255,255,255,0.95)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)' }}>
          {/* Counselor Slider */}
          <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 700, mb: 2, fontSize: '1.2rem', letterSpacing: 0.5 }}>
            Choose Your Counselor
          </Typography>
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
            }}
            style={{ paddingBottom: 32 }}
          >
            {counselors.map((c, idx) => (
              <SwiperSlide key={c.id}>
                <Card
                  onClick={() => {
                    setSelectedCounselorIdx(idx);
                    setSelectedSlot('');
                  }}
                  sx={{
                    minWidth: 240,
                    borderRadius: 4,
                    border: idx === selectedCounselorIdx ? `2.5px solid ${ACCENT_ORANGE}` : `2px solid #e0e0e0`,
                    boxShadow: idx === selectedCounselorIdx ? '0 6px 24px 0 rgba(255,102,0,0.15)' : '0 2px 8px 0 rgba(1,39,101,0.07)',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    bgcolor: idx === selectedCounselorIdx ? '#fff7f0' : WHITE,
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
                      p: { xs: 2, sm: 3 },
                    }}
                  >
                    <Avatar src={c.image} alt={c.name} sx={{ width: 72, height: 72, mb: 1, border: `2.5px solid ${PRIMARY_BLUE}` }} />
                    <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 700, fontSize: '1.1rem' }}>{c.name}</Typography>
                    <Typography variant="body2" sx={{ color: ACCENT_ORANGE, fontWeight: 500 }}>{c.specialty}</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                      <StarIcon sx={{ color: ACCENT_ORANGE, fontSize: 18, mr: 0.5 }} />
                      <Typography variant="body2" sx={{ color: ACCENT_ORANGE, fontWeight: 600 }}>{c.rating}</Typography>
                      {c.rating > 4.8 && (
                        <Chip label="Top Rated" size="small" sx={{ ml: 1, bgcolor: PRIMARY_BLUE, color: WHITE, fontWeight: 700, fontSize: '0.8rem' }} />
                      )}
                    </Box>
                    <Typography variant="caption" sx={{ color: PRIMARY_BLUE, mt: 1, textAlign: 'center', minHeight: 36 }}>{c.bio}</Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Date Picker */}
          <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 700, mt: 3, mb: 1, fontSize: '1.2rem', letterSpacing: 0.5 }}>
            Choose Date
          </Typography>
          <Box sx={{
            display: 'flex',
            gap: 1.5,
            overflowX: 'auto',
            pb: 2,
            px: { xs: 1, sm: 0 },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          }}>
            {days.map((date) => {
              const dateStr = format(date, 'yyyy-MM-dd');
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
                  startIcon={isSelected ? <CalendarTodayIcon sx={{ fontSize: 18 }} /> : null}
                >
                  <Box>
                    <Typography variant="body2" fontWeight={700}>{format(date, 'EEE')}</Typography>
                    <Typography variant="caption">{format(date, 'd MMM')}</Typography>
                  </Box>
                </Button>
              );
            })}
          </Box>

          {/* Time Slots */}
          <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 700, mt: 3, mb: 1, fontSize: '1.2rem', letterSpacing: 0.5 }}>
            Choose Time Slot
          </Typography>
          <Grid container spacing={1.5} sx={{ mb: 2 }}>
            {slots.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ color: ACCENT_ORANGE, fontWeight: 600 }}>No slots available for this day.</Typography>
              </Grid>
            ) : (
              slots.map((slot) => (
                <Grid item key={slot} xs="auto">
                  <Chip
                    label={slot}
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
              ))
            )}
          </Grid>

          {/* Book Button */}
          <Box sx={{ textAlign: 'center', mt: 4 }}>
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
        <Dialog open={formOpen} onClose={() => setFormOpen(false)} fullWidth maxWidth="sm" PaperProps={{ sx: { borderRadius: 4, background: 'linear-gradient(135deg, #fff7f0 0%, #f8fafc 100%)' } }}>
          <DialogTitle sx={{ fontFamily: FONT_FAMILY, color: PRIMARY_BLUE, fontWeight: 800, fontSize: '1.5rem', textAlign: 'center', letterSpacing: 0.5, pb: 0 }}>
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
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                onBlur={handleFormBlur}
                required
                fullWidth
                margin="normal"
                error={formTouched.name && !form.name.trim()}
                helperText={formTouched.name && !form.name.trim() ? 'Full Name is required' : ''}
                InputProps={{ startAdornment: <PersonIcon sx={{ color: PRIMARY_BLUE, mr: 1 }} /> }}
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleFormChange}
                onBlur={handleFormBlur}
                required
                fullWidth
                margin="normal"
                error={formTouched.email && !isEmail(form.email)}
                helperText={formTouched.email && !isEmail(form.email) ? 'Enter a valid email' : ''}
                InputProps={{ startAdornment: <EmailIcon sx={{ color: PRIMARY_BLUE, mr: 1 }} /> }}
              />
              <TextField
                label="Description"
                name="description"
                value={form.description}
                onChange={handleFormChange}
                fullWidth
                margin="normal"
                multiline
                minRows={2}
                InputProps={{ startAdornment: <DescriptionIcon sx={{ color: PRIMARY_BLUE, mr: 1, alignSelf: 'flex-start', mt: 1 }} /> }}
              />
              <DialogActions sx={{ px: 0, pt: 2 }}>
                <Button onClick={() => setFormOpen(false)} sx={{ color: PRIMARY_BLUE, fontWeight: 700 }}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!formValid}
                  onClick={handleConfirm}
                  sx={{
                    bgcolor: ACCENT_ORANGE,
                    color: WHITE,
                    fontWeight: 800,
                    borderRadius: "10px",
                    px: 4,
                    py: 1.2,
                    fontSize: '1.1rem',
                    '&:hover': { bgcolor: '#FE6A00' },
                  }}
                >
                  Book Appointment
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>

        {/* Success Snackbar */}
        <Snackbar
          open={successOpen}
          autoHideDuration={2000}
          onClose={handleCloseSuccess}
          message="Appointment booked successfully!"
          anchorOrigin={{ vertical: 'end', horizontal: 'right' }}
          ContentProps={{
            sx: {
              bgcolor: ACCENT_ORANGE,
              color: WHITE,
              fontWeight: 700,
              fontSize: '1.15rem',
              borderRadius: 2,
              boxShadow: 3,
            },
          }}
        />
      </Container>
    </Box>
  );
};

export default BookAppointment;
