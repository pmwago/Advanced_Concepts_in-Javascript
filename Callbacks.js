

var first=(call_second)=>{   //call_second is a normal parameter,, can be any name
    console.log("Peter");
    call_second();
}
var second=()=>{
    console.log("Mwago");
}

first(second);