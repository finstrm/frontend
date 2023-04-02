import {baseUrl, key} from "../Util"

export class customerService {
    async createCustomer(customer) {
        const res = await fetch(baseUrl + `customers?key=${key}`, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(customer)
        })
        return res.json()
    }

    async getCustomer(id) {
        const res = await fetch(baseUrl + `customers/${id}?key=${key}`)
        return res.json()
    }

    async getAllCustomers() {
        const res = await fetch(baseUrl + `customers?key=${key}`)
        return res.json()
    }

    async updateCustomer(id, customer) {
        const res = await fetch(baseUrl + `customers/${id}?key=${key}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(customer)
        })
        return res.json()
    }

    async getCustomerByAcct(id) {
        const res = await fetch(baseUrl + `accounts/${id}/customers?key=${key}`)
        return res.json()
    }
}