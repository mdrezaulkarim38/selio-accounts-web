import { Button, Container, Typography } from "@mui/material";

function App() {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3" gutterBottom>
        Material UI is working!
      </Typography>

      <Button variant="contained" color="primary">
        Click Me
      </Button>
    </Container>
  );
}

export default App;
