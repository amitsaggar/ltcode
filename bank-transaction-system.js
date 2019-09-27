// Part One
// Bank that has Accounts
// Accounts can do withdraws and deposits.
// If there is not enough money, throw an error
// Need some console log tests.

// Part Two
// Implement a transactional system
// Each withdraw and deposit has trans # associated.
// And can undo any transaction.

class Bank {
  constructor(money) {
      this.bank = {};
      this.id = null;
      this.total_money = money;
      // this.transaction = {"type": null, "amount": null};
      this.transaction = function() {
          this.type = null;
          this.amount = null;
      }        
  }
  
  getId(num) {
      var str = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let result = Array();

      while(num > 0) {
          num--;
          let ch = str.charAt(num % 62);
          result.push(ch);
          num = Math.floor(num / 62);
      }
      return result.join("");
  }
  
  withdraw(amount) {
      let { transaction, bank } = this;
      this.id = this.getId(Math.floor(Math.random() * 10000000000));
      try {
          if(this.total_money - amount > 0) {
              // Allow trancation and add.
              this.total_money -= amount;
              
              // let trns = Object.create(this.transaction);
              let trns = new transaction();
              trns.type = "widthdraw";
              trns.amount = amount;

              bank[this.id] = trns;            
          } else {
              throw "Not enough money";
          }
      } catch(err) {
          console.log(err);
      }
  }
  
  deposit(amount) {
      let { total_money, transaction, bank, id } = this;
      this.id = this.getId(Math.floor(Math.random() * 10000000000));        
      try {
          if(amount < 0) {
              throw "Cannot deposit -ve amount";
          } else {
              this.total_money += amount;
              
              // let trns = Object.create(this.transaction);
              let trns = new transaction();
              trns.type = "deposit";
              trns.amount = amount;
              bank[this.id] = trns;                      
          }
      } catch(err) {
          console.log(err);
      }
  }
  
  print() {
      console.log(JSON.stringify([this.id, this.total_money, this.bank]));
  }
}

let bank = new Bank(100);
bank.deposit(100);
bank.deposit(10);
bank.withdraw(40);
bank.print();
// bank.withdraw(200);
// bank.print();
// bank.withdraw(100);
// bank.print();