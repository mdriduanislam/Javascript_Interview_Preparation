const ispalindrome = (s) => {
    let reversedS = s.split('').reverse().join('');
    if (s === reversedS){
        return true;
    }
    else{
        return false;
    }
}
console.log(ispalindrome('asffsa'));