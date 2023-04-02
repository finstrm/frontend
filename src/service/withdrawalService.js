/*
Withdrawal
GET /accounts/{id}/withdrawalsGet all withdrawals
GET /withdrawals/{id}Get withdrawal by id
POST /accounts/{id}/withdrawalsCreate a withdrawal
PUT /withdrawals/{id}Update a specific existing withdrawal
DELETE /withdrawals/{id}Delete a specific existing withdrawal
*/

export class withdrawal {
    async getWithdrawal(id) {
        const res = await fetch(baseUrl + `withdrawals/${id}?key=${key}`)
        return res.json()
    }

    async getAccountWithdrawals(id) {
        const res = await fetch(baseUrl + `accounts/${id}/withdrawals?key=${key}`)
        return res.json()
    }

    async createWithdrawal(id, withdrawal) {
        const res = await fetch(baseUrl + `accounts/${id}/withdrawals?key=${key}`, {
            method: 'POST', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(withdrawal)
        })
        return res.json()
    }

    async updateWithdrawal(id, withdrawal) {
        const res = await fetch(baseUrl + `withdrawals/${id}?key=${key}`, {
            method: 'PUT', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }, body: JSON.stringify(withdrawal)
        })
        return res.json()
    }

    async deleteWithdrawal(id) {
        const res = await fetch(baseUrl + `withdrawals/${id}?key=${key}`, {
            method: 'DELETE', headers: {
                'Accept': 'application/json', 'Content-Type': 'application/json'
            }
        })
        return res.json()
    }
    
}