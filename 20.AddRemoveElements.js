function addElements(nums){

   // let dict = {};
   let toPrint = [];
   let array = nums.map(String);
   // let temp = array.split(' ').map(String);

   for (let i = 0; i < array.length; i++) {
      let temp = array[i].split(' ');
      let command = temp[0];
      let element = Number(temp[1])
      if(command === 'add'){
         toPrint.push(element);
      }
      else if(command === 'remove'){
         toPrint.splice(element, 1);
      }
   }

   for(let el of toPrint){
      console.log(el);
   }

}

// addElements(['add 3', 'add 5', 'add 7', 'remove 1']);
addElements(['add 3',
'add 5',
'remove 2',
'remove 0',
'add 7']);