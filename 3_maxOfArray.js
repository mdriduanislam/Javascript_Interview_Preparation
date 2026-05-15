const maxOfAnArray = (arr) =>{
    return Math.max(...arr);
}
console.log(maxOfAnArray([2,4,6,7,89,99]))

const maxNumArr = (arr) =>{
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max;
}
console.log(maxNumArr([2,52,3,7,92,6]))


