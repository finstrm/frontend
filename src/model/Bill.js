/*
bill-post {
status (string): Status of the bill e.g. completed, recurring, etc = ['pending', 'cancelled', 'completed', 'recurring'],
payee (string): The entity the bill will be paid to. Example: Comcast, Washington Gas ,
nickname (string, optional): A nickname for the bill to help you identify it ,
payment_date (string, optional): Date when bill is going to be paid or was paid. e.g. 1/30/2014 ,
recurring_date (integer, optional): Date of month bill will recur, e.g. 15th of every month ,
payment_amount (double): Bill amount
}
*/

export class bill {
    constructor(status, payee, nickname, payment_date, recurring_date, payment_amount) {
        this.status = status;
        this.payee = payee;
        this.nickname = nickname;
        this.payment_date = payment_date;
        this.recurring_date = recurring_date;
        this.payment_amount = payment_amount;
    }

    //setters
    setStatus(status) {
        this.status = status;
    }

    setPayee(payee) {
        this.payee = payee;
    }

    setNickname(nickname) {
        this.nickname = nickname;
    }

    setPaymentDate(payment_date) {
        this.payment_date = payment_date;
    }

    setRecurringDate(recurring_date) {
        this.recurring_date = recurring_date;
    }

    setPaymentAmount(payment_amount) {
        this.payment_amount = payment_amount;
    }
}