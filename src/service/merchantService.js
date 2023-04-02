/*
Merchant
GET /merchantsGet all merchants
GET /merchants/{id}Get merchant by id
POST /merchantsCreate a merchant
PUT /merchants/{id}Update a specific existing merchant
*/
import { baseUrl, key } from "@/Util";
export async function getMerchant(id) {
    const res = await fetch(baseUrl + `merchants/${id}?key=${key}`)
    return res.json()
}

export async function getMerchants() {
    const res = await fetch(baseUrl + `merchants?key=${key}`)
    return res.json()
}

export async function createMerchant(merchant) {
    const res = await fetch(baseUrl + `merchants?key=${key}`, {
        method: 'POST', headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, body: JSON.stringify(merchant)
    })
    return res.json()
}

export async function updateMerchant(id, merchant) {
    const res = await fetch(baseUrl + `merchants/${id}?key=${key}`, {
        method: 'PUT', headers: {
            'Accept': 'application/json', 'Content-Type': 'application/json'
        }, body: JSON.stringify(merchant)
    })
    return res.json()
}