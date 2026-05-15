const removingFirstElement = (arr) => {
    arr.shift();
    return arr;
}
console.log(removingFirstElement([3,5,7,8,9]))

const removingFirstElementBySlice = (arr) => {
    let newArr = arr.slice(1);
    return newArr;
}
console.log(removingFirstElementBySlice([3,5,7,8,9]))