import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Restaurant } from "../../../sharedTypes";
import { Link as RouterLink } from "react-router-dom";

export default function RestaurantPreviewtile({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  const { name, type, street, id } = restaurant;

  return (
    <Grid item key={name} xs={12} sm={6} md={4}>
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
            {name}
          </Typography>
          <Typography>{type}</Typography>
          <Typography>
            {street}
            {street}
          </Typography>
        </CardContent>
        <CardActions>
          <Button component={RouterLink} to={`restaurant/${id}`} size="small">
            View
          </Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
