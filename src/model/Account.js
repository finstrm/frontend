/*
/customers/{customer_id}/accounts
account-post {
    type (string): Account type associated with account e.g. savings, checking, etc = ['Credit Card', 'Savings', 'Checking'],
    nickname (string): Nickname associated with account ,
    rewards (integer): Reward points associated with account ,
    balance (integer): Initial account balance ,
    account_number (string, optional): 16 digit Account Number that is associated with the account e.g. a Credit Card Number
}
*/

export class account {
    constructor(type, nickname, rewards, balance, account_number) {
        this.type = type;
        this.nickname = nickname;
        this.rewards = rewards;
        this.balance = balance;
        this.account_number = account_number;
    }

    //setters
    setType(type) {
        this.type = type;
    }

    setNickname(nickname) {
        this.nickname = nickname;
    }

    setRewards(rewards) {
        this.rewards = rewards;
    }

    setBalance(balance) {
        this.balance = balance;
    }

    setAccountNumber(account_number) {
        this.account_number = account_number;
    }
}