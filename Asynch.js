
console.log("Hello");
console.log("Peter");
setTimeout(()=>{
    console.log("Last statement");  //this statement comes last ,, it is executed after the set time
},4000);
console.log("Francis");
console.log("Mwago");

let choice=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(console.log("What flavour would you like?"));
        },4000);
    });
}
async function cont() {
    console.log("Fruit has been selected");
    console.log("Fruit has been chopped");
    console.log("cup has been selected");
    await choice();
    console.log("machine has started");
    console.log("Ice cream served!!");
}
cont();