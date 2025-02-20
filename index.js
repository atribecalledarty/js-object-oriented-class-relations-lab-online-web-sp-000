let driverId = 0;
let tripId = 0;
let passengerId = 0;
let store = {
    drivers: [],
    passengers: [],
    trips: []
};

class Driver {
    constructor (name) {
        this.id = ++driverId;
        this.name = name;
        store.drivers.push(this);
    }
    trips(){
        return store.trips.filter(
            function(trip){
                return trip.driverId == this.id;
            }.bind(this)
        )
    }
    passengers(){
        
        return this.trips().map(
            function(trip){
                return store.passengers.find(
                    function(passenger){
                        return passenger.id == trip.passengerId
                    }
                )
            }
        )
    }
}

class Passenger {
    constructor (name){
        this.id = ++passengerId;
        this.name = name;
        store.passengers.push(this);
    }
    trips(){
        return store.trips.filter(
            function(trip){
                return trip.passengerId = this.id;
            }.bind(this)
        )
    }
    drivers(){
        return this.trips().map(
            function(trip){
                return store.drivers.find(
                    function(driver){
                        return trip.driverId == driver.id;
                    }
                )
            }
        )
    }
}

class Trip {
    constructor (driver, passenger){
        this.id = ++tripId;
        this.driverId = driver.id;
        this.passengerId = passenger.id;
        store.trips.push(this);
    }
    driver(){
        return store.drivers.find(
            function(driver){
                return driver.id == this.driverId;
            }.bind(this)
        )
    }
    passenger(){
        return store.passengers.find(
            function(passenger){
                return passenger.id == this.passengerId;
            }.bind(this)
        )
    }
}

let a = new Driver('Arthur');
let b = new Passenger('Michael');
let c = new Trip(a, b);
console.log(a.passengers());