import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.js";
import Fade from "@mui/material/Fade";
import axios from "axios";

const categories = ["Gourmet", "Aventura", "Viaje", "En Equipo", "Relax"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",

  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "45%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const navigate = useNavigate();

  const { logout, currentUser } = useAuth(); // retorna el contexto

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = async () => {
    await logout();
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:3001/api/products/search")
      .then((res) => console.log(res));
  };

  return (
    <AppBar
      sx={{
        marginBottom: "1vh",
        bgcolor: "#FFF",
      }}
      position="static"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                color: "black",
                mr: 2,
                display: { xs: "none", md: "flex" },
                textDecoration: "none",
              }}
            >
              AventuraDos
            </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              color: "black",
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            A2
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              sx={{ color: "black" }}
              id="fade-button"
              aria-controls={open ? "fade-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Categorias
            </Button>
            <Menu
              id="fade-menu"
              MenuListProps={{
                "aria-labelledby": "fade-button",
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              {categories.map((cat, i) => (
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/${cat}`}
                  key={i}
                >
                  <MenuItem onClick={handleClose}>{cat}</MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <form onSubmit={handleSubmit}>
            <Search
              sx={{
                bgcolor: "#DAFDBA",
                border: "1px solid black",
                borderRadius: "20px",
              }}
            >
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "black" }} />
              </SearchIconWrapper>
              <StyledInputBase
                sx={{ color: "black" }}
                placeholder="Buscar:  "
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </form>

          {currentUser?.email ? (
            <Box sx={{ flexGrow: 0 }}>
              <Link to="/shopping">
                <Tooltip title="Open cart">
                  <IconButton
                    sx={{ color: "black" }}
                    aria-label="add to shopping cart"
                  >
                    <ShoppingCartSharpIcon />
                  </IconButton>
                </Tooltip>
              </Link>
              <Link to="/fav">
                <Tooltip title="Open favourites">
                  <IconButton sx={{ color: "black" }} aria-label="add to fav">
                    <FavoriteBorderIcon />
                  </IconButton>
                </Tooltip>
              </Link>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                s
              >
                <MenuItem onClick={handleLogOut}>
                  <Typography textAlign="center">Salir</Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button
                sx={{ color: "black" }}
                variant="text"
                endIcon={<LoginIcon sx={{ color: "black" }} />}
              >
                Ingresar
              </Button>
            </Link>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
