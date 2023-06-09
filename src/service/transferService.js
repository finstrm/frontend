/*
Transfer
GET /accounts/{id}/transfersGet all transfers
GET /transfers/{transferId}Get transfer by id
POST /accounts/{id}/transfersCreate a transfer
PUT /transfers/{transferId}Update a specific existing transfer
DELETE /transfers/{transferId}Delete a specific existing transfer
*/
import { baseUrl, key } from "@/Util";
export async function getAccountTransfers(id) {
    const response = await fetch(baseUrl + `accounts/${id}/transfers?key=${key}`);
    const data = await response.json();

    return data;
}

export async function getTransfer(id) {
    const response = await fetch(baseUrl + `transfers/${id}?key=${key}`);
    const data = await response.json();

    return data;
}

export async function createTransfer(accountId, transfer) {
    const response = await fetch(baseUrl + `accounts/${accountId}/transfers?key=${key}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transfer)
    })
    const data = await response.json();

    return data;
}

export async function updateTransfer(id, transfer) {
    const response = await fetch(baseUrl + `transfers/${id}?key=${key}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transfer)
    })
    const data = await response.json();

    return data;
}