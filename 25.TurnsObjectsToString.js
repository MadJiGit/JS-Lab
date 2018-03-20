function solve(input){

let student = {};

for ( let prop of input){
   let temp = prop.split(' -> ');
   let key = temp[0];
   let value = isNaN(temp[1]) ? temp[1] : Number(temp[1]);

   student[key] = value;
}

console.log(JSON.stringify(student));
}

solve ([
'name -> Angel',
'surname -> Georgiev',
'age -> 20',
'grade -> 6.00',
'date -> 23/05/1995',
'town -> Sofia',
])