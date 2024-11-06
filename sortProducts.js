// You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order. 

function sortProducts(arr){
  return arr.sort((a, b) => a.price - b.price);
}
console.log(sortProducts([{ name: "Product A", price: 30 },
                         { name: "Product B", price: 10 }, 
                         { name: "Product C", price: 20 },
                        ]))