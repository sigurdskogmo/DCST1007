class Account {
  constructor(customerNum, name, balance = 0) {
    this._customerNum = customerNum;
    this._name = name;
    this._balance = balance;
  }
  deposit(amount) {
    this._balance += amount;
    console.log(this._name + " setter inn " + amount + " kroner.");
  }
  withdrawal(amount) {
    let output = "";
    if (amount < this._balance) {
      this._balance -= amount;
      output = this._name + " tar ut " + amount + " kroner.";
    } else {
      output =
        this._name +
        " har ikke nok penger på konto til å ta ut " +
        amount +
        " kroner. Saldo er: " +
        this._balance +
        " kroner.";
    }
    console.log(output);
  }
  AccountInfo() {
    document.getElementById("output").innerHTML =
      this._name +
      " med kundenummer " +
      this._customerNum +
      " har " +
      this._balance +
      " kroner på konto";
  }
}

class ChildAccount extends Account {
  _balance = (this._balance += 200);
}

let kari = new Account(93827100, "Kari Hansen", 895);
let lise = new ChildAccount(12345678, "Lise Jensen");
let petter = new Account(23456789, "Petter Olsen", 0);

kari.withdrawal(300);
lise.deposit(4000);
petter.deposit(3000);

kari.withdrawal(250);
petter.deposit(250);

kari.withdrawal(800);
