function solve (input){
   let obj = {};

       for (let item of input) {
       let seq = item.split(' ');
           if (seq.length===1) {
               if (obj[seq[0]]!= undefined) {
                   console.log(obj[seq[0]]);
               }
               else {
                   console.log("None");
               }
           }
       let key = seq[0];
       let value = seq[1];
       if (obj[key]!=undefined) {
           obj[key]=value;
       }

       else {
           obj[key]=value;
       }

      }
}

solve ([
   "{\"key\", \"value\"}",
   "{\"key\", \"eulav\"}",
   "{\"test\", \"tset\"}",
   // "{\"key\"}"
]);