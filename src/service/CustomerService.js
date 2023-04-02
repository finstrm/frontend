import {baseUrl, key} from "../Util"

export class CustomerService {
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
}