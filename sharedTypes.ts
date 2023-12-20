type EntityWithAddress = {
  address: {
    postalCode: number;
    city: string;
    street: string;
  };
  id: number;
};

type Restaurant = {
  name: string;
  image: string;
  genre:
    | "Italien"
    | "Indien"
    | "Américain"
    | "Méxicain"
    | "Chinois"
    | "Français";
} & EntityWithAddress;

type User = {
  username: string;
  password: string;
  biography: string;
} & EntityWithAddress;

export type { Restaurant, User };
