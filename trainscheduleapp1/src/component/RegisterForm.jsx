import React, { useState } from 'react';
import axios from 'axios';
import AuthForm from './AuthForm';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { styled } from '@mui/material/styles';
import { TextField, Button } from '@mui/material';
const StyledSnackbar = styled(Snackbar)(({ theme }) => ({
  '& .MuiSnackbarContent-root': {
    backgroundColor: theme.palette.error.main,
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function RegisterForm() {
  const [companyName, setCompanyName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [ownerEmail, setOwnerEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [ClientID, setClientID] = useState('')
  const [ClientSecret, setClientSecret] = useState('')
  const [open, setopen] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://104.211.219.98/train/register', {
        companyName: companyName,
        ownerName: ownerName,
        rollNo: rollNo,
        ownerEmail: ownerEmail,
        accessCode: accessCode,
      });
      if(response.data){
        setClientID(response.data.clientID);
        setClientSecret(response.data.clientSecret);
      }
      else{
        setopen(true)
      }
      
    } catch (error) {
      console.log(error);
     setopen(true)
    }
  };

  return (
    <div>
      <h2>Company Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Company Name"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <br />
        <TextField
          label="Owner Name"
          type="text"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
        />
        <br />
        <TextField
          label="Roll No"
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
        <br />
        <TextField
          label="Owner Email"
          type="email"
          value={ownerEmail}
          onChange={(e) => setOwnerEmail(e.target.value)}
        />
        <br />
        <TextField
          label="Access Code"
          type="text"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
        />
        <br />
        <Button type="submit" variant="contained">Register</Button>
      </form>
      {/* {ClientID && ClientSecret &&(  */}
        <AuthForm clientID={ClientID} clientSecret={ClientSecret} />
      {/* )} */}
      <StyledSnackbar open={open} autoHideDuration={6000} onClose={()=>setopen(false)}>
          <div>
          <Alert onClose={()=>setopen(false)} severity={"error"} elevation={6} variant="filled">
            Can't register your Company
          </Alert>
          </div>
      </StyledSnackbar>
    </div>
  );
}

export default RegisterForm;
