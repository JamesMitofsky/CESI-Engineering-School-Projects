import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function SpecificRestaurant() {
  const { id } = useParams();

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
          {id}
        </Container>
      </Box>
    </>
  );
}
