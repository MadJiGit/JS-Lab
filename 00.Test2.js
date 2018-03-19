let obj = {name: "softUni", age: 2};

console.log(obj);
console.log(obj.name);
console.log(obj.age);

console.log(obj.site);

obj['site'] = "www.softuni.bg";

console.log(obj.site);
obj['age'] = 5;
console.log(obj.age);
obj['age'] += 5;
console.log(obj.age);
delete obj.name;
console.log(obj);

obj = {name: "drug uni", age: 25};
console.log(obj);

obj2 = {name: "treto uni", age: 35};
console.log(obj2);

let str = JSON.stringify(obj);
console.log(str);
let str2 = "{\"name\":\"Nakov\", \"age\":24}"
console.log(str2);
let obj4 = JSON.parse(str2);
console.log(obj4);


