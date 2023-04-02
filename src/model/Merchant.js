/*
merchant-put-post {
name (string): Name associated with the merchant ,
category (string, optional): Category associated with the merchant ,
address (address, optional): Address where the merchant is located ,
geocode (geocode, optional): Longitude and Latitude of Merchant Address
}
address {
street_number (string): Street number of address ,
street_name (string): Street name of address ,
city (string): City name of address ,
state (string): Two letter abbreviated state of address ,
zip (string): Five digit zip code of address
}
geocode {
lat (number): latitude of ATM's address. ,
lng (number): longitude of ATM's address.
}
*/

export class Merchant {
    constructor(name, category, address, geocode) {
        this.name = name;
        this.category = category;
        this.address = address;
        this.geocode = geocode;
    }

    //setters
    setName(name) {
        this.name = name;
    }

    setCategory(category) {
        this.category = category;
    }

    setAddress(address) {
        this.address = address;
    }

    setGeocode(geocode) {
        this.geocode = geocode;
    }
    
}