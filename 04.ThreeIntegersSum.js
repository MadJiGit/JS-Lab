function sum (arr) {

    let nums = arr[0].split(' ').map(Number);

    let num1 = (nums[0]);
    let num2 = (nums[1]);
    let num3 = (nums[2]);
    if(num3 === num1 + num2){
        if(num1 > num2){
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        console.log(`${num1} + ${num2} = ${num3}`);
    }
    else if(num1 === num2 + num3){
        if(num2 > num3){
            let temp = num2;
            num2 = num3;
            num3 = temp;
        }
        console.log(`${num2} + ${num3} = ${num1}`);
    }
    else if(num2 === num1 + num3){
        if(num1 > num3){
            let temp = num1;
            num1 = num3;
            num3 = temp;
        }
        console.log(`${num1} + ${num3} = ${num2}`);
    }
    else{
        console.log('No');
    }
}


// sum(['8', '15', '7']);
sum(['7 15 8']);