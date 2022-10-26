let stock={
    fruits:["strawberry","banana","mango","orange"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};
let order=(fruitName,call_production)=>{
setTimeout(()=>{
    console.log(`${stock.fruits[fruitName]} was selected`);
    call_production();
},4000);
}
let production=()=>{
setTimeout(()=>{
    console.log("Production has started");

    setTimeout(()=>{
       console.log("Fruit has been chopped");

        setTimeout(()=>{
            console.log(`${stock.liquid[0]} and ${stock.liquid[1]} has been added`);

            setTimeout(()=>{
                console.log("machine has started");

                setTimeout(()=>{
                    console.log(`${stock.holder[0]} has been selected`);

                    setTimeout(()=>{
                        console.log(`${stock.toppings[0]}  has been selected`);

                        setTimeout(()=>{
                            console.log("Ice served successfully");

                        },1000);
                    },3000);
                },1000);
            },1000);
        },1000);
    },2000);
},0);
}

order(0,production);