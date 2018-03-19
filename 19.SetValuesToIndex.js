function setValue(newNums){

      let turn = Number(newNums[0]);
      let nums = [];
      let array = [];

      for (let a = 1; a < newNums.length; a++) {
         nums.push(newNums[a]);
      }

      for (let i = 0; i < nums.length; i++) {
         let temp = nums[i].split(' - ').map(String);
         let index = temp[0];
         let value = temp[1];
         
         array[index] = value;
      }

      for(let i of array){
         if(i){
            console.log(i);
         }
         else{
            console.log(0);
         }
         
      }


}

// setValue (['3','0 - 5', '1 - 6', '2 - 7']);
setValue (['2','0 - 5', '0 - 6', '0 - 7']);
// setValue (['5','0 - 3', '3 - -1', '4 - 2']);