import { Typography, Box } from "@mui/material";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificRestaurant from "./pages/SpecificRestaurant";
import AddRestaurant from "./pages/AddRestaurant";
import SearchForRestaurant from "./pages/SearchForRestauarant";
import LandingPage from "./pages/LandingPage";
import UserLogin from "./pages/UserLogin";
import UserRegistration from "./pages/UserRegistration";
import PageDoesNotExist from "./pages/PageDoesNotExist";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/ajouter" element={<AddRestaurant />} />
            <Route path="/chercher" element={<SearchForRestaurant />} />
            <Route path="/connecter" element={<UserLogin />} />
            <Route path="/inscrire" element={<UserRegistration />} />
            <Route path="restaurant">
              <Route path=":id" element={<SpecificRestaurant />} />
            </Route>
            <Route path="*" element={<PageDoesNotExist />} />
          </Routes>
        </Box>
        {/* Footer */}
        <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
          <Typography variant="h6" align="center" gutterBottom>
            Bistro Boulevard
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
