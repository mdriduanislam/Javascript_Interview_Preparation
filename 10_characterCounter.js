function characterCounter(str,char){
    let count = 0;
    for(let i=0; i<str.length; i++){
        if(str[i].toLowerCase()==char.toLowerCase()){
            count++;
        }
    }
    return count;
}
console.log(characterCounter('tuttu','T'))

function countChar(str, char) 
{
  return str.toLowerCase().split(char.toLowerCase()).length - 1;
}

console.log(countChar('GeeksForGeeks', 'e'));