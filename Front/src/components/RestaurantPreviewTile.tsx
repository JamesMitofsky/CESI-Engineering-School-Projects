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
  console.log(restaurant);

  return (
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
          {restaurant.name && (
            <Typography gutterBottom variant="h5" component="h2">
              {restaurant.name}
            </Typography>
          )}
          {restaurant.genre && <Typography>{restaurant.genre}</Typography>}
          {restaurant.address &&
            restaurant.address.street &&
            restaurant.address.city &&
            restaurant.address.postalCode && (
              <Typography>
                {restaurant.address.street}, {restaurant.address.city}{" "}
                {restaurant.address.postalCode}
              </Typography>
            )}
        </CardContent>
        <CardActions>
          {restaurant._id && (
            <Button
              component={RouterLink}
              to={`restaurant/${restaurant._id}`}
              size="small"
            >
              View
            </Button>
          )}
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
