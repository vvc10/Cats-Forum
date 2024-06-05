// Contact.js
import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contact = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" paragraph>
          We'd love to hear from you! Whether you have questions, feedback, or just want to share your love for cats, feel free to reach out.
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            required
            id="name"
            label="Name"
            fullWidth
            margin="normal"
          />
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            fullWidth
            margin="normal"
          />
          <TextField
            id="message"
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
