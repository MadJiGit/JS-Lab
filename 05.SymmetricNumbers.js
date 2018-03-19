function equal(num) {

    for(var a = 1; a <= num; a++){
        let temp = String(a);
        let reverse = Number(temp.split('').reverse().join(''));
        if(a === reverse){
            console.log(a);
        }
    }
}

equal(750);