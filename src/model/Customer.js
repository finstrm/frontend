export class Customer {
    constructor(first_name, last_name, address) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.address = address;
    }

    //setters
    setFirstName(first_name) {
        this.first_name = first_name;
    }

    setLastName(last_name) {
        this.last_name = last_name;
    }

    setAddress(address) {
        this.address = address;
    }
    
}