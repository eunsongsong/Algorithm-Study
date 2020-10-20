function Account(id, money){
    this.id = id;
    this.balance = money;
}
Account.prototype.info = function() {
    console.log(`계좌번호: ${this.id}, 잔액:${this.balance}`);
}

// Account, 계좌 출력
let accs = [new Account(1001,10000), new Account(1002,20000), 
            new Account(1003,36000), new Account(2004,39000)];
for (let acc of accs) {
    acc.info();
}

function Bank() {
    this.accs = [];
}
// 계좌 생성
Bank.prototype.make_account = function(id, money) {
    // push: 데이터를 넣는 함수
    this.accs.push(new Account(id, money));
};
// 입금
Bank.prototype.deposit = function(id, money) {
    for(let acc of accs) {
        if(acc.id==id) {
            acc.balance += money;
        }
    }
}
// 출금
Bank.prototype.withdraw = function(id, money) {
    for(let acc of accs) {
        if(acc.id==id){
            acc.balance -= money;
        }
    }
}
// 특정 계좌 조회
Bank.prototype.withdraw = function(id) {
    for(let acc of accs) {
        if(acc.id==id){
            acc.info();
        }
    }
}
// 전체 계좌 조회
Bank.prototype.all_info = function() {
    for(let acc of accs) {
        acc.info();
    }
}

let bank = new Bank();
bank.make_account(101, 1000000);
bank.make_account(102, 2000000);
bank.make_account(103, 3000000);

// bank.all_info();
// bank.deposit(102,10000);
// bank.info(102);
// bank.withdraw(103,10000);
// bank.info(103);


