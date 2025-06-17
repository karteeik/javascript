// Closure - A  closure is when a function remembers the variables from the place it was defined, even if it’s used outside that place later.

// In One-Line --> Closure = A function + the scope where it was created.
function outer(){
    let name = "john due";

    // inner function can access it parent property
    function inner(){
        console.log(name);
    }
    return inner;
}

const closureFun = outer();
// console.log(closureFun);
closureFun();

// When outer() runs: It creates a variable name. It defines the inner function It returns inner to the outside. Even though outer() is done, JS does not delete name — because inner is still using it. This is a closure...

// Uses:

// Data privacy
function secretPassword(){
    let password = "Javascript@123";

    return {
        getPassword: function(){
            return password;
        },
        setPassword: function(newPassword){
            password = newPassword;
        }
    };
}

const mySecret = secretPassword();
console.log(mySecret.getPassword());
mySecret.setPassword("Closure@123");
console.log(mySecret.getPassword());
// You're returning an object with two methods. That's exactly how closures + objects work together to make a private API.


// Creating Function factories
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15


// Maintaining State (like counters)
function createCounter(){
    let i=0;
    return function(){
        i++;
        console.log(i);
    }
}

const showCount = createCounter();
showCount();
showCount();
showCount();

// Asynchronous operations
function timeBased(name){
    setTimeout(() => {
        console.log("Hello",name);
    },1000);
}

timeBased("john");

// Bank Account Using Closure 
function createBankAccount(ownerName, initialBalance){
    let balance = initialBalance;

    return{
        getBalance: function(){
            console.log(`Dear, ${ownerName} Your Bank Balance is ${balance} `);
        },

        depositAmount: function(amount){
            if(amount > 0){
                balance += amount;
                return `Rs.${amount} Deposited Successfully`;
            }
            else{
                return `Invalid amount`;
            }
        },

        withdraw: function(amount){
            if(amount > 0 && amount <= balance){
                balance -= amount;
                return `Rs.${amount} Withdraw Successfully`;
            }
            else{
                return `Insufficient balance or invalid amount`;
            }
        }
    };
};

const bankDetails = createBankAccount("john Due",1000);
console.log(bankDetails.balance);   // Undefined because private variable

bankDetails.getBalance();
console.log(bankDetails.depositAmount(200));
bankDetails.getBalance();
console.log(bankDetails.withdraw(1500));
bankDetails.getBalance();
