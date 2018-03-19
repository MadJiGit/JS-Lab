function operation (nums){

   let num1 = Number(nums[0]);
   let num2 = Number(nums[1]);

   if (num1 <= num2) {
      let result = num1 * num2;
      console.log(result);
   }
   else{
      let result = num1 / num2;
      console.log(result);
   }

}

operation (['30', '20']);
// operation ([30, 20]);