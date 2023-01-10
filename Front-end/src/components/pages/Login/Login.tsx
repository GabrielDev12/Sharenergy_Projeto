import * as React from 'react';
import { Avatar, Button, CssBaseline, TextField, FormControlLabel } from '@mui/material';
import { Checkbox, Box, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import myAPI from '../../../Apis/MyAPI';
import { Remember, signIn } from '../../../Apis/auth';
import { useState } from 'react';

const theme = createTheme();

export default function SignIn() {
  const [error, setError] = useState('');
  const [remember, setRemember] = useState<boolean>(false);
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    myAPI
      .post('/login', {
        user: data.get('name'),
        password: data.get('password'),
      })
      .then(response => {
        if (response.data.status) {
          signIn(response.data.token)
          if (remember) {
            Remember('Yes')
          }
          location.reload()
        } else {
          setError('informações erradas')
        };

      })
      .catch(window.alert)
  };

  return (
    <ThemeProvider theme={theme} >
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Entrar
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            {error}
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nome"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" checked={remember} onChange={e => setRemember(!remember)} color="primary" />}
              label="Lembrae-Me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}