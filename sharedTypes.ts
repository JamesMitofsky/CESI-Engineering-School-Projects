type EntityWithAddress = {
  postalCode: number;
  city: string;
  street: string;
};

type Restaurant = {
  name: string;
  type: "Italian" | "Indian" | "American" | "Mexican" | "Chinese" | "French";
} & EntityWithAddress;

type User = {
  username: string;
  password: string;
  biography: string;
} & EntityWithAddress;

export { Restaurant, User };
