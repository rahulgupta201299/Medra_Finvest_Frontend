import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useSelector, useDispatch } from 'react-redux';
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import MFLogo from "../../assets/medra_logo.png";
import { ROUTES } from "../../Route/Routes.constants";
import { addUserDetails } from "../redux/LandingReducer/ProfileReducer";

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [openProductNavMenu, setOpenProductNavMenu] = useState(false);
  const dispatch = useDispatch();
  const loggedIn = useSelector((state) => state.profile.login.loggedIn); 
  const firstName = useSelector((state) => state.profile.login.firstName); 

  const pages = ["About Us", "Products", "Contact Us"];
  const productsList = ["InterCorporate Deposit", "Bonds", "Insurance", "Mutual Funds", "Unlisted Stocks"];
  const smPages = [
    "About Us",
    "InterCorporate Deposit",
    "Bonds",
    "Insurance",
    "Mutual Funds",
    "Unlisted Stocks",
    "Contact Us",
  ];
  const profile = loggedIn ? ["Profile", "Logout"] : [];

  const handleJoinLink = (val) => {
    if (val.toLowerCase() === "logout") {
      dispatch(addUserDetails({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        loggedIn: false,
      }));
      return 'login';
    }
    return val.split(" ").join("-").toLowerCase();
  };

  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    if (!loggedIn) navigate('/login');
    else setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ backgroundColor: "#FFF" }} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
              mr: 1,
            }}
            onClick={() => navigate("/")}
          >
            <img src={MFLogo} width="64px" height="32px" alt="Medra Finvest" />
          </Box>
          <Typography
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins,sans-serif;",
              fontWeight: 400,
              letterSpacing: "1px",
              textDecoration: "none",
              cursor: "pointer",
              ml: 1,
            }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h5" color="#00008B">
                <b>MedraFinvest</b>
              </Typography>
              <Typography
                fontSize="12px"
                color="#00008B"
                sx={{ color: "#FA6800" }}
              >
                <b>Vishwass Apka, Sath Hamara</b>
              </Typography>
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#000"
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
            >
              {smPages.map((page) => (
                <MenuItem key={page}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      navigate(`/${handleJoinLink(page)}`);
                      handleCloseNavMenu();
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              cursor: "pointer",
              mr: 1,
            }}
            onClick={() => navigate("/")}
          >
            <img src={MFLogo} width="64px" height="32px" alt="Medra Finvest" />
          </Box>
          <Typography
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins, sans-serif;",
              fontWeight: 400,
              letterSpacing: "1px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <Box style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" color="#00008B">
                <b>MedraFinvest</b>
              </Typography>
              <Typography
                fontSize="12px"
                color="#00008B"
                sx={{ color: "#FA6800" }}
              >
                <b>Vishwass Apka, Sath Hamara</b>
              </Typography>
            </Box>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  if (page.toLowerCase() === "products")
                    setOpenProductNavMenu(true);
                  else navigate(`/${handleJoinLink(page)}`);
                }}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  color: "#222222",
                }}
              >
                {page}
              </Button>
            ))}
            <Menu
              id="menu-appbar"
              anchorEl={openProductNavMenu}
              anchorOrigin={{
                vertical: 0,
                horizontal: 380,
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={openProductNavMenu}
              onClose={() => setOpenProductNavMenu(false)}
              sx={{
                display: { xs: "none", md: "block" },
              }}
            >
              {productsList.map((product) => (
                <MenuItem key={product}>
                  <Typography
                    textAlign="center"
                    onClick={() => {
                      navigate(`/${handleJoinLink(product)}`);
                      setOpenProductNavMenu(false);
                    }}
                  >
                    {product}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={loggedIn ? "Go to Profile" : "Login / Signup"}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp">{loggedIn ? firstName[0] : null}</Avatar>
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
            >
              {profile.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    textAlign="center"
                    onClick={() => navigate(`/${handleJoinLink(setting)}`)}
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
