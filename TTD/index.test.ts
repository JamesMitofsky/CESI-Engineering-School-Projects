import { Car, Passenger } from "./index";
import { faker } from "@faker-js/faker";

describe("Car", () => {
  let car: Car;
  let passenger: Passenger;

  beforeEach(() => {
    car = new Car(
      faker.vehicle.vin(),
      8,
      faker.location.city(),
      faker.location.city()
    );

    passenger = new Passenger(car.destinationCity);
  });

  test("addPassenger should add a passenger if car is not at full capacity and has not made a trip", () => {
    const result = car.addPassenger(passenger);
    expect(result).toBe("Passenger added successfully.");
  });

  test("addPassenger should not add a passenger if car is at full capacity", () => {
    for (let i = 0; i < 8; i++) {
      car.addPassenger(new Passenger(car.destinationCity));
    }

    const result = car.addPassenger(passenger);
    expect(result).toBe("Car is at full capacity.");
  });

  test("addPassenger should not add a passenger if car has already made a trip", () => {
    car.makeTrip();
    const result = car.addPassenger(passenger);
    expect(result).toBe("Car has already made a trip today.");
  });

  test("addPassenger should not add a passenger if passenger destination does not match car destination", () => {
    const passengerWithDifferentDestination = new Passenger(
      faker.location.city()
    );
    const result = car.addPassenger(passengerWithDifferentDestination);
    expect(result).toBe(
      "Passenger's destination does not match car's destination."
    );
  });

  test("makeTrip should make a trip if car has not made a trip today", () => {
    const result = car.makeTrip();
    expect(result).toBe(
      `Car made a trip from ${car.departureCity} to ${car.destinationCity}. All passengers have been dropped off.`
    );
  });

  test("makeTrip should not make a trip if car has already made a trip today", () => {
    car.makeTrip();
    const result = car.makeTrip();
    expect(result).toBe("Car has already made a trip today.");
  });
});
