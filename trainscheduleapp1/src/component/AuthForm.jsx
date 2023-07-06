import React, { useState } from 'react';
import axios from 'axios';
import './AuthForm.css'
import { TextField, Button, Typography, Container, Box } from '@mui/material';
function AuthForm({clientSecret, clientID}) {
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [rollNo, setRollNo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://104.211.219.98/train/auth', {
        companyName: companyName,
        clientID: clientID,
        ownerName: ownerName,
        ownerEmail: ownerEmail,
        rollNo: rollNo,
        clientSecret: clientSecret,
      });

      console.log(response.data);
      if(response.data)
      axios.defaults.headers.common["authorization"]=`${response.data.access_token}`
    } catch (error) {
      console.log(error);
     
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={4}>
        <Typography variant="h2" align="center" gutterBottom>
          Authorization Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Company Name"
            type="text"
            fullWidth
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Owner Name"
            type="text"
            fullWidth
            value={ownerName}
            onChange={(e) => setOwnerName(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Owner Email"
            type="email"
            fullWidth
            value={ownerEmail}
            onChange={(e) => setOwnerEmail(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Roll No"
            type="text"
            fullWidth
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Authorize
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default AuthForm;
