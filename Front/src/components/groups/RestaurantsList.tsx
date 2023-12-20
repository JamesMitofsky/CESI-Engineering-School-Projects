import { useEffect, useState } from "react";
import { Restaurant } from "../../../../sharedTypes";
import { Grid } from "@mui/material";
import RestaurantPreviewTile from "../RestaurantPreviewTile";

export default function RestaurantsList() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/restaurant")
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(restaurants);

  return (
    <Grid container spacing={4}>
      {restaurants.map((restaurant) => (
        <RestaurantPreviewTile restaurant={restaurant} />
      ))}
    </Grid>
  );
}
