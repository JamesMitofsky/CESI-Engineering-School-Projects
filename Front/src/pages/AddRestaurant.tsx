import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";

export default function AddRestaurant() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      name: data.get("name"),
      image: data.get("image"),
      genre: data.get("genre"),
      address: {
        postalCode: data.get("postalCode"),
        city: data.get("city"),
        street: data.get("street"),
      },
    });
  };

  return (
    <Container maxWidth="xs">
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
          <RestaurantIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ajouter un restaurant
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Nom du restaurant"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="image"
            label="URL de l'image"
            type="url"
            id="image"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="genre"
            label="Genre"
            type="text"
            id="genre"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="postalCode"
            label="Code postal"
            type="number"
            id="postalCode"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="city"
            label="Ville"
            type="text"
            id="city"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="street"
            label="Rue"
            type="text"
            id="street"
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit">Ajouter</Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
