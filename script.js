const transactionsUl = document.querySelector("#transactions");
const incomeDisplay = document.querySelector("#money-plus");
const expanseDisplay = document.querySelector("#money-minus");
const balanceDisplay =  document.querySelector("#balance");
const inputTransactonName = document.querySelector("#text");
const inputTransactonAmount = document.querySelector("#amount");
const form =  document.querySelector("#form");

// transações 

const localstorageTransaction = JSON.parse(localStorage
    .getItem("transactions"))
let transactions = localStorage
.getItem("transactions") !== null ? localstorageTransaction : [];

const removeTransaction = ID => {
 dummyTransactions = dummyTransactions
 .filter(transaction => transaction.id !== ID)

 init()

}


// função que ira adicionar as trabsações no dom 


    const addTransactionsDom = transactions => {
        const operator = transactions.amount < 0 ? '-' : '+';
        const cssclass = transactions.amount < 0 ? 'minus' : 'plus';
        const amountWithOutOperator = Math.abs(transactions.amount);
        const li = document.createElement("li");
    
        li.classList.add(cssclass);
        li.innerHTML = `${transactions.name} 
        <span>${operator} R$ ${amountWithOutOperator}</span>
        <button class="delete-btn" onClick="removeTransaction(${transactions.id})">x</button>`
    
         transactionsUl.append(li)
    }

    const updateValues = () => {
        const transactionsAmounts = dummyTransactions
        .map(transactions => transactions.amount);


        const total = transactionsAmounts
        .reduce((acumulator, transactions) => acumulator + transactions, 0)
        .toFixed(2);


       const income = transactionsAmounts
       .filter(value => value > 0)
       .reduce((acumulator, value) => acumulator + value, 0)
       .toFixed(2)

       
       const expanse = Math.abs(transactionsAmounts
        .filter(value => value < 0)
        .reduce((acumulator, value) => acumulator + value, 0))
       .toFixed(2)

       balanceDisplay.textContent = `R$ ${total}`
       incomeDisplay.textContent = `R$ ${income}`
       expanseDisplay.textContent = `R$ ${expanse}`
 
      
    }

    


    const init = () => {
        transactionsUl.innerHTML = ""
        updateValues()
        dummyTransactions.forEach(addTransactionsDom)
    }
    init()

    const generateID = () => Math.round(Math.random() *1000)

    form.addEventListener("submit", event => {
      event.preventDefault()

      const transactionName = inputTransactonName.value.trim();
      const transactionAmount = inputTransactonAmount.value.trim();
      
       if(transactionName === "" || transactionAmount === ""){
          alert("por favor preencha todos os campos!");
          return
      }

      const transaction =  {
          id: generateID(), 
          name:transactionName, 
          amount:Number(transactionAmount)
        }

        dummyTransactions.push(transaction)

        init()

         inputTransactonAmount.value = ""
         inputTransactonName.value = ""

     })





    
