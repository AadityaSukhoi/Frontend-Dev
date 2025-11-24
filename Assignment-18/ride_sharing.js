/***********************************
 File: ride_sharing.js
 Topic: Ride-Sharing Application
***********************************/

class User {
  constructor(name, rating) {
    this.name = name;
    this.rating = rating;
  }
}

class Driver extends User {
  constructor(name, rating, vehicle) {
    super(name, rating);
    this.vehicle = vehicle;
  }
}

class Trip {
  constructor(fromLocation, toLocation, distance) {
    this.fromLocation = fromLocation;
    this.toLocation = toLocation;
    this.distance = distance;
  }

  calculateFare() {
    if (this.distance == null || this.distance < 0) {
      throw new Error("Invalid distance! Distance must be positive.");
    }

    const ratePerKm = 10;
    return this.distance * ratePerKm;
  }
}

try {
  const user = new User("Rahul", 4.5);
  const driver = new Driver("Amit", 4.8, "Sedan");
  const trip = new Trip("Delhi", "Noida", 15);

  const fare = trip.calculateFare();
  console.log("Fare:", fare);
} catch (error) {
  console.log("Error:", error.message);
}

try {
  const invalidTrip = new Trip("Delhi", "Noida", -5);
  console.log("Fare:", invalidTrip.calculateFare());
} catch (error) {
  console.log("Error:", error.message);
}