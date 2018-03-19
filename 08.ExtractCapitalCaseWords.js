function strings (arr){

   let words = arr.map(String);
   let toPrint = [];

   for (let word of words) {
      let wordArr = word.split(/[^A-Za-z]+/).map(String);
      for(let wor of wordArr){
         if(wor === wor.toUpperCase()){
            toPrint.push(wor);
         }
      }
   }

   console.log(toPrint.join(", "));
}


// strings (["We start by HTML, CSS, JavaScript, JSON and REST. Later we touch some PHP, MySQL and SQL. Later we play with C#, EF, SQL Server and ASP.NET MVC. Finally, we touch some Java, Hibernate and Spring.MVC."
// ])

strings (["We start by HTML, CSS, JavaScript, JSON and REST. Later we touch some PHP, MySQL and SQL. Later we play with C#, EF, SQL Server and ASP.NET MVC. Finally, we touch some Java, Hibernate and Spring.MVC."]);