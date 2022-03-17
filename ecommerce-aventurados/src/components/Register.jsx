import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import { useAuth } from "../contexts/AuthContext.js";
import { useNavigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Aventura2
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const Register = () => {
  const [user, setUser] = React.useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { signup, currentUser } = useAuth(); // retorna el contexto
  const navigate = useNavigate();
  const [error, setError] = React.useState("");

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    if (user.password !== user.passwordConfirm) {
      setError("Las contraseñas no coinciden!");
      return;
    }

    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (err) {
      if (error.code === "auth/internal-error") {
        setError("Correo invalido!");
      }
      setError(err.message);
    }
  };

  React.useEffect(() => {
    if (!currentUser) return;
    axios
      .post("http://localhost:3001/api/user/register", {
        user: user,
        localId: currentUser.uid,
      })
      .then((user) => {
        console.log(user.data);
      })
      .catch((err) => console.log(err));
  }, [currentUser]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Registrate para explorar nuestras experiencias
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <Grid container spacing={1}>
              <Grid item xs={6}>
                {/* Name */}
                <TextField
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Nombre"
                  name="name"
                  autoComplete="name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                {/* Last name */}
                <TextField
                  onChange={handleChange}
                  margin="normal"
                  required
                  fullWidth
                  id="lastName"
                  label="Apellido"
                  name="lastName"
                  autoComplete="lastName"
                  autoFocus
                />
              </Grid>
            </Grid>

            {/* Email */}
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            {/* primer password */}
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {/* confirmar password */}
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="passwordConfirm"
              label="Confirmar contraseña"
              type="password"
              id="confirm-password"
              autoComplete="current-password"
            />

            {/* COMPONENTE DE ERROR */}
            {error && <p>{error}</p>}
            {/* COMPONENTE DE ERROR */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrate
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;
