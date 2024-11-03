// Задание 3

interface Account {
  accountNumber: string;
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  checkBalance(): void;
}

class DebitAccount implements Account {
  accountNumber: string;
  balance: number;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
    console.log(
      `На счет ${this.accountNumber} внесено ${amount}. Новый баланс: ${this.balance}`
    );
  }

  withdraw(amount: number): void {
    if (amount > this.balance) {
      console.log(`Недостаточно средств. Текущий баланс: ${this.balance}`);
    } else {
      this.balance -= amount;
      console.log(
        `Со счета ${this.accountNumber} снято ${amount}. Новый баланс: ${this.balance}`
      );
    }
  }

  checkBalance(): void {
    console.log(`Баланс счета ${this.accountNumber}: ${this.balance}`);
  }
}

class CreditAccount implements Account {
  accountNumber: string;
  balance: number;
  creditLimit: number;
  debt: number;

  constructor(
    accountNumber: string,
    initialBalance: number = 0,
    creditLimit: number = 1000
  ) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.creditLimit = creditLimit;
    this.debt = 0;
  }

  deposit(amount: number): void {
    if (this.debt > 0) {
      const debtPayment = Math.min(amount, this.debt);
      this.debt -= debtPayment;
      amount -= debtPayment;
      console.log(
        `Оплачено ${debtPayment} для погашения долга. Оставшийся долг: ${this.debt}`
      );
    }

    this.balance += amount;
    console.log(
      `На счет ${this.accountNumber} внесено ${amount}. Новый баланс: ${this.balance}`
    );
  }

  withdraw(amount: number): void {
    if (this.balance - amount < -this.creditLimit) {
      console.log(
        `Операция отклонена. Превышен кредитный лимит. Доступные средства: ${
          this.balance + this.creditLimit
        }`
      );
    } else {
      this.balance -= amount;
      if (this.balance < 0) {
        this.debt = -this.balance;
      }
      console.log(
        `Со счета ${this.accountNumber} снято ${amount}. Новый баланс: ${this.balance}, Долг: ${this.debt}`
      );
    }
  }

  checkBalance(): void {
    console.log(
      `Баланс счета ${this.accountNumber}: ${this.balance}, Долг: ${this.debt}`
    );
  }

  checkDebt(): void {
    console.log(`Текущий долг по счету ${this.accountNumber}: ${this.debt}`);
  }
}

// Создаем дебетовый счет с начальным балансом 500
const debitAccount = new DebitAccount("DE123456789", 500);

// Создаем кредитный счет с начальным балансом 100 и кредитным лимитом 1000
const creditAccount = new CreditAccount("CR987654321", 100, 1000);

console.log("--- Операции с дебетовым счетом ---");
debitAccount.checkBalance(); // Проверяем баланс
debitAccount.deposit(200); // Пополняем счет на 200
debitAccount.withdraw(100); // Снимаем 100
debitAccount.withdraw(700); // Пытаемся снять больше, чем на счету
debitAccount.checkBalance(); // Проверяем итоговый баланс

console.log("\n--- Операции с кредитным счетом ---");
creditAccount.checkBalance(); // Проверяем баланс и долг
creditAccount.deposit(50); // Пополняем счет на 50
creditAccount.withdraw(200); // Снимаем 200, уходим в долг
creditAccount.withdraw(900); // Пробуем снять больше, чем доступно с учетом лимита
creditAccount.checkBalance(); // Проверяем баланс и долг
creditAccount.deposit(400); // Погашаем часть долга
creditAccount.checkDebt(); // Проверяем текущий долг

// tsc -t es6 app.ts
