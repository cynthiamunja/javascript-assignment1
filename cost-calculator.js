const items = [{price: 10.99}, {price: 5.99}, {price: 29.99}];

function calculateCost(items) {
    let totalCost = 0;
    for (let item of items) {
        totalCost += item.price;
    }
    return totalCost;
}

const totalCost = calculateCost(items);
console.log("Total cost:", totalCost); 
