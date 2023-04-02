/*
Deposit
GET /accounts/{id}/depositsGet all deposits
GET /deposits/{id}Get deposit by id
POST /accounts/{id}/depositsCreate a deposit
PUT /deposits/{id}Update a specific existing deposit
DELETE /deposits/{id}Delete a specific existing deposit
*/

import { baseUrl, key } from "@/Util";
import { getAccountByCustomer } from "@/service/AccountService";

export async function getDeposit(id) {
    const res = await fetch(baseUrl + `deposits/${id}?key=${key}`)
    return res.json()
}

export async function getAccountDeposit(id) {
    const res = await fetch(baseUrl + `accounts/${id}/deposits?key=${key}`)
    return res.json()
}

export async function getAccountDepositByCustomer(id) {
    const accounts = await getAccountByCustomer(id)
    console.log(accounts, "accounts")
    let deposits = []
    for(let account of accounts){
        await getAccountDeposit(account._id).then((data) => {
            for(let deposit of data){
                deposits.push(deposit)
            }
        })
    }
    console.log(deposits)
    return deposits
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