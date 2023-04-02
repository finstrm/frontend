/*
Purchase
GET /accounts/{id}/purchasesGet all purchases
GET /merchants/{id}/accounts/{accountId}/purchasesGet all purchases by account and merchant
GET /merchants/{id}/purchasesGet all purchases by merchant
GET /purchases/{id}Get purchase by id
POST /accounts/{id}/purchasesCreate a purchase
PUT /purchases/{id}Update a specific existing purchase
DELETE /purchases/{id}Delete a specific existing purchase
*/

export async function getAccountPurchases(id) {
    const response = await fetch(baseUrl + `accounts/${id}/purchases?key=${key}`);
    const data = await response.json();

    return data;
}

export async function getMerchantAccountPurchases(merchantId, accountId) {
    const response = await fetch(baseUrl + `merchants/${merchantId}/accounts/${accountId}/purchases?key=${key}`);
    const data = await response.json();

    return data;
}

export async function getMerchantPurchases(id) {
    const response = await fetch(baseUrl + `merchants/${id}/purchases?key=${key}`);
    const data = await response.json();

    return data;
}

export async function getPurchase(id) {
    const response = await fetch(baseUrl + `purchases/${id}?key=${key}`);
    const data = await response.json();

    return data;
}

export async function createPurchase(accountId, purchase) {
    const response = await fetch(baseUrl + `accounts/${accountId}/purchases?key=${key}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchase)
    })
    const data = await response.json();

    return data;
}

export async function updatePurchase(id, purchase) {
    const response = await fetch(baseUrl + `purchases/${id}?key=${key}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(purchase)
    })
    const data = await response.json();

    return data;
}

export async function deletePurchase(id) {
    const response = await fetch(baseUrl + `purchases/${id}?key=${key}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();

    return data;
}