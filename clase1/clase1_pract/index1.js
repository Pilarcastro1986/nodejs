var a = function(){
    var b = [];
    for(var i = 0 ; i < arguments.length ; i++){
        if(typeof arguments[i] == 'number'){
            b.push(arguments[i]);
        }
    console.log('b', b);
    }
}
a('Pilar', 54 , 30, 87, function(){}())

{
    var almundo = 10;
    console.log('almundo', almundo);
    
}

almundo = 20;
console.log('almundo', almundo);

{
    let otromundo = 10;
    console.log('almundo', otromundo);
}
let otromundo = 20;
console.log('almundo', almundo);