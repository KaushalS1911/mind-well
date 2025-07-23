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
  Container
} from '@mui/material';
import { format, addDays } from 'date-fns';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
    bio: 'Expert in adolescent and adult therapy. 10+ years experience.'
  },
  {
    id: 2,
    name: 'Mr. Rajat Kumar',
    specialty: 'Counselor',
    rating: 4.7,
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    bio: 'Specializes in stress and relationship counseling.'
  },
  {
    id: 3,
    name: 'Ms. Aishwarya Saxena',
    specialty: 'Child Psychologist',
    rating: 4.8,
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
    bio: 'Focus on child and family therapy.'
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
    const date = addDays(new Date('2023-11-09'), i); // static start date for demo
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
  const [confirmOpen, setConfirmOpen] = useState(false); // <-- new state

  const counselor = counselors[selectedCounselorIdx];
  const slots = staticSlots[counselor.id]?.[selectedDate] || [];

  // Form validation
  const isEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const formValid = form.name.trim() && isEmail(form.email);

  // --- Handlers ---
  const handleBook = () => setFormOpen(true);
  const handleFormChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleFormBlur = (e) => setFormTouched({ ...formTouched, [e.target.name]: true });
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formValid) return;
    setConfirmOpen(true); // <-- open confirmation dialog
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
    <Box sx={{ fontFamily: FONT_FAMILY, mt: 15 }}>
      <Container maxWidth="xl">
        <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, borderRadius: 4, fontFamily: FONT_FAMILY }}>
          {/* Counselor Slider */}
          <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 600, mb: 1, fontFamily: FONT_FAMILY }}>
            Choose Counselor
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
                  onClick={() => { setSelectedCounselorIdx(idx); setSelectedSlot(''); }}
                  sx={{
                    minWidth: 220,
                    borderRadius: 3,
                    border: idx === selectedCounselorIdx ? `2.5px solid ${ACCENT_ORANGE}` : `2px solid #e0e0e0`,
                    boxShadow: idx === selectedCounselorIdx ? 4 : 1,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    bgcolor: idx === selectedCounselorIdx ? '#fff7f0' : WHITE,
                    flex: '0 0 auto',
                  }}
                >
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                    <Avatar src={c.image} alt={c.name} sx={{ width: 64, height: 64, mb: 1, border: `2px solid ${PRIMARY_BLUE}` }} />
                    <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 700, fontFamily: FONT_FAMILY }}>{c.name}</Typography>
                    <Typography variant="body2" sx={{ color: ACCENT_ORANGE, fontWeight: 500, fontFamily: FONT_FAMILY }}>{c.specialty}</Typography>
                    <Chip label={`⭐ ${c.rating}`} size="small" sx={{ bgcolor: ACCENT_ORANGE, color: WHITE, fontWeight: 600, fontFamily: FONT_FAMILY, mt: 1 }} />
                    <Typography variant="caption" sx={{ color: PRIMARY_BLUE, fontFamily: FONT_FAMILY, mt: 1, textAlign: 'center' }}>{c.bio}</Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Date Picker (Horizontal Strip) */}
          <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 600, mt: 2, mb: 1, fontFamily: FONT_FAMILY }}>
            Choose Date
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 2 }}>
            {days.map((date, idx) => {
              const dateStr = format(date, 'yyyy-MM-dd');
              return (
                <Button
                  key={dateStr}
                  variant={selectedDate === dateStr ? 'contained' : 'outlined'}
                  onClick={() => { setSelectedDate(dateStr); setSelectedSlot(''); }}
                  sx={{
                    minWidth: 0,
                    px: 2,
                    borderRadius: 2,
                    bgcolor: selectedDate === dateStr ? ACCENT_ORANGE : WHITE,
                    color: selectedDate === dateStr ? WHITE : PRIMARY_BLUE,
                    borderColor: ACCENT_ORANGE,
                    fontWeight: 600,
                    fontFamily: FONT_FAMILY,
                    boxShadow: selectedDate === dateStr ? 2 : 0,
                    '&:hover': {
                      bgcolor: ACCENT_ORANGE,
                      color: WHITE,
                    },
                  }}
                >
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 600, fontFamily: FONT_FAMILY }}>{format(date, 'EEE')}</Typography>
                    <Typography variant="caption" sx={{ fontFamily: FONT_FAMILY }}>{format(date, 'd MMM')}</Typography>
                  </Box>
                </Button>
              );
            })}
          </Box>

          {/* Time Slots */}
          <Typography variant="subtitle1" sx={{ color: PRIMARY_BLUE, fontWeight: 600, mt: 2, mb: 1, fontFamily: FONT_FAMILY }}>
            Choose Time Slot
          </Typography>
          <Grid container spacing={1} sx={{ mb: 2 }}>
            {slots.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="body2" sx={{ color: ACCENT_ORANGE, fontFamily: FONT_FAMILY }}>No slots available for this day.</Typography>
              </Grid>
            ) : (
              slots.map((slot) => (
                <Grid item key={slot}>
                  <Button
                    variant={selectedSlot === slot ? 'contained' : 'outlined'}
                    onClick={() => setSelectedSlot(slot)}
                    sx={{
                      borderRadius: 2,
                      bgcolor: selectedSlot === slot ? ACCENT_ORANGE : WHITE,
                      color: selectedSlot === slot ? WHITE : PRIMARY_BLUE,
                      borderColor: ACCENT_ORANGE,
                      fontWeight: 600,
                      fontFamily: FONT_FAMILY,
                      boxShadow: selectedSlot === slot ? 2 : 0,
                      minWidth: 80,
                      '&:hover': {
                        bgcolor: ACCENT_ORANGE,
                        color: WHITE,
                      },
                    }}
                  >
                    {slot}
                  </Button>
                </Grid>
              ))
            )}
          </Grid>

          {/* Book Button */}
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <Button
              variant="contained"
              disabled={!selectedSlot}
              onClick={handleBook}
              size="large"
              sx={{
                borderRadius: 3,
                px: 5,
                fontWeight: 700,
                fontFamily: FONT_FAMILY,
                bgcolor: ACCENT_ORANGE,
                color: WHITE,
                fontSize: '1.1rem',
                boxShadow: 3,
                '&:hover': {
                  bgcolor: '#FE6A00',
                },
              }}
            >
              Book Appointment
            </Button>
          </Box>
        </Paper>

        {/* Dialog Form */}
        <Dialog open={formOpen} onClose={() => setFormOpen(false)}>
          <DialogTitle sx={{ fontFamily: FONT_FAMILY, color: PRIMARY_BLUE, fontWeight: 700 }}>Book Appointment</DialogTitle>
          <DialogContent>
            <Box component="form" onSubmit={handleFormSubmit} sx={{ mt: 1, minWidth: 320 }}>
              <TextField
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleFormChange}
                onBlur={handleFormBlur}
                required
                fullWidth
                margin="normal"
                sx={{ fontFamily: FONT_FAMILY }}
                error={formTouched.name && !form.name.trim()}
                helperText={formTouched.name && !form.name.trim() ? 'Full Name is required' : ''}
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
                sx={{ fontFamily: FONT_FAMILY }}
                error={formTouched.email && !isEmail(form.email)}
                helperText={formTouched.email && !isEmail(form.email) ? 'Enter a valid email' : ''}
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
                sx={{ fontFamily: FONT_FAMILY }}
              />
              <DialogActions sx={{ px: 0, pb: 0, pt: 2 }}>
                <Button onClick={() => setFormOpen(false)} sx={{ fontFamily: FONT_FAMILY, color: PRIMARY_BLUE }}>Cancel</Button>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={!formValid}
                  sx={{ bgcolor: ACCENT_ORANGE, color: WHITE, fontFamily: FONT_FAMILY, fontWeight: 700, '&:hover': { bgcolor: '#FE6A00' } }}
                >
                  Book Appointment
                </Button>
              </DialogActions>
            </Box>
          </DialogContent>
        </Dialog>

        {/* Confirmation Dialog */}
        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle sx={{ fontFamily: FONT_FAMILY, color: PRIMARY_BLUE, fontWeight: 700 }}>Confirm Appointment</DialogTitle>
          <DialogContent>
            <Typography sx={{ fontFamily: FONT_FAMILY, color: PRIMARY_BLUE }}>
              Are you sure you want to book this appointment?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)} sx={{ fontFamily: FONT_FAMILY, color: PRIMARY_BLUE }}>Cancel</Button>
            <Button onClick={handleConfirm} variant="contained" sx={{ bgcolor: ACCENT_ORANGE, color: WHITE, fontFamily: FONT_FAMILY, fontWeight: 700, '&:hover': { bgcolor: '#FE6A00' } }}>Confirm</Button>
          </DialogActions>
        </Dialog>

        {/* Success Snackbar */}
        <Snackbar
          open={successOpen}
          autoHideDuration={3000}
          onClose={handleCloseSuccess}
          message="Appointment booked successfully!"
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          ContentProps={{
            sx: {
              bgcolor: ACCENT_ORANGE,
              color: WHITE,
              fontFamily: FONT_FAMILY,
              fontWeight: 600,
              fontSize: '1.1rem',
              borderRadius: 2,
            }
          }}
        />
      </Container>
    </Box>
  );
};

export default BookAppointment; 