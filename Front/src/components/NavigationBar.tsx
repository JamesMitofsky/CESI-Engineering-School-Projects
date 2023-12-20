import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RestaurantIcon from "@mui/icons-material/Restaurant";

export default function NavigationBar() {
  return (
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
  );
}
