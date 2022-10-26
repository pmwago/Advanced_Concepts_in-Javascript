let stock={
    fruits:["strawberry","banana","mango","orange"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};
let isShopOpen=true;
let order=((time,work)=>{
    return new Promise((resolve, reject)=>{
        if (isShopOpen){
            setTimeout(()=>{
               resolve(work());
            },time);
        }
        else {
            reject(console.log("sorry, we are closed"));
        }
    });
});

 order(2000,()=>console.log(`${stock.fruits[0]} has been selected`))
    .then(()=>{
        return order(0,()=>console.log("Production has started"))
    })
    .then(()=>{
        return order(2000,()=>console.log("Fruit has been chopped"))
    })
    .then(()=>{
        return order(1000,()=>console.log(`${stock.liquid[0]} and ${stock.liquid[1]} has been added`))
    })
    .then(()=>{
        return order(1000,()=>console.log("machine has started"))
    })
    .then(()=>{
        return order(1000,()=>console.log(`${stock.holder[1]} has been selected`))
    })
    .then(()=>{
        return order(3000,()=>console.log(`${stock.toppings[1]} has been selected`))
    })
    .then(()=>{
        return order(1000,()=>console.log("ice served successfully"))
    })
     .catch(()=>{
         console.log("Customer left unhappy");
     })
     //finally runs no matter what
     .finally(()=>{
         console.log("Hurray!!! I understood promises");
     })
