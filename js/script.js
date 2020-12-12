console.log('---------------масивы------------------');

let arr1 = [1111, 2222, 'aaaa', 'bbbb', [444, 55555]];

console.log(arr1[2]);
console.log(`arr1.length -${arr1.length}`);

let arr2 = [];

console.log('---------------------------------');

arr2[0] = 'index 0'
arr2[1] = 'index 1'

arr2[5] = 'index 5'



console.log(arr2); 

console.log(arr2[2]); 

console.log('---------------------------------');

let arr3 = [];

console.log(arr3); 

arr3.push('el - 1');

console.log(arr3); 

arr3.push('el - 2');

console.log(arr3); 

console.log('---------------------------------');

let arr4 = [100,200,300,400,500,600,700,];

for (let i = 0; i<arr4.length; i++) {
    console.log(`${i} - ${arr4[i]}`)
}

console.log('---------------------------------');
for (let el of arr4){
    console.log(el)
}

arr4 = arr4.join('-*-')

console.log(arr4);

arr4 = arr4.split('*');

console.log(arr4);

console.log('---------------Обьекты------------------');

let obj = {
    name: 'Jon',
    age: 20,
    company: 'QQQ'
}

console.log(obj.name);
obj.address = 'street12';

console.log(obj.address);

let x = 'company';

console.log(obj[x]);

for (let key in obj){
    console.log(`${key} - ${obj[key]}`)
}

console.log('---------------------------------');

let deposit = 100;
let term = 12; //3, 6, 12

let rate_db = {
    3: 11,
    6: 14,
    12: 16
}

let rate = (rate_db[term] / 12)/100 ;

console.log(rate);

let sum = deposit;

for (let i = 1; i<=term; i++) {
    sum = sum + (sum * rate);
    console.log(`i ${i} - sum ${sum}`);
}
console.log('------------------------');

console.log(`sum deposit = ${sum}`);