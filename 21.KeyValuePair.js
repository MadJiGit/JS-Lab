function stringIn(input){
   let objects = input.map(e => e.split(' '));
   let key = objects[objects.length-1];
   // console.log(key);
   let keyValuePair = {};

   let x = objects.filter(x => x.length > 1)
   let dict = new Map();
   // console.dir(objects[0]);

   for(let kvp of x){
      dict[kvp[0]] = kvp[1];
   }
   
   if(dict[key] != undefined){
      console.log(dict[key]);
   }
   else{
      console.log("None");
   }
}

stringIn ([
   "key value",
   "key eulav",
   "test tset",
   "key"
]);