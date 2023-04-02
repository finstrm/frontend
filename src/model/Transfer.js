/*
transfer-post {
medium (string): Type of transaction, balance or rewards = ['balance', 'rewards'],
payee_id (string): id of payee account ,
amount (double): Transaction amount ,
transaction_date (string, optional): Timestamp of transaction execution ,
status (string, optional): Status of transaction e.g. pending, completed, etc = ['pending', 'cancelled', 'completed'],
description (string, optional): Optional description of transaction
}
*/

export class transfer {
    constructor(medium, payee_id, amount, transaction_date, status, description) {
        this.medium = medium;
        this.payee_id = payee_id;
        this.amount = amount;
        this.transaction_date = transaction_date;
        this.status = status;
        this.description = description;
    }

    //setters
    setMedium(medium) {
        this.medium = medium;
    }

    setPayeeId(payee_id) {
        this.payee_id = payee_id;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setTransactionDate(transaction_date) {
        this.transaction_date = transaction_date;
    }

    setStatus(status) {
        this.status = status;
    }

    setDescription(description) {
        this.description = description;
    }
}