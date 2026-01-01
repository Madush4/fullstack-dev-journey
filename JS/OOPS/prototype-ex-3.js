function BankAccounts(accountHolder, balance){

    this.accountHolder = accountHolder
    this.balance = balance
}

BankAccounts.prototype.deposit = function(amount) {
    this.balance += amount
    console.log(`Deposited ${amount}. New balance: ${this.balance}`)
}

BankAccounts.prototype.withdraw = function(amount){

    if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn: ${amount} Remaining balance: ${this.balance}`);
    }else{
        console.log(`Not enough balance.`)
    }
    
}

BankAccounts.prototype.getBalance = function (){

    console.log(`Current balance: ${this.balance}`)
}

const acc1 = new BankAccounts("Madush" , 5000)
const acc2 = new BankAccounts ("Damith", 2000)

acc1.withdraw(2000)
acc1.getBalance()
acc2.deposit(4000)