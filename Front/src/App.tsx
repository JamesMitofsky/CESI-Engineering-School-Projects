import { Typography, AppBar, Toolbar, Box } from "@mui/material";
import "./App.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
  BrowserRouter,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import SpecificRestaurant from "./pages/SpecificRestaurant";
import AddRestaurant from "./pages/AddRestaurant";
import SearchForRestaurant from "./pages/SearchForRestauarant";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar position="relative">
          <Toolbar>
            <RouterLink
              to="/"
              style={{
                color: "inherit",
                textDecoration: "none",
                display: "flex",
              }}
            >
              <RestaurantIcon sx={{ mr: 2 }} />
              <Typography variant="h6" color="inherit" noWrap>
                Guide des Restaurants
              </Typography>
            </RouterLink>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ajouter" element={<AddRestaurant />} />
            <Route path="/chercher" element={<SearchForRestaurant />} />
            <Route path="restaurant">
              <Route path=":id" element={<SpecificRestaurant />} />
            </Route>
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </Box>
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Guide des Restaurants
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            Explorez, découvrez et savourez ce qu'il y a de mieux en ville !{" "}
          </Typography>
        </Box>
        {/* End footer */}
      </BrowserRouter>
    </>
  );
}

export default App;
