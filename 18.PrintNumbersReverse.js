function reverse(nums){

   let toPrint = nums.map(String);
   toPrint = toPrint.reverse();

   for(let element of toPrint){
      console.log(element);
   }

   // for(let index in toPrint){
   //    console.log(index);
   //    // console.log(toPrint[index]);
   // }

}

reverse (['10', '15', '20']);