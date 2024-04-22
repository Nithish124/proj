const arr=[1,2,3,4,5,6,7,8];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
//Array methods;
//at() function
console.log(arr.flat(2));
//join() function
console.log(arr.join("#"));
//pop()
console.log(arr.pop());
//push()
console.log(arr);
arr.push(8);
console.log(arr);
//shift()
arr.shift();
console.log(arr);
//unshift();
arr.unshift(1);
console.log(arr);
