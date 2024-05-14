export class Passenger {
  constructor(public destination: string) {}
}

export class Car {
  private passengers: Passenger[] = [];
  private hasMadeTripToday: boolean = false;

  constructor(
    public licensePlate: string,
    public capacity: number = 8,
    public departureCity: string,
    public destinationCity: string
  ) {}

  addPassenger(passenger: Passenger): string {
    if (this.passengers.length >= this.capacity) {
      return "Car is at full capacity.";
    }

    if (this.hasMadeTripToday) {
      return "Car has already made a trip today.";
    }

    if (passenger.destination !== this.destinationCity) {
      return "Passenger's destination does not match car's destination.";
    }

    this.passengers.push(passenger);
    return "Passenger added successfully.";
  }

  makeTrip(): string {
    if (this.hasMadeTripToday) {
      return "Car has already made a trip today.";
    }

    this.hasMadeTripToday = true;
    this.passengers = [];
    return `Car made a trip from ${this.departureCity} to ${this.destinationCity}. All passengers have been dropped off.`;
  }
}
