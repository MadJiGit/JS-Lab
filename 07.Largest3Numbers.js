function maxNumber(arr){
   let nums = arr.map(Number);
   nums.sort((a, b) => a-b);
   // nums.sort();
   
   if(nums.length < 3){
      for (let index = 0; index < nums.length; index++) {
         console.log(nums[nums.length -1 - index])
      } 
   }
   else{
      for (let index = 0; index < 3; index++) {
         console.log(nums[nums.length -1 - index])
      } 
   }   

   // второ решение
   // nums.sort((a, b) => b-a);
   // let count = Math.min(3, nums.length);
   // for (let index = 0; index < count; index++) {
   //    console.log(nums[index]);
      
   // }
}

maxNumber ([
   10, 30, 15, 20, 50
]);

// maxNumber ([
//    -10, -30, -15, -20, -50
// ]);

// maxNumber ([
//    0.00001, 0.00000001, 0.111
// ]);

// maxNumber ([
//    '10 30 15 20 50'
// ]);