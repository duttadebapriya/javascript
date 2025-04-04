const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currVal) {
//     console.log(`Acc is: ${acc} and current value is: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "JS",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile development",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 1999
    }
]

const Total = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )
console.log(Total);
