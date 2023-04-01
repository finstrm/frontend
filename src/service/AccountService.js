const key = "575fbd2b0728ae7c870640023404c388";
const baseUrl = "http://api.nessieisreal.com/";

export class AccountService{
  async getAccount(id){
    const response = await fetch(baseUrl+"accounts/${id}?key=${key}")
    return response;
  }
}