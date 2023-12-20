import {
  Typography,
  AppBar,
  Toolbar,
  Box,
  Container,
  Stack,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import "./App.css";
import RestaurantIcon from "@mui/icons-material/Restaurant";

function App() {
  const restaurants = [
    { name: "Restaurant 1", foodType: "Italian", address: "123 Main St" },
    { name: "Restaurant 2", foodType: "Chinese", address: "456 Oak St" },
    // Add more restaurants as needed
  ];

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <RestaurantIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Guide des Restaurants
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
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
              différentes cuisines, lisez les critiques et trouvez l'endroit
              idéal pour toute occasion.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Trouver un Restaurant</Button>
              <Button variant="outlined">Ajouter Votre Restaurant</Button>
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
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
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
    </>
  );
}

export default App;
