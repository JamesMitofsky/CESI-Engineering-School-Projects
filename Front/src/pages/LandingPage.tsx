import { Box, Container, Typography, Stack, Button, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RestaurantPreviewtile from "../components/RestaurantPreviewTile";
import { Restaurant } from "../../../sharedTypes";

export default function LandingPage() {
  const restaurants: Restaurant[] = [
    {
      name: "Restaurant 1",
      type: "Italian",
      postalCode: 12345,
      city: "New York",
      street: "123 Main St",
      id: 1,
    },
    {
      name: "Restaurant 2",
      type: "Chinese",
      postalCode: 67890,
      city: "San Francisco",
      street: "456 Oak St",
      id: 2,
    },
  ];
  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Guide des Restaurants
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Découvrez les meilleurs restaurants de la ville. Explorez
            différentes cuisines, lisez les critiques et trouvez l'endroit idéal
            pour toute occasion.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <RouterLink to="/chercher">
              <Button variant="contained">Trouver un Restaurant</Button>
            </RouterLink>
            <RouterLink to="/ajouter">
              <Button variant="outlined">Ajouter Votre Restaurant</Button>
            </RouterLink>
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {restaurants.map((restaurant) => (
            <RestaurantPreviewtile restaurant={restaurant} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
