/*
Deposit
GET /accounts/{id}/depositsGet all deposits
GET /deposits/{id}Get deposit by id
POST /accounts/{id}/depositsCreate a deposit
PUT /deposits/{id}Update a specific existing deposit
DELETE /deposits/{id}Delete a specific existing deposit
*/

import { baseUrl, key } from "@/Util";

export async function getDeposit(id) {
    const res = await fetch(baseUrl + `deposits/${id}?key=${key}`)
    return res.json()
}

export async function getAcountDeposit(id) {
    const res = await fetch(baseUrl + `accounts/${id}/deposits?key=${key}`)
    return res.json()
}

export async function createDeposit(id, deposit) {
    const res = await fetch(baseUrl + `accounts/${id}/deposits?key=${key}`, {
        method: 'POST', headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, body: JSON.stringify(deposit)
    })
    return res.json()
}

export async function updateDeposit(id, deposit) {
    const res = await fetch(baseUrl + `deposits/${id}?key=${key}`, {
        method: 'PUT', headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, body: JSON.stringify(deposit)
    })
    return res.json()
}

export async function deleteDeposit(id) {
    const res = await fetch(baseUrl + `deposits/${id}?key=${key}`, {
        method: 'DELETE', headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }
    })
    return res.json()
}