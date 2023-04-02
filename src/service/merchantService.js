/*
Merchant
GET /merchantsGet all merchants
GET /merchants/{id}Get merchant by id
POST /merchantsCreate a merchant
PUT /merchants/{id}Update a specific existing merchant
*/

export class merchant {
    async getMerchant(id) {
        const res = await fetch(baseUrl + `merchants/${id}?key=${key}`)
        return res.json()
    }

    async getMerchants() {
        const res = await fetch(baseUrl + `merchants?key=${key}`)
        return res.json()
    }

    async createMerchant(merchant) {
        const res = await fetch(baseUrl + `merchants?key=${key}`, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(merchant)
        })
        return res.json()
    }

    async updateMerchant(id, merchant) {
        const res = await fetch(baseUrl + `merchants/${id}?key=${key}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(merchant)
        })
        return res.json()
    }
}