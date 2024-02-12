import { Box, Button, Container, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function PageDoesNotExist() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
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
          Nous nous excusons.
        </Typography>
        <Typography
          component="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Nous n'avons pas pu trouver cette page.
        </Typography>
      </Container>
      <Button variant="contained" color="primary" component={RouterLink} to="/">
        Retour à l'accueil
      </Button>
    </Box>
  );
}
