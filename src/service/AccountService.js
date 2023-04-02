import {Address} from "@/model/Address";
import {Customer} from "@/model/Customer";
import {baseUrl, key} from "@/Util";

export class AccountService {
    async getAccount(id) {

        const response = await fetch(baseUrl + `accounts/${id}?key=${key}`);
        const data = await response.json();

        return data;
    }
}