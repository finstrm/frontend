import {Address} from "@/model/Address";
import {Customer} from "@/model/Customer";
import {baseUrl, key} from "@/Util";

export class AccountService {
    async getAccount(id) {

        const response = await fetch(baseUrl + `accounts/${id}?key=${key}`);
        const data = await response.json();

        return data;
    }

    async getAllAccounts(type) {
        const response = await fetch(baseUrl + `accounts?type=${type}&key=${key}`);
        const data = await response.json();

        return data;
    }

    async getAccountByCustomer(customerId) {
        const response = await fetch(baseUrl + `${customerId}/accounts?key=${key}`);
        const data = await response.json();

        return data;
    }

    async createAccount(type, nickname, rewards, balance, id) {
        /*
        /customers/{customer_id}/accounts
        account-post {
            type (string): Account type associated with account e.g. savings, checking, etc = ['Credit Card', 'Savings', 'Checking'],
            nickname (string): Nickname associated with account ,
            rewards (integer): Reward points associated with account ,
            balance (integer): Initial account balance ,
            account_number (string, optional): 16 digit Account Number that is associated with the account e.g. a Credit Card Number
        }
        */
        if(!['Credit Card', 'Savings', 'Checking'].includes(type)) {
            throw new Error('Invalid account type');
        }
        const response = await fetch(baseUrl + `customers/${id}/accounts?key=${key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: type,
                nickname: nickname,
                rewards: rewards,
                balance: balance,
            })
        })
        const data = await response.json();

        return data;
    }
}

// url http://api.nessieisreal.com/documentation