export class Address {
    constructor(street_number, street_name, city, state, zip) {
        this.street_number = street_number;
        this.street_name = street_name;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }

    //setters
    setStreetNumber(street_number) {
        this.street_number = street_number;
    }

    setStreetName(street_name) {
        this.street_name = street_name;
    }

    setCity(city) {
        this.city = city;
    }

    setState(state) {
        this.state = state;
    }

    setZip(zip) {
        this.zip = zip;
    }
    
}