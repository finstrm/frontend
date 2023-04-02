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

    async createAccount(account, id) {
        const response = await fetch(baseUrl + `customers/${id}/accounts?key=${key}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(account)
        })
        const data = await response.json();

        return data;
    }
}

// url http://api.nessieisreal.com/documentation