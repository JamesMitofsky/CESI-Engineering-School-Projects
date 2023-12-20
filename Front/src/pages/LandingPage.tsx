import { Box, Container, Typography, Stack, Button } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import RestaurantsList from "../components/groups/RestaurantsList";

export default function LandingPage() {
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
        <RestaurantsList />
      </Container>
    </>
  );
}
