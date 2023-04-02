/*
purchase-post {
merchant_id (string): id of merchant account ,
medium (string): Type of purchase, balance or rewards = ['balance', 'rewards'],
purchase_date (string, optional): Timestamp of purchase ,
amount (integer): Purchase amount ,
status (string, optional): Status of purchase e.g. pending, completed, etc = ['pending', 'cancelled', 'completed'],
description (string, optional): Optional description of purchase
}
*/

export class purchase {
    constructor(merchant_id, medium, purchase_date, amount, status, description) {
        this.merchant_id = merchant_id;
        this.medium = medium;
        this.purchase_date = purchase_date;
        this.amount = amount;
        this.status = status;
        this.description = description;
    }

    //setters
    setMerchantId(merchant_id) {
        this.merchant_id = merchant_id;
    }

    setMedium(medium) {
        this.medium = medium;
    }

    setPurchaseDate(purchase_date) {
        this.purchase_date = purchase_date;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setStatus(status) {
        this.status = status;
    }

    setDescription(description) {
        this.description = description;
    }
}