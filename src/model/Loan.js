/*
loan-post {
type (string): Type of loan: auto, home, or small business = ['home', 'auto', 'small business'],
status (string): Status of loan e.g. pending, approved, declined = ['pending', 'approved', 'declined'],
credit_score (integer): credit score ,
monthly_payment (double): Monthly payment amount ,
amount (integer): Loan amount ,
description (string, optional): Optional description of loan
}
*/

export class loan {
    constructor(type, status, credit_score, monthly_payment, amount, description) {
        this.type = type;
        this.status = status;
        this.credit_score = credit_score;
        this.monthly_payment = monthly_payment;
        this.amount = amount;
        this.description = description;
    }

    //setters
    setType(type) {
        this.type = type;
    }

    setStatus(status) {
        this.status = status;
    }

    setCreditScore(credit_score) {
        this.credit_score = credit_score;
    }

    setMonthlyPayment(monthly_payment) {
        this.monthly_payment = monthly_payment;
    }

    setAmount(amount) {
        this.amount = amount;
    }

    setDescription(description) {
        this.description = description;
    }
}