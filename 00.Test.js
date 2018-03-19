function test (nums){
    let toPrint = function (x) {
        console.log(x)
    };
    nums.forEach(toPrint);
    let sum = 0;
    nums.forEach(function (x) {
        sum += x;
    });

    console.log(sum);

}

// test();
for(let i = 0; i < 3;i++ ){
   test([10, 20, 30]);
}

