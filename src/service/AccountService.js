import { baseUrl, key } from "@/Util";

export async function getAccount(id) {

    const response = await fetch(baseUrl + `accounts/${id}?key=${key}`);
    const data = await response.json();

    return data;
}

export async function getAllAccounts(type) {
    const response = await fetch(baseUrl + `accounts?type=${type}&key=${key}`);
    const data = await response.json();

    return data;
}

export async function getAccountByCustomer(customerId) {
    const response = await fetch(baseUrl + `${customerId}/accounts?key=${key}`);
    const data = await response.json();

    return data;
}

export async function createAccount(account, id) {
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

// url http://api.nessieisreal.com/documentation