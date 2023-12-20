import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function LandingPage() {
  const restaurants = [
    {
      name: "Restaurant 1",
      foodType: "Italian",
      address: "123 Main St",
      id: 1,
    },
    { name: "Restaurant 2", foodType: "Chinese", address: "456 Oak St", id: 2 },
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
            <Grid item key={restaurant.name} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="div"
                  sx={{
                    // 16:9
                    pt: "56.25%",
                  }}
                  image="https://source.unsplash.com/random?restaurant"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {restaurant.name}
                  </Typography>
                  <Typography>{restaurant.foodType}</Typography>
                  <Typography>{restaurant.address}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={RouterLink}
                    to={`restaurant/${restaurant.id}`}
                    size="small"
                  >
                    View
                  </Button>
                  <Button size="small">Edit</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
