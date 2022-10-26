
let stock={
    fruits:["strawberry","banana","mango","orange"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
};
let isShopOpen=true;
 let time=(ms)=>{
     return new Promise((resolve, reject)=>{
         if (isShopOpen){
             setTimeout(resolve,ms);
         }
         else{
             "sorry we're closed" |> console.log |> reject;
         }
     });
 };

 async function prepare(){
     try{
         await  time(2000);
         console.log(`${stock.fruits[0]} has been selected`);

         await time(0);
         console.log("Production has started");

         await  time(2000);
         console.log("Fruit has been chopped");

         await time(1000);
         console.log(`${stock.liquid[0]} and ${stock.liquid[1]} has been added`);

         await time(1000);
         console.log("machine has started");

         await time(1000);
         console.log(`${stock.holder[1]} has been selected`);

         await time(3000);
         console.log(`${stock.toppings[1]} has been selected`);

         await time(2000)
         console.log("ice served successfully");

     }catch (e) {
         console.log("customer left unhappy")
     }
     finally {
         console.log("Hurray!!! I learnt advanced concepts in JS")
     }
 }

 prepare();
 debugger;