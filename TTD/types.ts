// type DaysWithVoyage = Set<string>; //formatted as "YYYY-MM-DD"

interface VoyageI {
  date: Date; // keyof DaysWithVoyage;
  licensePlatesOfCarsGoing: Set<string>; // must be a list of unique ids (maybe using Set() ?)
  destinationCity: string;
  departureCity: string;
  addCar: (licensePlate: number) => void;
  getCarCount: () => number;
  getTripsForCar: (licensePlate: number) => number;
}

interface CarI {
  licensePlate: number;
  driverName: string;
  availableSeats: number; // cannot exceed 8
  passengerIds: number[]; // cannot exceed the availableSeats
  departureCity: string;
  arrivalCity: string;
  getPassengerCount: () => number;
  addPassenger: (passengerId: number) => void;
  setAvailableSeats: (seats: number) => void;
  getAvailableSeats: () => number;
}

export { VoyageI, CarI };
