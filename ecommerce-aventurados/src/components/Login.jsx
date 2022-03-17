import * as React from "react";
import "../assets/login.css";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";
import { Grid } from "@mui/material";

const theme = createTheme();

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const { login, currentUser, googleLogin, facebookLogin } = useAuth(); // retorna el contexto
  const navigate = useNavigate();
  const [error, setError] = React.useState("");

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    console.log(user);
    axios
      .get(`http://localhost:3001/api/user/login/firebase/${user.email}`)
      .then(({ data }) => {
        console.log(data);
        if (!data.email) return <p>errOOOOOOOOR</p>;
        handleLoginFirebase();
      });
  };

  const handleLoginFirebase = async () => {
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      await facebookLogin();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  React.useEffect(() => {
    if (!currentUser) return;
    if (!currentUser.displayName) return;
    axios
      .post("http://localhost:3001/api/user/login", {
        name: currentUser.displayName.split(" ")[0],
        lastName: currentUser.displayName.split(" ")[1],
        email: currentUser.email,
        localId: currentUser.uid,
      })
      .then((user) => console.log(user))
      .cath((err) => console.log(err));
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
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Ingresar
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
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
            {error && <p>{error}</p>}
            <Button
              disabled={true}
              onClick={handleFacebookLogin}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Inicia con Face..
            </Button>
            <Button
              onClick={handleGoogleLogin}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: -1, mb: 2 }}
            >
              Inicia con Google...
            </Button>
            <hr />
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 3 }}
                >
                  Entra
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Link to="/register">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                  >
                    Registrate
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
