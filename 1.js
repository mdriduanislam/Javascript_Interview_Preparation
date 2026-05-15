let s = 'tushar';
const reverseString = (s) => {
    let reversedString = s.split('').reverse().join('');
    return reversedString;
}
console.log(reverseString(s));