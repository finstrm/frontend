import {baseUrl, key} from "../Util"

export async function createCustomer(customer) {
    const res = await fetch(baseUrl + `customers?key=${key}`, {
        method: 'POST', headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, body: JSON.stringify(customer)
    })
    return res.json()
}

export async function getCustomer(id) {
    const res = await fetch(baseUrl + `customers/${id}?key=${key}`)
    return res.json()
}

export async function getAllCustomers() {
    const res = await fetch(baseUrl + `customers?key=${key}`)
    return res.json()
}

export async function updateCustomer(id, customer) {
    const res = await fetch(baseUrl + `customers/${id}?key=${key}`, {
        method: 'PUT', headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, body: JSON.stringify(customer)
    })
    return res.json()
}

export async function getCustomerByAcct(id) {
    const res = await fetch(baseUrl + `accounts/${id}/customers?key=${key}`)
    return res.json()
}