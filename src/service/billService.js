/*
Bill
GET /accounts/{id}/billsGet all bills for a specific account
GET /bills/{billId}Get bill by id
GET /customers/{id}/billsGet bills by customer id
POST /accounts/{id}/billsCreate a bill
PUT /bills/{billId}Update a specific existing bill
DELETE /bills/{billId}Delete a specific existing bill
*/

import {baseUrl, key} from "@/Util";

export class bill {
    async getAccountBills(id) {
        const response = await fetch(baseUrl + `accounts/${id}/bills?key=${key}`);
        const data = await response.json();

        return data;
    }

    async getBill(id) {
        const response = await fetch(baseUrl + `bills/${id}?key=${key}`);
        const data = await response.json();

        return data;
    }

    async getCustomerBills(id) {
        const response = await fetch(baseUrl + `customers/${id}/bills?key=${key}`);
        const data = await response.json();

        return data;
    }

    async createBill(accountId, status, payee, nickname, paymentDate, recurringDate, paymentAmount) {
        const response = await fetch(baseUrl + `accounts/${accountId}/bills?key=${key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: status,
                payee: payee,
                nickname: nickname,
                payment_date: paymentDate,
                recurring_date: recurringDate,
                payment_amount: paymentAmount,
            })
        })
        const data = await response.json();

        return data;
    }

    async updateBill(id, status="", payee="", nickname="", paymentDate="", recurringDate="", paymentAmount="") {
        let body = {};
        if(status) {
            body.status = status;
        }
        if(payee) {
            body.payee = payee;
        }
        if(nickname) {
            body.nickname = nickname;
        }
        if(paymentDate) {
            body.payment_date = paymentDate;
        }
        if(recurringDate) {
            body.recurring_date = recurringDate;
        }
        if(paymentAmount) {
            body.payment_amount = paymentAmount;
        }
        const response = await fetch(baseUrl + `bills/${id}?key=${key}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const data = await response.json();

        return data;
    }
}