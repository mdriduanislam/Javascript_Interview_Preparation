function sortingArray(arr){
    return arr.sort((a,b)=>a-b);
}

function sortingArrayReverse(arr){
    return arr.sort((a,b)=>b-a);
}

console.log(sortingArray([4,2,8,5,9]));
console.log(sortingArrayReverse([4,2,8,5,9]));