function toPrint(rows){

   let line = rows.map(String);
   let toPrint = [];

   for(let word of line){
      if(word === "Stop"){
         break;
      }
      else{
         console.log(word);
      }
      
   }

}

// toPrint (['Line 1', 'Line 2', 'Line 3', 'Stop']);
toPrint (['1', '2', '3', 'stop', 'Stop', '4', 'stop']);