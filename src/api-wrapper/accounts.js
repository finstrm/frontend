export class Accounts {
    getAll() {
        return fetch('http://localhost:3000/api/accounts')
    }
    getId() {
        return fetch('http://localhost:3000/api/accounts/:id')
    }
    getCustAcct() {
        return fetch('http://localhost:3000/api/accounts/:cust_id')
    }
    createAcct
}