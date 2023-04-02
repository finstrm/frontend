/*
withdrawal-post {
medium (string): Type of withdrawal, balance or rewards = ['balance', 'rewards'],
transaction_date (string, optional): Timestamp of withdrawal execution ,
status (string, optional): Status of the withdrawal = ['pending', 'cancelled', 'completed'],
amount (integer): Withdrawal amount ,
description (string, optional): Optional description of withdrawal
}
*/

export class withdrawal {
    constructor(medium, transaction_date, status, amount, description) {
        this.medium = medium;
        this.transaction_date = transaction_date;
        this.status = status;
        this.amount = amount;
        this.description = description;
    }

    //setters
    setMedium(medium) {
        this.medium = medium;
    }

    setTransactionDate(transaction_date) {
        this.transaction_date = transaction_date;
    }

    setStatus(status) {
        this.status = status;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setDescription(description) {
        this.description = description;
    }
}