const transactionsUl = document.querySelector("#transactions")

console.log(transactionsUl)
// transações 

const dummyTransactions = [
    {id: 1, name:"bolo de morango", amount: -20 },
    {id: 2, name:"torta de maçã", amount: 25 },
    {id: 3, name:"campari", amount: 215 },
    {id: 4, name:"vodka", amount: -23 }
   
]


// função que ira adicionar as trabsações no dom 


    const addTransactionsDom = transactions => {
        const operator = transactions.amount < 0 ? '-' : '+';
        const cssclass = transactions.amount < 0 ? 'minus' : 'plus';
        const amountWithOutOperator = Math.abs(transactions.amount)
        const li = document.createElement("li");
    
        li.classList.add(cssclass);
        li.innerHTML = `${transactions.name} <span>${operator} R$ ${amountWithOutOperator}</span><button class="delete-btn">x</button>`
    
         transactionsUl.prepend(li)
    }

    const updateValues = () => {
        const transactionsAmounts = dummyTransactions
        .map(transactions => transactions.amount);

        const total = transactionsAmounts
        .reduce((acumulator, transactions) => acumulator + transactions, 0);

       const income = transactionsAmounts
       .filter(value => value > 0)
       .reduce((acumulator, value) => acumulator + value, 0)
       .toFixed(2)

       
       const expanse = transactionsAmounts
       .filter(value => value < 0)
       .reduce((acumulator, value) => acumulator + value, 0)
       .toFixed(2)
 
        console.log(income)
        console.log(expanse)
    }


    const init = () => {
        updateValues()
        dummyTransactions.forEach(addTransactionsDom)
    }
    init()