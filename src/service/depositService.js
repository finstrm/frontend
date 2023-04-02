/*
Deposit
GET /accounts/{id}/depositsGet all deposits
GET /deposits/{id}Get deposit by id
POST /accounts/{id}/depositsCreate a deposit
PUT /deposits/{id}Update a specific existing deposit
DELETE /deposits/{id}Delete a specific existing deposit
*/
export class depositService {
    async getDeposit(id) {
        const res = await fetch(baseUrl + `deposits/${id}?key=${key}`)
        return res.json()
    }

    async getAcountDeposit(id) {
        const res = await fetch(baseUrl + `accounts/${id}/deposits?key=${key}`)
        return res.json()
    }

    async createDeposit(id, deposit) {
        const res = await fetch(baseUrl + `accounts/${id}/deposits?key=${key}`, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(deposit)
        })
        return res.json()
    }

    async updateDeposit(id, deposit) {
        const res = await fetch(baseUrl + `deposits/${id}?key=${key}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(deposit)
        })
        return res.json()
    }

    async deleteDeposit(id) {
        const res = await fetch(baseUrl + `deposits/${id}?key=${key}`, {
            method: 'DELETE', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }
        })
        return res.json()
    }
    
}