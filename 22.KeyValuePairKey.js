function stringIn(line){

   let keyCheck = line[line.length - 1];
   let keyDict = {};

   // let x = line.filter(x => x.length > 1)
   // let dict = new Map();

   for(let i = 0; i < line.length -1; i++){
      let tokens = line[i].split(' ');
      let key = tokens[0];
      let value = tokens[1];

      if(key in keyDict === false){
         keyDict[key] = [];
      }
      keyDict[key].push(value);
   }
   
   if(keyCheck in keyDict){
      console.log(keyDict[keyCheck].join('\n'));
   }

}



stringIn ([
   '3 test',
   '3 test1',
   '4 test2',
   '4 test3',
   '4 test5',
   '4'
]);