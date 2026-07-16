import { Box, Typography, TextField, Button, Link, Paper, Grid } from '@mui/material';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#e6f0eb', // Light greenish-gray background
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          display: 'flex',
          width: '100%',
          maxWidth: '1000px',
          height: { xs: 'auto', md: '650px' },
          borderRadius: 4,
          overflow: 'hidden',
        }}
      >
        <Grid container>
          {/* Left Side - Illustration & Text */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              bgcolor: '#e8f5e9', // Light green background
              p: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {/* Note: Replace the src with your actual illustration path */}
            <Box
              component="img"
              src="/path-to-your-illustration.png" 
              alt="Exam Mastery Illustration"
              sx={{ width: '80%', maxWidth: 300, mb: 4 }}
            />
            
            <Typography variant="h4" fontWeight="bold" color="text.primary" gutterBottom>
              Exam Mastery Hub
            </Typography>
            
            <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 300, mx: 'auto' }}>
              Unleash Your Academic Success with Exam Mastery Hub's Exam Excellence Platform
            </Typography>
            
            {/* Pagination Dots Simulator */}
            <Box sx={{ display: 'flex', gap: 1, mt: 4, justifyContent: 'center' }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(0,0,0,0.1)' }} />
              <Box sx={{ width: 24, height: 8, borderRadius: 4, bgcolor: '#81c784' }} />
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(0,0,0,0.1)' }} />
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(0,0,0,0.1)' }} />
            </Box>
          </Grid>

          {/* Right Side - Login Form */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              p: { xs: 4, md: 8 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              bgcolor: '#ffffff',
            }}
          >
            {/* Logo */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography variant="h5" fontWeight="bold" color="text.primary" sx={{ letterSpacing: 1 }}>
                MASTERY HUB
              </Typography>
            </Box>

            {/* Form Fields */}
            <Box component="form" noValidate sx={{ width: '100%' }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Username or email
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="johnsmith007"
                sx={{ mb: 3 }}
              />

              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                Password
              </Typography>
              <TextField
                fullWidth
                type="password"
                variant="outlined"
                placeholder="***********"
                sx={{ mb: 1 }}
              />

              {/* Forgot Password Link */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                <Link href="#" variant="body2" underline="hover" color="success.main">
                  Forgot password?
                </Link>
              </Box>

              {/* Sign In Button */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{
                  bgcolor: '#273240', // Dark navy/gray color from your image
                  color: 'white',
                  py: 1.5,
                  textTransform: 'none',
                  fontSize: '1rem',
                  borderRadius: 2,
                  '&:hover': {
                    bgcolor: '#1a222c',
                  },
                }}
              >
                Sign in
              </Button>

              {/* Create Account Link */}
              <Box sx={{ textAlign: 'center', mt: 4 }}>
                <Typography variant="body2" color="text.secondary">
                  Are you new?{' '}
                  <Link href="#" underline="hover" color="success.main" fontWeight="medium">
                    Create an Account
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}