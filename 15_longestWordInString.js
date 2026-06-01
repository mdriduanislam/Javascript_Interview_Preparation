function longestWordInString(str){
    const words = str.split(' ');
    console.log(words);
    let longest = '';
    for(let i=0; i<words.length; i++){
        if(words[i].length>longest.length){
            longest = words[i];
        }
    }
    return longest;
}

console.log(longestWordInString('humayun loveandres JavaScript'));