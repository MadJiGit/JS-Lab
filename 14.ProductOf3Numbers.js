function product(nums){

   let num1 = Number(nums[0]);
   let num2 = Number(nums[1]);
   let num3 = Number(nums[2]);

   if(num1 < 0 && num2 < 0 && num3 < 0){
      console.log("Negative");
   }
   else if(num1 < 0 && num2 > 0 && num3 > 0){
      console.log("Negative");
   }
   else if(num1 > 0 && num2 < 0 && num3 > 0){
      console.log("Negative");
   }
   else if(num1 > 0 && num2 > 0 && num3 < 0){
      console.log("Negative");
   }
   else{
      console.log("Positive");
   }

}

product([-10, -20, -30]);