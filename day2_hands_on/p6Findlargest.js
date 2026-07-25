const nums=[45,32,55,21,20];

const result= nums.reduce((max,num)=>{
    return num>max ? num :max;

},nums[0]);

console.log(result);