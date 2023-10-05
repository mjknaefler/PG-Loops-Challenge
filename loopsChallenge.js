//Create an array of products with at least 5 products.
const products = [
    {name:"Product A", price:10,quantity:5},
    {name:"Product B", price:20,quantity:3},
    {name:"Product C", price:15,quantity:7},
    {name:"Product D", price:25,quantity:2},
    {name:"Product E", price:30,quantity:4},
];

//Loop through the array using a for loop and print out the name and price of each product.
for (i = 0; i < products.length; i++){
    console.log(products[i].name + ':$' + products[i].price);
}

//Use a while loop to find the product with the lowest price. Print out the name and price of the product.
let k = 0;
let lowestPrice;
let lowestProduct;
while (k < products.length){
    if (lowestPrice === null || lowestPrice === undefined){ 
        lowestPrice = products[k].price;
        lowestProduct = k;
    } else{
        if(lowestPrice >= products[k].price){
            lowestPrice = products[k].price;
            lowestProduct = k;
        }
    }
    k++;

}
console.log(products[lowestProduct].name + ' is the cheapest at $' + products[lowestProduct].price);

//Use a for of loop to calculate the total value of all products in the array.
let total = 0;
for (let key of products){
    total += key.price;
}
console.log(`Total value of all products: $${total}`)

for(let key in products){
    console.log('')
    console.log(`Name: ${products[key].name}`)
    console.log(`Price: $${products[key].price}`)
    console.log(`Quantity: ${products[key].quantity}`)
}