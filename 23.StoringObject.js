function solves(arr){

   let input = arr;
   let students = [];
   

   for (let element of input ){
      let temp = element.split(' -> ');
      let name = temp[0];
      let age = Number(temp[1]);
      let grade = Number(temp[2]);

      let student = {};
      student.name = name;
      student.age = age;
      student.grade = grade;

      students.push(student);
      
   }
   for(let student of students){

      console.log(`Name: ${student.name}`);
      console.log(`Age: ${student.age}`);
      console.log(`Grade: ${student.grade.toFixed(2)}`);

   }
}

solves ([
   'Pesho -> 13 -> 6.00',
   'Ivan -> 12 -> 5.57',
   'Toni -> 13 -> 4.90'
])