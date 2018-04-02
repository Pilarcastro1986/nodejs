function test(){
    const array = [];
    const keys = Object.keys(arguments);
    for(let i = 0 ; i < arguments.length ; i++){
        if(typeof arguments[i] == 'string'){
            array.push(arguments[i]);
        }
    console.log(array);
    }
}

module.exports = test;